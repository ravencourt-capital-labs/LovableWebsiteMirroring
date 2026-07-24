import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "src/routes/index.tsx",
  "src/routes/operating-intelligence.tsx",
  "src/routes/strategic-advisory.tsx",
  "src/routes/commercial-expansion.tsx",
  "src/routes/raaven.tsx",
  "src/routes/about.tsx",
  "src/routes/contact.tsx",
  "src/routes/team.$slug.tsx",
  "src/routes/__root.tsx",
  "src/components/site/InstitutionalMedia.tsx",
  "src/lib/calendars.ts",
  "src/lib/enquiry.functions.ts",
  "public/images/milan-hero.jpg",
  "public/images/corridor.jpg",
  "public/images/boardroom.jpg",
  "public/images/delta.jpg",
  "public/images/saania.jpg",
  "public/images/luciano.jpg",
  "public/images/isabella-xu.jpg",
  "src/assets/rohan-kapoor-team-photo-july-2026.png",
  "src/assets/mitul-gouni-website-photo.ts",
  "public/robots.txt",
  "public/sitemap.xml",
  "public/site.webmanifest",
  "wrangler.jsonc",
];

const missing = requiredFiles.filter((file) => !existsSync(file));
if (missing.length) {
  console.error("Missing release files:", missing.join(", "));
  process.exit(1);
}

const sourceFiles = [
  "src/routes/__root.tsx",
  "src/routes/index.tsx",
  "src/routes/about.tsx",
  "src/routes/commercial-expansion.tsx",
  "src/routes/strategic-advisory.tsx",
  "src/routes/operating-intelligence.tsx",
  "src/routes/raaven.tsx",
  "src/routes/contact.tsx",
  "src/routes/team.$slug.tsx",
  "src/lib/calendars.ts",
  "src/lib/enquiry.functions.ts",
  "public/robots.txt",
  "public/sitemap.xml",
  "public/site.webmanifest",
  "package.json",
  "vite.config.ts",
];
const source = sourceFiles.map((file) => readFileSync(file, "utf8")).join("\n");

const requiredText = [
  "Data Intelligence & Decision Infrastructure",
  "Intelligence & Decision Infrastructure",
  "Intelligence infrastructure for complex commercial and investment decisions.",
  "RAAVEN as a Service",
  "RAAVEN as a Product",
  "Institutional Decision Infrastructure",
  "Human judgement remains central",
  "15 business days. €3,500 design-partner fee.",
  "Cross-Border Commercial Intelligence",
  "Private Markets Analyst",
  "Isabella Xu",
  "Hong Kong & United States",
  "Mitul Gouni",
  "New York, United States",
  "/team/mitul-gouni",
  '"@type": "Organization"',
  '"@type": "WebSite"',
  "max-image-preview:large",
  "2026-07-22",
  "https://cal.com/team/ravencourt-capital/private-markets-strategic-advisory-assessment",
  "https://cal.com/team/ravencourt-capital/operating-intelligence-diagnostic",
  "https://cal.com/team/ravencourt-capital/cross-border-commercial-intelligence-diagnostic",
  "ENQUIRY_MODE",
  "TURNSTILE_SECRET_KEY",
  "@cloudflare/vite-plugin",
];

const absent = requiredText.filter((text) => !source.includes(text));
if (absent.length) {
  console.error("Release assertions missing:", absent.join(", "));
  process.exit(1);
}

const prohibitedLegacyCalendarSlugs = [
  "introductory-discussion",
  "m-a-advisory-founder-led-sme-sale-strategic-transaction",
  "strategic-capital-investor-readiness-founders-gps",
  "buy-side-advisory-institutional-acquisitions-capital-deployment",
];
const legacyCalendarViolations = prohibitedLegacyCalendarSlugs.filter((slug) => source.includes(slug));
if (legacyCalendarViolations.length) {
  console.error("Legacy public calendar links detected:", legacyCalendarViolations.join(", "));
  process.exit(1);
}

const raavenPublicSource = [
  readFileSync("src/routes/raaven.tsx", "utf8"),
  readFileSync("src/routes/operating-intelligence.tsx", "utf8"),
].join("\n");
const prohibitedRaavenClaims = [
  "R" + "aaS",
  "generally " + "available",
  "off-the-" + "shelf",
  "self-" + "serve",
  "fully " + "autonomous",
  "guaranteed " + "outcome",
  "replaces human " + "judgement",
  "Cloud" + "flare",
  "Air" + "table",
  "authority " + "threshold",
  "scoring " + "method",
  "system " + "prompt",
];
const raavenClaimViolations = prohibitedRaavenClaims.filter((text) => raavenPublicSource.includes(text));
if (raavenClaimViolations.length) {
  console.error("RAAVEN public-claims violations:", raavenClaimViolations.join(", "));
  process.exit(1);
}

const prohibitedLegacyPositioning = [
  "Private Markets Boutique",
  "Allocator-Aligned Private Markets Advisory",
  "advisory boutique",
];
const legacyPositioningViolations = prohibitedLegacyPositioning.filter((text) => source.includes(text));
if (legacyPositioningViolations.length) {
  console.error("Legacy public positioning detected:", legacyPositioningViolations.join(", "));
  process.exit(1);
}

const prohibitedPublicTeamText = ["Joey Zhu", "joey-zhu", "Intern", "intern —"];
const publicTeamSource = [
  readFileSync("src/routes/index.tsx", "utf8"),
  readFileSync("src/routes/about.tsx", "utf8"),
  readFileSync("src/routes/team.$slug.tsx", "utf8"),
].join("\n");
const publicTeamViolations = prohibitedPublicTeamText.filter((text) => publicTeamSource.includes(text));
if (publicTeamViolations.length) {
  console.error("Public team violations:", publicTeamViolations.join(", "));
  process.exit(1);
}

console.log("Release content audit passed.");
