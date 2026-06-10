import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/ravencourt-logo.png";
import lucianoImg from "@/assets/luciano.jpg.asset.json";
import konstantinosImg from "@/assets/konstantinos.jpeg.asset.json";
import joeyImg from "@/assets/joey.jpg.asset.json";
import saaniaImg from "@/assets/saania.jpg.asset.json";
import rohanImg from "@/assets/rohan.png.asset.json";
import milanHero from "@/assets/milan-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: RavencourtPage,
  head: () => ({
    meta: [
      { title: "Ravencourt Capital — Private Markets Advisory" },
      {
        name: "description",
        content:
          "Milan-based private markets advisory boutique. Strategic capital readiness, M&A, investor readiness, and buy-side diligence across Europe, MENA, and North America.",
      },
      { property: "og:title", content: "Ravencourt Capital — Private Markets Advisory" },
      {
        property: "og:description",
        content:
          "Milan-based private markets advisory boutique. Strategic capital readiness, M&A, investor readiness, and buy-side diligence across Europe, MENA, and North America.",
      },
    ],
  }),
});

const NAV = [
  { id: "what-we-do", label: "What We Do" },
  { id: "method", label: "How We Work" },
  { id: "intelligence", label: "Allocator Intelligence" },
  { id: "fulfillmentos", label: "FulfillmentOS" },
  { id: "footprint", label: "Where We Operate" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const TEAM = [
  {
    initials: "RK",
    name: "Rohan Kapoor",
    title: "Founder & Principal · Milan, Italy. Rohan leads Ravencourt Capital's advisory execution, mandate evaluation, client discussions, strategic positioning, commercial structuring, and private-markets engagement process.",
    linkedin: "https://linkedin.com/in/raisingcapitalcontact",
    image: rohanImg.url,
    objectPosition: "50% 25%",
  },
  {
    initials: "LM",
    name: "Dr. Luciano Mazzola",
    title: "Legal & Cross-Border Structuring Advisor · Milan, Italy. Dr. Mazzola supports Ravencourt on legal and cross-border structuring considerations, including selected jurisdictional, governance, and transaction-related matters.",
    linkedin: "https://lcopartners.eu/en/professionals/luciano-mazzola-en",
    image: lucianoImg.url,
    objectPosition: "50% 5%",
  },
  {
    initials: "SS",
    name: "Sania Shaikh",
    title: "Partnerships & Operations Director · Remote / Cross-border. Sania supports Ravencourt across partnerships, outreach coordination, client communication, CRM discipline, documentation flow, onboarding, and internal operating processes.",
    linkedin: "https://linkedin.com/in/sanian",
    image: saaniaImg.url,
    objectPosition: "50% 26%",
  },
  {
    initials: "KL",
    name: "Konstantinos Lanaras",
    title: "Private Markets Coverage Analyst · Remote / Europe. Konstantinos supports private-market coverage, research, opportunity mapping, website execution, and selected market-facing workstreams.",
    linkedin: "https://www.linkedin.com/in/konstantinoslanaras0504/",
    image: konstantinosImg.url,
    objectPosition: "50% 50%",
  },
  {
    initials: "JZ",
    name: "Joey Zhu",
    title: "FulfillmentOS & Data Pipeline Analyst · Remote / Global. Joey supports Ravencourt's FulfillmentOS infrastructure, lead data pipelines, classification workflows, and execution-support systems.",
    linkedin: "https://www.linkedin.com/in/joey-zhu-7006a0318/",
    image: joeyImg.url,
    objectPosition: "50% 28%",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-[var(--rule)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 text-[var(--ink)]">
            <img src={logo} alt="Ravencourt Capital" className="h-9 w-9 object-contain" />
            <span className="font-serif text-lg tracking-wide hidden sm:inline">
              Ravencourt <span className="text-[var(--ink)]">Capital</span>
            </span>
          </a>
          <div className="flex items-center gap-6 lg:gap-10">
            <a
              href="#contact"
              className="hidden sm:inline-flex text-[11px] uppercase tracking-[0.18em] bg-[var(--ink)] border border-[var(--ink)] text-white px-4 py-2 hover:bg-transparent hover:text-[var(--ink)] transition-colors"
            >
              Make an Enquiry
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="group flex items-center gap-4"
            >
              <Menu className="w-6 h-6 text-[var(--ink)] group-hover:text-[var(--ink-soft)] transition-colors" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-[60] bg-[var(--ink)] text-[oklch(0.95_0.008_85)] flex flex-col">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between border-b border-white/10">
            <span className="font-serif text-lg tracking-wide">
              Ravencourt <span className="text-white/70">Capital</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="group flex items-center gap-4"
            >
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/70 group-hover:text-white transition-colors">
                Close
              </span>
              <span className="relative h-4 w-4">
                <span className="absolute inset-0 m-auto h-px w-4 rotate-45 bg-white group-hover:bg-white transition-colors" />
                <span className="absolute inset-0 m-auto h-px w-4 -rotate-45 bg-white group-hover:bg-white transition-colors" />
              </span>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ol className="mx-auto max-w-7xl px-6 lg:px-12 py-12 lg:py-16 flex flex-col divide-y divide-white/10">
              {NAV.map((n, i) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-6 lg:gap-10 py-5 lg:py-6"
                  >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-3xl lg:text-5xl text-white group-hover:text-white/70 transition-colors">
                      {n.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-[var(--ink)] text-[oklch(0.95_0.008_85)] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={milanHero.url}
          alt="Milan skyline at dusk"
          className="w-full h-full object-cover opacity-90"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/75 via-[var(--ink)]/60 to-[var(--ink)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12 w-full pt-28 pb-32 flex flex-col items-start text-left">
        <div className="flex items-center gap-4 mb-10">
          <img src={logo} alt="" className="h-12 w-12 object-contain" />
          <p className="eyebrow text-white/60 !mb-0">Ravencourt Capital · Milan</p>
        </div>
        <div className="w-16 h-px bg-white/30 mb-10" />
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight max-w-5xl">
          Private Markets Advisory. Strategic Capital. M&amp;A and Secondaries. Transaction Readiness.
        </h1>
        <p className="mt-10 text-lg md:text-xl text-[oklch(0.86_0.01_85)] font-light max-w-3xl leading-relaxed">
          Ravencourt Capital is a Milan-based private markets advisory boutique supporting
          founder-led companies, fund managers, acquisition entrepreneurs, family offices,
          strategic buyers, and institutional partners across strategic capital readiness, M&amp;A,
          secondary transactions, capital solutions, and buy-side diligence.
        </p>
        <p className="mt-6 text-xs md:text-sm text-white/60 uppercase tracking-[0.22em] max-w-3xl leading-relaxed">
          Strategic Capital Readiness · M&amp;A Advisory · Secondaries &amp; Capital Solutions · Buy-Side Diligence · FulfillmentOS
        </p>
      </div>

      <nav className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
            {[
              { id: "what-we-do", label: "Mandates" },
              { id: "method", label: "Approach" },
              { id: "intelligence", label: "Intelligence" },
              { id: "footprint", label: "Footprint" },
              { id: "team", label: "Team" },
              { id: "contact", label: "Contact" },
            ].map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-[10px] uppercase tracking-[0.32em] text-white/70 hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-14 max-w-3xl">
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-serif text-4xl md:text-5xl text-[var(--ink)] leading-tight">{title}</h2>
      {sub && (
        <p className="mt-5 text-[var(--ink-soft)] text-lg font-light leading-relaxed">{sub}</p>
      )}
    </div>
  );
}

function WhatWeDo() {
  const cards = [
    {
      t: "Private Companies and Founders",
      b: "We support founders and private company owners through the process of strategic capital readiness, institutional positioning, and transaction preparation. We help structure the narrative, prepare the documentation, and assess counterparty fit before any market engagement begins.",
    },
    {
      t: "Private Funds and GPs",
      b: "We support fund managers and GPs in investor readiness, allocator-aligned positioning, and diligence coordination. We do not act as a placement agent. We prepare mandates for institutional engagement and support the process through authorised partners where regulated activity is required.",
    },
    {
      t: "M&A and Strategic Transactions",
      b: "We advise on M&A readiness, buy-side target assessment, and strategic transaction support across founder-led and mid-market situations. Our work covers mandate definition, counterparty mapping, documentation preparation, and diligence coordination.",
    },
    {
      t: "Buy-Side and Allocators",
      b: "We support funds and investors with buy-side diligence, opportunity screening, and counterparty-fit assessment. We qualify situations against mandate constraints — geography, sector, ticket size, execution timeline — before any engagement is facilitated.",
    },
  ];
  return (
    <section id="what-we-do" className="py-20 lg:py-28 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Mandates" title="What We Do" />
        <div className="grid md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {cards.map((c) => (
            <div
              key={c.t}
              className="group bg-background p-10 lg:p-12 border-t-2 border-[var(--bronze)] transition-all hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] leading-snug mb-5">
                {c.t}
              </h3>
              <p className="text-[var(--ink-soft)] leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    ["Initial Review", "We assess the situation, mandate type, and execution readiness before any engagement begins."],
    ["Mandate Fit", "We define the mandate parameters — geography, ticket size, structure, timeline — and validate them against market reality."],
    ["Readiness Assessment", "We identify gaps in documentation, governance, and positioning that would reduce institutional credibility."],
    ["Positioning and Documentation", "We develop investor-grade materials, financial narratives, and positioning frameworks aligned to the target counterparty universe."],
    ["Counterparty-Fit Mapping", "We map the right counterparties based on mandate alignment, prior activity, and structural compatibility."],
    ["Diligence Coordination", "We manage information flow, data room discipline, and Q&A processes with counterparties and their advisors."],
    ["Execution Support", "We support the process through to term sheet and beyond, staying involved rather than stepping back after introductions. Regulated execution is undertaken only through authorised partners where required."],
  ];
  return (
    <section id="method" className="py-20 lg:py-28 border-b border-[var(--rule)] bg-[oklch(0.945_0.008_85)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Ravencourt Method"
          title="How We Work"
          sub="A structured process from first review to transaction support."
        />
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {steps.map(([t, d], i) => (
            <li
              key={t}
              className={`bg-background p-8 lg:p-10 flex flex-col ${
                i === steps.length - 1 ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-serif text-[var(--bronze)] text-2xl tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-[var(--rule)]" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-[var(--ink)] leading-snug mb-3">
                {t}
              </h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Intelligence() {
  const tiles = [
    ["Investor Type", "We classify counterparties by structure — PE fund, family office, corporate investor, search fund, sovereign vehicle — to ensure structural compatibility."],
    ["Ticket Size", "We verify that the counterparty's minimum and maximum ticket size is genuinely compatible with the mandate before any introduction."],
    ["Geography", "We assess primary and secondary geographic focus, distinguishing between stated and demonstrated appetite."],
    ["Asset Class Appetite", "We identify whether the counterparty is actively deploying in the relevant asset class or strategy type."],
    ["Mandate Fit", "We score the match between the sell-side mandate and buy-side criteria across sector, size, structure, and timeline."],
    ["Prior Activity", "We assess recent transaction history to distinguish active deployers from passive monitors."],
    ["Decision Process", "We understand how decisions are made — committee structure, timeline, information requirements — before engagement begins."],
    ["Relationship Status", "We track and weight the strength of existing relationships to prioritise highest-conversion introductions."],
  ];
  return (
    <section id="intelligence" className="py-20 lg:py-28 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Allocator Intelligence Layer"
          title="Allocator Intelligence"
          sub="Every engagement is assessed across a structured set of dimensions before counterparty contact begins."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {tiles.map(([t, d], i) => (
            <div
              key={t}
              className="group relative bg-background p-8 min-h-[220px] flex flex-col transition-colors hover:bg-[oklch(0.95_0.008_85)]"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--bronze)] mb-4 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl text-[var(--ink)] leading-snug mb-3">{t}</h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                {d}
              </p>
              <div className="absolute bottom-5 right-5 w-4 h-4 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <span className="absolute w-3 h-px bg-[var(--ink-soft)]" />
                <span className="absolute w-px h-3 bg-[var(--ink-soft)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FulfillmentOS() {
  const lines = [
    "Mandate alignment verified before any market engagement begins",
    "Investor-grade documentation and data integrity maintained throughout",
    "Structured execution pathways with defined decision gates at each stage",
    "Governance discipline maintained across counterparties and jurisdictions",
    "Fee structures aligned to mandate type — fixed fees for advisory, success fees tied to transaction close",
    "Cross-border structuring and compliance consistency across Europe, MENA, and North America",
  ];
  return (
    <section
      id="fulfillmentos"
      className="py-20 lg:py-28 bg-[var(--ink)] text-[oklch(0.95_0.008_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14 max-w-4xl">
          <p className="eyebrow mb-4 text-[var(--bronze-soft)]">How we operate</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
            FulfillmentOS
          </h2>
          <p className="mt-4 text-lg text-[oklch(0.78_0.01_85)] italic font-light">
            It is not a product. It is how we work.
          </p>
          <p className="mt-8 text-lg md:text-xl text-[oklch(0.86_0.01_85)] font-light leading-relaxed">
            FulfillmentOS is the internal operating framework that governs how every Ravencourt
            engagement is structured, executed, and closed. It ensures mandate clarity,
            documentation discipline, counterparty-fit verification, and governance consistency
            from first review to transaction support — regardless of geography, mandate type, or
            market conditions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-6xl">
          {lines.map((l, i) => (
            <div
              key={l}
              className="border-l-2 border-[var(--bronze)] pl-6 py-3 flex items-start gap-6"
            >
              <span className="font-serif text-[var(--bronze)] text-2xl leading-none pt-1 tabular-nums shrink-0 min-w-[2rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[oklch(0.88_0.01_85)] leading-relaxed text-base md:text-lg font-light">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footprint() {
  const regions = [
    {
      t: "Europe",
      b: "Primary market. Cross-border mandates across Western and Southern Europe with particular depth in Italy, France, Germany, Luxembourg, Greece, and the United Kingdom. Relationships span founder-led SMEs, mid-market sponsors, and institutional allocators.",
    },
    {
      t: "MENA",
      b: "Active coverage across Gulf-based family offices, sovereign-adjacent capital pools, and emerging market mandates. Focus on cross-border situations bridging European deal flow with Middle Eastern and North African counterparties.",
    },
    {
      t: "North America",
      b: "Select cross-border engagements with institutional allocators, family offices, and acquisition entrepreneurs. Focus on transatlantic mandates where European execution capability and North American capital appetite intersect.",
    },
  ];
  return (
    <section id="footprint" className="py-20 lg:py-28 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Operating Footprint" title="Where We Operate" />
        <p className="text-lg md:text-xl text-[var(--ink)] font-light leading-relaxed max-w-4xl mb-16">
          Milan-based, with cross-border coverage across Europe, MENA, North America, and select
          global markets.
        </p>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {regions.map((r) => (
            <div key={r.t}>
              <div className="h-px w-12 bg-[var(--bronze)] mb-6" />
              <h3 className="font-serif text-3xl text-[var(--ink)] mb-4">{r.t}</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed text-sm">{r.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section
      id="team"
      className="py-20 lg:py-28 border-b border-[var(--rule)] bg-[oklch(0.945_0.008_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Team" title="The Team" />
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
          {TEAM.slice(0, 3).map((m) => (
            <TeamCard key={m.name} m={m} />
          ))}
        </div>
        <div className="mt-16 lg:mt-20 grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 max-w-3xl mx-auto">
          {TEAM.slice(3).map((m) => (
            <TeamCard key={m.name} m={m} />
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-[var(--ink-soft)] italic">
          All engagements are senior-led. No junior handoffs.
        </p>
      </div>
    </section>
  );
}

function TeamCard({ m }: { m: typeof TEAM[number] }) {
  return (
    <div className="text-center px-4">
              <div className="mx-auto w-36 h-36 rounded-full bg-[oklch(0.9_0.012_85)] text-[var(--ink)] flex items-center justify-center font-serif text-3xl tracking-wider border border-[var(--bronze)]/40 mb-6 overflow-hidden">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: m.objectPosition ?? "50% 25%" }}
                  />
                ) : (
                  m.initials
                )}
              </div>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] font-semibold text-[var(--ink)] mb-2 hover:text-[var(--bronze)] transition-colors whitespace-nowrap"
              >
                {m.name}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <p className="text-sm text-[var(--ink-soft)] leading-snug max-w-xs mx-auto">
                {m.title}
              </p>
            </div>
  );
}

function Regulatory() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
        <p className="text-xs md:text-sm text-[var(--ink-soft)] leading-relaxed">
          Ravencourt Capital provides strategic advisory, investor-readiness,
          transaction-preparation, and diligence-support services. Any regulated activity —
          including securities placement, investment promotion, brokerage, or arrangement
          activity — is undertaken only through appropriately authorised partners where required.
          Nothing on this website constitutes an offer, solicitation, or invitation to invest.
        </p>
      </div>
    </section>
  );
}

const CONTACT_TILES = [
  {
    label: "Private Company or Founder",
    url: "https://cal.com/team/ravencourt-capital/strategic-capital-investor-readiness-founders-gps",
  },
  {
    label: "M&A or Strategic Transaction",
    url: "https://cal.com/team/ravencourt-capital/m-a-advisory-founder-led-sme-sale-strategic-transaction",
  },
  {
    label: "Buy-Side or Allocator",
    url: "https://cal.com/team/ravencourt-capital/buy-side-advisory-institutional-acquisitions-capital-deployment",
  },
  {
    label: "Co-Advisory or Referral Partner",
    url: "https://cal.com/team/ravencourt-capital/co-advisory-by-referral",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const selectedTile = CONTACT_TILES.find((t) => t.label === selected);

  return (
    <section id="contact" className="bg-[var(--ink)] text-[oklch(0.95_0.008_85)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow mb-4 text-[var(--bronze-soft)]">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Make an Enquiry
          </h2>
          <p className="mt-6 text-lg text-[oklch(0.82_0.01_85)] font-light leading-relaxed">
            All enquiries are treated with strict confidentiality. Select the description that
            best fits your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {CONTACT_TILES.map((t) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setSelected(t.label)}
              className={`text-left px-5 py-4 border text-xs uppercase tracking-[0.18em] transition-colors ${
                selected === t.label
                  ? "border-[var(--bronze)] bg-[var(--bronze)]/10 text-[var(--bronze-soft)]"
                  : "border-white/20 text-white/70 hover:border-[var(--bronze)] hover:text-[var(--bronze-soft)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mb-14">
          {selectedTile ? (
            <a
              href={selectedTile.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-white text-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[var(--ink)] transition-colors"
            >
              Book a call — {selectedTile.label}
              <span aria-hidden>→</span>
            </a>
          ) : (
            <button
              disabled
              className="inline-flex items-center gap-3 border border-white/20 text-white/40 px-8 py-4 text-xs uppercase tracking-[0.2em] cursor-not-allowed"
            >
              Select a category above
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6"
          >
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Subject</label>
              <input
                readOnly
                value={selected ?? ""}
                placeholder="Select a category above"
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_270)] outline-none py-3 text-base text-white/90 placeholder:text-white/30"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Name</label>
              <input
                required
                type="text"
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_270)] focus:border-[var(--bronze)] outline-none py-3 text-base"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Organisation</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_270)] focus:border-[var(--bronze)] outline-none py-3 text-base"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Email</label>
              <input
                required
                type="email"
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_270)] focus:border-[var(--bronze)] outline-none py-3 text-base"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_270)] focus:border-[var(--bronze)] outline-none py-3 text-base resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-3 border border-white text-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[var(--ink)] transition-colors"
            >
              {sent ? "Enquiry submitted" : "Submit enquiry"}
              <span aria-hidden>→</span>
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-2 text-[var(--bronze-soft)]">Email</p>
              <a
                href="mailto:contact@ravencourtcapital.com"
                className="text-lg hover:text-[var(--bronze)] transition-colors"
              >
                contact@ravencourtcapital.com
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2 text-[var(--bronze-soft)]">Telephone</p>
              <a
                href="tel:+393896497363"
                className="text-lg hover:text-[var(--bronze)] transition-colors"
              >
                +39 389 649 7363
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2 text-[var(--bronze-soft)]">Office</p>
              <p className="text-lg leading-relaxed">Milan, Italy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[oklch(0.7_0.01_85)] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs">
        <p className="text-[oklch(0.75_0.01_85)]">
          Ravencourt Capital © 2025 · P.IVA 11381320966 · Milan, Italy ·{" "}
          <a
            href="mailto:contact@ravencourtcapital.com"
            className="hover:text-[var(--bronze)] transition-colors"
          >
            contact@ravencourtcapital.com
          </a>
        </p>
        <a
          href="https://linkedin.com/company/ravencourt-capital"
          target="_blank"
          rel="noreferrer"
          aria-label="Ravencourt Capital on LinkedIn"
          className="text-[oklch(0.75_0.01_85)] hover:text-[var(--bronze)] transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

function RavencourtPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Method />
        <Intelligence />
        <FulfillmentOS />
        <Footprint />
        <Team />
        <Regulatory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}