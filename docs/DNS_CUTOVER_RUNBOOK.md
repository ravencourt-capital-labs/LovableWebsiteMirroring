# DNS and Domain Cutover Runbook

## Before changing nameservers
Export and verify every Name.com record, including:
- apex and `www` website records;
- Zoho MX records;
- SPF, DKIM and DMARC;
- domain-verification records;
- `raaven.ravencourtcapital.com` and any RAAVEN validation records;
- Cal.com or other service records;
- all CAA, TXT, SRV and subdomain records.

## Cloudflare zone preparation
1. Import the complete DNS zone.
2. Compare record-by-record against the Name.com export.
3. Keep mail records DNS-only.
4. Preserve the RAAVEN subdomain without modification.
5. Initially point the apex and `www` to the existing Vercel website so nameserver migration does not also change the website.
6. Confirm Zoho inbound/outbound mail and RAAVEN operation after nameserver propagation.

## Website cutover
1. Attach `ravencourtcapital.com` and `www.ravencourtcapital.com` to the dedicated website project.
2. Choose the apex as canonical and redirect `www` permanently.
3. Confirm SSL, HSTS policy, sitemap, robots and all routes.
4. Switch only website records.
5. Keep Vercel available as rollback.

Nameserver and production cutover actions require the user’s explicit approval.
