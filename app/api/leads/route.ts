import { NextRequest, NextResponse } from 'next/server';
import { AirtableLeadService, airtableConfigured } from '@/lib/integrations/airtable';
import { parseLeadInput } from '@/lib/validation/lead';

const attempts = new Map<string, { count: number; started: number }>();
const windowMs = 60 * 60 * 1000;
const limit = 5;
const maxPayloadBytes = 20_000;

function limited(ip: string) {
  const now = Date.now();
  if (attempts.size > 1_000) for (const [key, entry] of attempts) if (now - entry.started > windowMs) attempts.delete(key);
  const current = attempts.get(ip);
  if (!current || now - current.started > windowMs) { attempts.set(ip, { count: 1, started: now }); return false; }
  current.count += 1;
  return current.count > limit;
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > maxPayloadBytes) return NextResponse.json({ error: 'Submission is too large.' }, { status: 413 });
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });
  try {
    const parsed = parseLeadInput(await request.json());
    if (parsed.errors) return NextResponse.json({ error: 'Please check the highlighted fields.', errors: parsed.errors }, { status: 400 });
    if (parsed.data?.website) return NextResponse.json({ success: true });
    if (!airtableConfigured()) return NextResponse.json({ error: 'Enquiry delivery is temporarily unavailable. Please try again shortly.' }, { status: 503 });
    const result = await new AirtableLeadService().createLead(parsed.data!);
    return NextResponse.json({ success: true, id: result.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'We could not send your enquiry. Please try again shortly.' }, { status: 500 });
  }
}
