# Website Enquiry Service Runbook

## Default behaviour
`ENQUIRY_MODE=preview` validates submissions and transmits nothing. Staging must remain in preview mode.

## Dedicated intake destination
Production website enquiries must write only to the separate Airtable base `Ravencourt Website Intake`, table `Website Enquiries`.

Do not connect the public website to the RAAVEN production base or give the website token access to any RAAVEN table.

## Airtable fields used
- Subject
- Name
- Company Name
- Email
- Message
- Enquiry Date

## GitHub production environment variables
Configure these as variables in the `website-production` GitHub environment:
- `ENQUIRY_MODE=production`
- `AIRTABLE_BASE_ID=<dedicated website intake base ID>`
- `AIRTABLE_TABLE_NAME=Website Enquiries`
- `VITE_TURNSTILE_SITE_KEY=<public Turnstile site key>`

## GitHub production secrets
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_WEBSITE_DEPLOY_TOKEN`

The deploy token must remain website-only and must not have access to RAAVEN Workers or resources.

## Cloudflare Worker secrets
Configure these on the production Worker `ravencourt-website`:
- `AIRTABLE_API_TOKEN`
- `TURNSTILE_SECRET_KEY`

The Airtable token must be write-only where possible and scoped only to the dedicated website intake base.

## Controls
- Server-side Zod validation.
- Hidden honeypot.
- Cloudflare Turnstile verification.
- No browser-side Airtable credential.
- No Lovable connector gateway.
- Production fails closed when any required variable or secret is missing.
- No request body or personal information is written to logs.
- Staging remains non-transmitting.

## Production test
After production Worker deployment but before domain cutover:
1. Submit one controlled test enquiry through the Worker preview endpoint.
2. Confirm exactly one record appears in `Website Enquiries`.
3. Confirm the security challenge is required.
4. Confirm no record is written to any RAAVEN base.
5. Delete the test record after verification if it contains personal data.
