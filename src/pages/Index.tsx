import { useEffect, useState } from "react";
import { Menu, ArrowLeft, ArrowRight } from "lucide-react";
import logo from "@/assets/ravencourt-logo.png";
import lucianoImg from "@/assets/luciano.jpg.asset.json";
import konstantinosImg from "@/assets/konstantinos.jpeg.asset.json";
import joeyImg from "@/assets/joey.jpg.asset.json";
import saaniaImg from "@/assets/saania.jpg.asset.json";
import rohanImg from "@/assets/rohan.png.asset.json";
import milanHero from "@/assets/milan-hero.jpg.asset.json";
import corridorImg from "@/assets/corridor.png.asset.json";
import deltaImg from "@/assets/delta.png.asset.json";
import boardroomImg from "@/assets/boardroom.png.asset.json";

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
    role: "Founder & Principal",
    location: "Milan, Italy",
    linkedin: "https://linkedin.com/in/raisingcapitalcontact",
    image: rohanImg.url,
    objectPosition: "50% 25%",
  },
  {
    initials: "LM",
    name: "Dr. Luciano Mazzola",
    role: "Legal & Cross-Border Structuring Advisor",
    location: "Milan, Italy",
    linkedin: "https://lcopartners.eu/en/professionals/luciano-mazzola-en",
    image: lucianoImg.url,
    objectPosition: "50% 5%",
  },
  {
    initials: "SS",
    name: "Sania Shaikh",
    role: "Partnerships & Operations Director",
    location: "Remote / Cross-border",
    linkedin: "https://linkedin.com/in/sanian",
    image: saaniaImg.url,
    objectPosition: "50% 26%",
  },
  {
    initials: "KL",
    name: "Konstantinos Lanaras",
    role: "Private Markets Coverage Analyst",
    location: "Remote / Europe",
    linkedin: "https://www.linkedin.com/in/konstantinoslanaras0504/",
    image: konstantinosImg.url,
    objectPosition: "50% 50%",
  },
  {
    initials: "JZ",
    name: "Joey Zhu",
    role: "FulfillmentOS & Data Pipeline Analyst",
    location: "Remote / Global",
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

const HERO_SLIDES = [
  {
    headline: "Private Markets Advisory.",
    subtext:
      "A Milan-based advisory boutique supporting founder-led companies, fund managers, and institutional partners across private markets.",
    image: milanHero.url,
    alt: "Milan skyline at dusk",
  },
  {
    headline: "Strategic Capital.",
    subtext:
      "We prepare companies and fund managers for institutional scrutiny, allocator alignment, and capital processes built to withstand diligence.",
    image: corridorImg.url,
    alt: "Marble institutional corridor",
  },
  {
    headline: "M&A and Secondaries.",
    subtext:
      "Transaction readiness, counterparty-fit mapping, and process discipline across M&A, secondary transactions, and capital solutions.",
    image: deltaImg.url,
    alt: "Aerial delta at golden hour",
  },
  {
    headline: "Transaction Readiness.",
    subtext:
      "Every engagement is assessed for documentation discipline, valuation realism, governance readiness, and execution feasibility before deeper market engagement begins.",
    image: boardroomImg.url,
    alt: "Boardroom with city skyline",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    if (hasInteracted) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total, hasInteracted]);

  const go = (delta: number) => {
    setHasInteracted(true);
    setIndex((i) => (i + delta + total) % total);
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-[var(--ink)] text-[oklch(0.95_0.008_85)] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1280}
          />
        ))}
        <div className="absolute inset-0 bg-[var(--ink)]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/40 via-transparent to-[var(--ink)]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12 w-full pt-28 pb-32 flex flex-col items-start text-left">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`transition-opacity duration-[1200ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 absolute pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight max-w-5xl text-white">
              {s.headline}
            </h1>
            <p className="mt-10 text-lg md:text-xl text-[oklch(0.92_0.01_85)] font-light max-w-3xl leading-relaxed">
              {s.subtext}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-24 right-6 lg:right-12 z-20 flex items-center gap-6">
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="h-10 w-10 flex items-center justify-center border border-white/40 text-white/80 hover:bg-white hover:text-[var(--ink)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="h-10 w-10 flex items-center justify-center border border-white/40 text-white/80 hover:bg-white hover:text-[var(--ink)] transition-colors"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="text-xs uppercase tracking-[0.32em] text-white/80 font-light tabular-nums ml-2">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>

      <nav className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15 bg-[var(--ink)]/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
            {[
              { id: "what-we-do", label: "Mandates" },
              { id: "method", label: "Approach" },
              { id: "intelligence", label: "Intel" },
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const cards = [
    {
      t: "Founder-Led Companies & Management Teams",
      intro: "We support founder-led companies and management teams preparing for institutional scrutiny, strategic capital processes, acquisition-led growth, shareholder liquidity discussions, or M&A-related engagement.",
      bullets: [
        "Strategic capital readiness",
        "Institutional positioning",
        "Valuation and narrative alignment",
        "Data-room and documentation discipline",
        "Governance and process readiness",
        "Counterparty-fit mapping",
        "Founder preparation and meeting support",
      ],
    },
    {
      t: "Fund Managers & Emerging GPs",
      intro: "We support fund managers and emerging GPs in strengthening institutional positioning, LP-readiness, documentation quality, strategy articulation, and allocator-facing communication before deeper market engagement.",
      bullets: [
        "Fund positioning and mandate articulation",
        "LP-readiness review",
        "Track-record and strategy presentation",
        "Data-room and diligence preparation",
        "Allocator-fit mapping",
        "Governance and process discipline",
        "Regulated-partner coordination where required",
      ],
    },
    {
      t: "M&A, Strategic Transactions & Capital Solutions",
      intro: "We support founder-led and mid-market strategic transaction processes where valuation realism, buyer intent, materials quality, process control, and counterparty discipline are essential.",
      bullets: [
        "M&A readiness",
        "Transaction positioning",
        "Buyer and counterparty-fit mapping",
        "Management presentation preparation",
        "Due diligence coordination",
        "Capital-solutions assessment",
        "Process and communication support",
      ],
    },
    {
      t: "Secondary Transactions & Liquidity Solutions",
      intro: "We support selected GP-led, LP-led, shareholder-liquidity, and portfolio-level secondary situations through readiness review, positioning, documentation preparation, and diligence coordination.",
      bullets: [
        "Secondary transaction readiness",
        "GP-led and LP-led situation review",
        "Continuation and liquidity narrative support",
        "Buyer-fit and counterparty mapping",
        "Documentation preparation",
        "Diligence and Q&A coordination",
        "Authorised-partner execution where required",
      ],
    },
    {
      t: "Allocators, Family Offices & Strategic Capital Partners",
      intro: "We support buy-side counterparties with opportunity screening, mandate-fit assessment, early diligence, and structured review support across selected private-market opportunities.",
      bullets: [
        "Opportunity screening",
        "Mandate-fit assessment",
        "Downside-risk review",
        "Early diligence support",
        "Sector and counterparty mapping",
        "Investment committee preparation support",
      ],
    },
    {
      t: "Search Funds & Acquisition Entrepreneurs",
      intro: "We support searchers and acquisition entrepreneurs across target evaluation, acquisition readiness, transaction structuring, and post-acquisition feasibility analysis.",
      bullets: [
        "Target screening",
        "Cash-flow quality review",
        "Debt-capacity assessment",
        "Seller and counterparty evaluation",
        "Acquisition thesis refinement",
        "Execution pathway support",
      ],
    },
    {
      t: "Co-Advisory & Referral Partners",
      intro: "We work with selected advisors, legal professionals, consultants, intermediaries, and ecosystem partners where complementary capabilities can improve client outcomes.",
      bullets: [
        "Partner qualification",
        "Mandate alignment",
        "Client ownership clarity",
        "Process sequencing",
        "Documentation and referral discipline",
        "Cross-border advisory coordination",
      ],
    },
  ];
  return (
    <section id="what-we-do" className="py-20 lg:py-28 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Mandates" title="What We Do" />
        <div className="grid md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {cards.map((c, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={c.t}
                className={`group relative bg-background p-10 lg:p-12 border-t-2 border-[var(--bronze)] transition-all hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 ${i === cards.length - 1 ? "md:col-span-2" : ""}`}
              >
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] leading-snug mb-4 pr-8">
                  {c.t}
                </h3>
                <p className="text-[var(--ink-soft)] leading-relaxed pr-8">{c.intro}</p>
                <div
                  className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"}`}
                >
                  <ul className="space-y-2">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-[var(--ink-soft)] leading-relaxed">
                        <span className="mt-2 w-1 h-px bg-[var(--bronze)] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-label={isOpen ? "Collapse" : "Expand"}
                  className="absolute bottom-5 right-5 w-8 h-8 flex items-center justify-center transition-transform duration-300"
                >
                  <span className={`absolute w-3 h-px bg-[var(--ink-soft)] transition-transform duration-300 ${isOpen ? "rotate-0" : ""}`} />
                  <span className={`absolute w-px h-3 bg-[var(--ink-soft)] transition-transform duration-300 ${isOpen ? "rotate-90 opacity-0" : ""}`} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    ["Initial Review", "We assess the opportunity, counterparty, stage, documentation quality, commercial context, and potential mandate relevance."],
    ["Mandate Fit", "We evaluate whether the client, opportunity, timing, geography, transaction type, and counterparty universe justify Ravencourt's involvement."],
    ["Readiness Assessment", "We review positioning, documentation, data-room quality, valuation narrative, governance discipline, decision preparedness, and execution risk."],
    ["Strategic Positioning", "We refine the narrative, materials, commercial logic, institutional communication standard, and relevance to the target counterparty universe."],
    ["Counterparty-Fit Mapping", "We assess potential counterparty relevance by mandate, ticket size, geography, asset-class appetite, prior activity, decision process, and relationship context."],
    ["Diligence & Process Support", "We support disciplined communication, documentation flow, meeting preparation, follow-up structure, Q&A coordination, and process accountability."],
    ["Decision-Stage Execution", "We remain involved through defined engagement checkpoints, supporting alignment between strategy, documentation, counterparty feedback, diligence requirements, and practical next steps."],
  ];
  return (
    <section id="method" className="py-20 lg:py-28 border-b border-[var(--rule)] bg-[oklch(0.945_0.008_85)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Ravencourt Method"
          title="How We Work"
          sub="Every engagement is assessed through a structured advisory process before deeper work begins."
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
  const items: [string, string][] = [
    ["Investor Type", "PE fund, family office, corporate investor, search fund, sovereign vehicle."],
    ["Ticket Size", "Minimum and maximum verified as genuinely compatible with the mandate."],
    ["Geography", "Primary and secondary focus, distinguishing stated from demonstrated appetite."],
    ["Asset-Class Appetite", "Actively deploying in the relevant asset class or strategy type."],
    ["Strategy Fit", "Alignment between strategy, stage, structure, and counterparty thesis."],
    ["Mandate Relevance", "Match across sector, size, structure, and timeline."],
    ["Prior Activity", "Recent transaction history to distinguish active deployers from passive monitors."],
    ["Decision Process", "Committee structure, timeline, and information requirements."],
    ["Relationship Status", "Strength and history weighted for highest-conversion engagement."],
    ["Timing and Liquidity Context", "Deployment timing, liquidity windows, and cycle position."],
    ["Regulatory and Jurisdictional Considerations", "Cross-border regulatory and authorisation requirements."],
    ["Follow-On Engagement Probability", "Likelihood of repeat deployment and longer-term relevance."],
  ];
  return (
    <section id="intelligence" className="py-20 lg:py-28 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Allocator Intelligence Layer"
          title="Allocator Intelligence"
          sub="Ravencourt's advisory process is supported by a structured intelligence layer designed to improve counterparty relevance, reduce noise, and strengthen decision discipline. We assess:"
        />
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {items.map(([title, desc], i) => (
            <div key={title} className="flex gap-5">
              <span className="font-serif text-[var(--bronze)] text-xl tabular-nums shrink-0 min-w-[1.75rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-serif text-lg md:text-xl text-[var(--ink)] leading-snug">
                  {title}
                </h4>
                <p className="mt-1 text-sm text-[var(--ink-soft)] leading-relaxed font-light">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-[var(--rule)]">
          <p className="text-sm text-[var(--ink-soft)] italic max-w-4xl leading-relaxed">
            This layer supports founder-led companies, fund managers, M&amp;A situations, secondaries,
            searchers, and buy-side counterparties by ensuring engagement is based on fit, not volume.
          </p>
        </div>
      </div>
    </section>
  );
}

function FulfillmentOS() {
  const lines = [
    "Mandate Alignment — We verify mandate-level alignment before deeper market engagement begins.",
    "Documentation Discipline — We maintain investor-grade documentation standards, data-room discipline, and version control throughout the process.",
    "Decision Gates — We structure engagements around defined checkpoints, decision gates, and scope-controlled workstreams.",
    "Governance Control — We maintain process discipline across counterparties, communication, documentation, and jurisdictional considerations.",
    "Outcome Attribution — We track documented engagement scope, process contribution, counterparty interaction, and outcome attribution.",
    "Cross-Border Consistency — We coordinate execution across jurisdictions with attention to legal, regulatory, cultural, and commercial context.",
  ];
  return (
    <section
      id="fulfillmentos"
      className="py-20 lg:py-28 bg-[#0F0E0D] text-[oklch(0.95_0.008_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14 max-w-4xl">
          <p className="eyebrow mb-4 text-[var(--gold-soft)]">How we operate</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight">
            FulfillmentOS
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-[var(--gold)] italic font-light">
            It is not a product. It is how we work.
          </p>
          <p className="mt-8 text-lg md:text-xl text-[oklch(0.86_0.01_85)] font-light leading-relaxed">
            FulfillmentOS is Ravencourt Capital's internal operating framework. It governs how
            engagements are assessed, structured, executed, and reviewed. It is not a product. It
            is how we work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-8 max-w-6xl">
          {lines.map((l, i) => (
            <div
              key={l}
              className="py-3 flex items-start gap-6"
            >
              <span className="font-serif text-[var(--gold)] text-2xl leading-none pt-1 tabular-nums shrink-0 min-w-[2rem]">
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
      b: "Primary market. Coverage across selected European private-market situations involving founder-led companies, fund managers, family offices, searchers, acquisition entrepreneurs, strategic acquirers, and institutional counterparties.",
    },
    {
      t: "MENA",
      b: "Selective cross-border coverage across selected Gulf and MENA relationships where European private-market opportunities, family-office engagement, strategic transactions, or institutional partnership opportunities may be relevant.",
    },
    {
      t: "North America",
      b: "Selective cross-border engagement where European execution capability, private-market opportunities, and North American capital or strategic interest may intersect.",
    },
    {
      t: "Select Global Markets",
      b: "Relationship-led engagement in select global markets where Ravencourt's relationship network, advisory capability, and mandate relevance justify involvement.",
    },
  ];
  return (
    <section id="footprint" className="py-20 lg:py-28 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Operating Footprint" title="Where We Operate" />
        <p className="text-lg md:text-xl text-[var(--ink)] font-light leading-relaxed max-w-4xl mb-16">
          Ravencourt is Milan-based, with cross-border coverage across Europe, MENA, North America,
          and select global markets. Our operating model is selective by design.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
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
        <SectionHeader eyebrow="Team" title="Senior-led, by design." />
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
          All engagements operate under senior-led oversight.
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
              <p className="text-sm text-[var(--ink)] font-medium leading-snug max-w-xs mx-auto">
                {m.role}
              </p>
              <p className="text-xs text-[var(--ink-soft)] leading-snug max-w-xs mx-auto mt-1 uppercase tracking-wider">
                {m.location}
              </p>
            </div>
  );
}

function Regulatory() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center space-y-4">
        <p className="eyebrow text-[var(--ink-soft)]">Regulatory Framework</p>
        <p className="text-xs md:text-sm text-[var(--ink-soft)] leading-relaxed">
          Ravencourt Capital provides strategic advisory, investor-readiness,
          transaction-preparation, M&amp;A support, secondaries-readiness support, buy-side
          diligence, and institutional partnership coordination services.
        </p>
        <p className="text-xs md:text-sm text-[var(--ink-soft)] leading-relaxed">
          Ravencourt Capital does not hold itself out as a broker-dealer, placement agent,
          investment manager, or regulated securities intermediary.
        </p>
        <p className="text-xs md:text-sm text-[var(--ink-soft)] leading-relaxed">
          Any regulated activity, including securities placement, investment promotion, brokerage,
          investment arrangement, fund distribution, or jurisdiction-specific regulated activity,
          is undertaken only through appropriately authorised partners where required.
        </p>
        <p className="text-xs md:text-sm text-[var(--ink-soft)] leading-relaxed">
          This website is directed exclusively at professional clients, institutional
          counterparties, sophisticated investors, and eligible business users. It does not
          constitute an offer, solicitation, recommendation, or invitation to buy or sell
          securities, financial instruments, fund interests, or investment products in any
          jurisdiction.
        </p>
      </div>
    </section>
  );
}

const CONTACT_TILES = [
  {
    label: "Founder-Led Companies & Management Teams",
    url: "https://cal.com/team/ravencourt-capital/strategic-capital-investor-readiness-founders-gps",
  },
  {
    label: "Fund Managers & Emerging GPs",
    url: "https://cal.com/team/ravencourt-capital/buy-side-advisory-institutional-acquisitions-capital-deployment",
  },
  {
    label: "M&A / Strategic Transactions",
    url: "https://cal.com/team/ravencourt-capital/m-a-advisory-founder-led-sme-sale-strategic-transaction",
  },
  {
    label: "Secondaries & Capital Solutions",
    url: "https://cal.com/team/ravencourt-capital/buy-side-advisory-institutional-acquisitions-capital-deployment",
  },
  {
    label: "Search Funds & Acquisition Entrepreneurs",
    url: "https://cal.com/team/ravencourt-capital/buy-side-advisory-institutional-acquisitions-capital-deployment",
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
            All enquiries are treated with discretion. If you are considering a strategic
            transaction, capital-readiness process, M&amp;A mandate, secondary transaction,
            buy-side review, fund-manager readiness exercise, acquisition search, or institutional
            partnership discussion, Ravencourt is available to assess alignment.
          </p>
          <p className="mt-6 eyebrow text-[var(--bronze-soft)]">Select the most relevant pathway:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
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
            <div>
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
                  Select a pathway to book a call
                </button>
              )}
            </div>
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
              <p className="text-lg leading-relaxed">Via Carlo Imbonati, 62/2, 20159 Milano, Italy</p>
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
        <div className="text-[oklch(0.75_0.01_85)] space-y-1 leading-relaxed">
          <p className="font-serif text-sm text-white/90">Ravencourt Capital</p>
          <p>Allocator-Aligned Private Markets Advisory</p>
          <p>Milan, Italy · Cross-border coverage across Europe, MENA, North America, and select global markets</p>
          <p>Ravencourt Capital di Rohan Kapoor · P.IVA 11381320966</p>
          <p>Registered Office: Via Carlo Imbonati, 62/2, 20159 Milano, Italy</p>
          <p>
            <a href="mailto:contact@ravencourtcapital.com" className="hover:text-[var(--bronze)] transition-colors">contact@ravencourtcapital.com</a>
            {" · "}
            <a href="tel:+393896497363" className="hover:text-[var(--bronze)] transition-colors">+39 389 649 7363</a>
          </p>
          <p className="italic text-[oklch(0.65_0.01_85)]">For professional and institutional use only. Not for retail distribution.</p>
          <p>© 2026 Ravencourt Capital. All rights reserved.</p>
        </div>
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

export default RavencourtPage;