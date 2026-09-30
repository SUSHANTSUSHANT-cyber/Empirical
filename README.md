# Viveka Medtech

A Next.js corporate and lead-generation website for Viveka Medtech, focused on clinical validation, engineering support and evidence generation for medical devices, wearables and wellness technology.

## Stack
- Next.js 15 + TypeScript
- Tailwind CSS with a small global CSS design layer
- Next.js route handler for `POST /api/leads`
- Airtable REST API behind a replaceable lead-service interface
- Vercel-ready deployment

## Local setup
1. Install Node.js 20 LTS or later.
2. Copy `.env.example` to `.env.local` and set Airtable values if you want live lead delivery.
3. Run `npm install`.
4. Run `npm run dev` and open `http://localhost:3000`.

## Validation
- `npm run typecheck`
- `npm run build`

## Airtable setup
Create a `Leads` table using the fields in [LEAD_WORKFLOW.md](./LEAD_WORKFLOW.md). Add `AIRTABLE_TOKEN`, `AIRTABLE_BASE_ID`, and `AIRTABLE_TABLE_ID` only to local/Vercel environment settings; never expose them to the browser.

## Deployment
Connect the repository to Vercel, add the environment variables, then deploy. Update `NEXT_PUBLIC_SITE_URL` to the approved Viveka Medtech production domain.

## Content changes
Content lives in `data/` and contact/brand settings live in `lib/config/site.ts`; presentation components do not contain factual company information. This is intentional to support review cycles and a future CMS.
