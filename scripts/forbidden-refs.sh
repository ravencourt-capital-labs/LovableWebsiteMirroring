#!/usr/bin/env bash
set -euo pipefail

PATTERNS=(
  "raaven-control-tower"
  "raaven-control-tower-vnext-canary"
  "RAAVEN_VNEXT_SERVICE"
  "VNEXT_SNAPSHOT_KV"
  "f1623896240e45258f6d1e1f87077a24"
  "rohan-kapoor\.workers\.dev"
  "raaven\.workers\.dev"
  "AlgorithmUpgrade"
  "RAAVEN_KV"
  "RAAVEN_BINDING"
  "raaven-access"
  "@vercel/analytics"
  "@lovable\.dev"
  "connector-gateway\.lovable\.dev"
  "lovable-airtable-gateway"
  "airtable\.functions"
  "LOVABLE_API_KEY"
)

TARGETS=()
for target in src public wrangler.jsonc vite.config.ts package.json; do
  [[ -e "$target" ]] && TARGETS+=("$target")
done

fail=0
for pattern in "${PATTERNS[@]}"; do
  if grep -RInE "$pattern" "${TARGETS[@]}" \
       --exclude-dir=node_modules \
       --exclude-dir=dist \
       --exclude-dir=.output \
       --exclude-dir=.wrangler \
       2>/dev/null; then
    echo "Forbidden website dependency matched: $pattern" >&2
    fail=1
  fi
done

if [[ "$fail" -ne 0 ]]; then
  echo "Website VNext must remain operationally separate from RAAVEN, Vercel and Lovable." >&2
  exit 1
fi

echo "Separation audit passed."
