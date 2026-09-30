# Lead Workflow

## Flow
Visitor → custom Contact Form → client-side guidance → `POST /api/leads` → server validation/sanitisation → basic in-memory IP rate limit → Airtable adapter → `Leads` record → `New` status → manual follow-up.

## API contract
`POST /api/leads` accepts the configured form fields plus a hidden `website` honeypot. A populated honeypot is accepted without storage to avoid giving spam bots feedback. Success returns `{ success: true }`. User-safe validation, configuration, rate-limit, and server error messages are returned on failure.

## Airtable table: Leads
Create these field names exactly for the first integration: `Lead ID`, `Created At`, `Name`, `Company`, `Work Email`, `Phone`, `Device / Technology`, `Development Stage`, `Claim to Validate`, `Message`, `Lead Status`, `Owner`, `Priority`, `Lead Source`, `Last Contacted`, `Next Follow-up`, `Internal Notes`.

The route creates: Lead ID, Created At, submitted values, Lead Status = New, Lead Source = Website. Ownership and follow-up fields remain for the team’s workflow.

## Security and limitations
Tokens remain server-side in `.env.local` and deployment settings. The current in-memory limiter is appropriate for a simple initial Vercel deployment but is not durable across serverless instances. Replace it with a managed shared limiter when traffic or abuse warrants it—without changing the UI or lead-service interface.
