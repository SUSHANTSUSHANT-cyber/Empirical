# Architecture & Approval Blueprint

## Information architecture
The first release is a single page with anchor navigation: Home, About, Services, Approach, Capabilities, Engagement, Contact. Each section is a standalone component, so it can become an independent route without rewriting its content model.

## User and CTA journey
Landing → positioning → documented network metrics → service pillars → MedTech journey → technical/clinical capabilities → representative engagement → scoping steps → custom enquiry form. Primary CTAs point to `#contact`; the secondary CTA points to `#approach`.

## Content and component architecture
`data/` holds approval-sensitive factual content. `lib/config/site.ts` centralizes brand, navigation and CTA settings; `lib/config/lead-form.ts` centralizes the editable form schema and allowed development stages. The initial landing-page composition intentionally remains in `app/page.tsx` to keep the first release lightweight; its only browser components are the mobile `Navigation` and `components/forms/ContactForm.tsx`. Section extraction should happen when a section is reused or gains independent interaction, rather than as a premature abstraction.

## Technical architecture
Browser → `POST /api/leads` → validation/sanitisation → rate limit → `LeadService` interface → `AirtableLeadService` → Airtable REST API. Airtable environment variables are server-only. If Airtable is replaced, only the service implementation/factory changes; the API contract and contact UI remain unchanged.

## Data model
Initial Airtable table: `Leads`. Required website fields are Name, Company, Work Email, Phone, Device / Technology, Development Stage, Claim to Validate, Message. Workflow fields are Lead ID, Created At, Lead Status, Owner, Priority, Lead Source, Last Contacted, Next Follow-up, and Internal Notes. Default status is `New`; source is `Website`.

## Responsive strategy
Desktop uses an editorial grid and horizontal journey rail. Tablet reduces multi-column grids. Mobile uses a menu toggle, single-column cards, horizontally scrollable comparison table, and vertically stacked journey cards. Motion is disabled or minimized for `prefers-reduced-motion`.

## Design system
Only document-derived tokens are used: navy `#0E2841`, blue `#156082`, orange `#E97132`, light gray `#E8E8E8`, white, and black. Global CSS defines type scale, spacing, radii, focus treatments, card surfaces, and restrained transitions.

## Future path
Current TypeScript data files can be replaced by a CMS adapter. The `LeadService` interface enables Airtable → HubSpot/Salesforce/PostgreSQL/Supabase migration without form or API redesign.
