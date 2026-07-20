# Cloudflare Staging Runbook

## Architecture
Use one dedicated Cloudflare Workers project with Static Assets for the primary website. It is independent of every RAAVEN Worker, binding, KV namespace, Access application and route.

## Required GitHub secrets
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_WEBSITE_DEPLOY_TOKEN` — scoped only to the website Worker/project

## Required Cloudflare staging settings
1. Create the `ravencourt-website-vnext-staging` Worker from the website repository.
2. Do not add service bindings, KV, D1, R2 or RAAVEN resources.
3. Keep `ENQUIRY_MODE=preview`.
4. Deploy only from `website-vnext-1.0` using the manual workflow.
5. Attach a website-specific staging hostname when DNS is available.
6. Protect the hostname with a separate Cloudflare Access application.
7. Block indexing at Access; do not share a public workers.dev URL.
8. Test routes, images, forms, Cal.com links, team profiles, mobile navigation and 404 handling.

## Acceptance gate
No production-domain action is permitted until the staging checklist is signed off.
