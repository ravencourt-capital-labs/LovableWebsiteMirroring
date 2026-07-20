# Rollback Plan

## Application rollback
- Retain the last validated Cloudflare deployment.
- Retain the current Vercel deployment.
- Do not delete Lovable/Vercel assets during the stability window.

## Domain rollback
If the new website is unavailable or materially defective:
1. Restore apex and `www` website records to the current Vercel targets.
2. Do not alter MX, SPF, DKIM, DMARC or RAAVEN records.
3. Purge Cloudflare website cache after record restoration.
4. Verify homepage, `www` redirect, email and RAAVEN independently.

## Data rollback
The website intake path is append-only. Disable `ENQUIRY_MODE=production` by reverting it to `preview` if form delivery becomes unreliable.
