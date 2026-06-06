import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/ravencourt-logo.png";
import lucianoImg from "@/assets/luciano.jpg.asset.json";
import joeyImg from "@/assets/joey.jpg.asset.json";
import saaniaImg from "@/assets/saania.jpg.asset.json";
import milanHero from "@/assets/milan-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: RavencourtPage,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "geographies", label: "Geographies" },
  { id: "buyside", label: "Buy-side & Sell-side" },
  { id: "capabilities", label: "Capabilities" },
  { id: "fulfillmentos", label: "FulfillmentOS" },
  { id: "metrics", label: "Metrics" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const TEAM = [
  {
    initials: "RK",
    name: "Rohan Kapoor",
    title: "Founder & Principal",
    location: "Milan, Italy",
    linkedin: "https://linkedin.com/in/raisingcapitalcontact",
  },
  {
    initials: "LM",
    name: "Dr. Luciano Mazzola",
    title: "Cross-border structuring advisor",
    location: "Milan, Italy",
    linkedin: "https://lcopartners.eu/en/professionals/luciano-mazzola-en",
    image: lucianoImg.url,
    objectPosition: "50% 22%",
  },
  {
    initials: "SS",
    name: "Saania Shaikh",
    title: "Partnerships & Operations Director",
    location: "Dubai, UAE",
    linkedin: "https://linkedin.com/in/sanian",
    image: saaniaImg.url,
    objectPosition: "50% 26%",
  },
  {
    initials: "KL",
    name: "Konstantinos Lanaras",
    title: "Private Markets Coverage Analyst",
    location: "Luxembourg",
    linkedin: "https://www.linkedin.com/in/konstantinoslanaras0504/",
  },
  {
    initials: "JZ",
    name: "Joey Zhu",
    title: "FulfillmentOS & Data Pipeline Analyst",
    location: "New York",
    linkedin: "https://www.linkedin.com/in/joey-zhu-7006a0318/",
    image: joeyImg.url,
    objectPosition: "50% 28%",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-[var(--ink)]">
          <img src={logo} alt="Ravencourt Capital" className="h-9 w-9 object-contain" />
          <span className="font-serif text-lg tracking-wide hidden sm:inline">
            Ravencourt <span className="text-[var(--bronze)]">Capital</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)] hover:text-[var(--bronze)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden lg:inline-flex text-[11px] uppercase tracking-[0.18em] border border-[var(--ink)] text-[var(--ink)] px-4 py-2 hover:bg-[var(--ink)] hover:text-background transition-colors"
        >
          Get in touch
        </a>
        <button
          className="lg:hidden text-[var(--ink)] text-sm uppercase tracking-widest"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[var(--rule)] bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-[var(--ink)] text-[oklch(0.95_0.008_85)] overflow-hidden"
    >
      {/* Cinematic Milan background */}
      <div className="absolute inset-0 z-0">
        <img
          src={milanHero.url}
          alt="Milan skyline at dusk"
          className="w-full h-full object-cover opacity-90"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/70 via-[var(--ink)]/55 to-[var(--ink)]" />
      </div>

      {/* Centered hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full pt-28 pb-40 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-10">
          <img src={logo} alt="" className="h-12 w-12 object-contain" />
          <p className="eyebrow text-[var(--bronze-soft)] !mb-0">Ravencourt Capital · Milan</p>
        </div>
        <div className="w-16 h-px bg-[var(--bronze)] mb-10" />
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight max-w-5xl">
          Private Markets Execution. Capital Raising, M&amp;A, and Strategic Transactions.
        </h1>
        <p className="mt-10 text-lg md:text-xl text-[oklch(0.82_0.01_85)] font-light max-w-2xl leading-relaxed">
          A Milan-based private markets boutique executing capital raises, M&amp;A processes, and
          buy-side mandates across Europe, MENA, and North America.
        </p>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-[var(--bronze)] text-[var(--bronze)] px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[var(--bronze)] hover:text-[var(--ink)] transition-colors"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Bottom capabilities strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[var(--ink)]/70 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl flex divide-x divide-white/10">
          {[
            { eyebrow: "Expertise", label: "Capital Raising", href: "#capabilities" },
            { eyebrow: "Expertise", label: "M&A Advisory", href: "#capabilities" },
            { eyebrow: "Expertise", label: "Buy-Side Mandates", href: "#buyside" },
            { eyebrow: "Proprietary", label: "FulfillmentOS", href: "#fulfillmentos" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex-1 py-8 px-6 hover:bg-white/[0.03] transition-colors"
            >
              <p className="text-[9px] tracking-[0.3em] text-[var(--bronze)] uppercase mb-3 opacity-80 group-hover:opacity-100">
                {c.eyebrow}
              </p>
              <h3 className="text-[11px] tracking-[0.2em] uppercase font-medium text-white/80 group-hover:text-white">
                {c.label}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-serif text-4xl md:text-5xl text-[var(--ink)] leading-tight">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-28 lg:py-36 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="About" title="A senior-led firm built for private markets." />
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 hidden lg:block">
            <div className="h-px w-16 bg-[var(--bronze)]" />
          </div>
          <div className="lg:col-span-8 max-w-2xl space-y-6">
            <p className="text-[var(--ink-soft)] leading-[1.75] text-base md:text-lg">
              Ravencourt Capital is a Milan-based private markets boutique operating across Europe,
              MENA, North America, and select global markets through a cross-border team in Milan,
              Dubai, Luxembourg, and New York.
            </p>
            <p className="text-[var(--ink-soft)] leading-[1.75] text-base md:text-lg">
              We execute across capital formation, M&amp;A, and buy-side mandates with a focus on
              entry discipline, transaction structure, and execution feasibility.
            </p>
            <p className="text-[var(--ink-soft)] leading-[1.75] text-base md:text-lg">
              All engagements run through a senior-led process built around mandate alignment,
              institutional readiness, and outcome attribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Advisory() {
  const buy = [
    "Mandate-fit identification across strategy, geography, ticket size, and timeline",
    "Upfront qualification against stated investment criteria before any introduction",
    "Counterparty assessment and due diligence support at early process stages",
    "Structured introductions only where mandate alignment is already established",
  ];
  const sell = [
    "Positioning and narrative development for capital raises and strategic transactions",
    "Investor-facing materials, financial documentation, and readiness preparation",
    "Allocator identification mapped to mandate fit, ticket size, and timeline",
    "End-to-end process management through to term sheet and beyond",
  ];
  return (
    <section
      id="buyside"
      className="py-28 lg:py-36 border-b border-[var(--rule)] bg-[oklch(0.97_0.006_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          <div className="bg-background p-10 lg:p-14">
            <p className="text-[var(--ink-soft)] leading-relaxed mb-8">
              We source and qualify opportunities against your mandate before they reach the open market.
            </p>
            <ul className="space-y-3">
              {buy.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-[var(--ink-soft)] leading-relaxed">
                  <span className="mt-[0.5rem] h-1 w-1 rounded-full bg-[var(--bronze)] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-10 lg:p-14">
            <p className="text-[var(--ink-soft)] leading-relaxed mb-8">
              We position and run the process — staying involved through execution, not just the opening conversation.
            </p>
            <ul className="space-y-3">
              {sell.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-[var(--ink-soft)] leading-relaxed">
                  <span className="mt-[0.5rem] h-1 w-1 rounded-full bg-[var(--bronze)] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      t: "Capital formation and strategic positioning",
      d: "Sell-side execution across capital raises, secondary transactions, and strategic placements.",
      b: "Capital raising is executed through allocator-aligned positioning, where narrative, valuation, and structure are engineered to withstand institutional diligence. Positioning is stress-tested against the entry logic and return expectations of the target investor universe.",
    },
    {
      t: "M&A and strategic transactions",
      d: "Coverage across founder-led and mid-market transactions from €2M to €50M.",
      b: "We advise on transactions involving private equity, strategic acquirers, family offices, and search funds across Europe, MENA, and North America. Engagements are structured around valuation realism, buyer intent verification, and executable deal pathways.",
    },
    {
      t: "Buy-side diligence and opportunity screening",
      d: "Investment opportunities filtered and stress-tested through institutional-grade analysis.",
      b: "Work is delivered as an extension of the investment team, with emphasis on downside protection and return visibility. Our approach replicates the scrutiny of an internal investment committee, not a third-party opinion.",
    },
    {
      t: "Search Fund & Direct Deal Execution",
      d: "Support for searchers and acquisition entrepreneurs across the full transaction lifecycle.",
      b: "We advise searchers and acquisition entrepreneurs on deal sourcing, target evaluation, and transaction structuring. Analysis focuses on cash-flow durability, debt capacity, and post-acquisition operational feasibility.",
    },
  ];
  return (
    <section id="capabilities" className="pt-28 lg:pt-36 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Execution capabilities" title="A focused mandate set." />
        <div className="border-t border-[var(--ink)]">
          {items.map((it, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-6 py-12 border-b border-[var(--rule)]">
              <div className="md:col-span-1 font-serif text-[var(--bronze)] text-sm tracking-widest pt-2">
                0{i + 1}
              </div>
              <div className="md:col-span-5">
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] leading-snug mb-3">
                  {it.t}
                </h3>
                <p className="text-sm text-[var(--ink-soft)] italic leading-relaxed">{it.d}</p>
              </div>
              <p className="md:col-span-6 text-[var(--ink-soft)] leading-relaxed md:pt-2">
                {it.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FulfillmentOS() {
  return _FulfillmentOS();
}


function _FulfillmentOS() {
  const lines = [
    "Mandate-level alignment verified before any market engagement begins",
    "Investor-grade documentation and data integrity maintained throughout",
    "Structured execution pathways with defined decision gates at each stage",
    "Governance control maintained across counterparties and jurisdictions",
    "Capital attribution discipline linked to outcome-based fee structures",
    "Cross-border structuring and compliance consistency across Europe, MENA, and North America",
  ];
  return (
    <section
      id="fulfillmentos"
      className="py-28 lg:py-36 border-b border-[oklch(0.28_0.025_250)] bg-[var(--ink)] text-[oklch(0.95_0.008_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14 max-w-4xl">
          <p className="eyebrow mb-4 text-[var(--bronze-soft)]">How we operate</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            FulfillmentOS.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-[oklch(0.82_0.01_85)] font-light leading-relaxed">
            FulfillmentOS is the internal operating framework that governs how every Ravencourt
            engagement is structured, executed, and closed. It is not a product. It is how we
            work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-6xl">
          {lines.map((l, i) => (
            <div
              key={l}
              className="border-l-2 border-[var(--bronze)] pl-6 py-4 flex items-start gap-6"
            >
              <span className="font-serif text-[var(--bronze)] text-3xl md:text-4xl leading-none pt-1 tabular-nums shrink-0 min-w-[2.5rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[oklch(0.88_0.01_85)] leading-relaxed text-lg md:text-xl font-light">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Geographies() {
  const regions = [
    {
      t: "Europe",
      tag: "Primary market",
      b: "Cross-border mandates across Western, Southern, and Northern Europe. Relationships span founder-led SMEs, mid-market sponsors, and institutional allocators.",
    },
    {
      t: "MENA",
      tag: "Active coverage",
      b: "Active coverage across Gulf-based family offices, sovereign-adjacent capital pools, and emerging market mandates. Particular focus on cross-border transactions bridging European deal flow with Middle Eastern and North African capital.",
    },
    {
      t: "North America",
      tag: "Selective",
      b: "Select cross-border engagements with institutional allocators, family offices, and acquisition entrepreneurs. Focus on transatlantic mandates where European execution capability and North American capital appetite intersect.",
    },
  ];
  return (
    <section id="geographies" className="py-28 lg:py-36 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Geographies" title="Where we operate." />
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {regions.map((r) => (
            <div key={r.t}>
              <div className="h-px w-12 bg-[var(--bronze)] mb-8" />
              <h3 className="font-serif text-3xl text-[var(--ink)] mb-2">{r.t}</h3>
              <p className="eyebrow mb-6">{r.tag}</p>
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
      className="py-28 lg:py-36 border-b border-[var(--rule)] bg-[oklch(0.97_0.006_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Team" title="Senior-led, by design." />
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              className={`text-center px-4 ${
                i === 3
                  ? "md:col-start-1 md:justify-self-end lg:pr-8"
                  : i === 4
                  ? "md:col-start-3 md:justify-self-start lg:pl-8"
                  : ""
              }`}
            >
              <div className="mx-auto w-40 h-40 bg-[var(--ink)] text-[oklch(0.95_0.008_85)] flex items-center justify-center font-serif text-3xl tracking-wider border border-[var(--bronze)]/40 mb-6 overflow-hidden">
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
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] font-semibold text-[var(--ink)] mb-3 hover:text-[var(--bronze)] transition-colors whitespace-nowrap"
              >
                {m.name}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <p className="text-sm text-[var(--ink-soft)] leading-snug max-w-xs mx-auto mb-2">
                {m.title}
              </p>
              {m.location && (
                <p className="text-sm text-[var(--ink-soft)] leading-snug">
                  Based in <span className="font-semibold text-[var(--ink)]">{m.location}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const items = [
    "Cross-border execution across Europe, MENA, North America, and selected global markets",
    "Senior-led delivery across capital formation, M&A, and buy-side advisory",
    "Selective mandate intake with institutional filtration criteria",
    "Transaction exposure ranging from early institutional rounds to €50M+ mid-market deals with allocators, family offices, strategic acquirers, and specialist GPs",
    "Direct engagement with allocators, family offices, strategic acquirers and specialist GPs",
    "Execution governed through FulfillmentOS, ensuring consistency from mandate to outcome",
  ];
  return (
    <section id="metrics" className="py-28 lg:py-36 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Platform" title="Platform metrics & footprint." />
        <ul className="border-t border-[var(--ink)]">
          {items.map((it, i) => (
            <li
              key={i}
              className="grid md:grid-cols-12 gap-6 py-8 border-b border-[var(--rule)]"
            >
              <div className="md:col-span-1 font-serif text-[var(--bronze)] text-sm tracking-widest pt-1 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="md:col-span-11 text-[var(--ink)] leading-relaxed text-base md:text-lg font-light">
                {it}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-[var(--ink)] text-[oklch(0.95_0.008_85)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4 text-[var(--bronze-soft)]">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Begin a conversation.
          </h2>
          <p className="mt-6 text-lg text-[oklch(0.82_0.01_85)] font-light leading-relaxed">
            All enquiries are treated with strict confidentiality. If you are considering a
            transaction, a capital raise, or a strategic process and want an initial assessment,
            we are available to speak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
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
              <p className="text-lg leading-relaxed">
                Via Carlo Imbonati, 62/2
                <br />
                20159 Milano, Italy
              </p>
            </div>
            <div className="pt-4">
              <a
                href="https://linkedin.com/in/raisingcapitalcontact"
                target="_blank"
                rel="noreferrer"
                className="inline-flex border border-[var(--bronze)] text-[var(--bronze)] px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[var(--bronze)] hover:text-[var(--ink)] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6"
          >
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Name</label>
              <input
                required
                type="text"
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_250)] focus:border-[var(--bronze)] outline-none py-3 text-base"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Email</label>
              <input
                required
                type="email"
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_250)] focus:border-[var(--bronze)] outline-none py-3 text-base"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2 text-[var(--bronze-soft)]">Message</label>
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border-b border-[oklch(0.5_0.02_250)] focus:border-[var(--bronze)] outline-none py-3 text-base resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-3 border border-[var(--bronze)] text-[var(--bronze)] px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-[var(--bronze)] hover:text-[var(--ink)] transition-colors"
            >
              {sent ? "Enquiry submitted" : "Submit enquiry"}
              <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[oklch(0.7_0.01_85)] border-t border-[oklch(0.28_0.025_250)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="max-w-4xl mb-12">
          <p className="eyebrow mb-4 text-[var(--bronze-soft)]">Regulatory Framework</p>
          <p className="text-[oklch(0.82_0.01_85)] leading-relaxed text-sm md:text-base font-light">
            Ravencourt Capital operates as a private markets execution platform focused on capital
            formation, M&amp;A, and buy-side mandates. In jurisdictions where capital placement,
            securities promotion, or investment arrangement activity requires local authorization,
            Ravencourt engages regulated partner firms holding the appropriate FCA, DFSA, FSRA, or
            equivalent regulatory permissions.
          </p>
          <p className="mt-4 text-[oklch(0.82_0.01_85)] leading-relaxed text-sm md:text-base font-light">
            This website is directed exclusively at professional clients and sophisticated
            investors. It does not constitute an offer or solicitation to buy or sell securities
            in any jurisdiction.
          </p>
        </div>
        <div className="border-t border-[oklch(0.28_0.025_250)] pt-8 flex flex-col gap-3 text-xs tracking-wide">
          <p className="uppercase tracking-[0.18em] text-[oklch(0.7_0.01_85)]">
            Ravencourt Capital — Allocator-Aligned Private Markets Platform
          </p>
          <p className="text-[oklch(0.7_0.01_85)]">
            Milan, Italy · Cross-Border Execution
          </p>
          <p className="text-[oklch(0.6_0.015_85)] leading-relaxed">
            Cross-border team presence: Milan · Dubai · Luxembourg · New York ·
            Europe · MENA · North America · Select Global Markets
          </p>
          <p className="text-[oklch(0.6_0.015_85)]">P.IVA 11381320966</p>
          <div className="mt-6 pt-6 border-t border-[oklch(0.22_0.02_250)] flex flex-col gap-2 text-[oklch(0.55_0.015_85)]">
            <p>© {new Date().getFullYear()} Ravencourt Capital. All rights reserved.</p>
            <p>Ravencourt Capital di Rohan Kapoor</p>
            <p>Registered Office: Via Carlo Imbonati, 62/2, 20159 Milano, Italy</p>
            <p>
              <a
                href="mailto:contact@ravencourtcapital.com"
                className="hover:text-[var(--bronze)] transition-colors"
              >
                contact@ravencourtcapital.com
              </a>{" "}
              · For professional and institutional use only. Not for retail distribution.
            </p>
          </div>
        </div>
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
        <About />
        <Geographies />
        <Advisory />
        <Capabilities />
        <FulfillmentOS />
        <Metrics />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
