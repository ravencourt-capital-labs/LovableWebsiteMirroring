# Website Enquiry Service Runbook

## Default behaviour
`ENQUIRY_MODE=preview` validates submissions and transmits nothing.

## Production secrets and variables
Cloudflare secrets:
- `AIRTABLE_API_TOKEN`
- `TURNSTILE_SECRET_KEY`

Cloudflare variables:
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME`
- `ENQUIRY_MODE=production`

Build-time public variable:
- `VITE_ENQUIRY_MODE=production`
- `VITE_TURNSTILE_SITE_KEY=<public Turnstile site key>`

## Airtable fields used
- Subject
- Name
- Company Name
- Email
- Message
- Enquiry Date

## Controls
- Server-side Zod validation.
- Hidden honeypot.
- Cloudflare Turnstile verification.
- No browser-side Airtable credential.
- No Lovable connector gateway.
- Production fails closed when any secret or variable is missing.
- No request body or personal information is written to logs.

## Recommendation
Use a separate Website Intake base or a tightly scoped Airtable personal access token. Do not give the public website read access to RAAVEN production tables.
