import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/ravencourt-logo.png";
import lucianoImg from "@/assets/luciano.jpg.asset.json";
import joeyImg from "@/assets/joey.jpg.asset.json";
import saaniaImg from "@/assets/saania.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: RavencourtPage,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "buyside", label: "Buy-side & Sell-side" },
  { id: "capabilities", label: "Capabilities" },
  { id: "allocators", label: "Allocators" },
  { id: "fulfillmentos", label: "FulfillmentOS" },
  { id: "geographies", label: "Geographies" },
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
    linkedin: "",
  },
  {
    initials: "JZ",
    name: "Joey Zhu",
    title: "FulfillmentOS & Data Pipeline Analyst",
    location: "New York",
    linkedin: "",
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
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <line x1="0" y1="200" x2="1200" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="1200" y2="600" stroke="currentColor" strokeWidth="0.5" />
          <line x1="300" y1="0" x2="300" y2="800" stroke="currentColor" strokeWidth="0.5" />
          <line x1="900" y1="0" x2="900" y2="800" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block opacity-25">
        <div className="w-[460px] h-[460px] border border-[var(--bronze)] rotate-45" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 w-full pt-28 pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <img src={logo} alt="" className="h-12 w-12 object-contain" />
            <p className="eyebrow text-[var(--bronze-soft)] !mb-0">Ravencourt Capital · Milan</p>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight">
            Private Markets Execution. Capital Raising, M&amp;A, and Strategic Transactions.
          </h1>
          <p className="mt-10 text-lg md:text-xl text-[oklch(0.82_0.01_85)] font-light max-w-3xl leading-relaxed">
            Ravencourt Capital is a Milan-based private markets boutique. We work with founders,
            fund managers, and investors across capital raises, M&amp;A processes, and buy-side
            mandates in Europe, MENA, and North America.
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
        <div className="max-w-4xl space-y-6">
          <p className="text-[var(--ink-soft)] leading-relaxed text-base md:text-lg">
            Ravencourt Capital is a Milan-based private markets boutique operating across Europe,
            MENA, North America, and select global markets through a cross-border team in Milan,
            Dubai, Luxembourg, and New York.
          </p>
          <p className="text-[var(--ink-soft)] leading-relaxed text-base md:text-lg">
            We execute across capital formation, M&amp;A, and buy-side mandates with a focus on
            entry discipline, transaction structure, and execution feasibility.
          </p>
          <p className="text-[var(--ink-soft)] leading-relaxed text-base md:text-lg">
            All engagements run through a senior-led process built around mandate alignment,
            institutional readiness, and outcome attribution.
          </p>
        </div>
      </div>
    </section>
  );
}

function Advisory() {
  const buy = [
    "We help funds and investors identify opportunities that match their mandate before they become widely marketed",
    "We qualify targets against stated investment criteria including geography, sector, ticket size, and timeline",
    "We support due diligence preparation and counterparty assessment at early stages of a process",
    "We facilitate structured introductions where mandate fit has already been established",
  ];
  const sell = [
    "We advise founders and managers on how to position a business or fund for a capital raise or strategic transaction",
    "We support the preparation of materials, financial narratives, and investor-facing documentation",
    "We identify and approach investors whose mandate, ticket size, and timeline are genuinely aligned with the situation",
    "We manage the process through to term sheet and beyond, staying involved rather than stepping back after introductions",
  ];
  return (
    <section
      id="buyside"
      className="py-28 lg:py-36 border-b border-[var(--rule)] bg-[oklch(0.97_0.006_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Buy-side & Sell-side Execution"
          title="Two sides of the same conversation."
        />
        <div className="grid md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          <div className="bg-background p-10 lg:p-14">
            <p className="eyebrow mb-6">Buy-side allocators</p>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-6">
              For funds and investors
            </h3>
            <p className="text-[var(--ink-soft)] leading-relaxed mb-8">
              We help funds and investors source the right deals before they become competitive.
              Every opportunity is qualified upfront against mandate constraints — strategy,
              geography, ticket size, and execution timeline — so that introductions are relevant
              before they are made.
            </p>
            <ul className="space-y-3">
              {buy.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-[var(--ink-soft)] leading-relaxed">
                  <span className="text-[var(--bronze)] mt-[0.45rem] h-px w-3 bg-[var(--bronze)] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-10 lg:p-14">
            <p className="eyebrow mb-6">Sell-side managers, funds, and founders</p>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--ink)] mb-6">
              For founders, managers, and GPs
            </h3>
            <p className="text-[var(--ink-soft)] leading-relaxed mb-8">
              We advise founders and fund managers on positioning, process, and counterparty fit
              — ensuring that mandate, ticket size, and timeline are genuinely aligned before any
              conversation happens. We stay involved through execution rather than stepping back
              after introductions.
            </p>
            <ul className="space-y-3">
              {sell.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-[var(--ink-soft)] leading-relaxed">
                  <span className="text-[var(--bronze)] mt-[0.45rem] h-px w-3 bg-[var(--bronze)] shrink-0" />
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
    <section id="capabilities" className="py-28 lg:py-36 border-b border-[var(--rule)]">
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

function AllocatorCoverage() {
  const groups = [
    {
      label: "Investor Type",
      items: [
        "Family Offices",
        "Sovereign Wealth Funds",
        "Pension Funds",
        "Endowments",
        "Fund of Funds",
        "Private Banks",
        "Corporate Investors",
      ],
    },
    {
      label: "Ticket Size",
      items: ["€500K – €5M", "€5M – €25M", "€25M+"],
    },
    {
      label: "Geography",
      items: ["Western Europe", "MENA", "North America", "Asia-Pacific (selective)"],
    },
    {
      label: "Asset Class",
      items: [
        "Private Equity",
        "Private Credit",
        "Real Assets",
        "Venture & Growth",
        "Infrastructure",
      ],
    },
    {
      label: "Decision Process",
      items: ["Direct LP", "Consultant-Advised", "Committee-Driven"],
    },
    {
      label: "Relationship Status",
      items: ["Active Coverage", "Warm Introduction", "Strategic Development"],
    },
  ];
  return (
    <section id="allocators" className="py-28 lg:py-36 border-b border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader eyebrow="Allocator Coverage" title="Mapped, not just contacted." />
        <div className="max-w-4xl mb-16">
          <p className="text-[var(--ink-soft)] leading-relaxed text-base md:text-lg">
            Ravencourt Capital maintains active relationships with a curated universe of
            institutional allocators across our operating geographies. Coverage is mapped across
            investor type, ticket size, asset-class mandate, and decision process — enabling
            precise targeting for every mandate we execute.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {groups.map((g) => (
            <div key={g.label} className="bg-background p-8 lg:p-10">
              <p className="eyebrow mb-5">{g.label}</p>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex gap-3 text-sm text-[var(--ink-soft)] leading-relaxed"
                  >
                    <span className="text-[var(--bronze)] mt-[0.55rem] h-px w-3 bg-[var(--bronze)] shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
                i === 3 ? "md:col-start-1 lg:col-start-1" : ""
              } ${i === 3 ? "md:col-start-1" : ""}`}
              style={
                i === 3
                  ? { gridColumnStart: 1 }
                  : i === 4
                  ? { gridColumnStart: 3 }
                  : undefined
              }
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
              <h3 className="text-sm uppercase tracking-[0.18em] font-semibold text-[var(--ink)] mb-3">
                {m.name}
              </h3>
              <p className="text-sm text-[var(--ink-soft)] leading-snug max-w-xs mx-auto mb-2">
                {m.title}
              </p>
              {m.location && (
                <p className="text-sm text-[var(--ink-soft)] leading-snug">
                  Based in <span className="font-semibold text-[var(--ink)]">{m.location}</span>
                </p>
              )}
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[var(--bronze)] hover:text-[var(--ink)] transition-colors"
                >
                  LinkedIn →
                </a>
              )}
            </div>
          ))}
        </div>
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
            Start a confidential conversation.
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
              <p className="text-lg">Milan, Italy</p>
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
            Ravencourt Capital — Allocator-Aligned Private Markets Execution
          </p>
          <p className="text-[oklch(0.6_0.015_85)]">
            Ravencourt Capital © 2025 · P.IVA 11381320966 · Milan, Italy ·{" "}
            <a
              href="mailto:contact@ravencourtcapital.com"
              className="hover:text-[var(--bronze)] transition-colors"
            >
              contact@ravencourtcapital.com
            </a>
          </p>
          <p className="text-[oklch(0.55_0.015_85)]">
            For professional and institutional use only. Not for retail distribution. Ravencourt
            Capital S.à r.l. | Luxembourg
          </p>
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
        <Advisory />
        <Capabilities />
        <AllocatorCoverage />
        <FulfillmentOS />
        <Geographies />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
