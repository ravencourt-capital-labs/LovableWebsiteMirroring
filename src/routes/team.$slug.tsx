import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

type Profile = {
  name: string;
  role: string;
  location: string;
  image: string;
  objectPosition?: string;
  paragraphs: string[];
  coreRelevance: string;
};

const PROFILES: Record<string, Profile> = {
  "rohan-kapoor": {
    name: "Rohan Kapoor",
    role: "Founder & Principal",
    location: "Milan, Italy",
    image: "/images/rohan.jpg",
    objectPosition: "50% 25%",
    paragraphs: [
      "Rohan Kapoor brings an operator-led perspective to private markets advisory, shaped by more than 16 years across engineering, semiconductor operations, supply-chain transformation, commercial leadership, strategic partnerships, and capital formation.",
      "An Electronics & Electrical Engineer with an MBA in Sales and Finance from POLIMI Graduate School of Management and international exposure through IPADE Business School, Rohan combines technical judgment with commercial and financial execution. His experience across Nokia, STMicroelectronics, New Ermes Europe, and Ravencourt Capital informs the firm's core approach: assessing companies not only by valuation and capital need, but by operational quality, execution discipline, customer readiness, supply-chain resilience, and the real levers of value creation.",
      "At Ravencourt Capital, Rohan leads mandate assessment, investor readiness, capital positioning, strategic transaction preparation, and allocator-aligned engagement across private companies, funds, searchers, and cross-border situations.",
    ],
    coreRelevance:
      "operational value creation, investor readiness, capital formation, mandate structuring, commercial positioning, and allocator-grade execution.",
  },
  "luciano-mazzola": {
    name: "Dr. Luciano Mazzola",
    role: "Legal & Cross-Border Structuring Advisor",
    location: "Milan, Italy",
    image: "/images/luciano.jpg",
    objectPosition: "50% 5%",
    paragraphs: [
      "Dr. Luciano Mazzola brings deep legal, tax, corporate, audit, and governance expertise to Ravencourt Capital's mandate review and structuring process.",
      "A graduate with honours in Business Economics from Bocconi University, Luciano is a Chartered Accountant and registered Statutory Auditor with more than two decades of professional practice. His experience advising Italian and foreign clients across tax, corporate matters, audit, statutory roles, directorships, and liquidation processes gives Ravencourt an important institutional lens on governance, documentation discipline, entity structure, and execution risk.",
      "At Ravencourt Capital, Luciano supports legal-process alignment, cross-border structuring, corporate readiness, mandate documentation, and transaction-related governance considerations, particularly where Italian or European structures are involved.",
    ],
    coreRelevance:
      "legal structuring, tax and audit discipline, corporate governance, cross-border execution, documentation readiness, and transaction-risk review.",
  },
  "saania-shaikh": {
    name: "Saania Shaikh",
    role: "Partnerships & Operations Director",
    location: "Dubai, UAE",
    image: "/images/saania.jpg",
    objectPosition: "50% 26%",
    paragraphs: [
      "Saania Shaikh supports Ravencourt Capital's partnerships, business development, and operating infrastructure, with a particular focus on relationship-led engagement across the Middle East.",
      "Based in Dubai, Saania brings practical sales, partnership, and stakeholder-management experience across regional business ecosystems, including the UAE, Saudi Arabia, and Qatar. Her market presence strengthens Ravencourt's ability to coordinate institutional conversations, develop relationship channels, and support cross-border engagement with founders, investors, advisors, and strategic counterparties.",
      "At Ravencourt Capital, Saania supports partnership development, meeting coordination, follow-up discipline, fulfillment operations, internal workflow alignment, and talent coordination. Her role helps ensure that Ravencourt's relationship pipeline is managed with structure, responsiveness, and execution discipline.",
    ],
    coreRelevance:
      "Middle East partnerships, business development, stakeholder coordination, fulfillment operations, relationship management, and talent coordination.",
  },
  "joey-zhu": {
    name: "Joey Zhu",
    role: "FulfillmentOS & Data Pipeline Analyst",
    location: "New York, USA",
    image: "/images/joey.jpg",
    objectPosition: "50% 28%",
    paragraphs: [
      "Joey Zhu supports Ravencourt Capital's data, research, and workflow infrastructure, bringing a finance-focused academic foundation from NYU Stern together with hands-on execution across data pipelines, investor mapping, and internal systems.",
      "His role sits at the intersection of finance, data, and private-market process discipline. At Ravencourt Capital, Joey contributes to FulfillmentOS / RAAVEN, the firm's internal intelligence layer supporting mandate tracking, lead qualification, investor segmentation, research workflows, and execution visibility.",
      "By strengthening the data infrastructure behind Ravencourt's advisory process, Joey helps the firm operate with greater precision, repeatability, and intelligence — supporting a selective advisory model built around quality of fit rather than volume-based outreach.",
    ],
    coreRelevance:
      "finance, data infrastructure, investor mapping, research workflows, automation support, and execution discipline.",
  },
};

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const profile = PROFILES[params.slug];
    if (!profile) throw notFound();
    return { profile };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.profile.name} — Ravencourt Capital` },
          {
            name: "description",
            content: `${loaderData.profile.name}, ${loaderData.profile.role} at Ravencourt Capital.`,
          },
        ]
      : [],
  }),
  component: ProfilePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-[var(--ink)]">
      <div className="text-center space-y-4">
        <p className="font-serif text-2xl">Profile not found.</p>
        <Link to="/" hash="team" className="underline">← Back to Team</Link>
      </div>
    </div>
  ),
});

function ProfilePage() {
  const { profile } = Route.useLoaderData();
  return (
    <main className="min-h-screen bg-background text-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-10 lg:pt-12">
        <Link
          to="/"
          hash="team"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)] hover:text-[var(--bronze)] transition-colors"
        >
          <ArrowLeft size={14} /> Team
        </Link>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 lg:py-20 grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
        <div className="w-full">
          <div className="aspect-[4/5] w-full overflow-hidden bg-[oklch(0.9_0.012_85)] border border-[var(--bronze)]/30">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: profile.objectPosition ?? "50% 25%" }}
            />
          </div>
        </div>
        <div className="lg:pt-4">
          <p className="eyebrow text-[var(--ink-soft)] mb-4">Team</p>
          <h1 className="font-serif text-4xl lg:text-5xl leading-tight text-[var(--ink)]">
            {profile.name}
          </h1>
          <p className="mt-4 text-base text-[var(--ink)] font-medium">{profile.role}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
            {profile.location}
          </p>
          <div className="mt-10 space-y-6 text-[var(--ink)]/90 leading-relaxed text-[1.0625rem]">
            {profile.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-[var(--rule)]">
            <p className="text-[1.0625rem] leading-relaxed text-[var(--ink)]/90">
              <span className="eyebrow text-[var(--ink-soft)] mr-2">Core relevance:</span>
              {profile.coreRelevance}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}