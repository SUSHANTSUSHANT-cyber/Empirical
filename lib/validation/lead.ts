import { developmentStages } from '@/lib/config/lead-form';

export type LeadInput = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  technology: string;
  stage: string;
  claim: string;
  message?: string;
  website?: string;
};

const fields = ['name', 'company', 'email', 'phone', 'technology', 'stage', 'claim', 'message', 'website'] as const;
const maxLengths: Record<keyof LeadInput, number> = { name: 120, company: 160, email: 254, phone: 40, technology: 180, stage: 80, claim: 300, message: 2000, website: 0 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.replace(/[<>]/g, '').trim().slice(0, max) : '';
}

export function parseLeadInput(payload: unknown): { data?: LeadInput; errors?: Record<string, string> } {
  const raw = payload && typeof payload === 'object' ? payload as Record<string, unknown> : {};
  const data = Object.fromEntries(fields.map((field) => [field, clean(raw[field], maxLengths[field])])) as LeadInput;
  const errors: Record<string, string> = {};
  for (const required of ['name', 'company', 'email', 'technology', 'stage', 'claim']) if (!data[required as keyof LeadInput]) errors[required] = 'This field is required.';
  if (data.email && !emailPattern.test(data.email)) errors.email = 'Enter a valid work email address.';
  if (data.stage && !developmentStages.includes(data.stage as typeof developmentStages[number])) errors.stage = 'Select a valid development stage.';
  return Object.keys(errors).length ? { errors } : { data };
}
