import type { LeadService, LeadResult } from '@/lib/services/lead-service';
import type { LeadInput } from '@/lib/validation/lead';

const requiredEnvironment = ['AIRTABLE_TOKEN', 'AIRTABLE_BASE_ID', 'AIRTABLE_TABLE_ID'] as const;
const airtableTimeoutMs = 8_000;
export function airtableConfigured() { return requiredEnvironment.every((key) => Boolean(process.env[key])); }

export class AirtableLeadService implements LeadService {
  async createLead(data: LeadInput): Promise<LeadResult> {
    const token = process.env.AIRTABLE_TOKEN!;
    const base = process.env.AIRTABLE_BASE_ID!;
    const table = process.env.AIRTABLE_TABLE_ID!;
    const response = await fetch(`https://api.airtable.com/v0/${base}/${encodeURIComponent(table)}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(airtableTimeoutMs),
      body: JSON.stringify({ records: [{ fields: {
        'Lead ID': crypto.randomUUID(), 'Created At': new Date().toISOString(), Name: data.name, Company: data.company,
        'Work Email': data.email, Phone: data.phone || '', 'Device / Technology': data.technology, 'Development Stage': data.stage,
        'Claim to Validate': data.claim, Message: data.message || '', 'Lead Status': 'New', 'Lead Source': 'Website',
      } }] }),
    });
    if (!response.ok) throw new Error('Airtable lead creation failed');
    const body = await response.json() as { records: Array<{ id: string }> };
    return { id: body.records[0]?.id ?? crypto.randomUUID() };
  }
  async getLead(id: string): Promise<LeadResult | null> { return id ? { id } : null; }
  async updateLead(id: string): Promise<LeadResult> { return { id }; }
}
