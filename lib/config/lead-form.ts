export type LeadField = {
  name: 'name' | 'company' | 'email' | 'phone' | 'technology' | 'stage' | 'claim' | 'message';
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  autoComplete?: string;
  required?: boolean;
  options?: string[];
};

export const leadStatuses = ['New', 'Contacted', 'Qualified', 'Scoping Call', 'Proposal', 'Won', 'Lost'] as const;
export const developmentStages = ['Concept', 'Prototype', 'Engineering Validation', 'Pilot Ready', 'Commercial / Existing Product'] as const;

export const leadFormConfig: LeadField[] = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
  { name: 'company', label: 'Company', type: 'text', autoComplete: 'organization', required: true },
  { name: 'email', label: 'Work Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'technology', label: 'Device / Technology', type: 'text', required: true },
  { name: 'stage', label: 'Development Stage', type: 'select', required: true, options: [...developmentStages] },
  { name: 'claim', label: 'Claim to Validate', type: 'text', required: true },
  { name: 'message', label: 'Message', type: 'textarea' },
];
