import type { LeadInput } from '@/lib/validation/lead';

export type LeadResult = { id: string };
export interface LeadService {
  createLead(data: LeadInput): Promise<LeadResult>;
  getLead(id: string): Promise<LeadResult | null>;
  updateLead(id: string, data: Partial<LeadInput>): Promise<LeadResult>;
}
