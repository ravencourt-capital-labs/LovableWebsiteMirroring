import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/ravencourt-logo.png";

export const Route = createFileRoute("/")({
  component: RavencourtPage,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "advisory", label: "Advisory" },
  { id: "capabilities", label: "Capabilities" },
  { id: "fulfillmentos", label: "FulfillmentOS" },
  { id: "geographies", label: "Geographies" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const TEAM = [
  {
    initials: "RK",
    name: "Rohan Kapoor",
    title: "Founder and Principal",
    linkedin: "https://linkedin.com/in/raisingcapitalcontact",
  },
  {
    initials: "S",
    name: "Sania",
    title: "Partner, Institutional Coverage",
    linkedin: "https://linkedin.com/in/sanian",
  },
  {
    initials: "LM",
    name: "Dr. Luciano Mazzola",
    title: "Senior Advisor, Legal and Cross-Border Structuring",
    linkedin: "https://lcopartners.eu/en/professionals/luciano-mazzola-en",
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
            Private Markets Advisory. Capital Raising, M&amp;A, and Strategic Transactions.
          </h1>
          <p className="mt-10 text-lg md:text-xl text-[oklch(0.82_0.01_85)] font-light max-w-3xl leading-relaxed">
            Ravencourt Capital is a Milan-based boutique advisory firm. We advise founders, fund
            managers, and investors across capital raises, M&amp;A processes, and buy-side
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
        <SectionHeader eyebrow="About" title="A senior-led advisory firm built for private markets." />
        <div className="max-w-4xl">
          <p className="text-[var(--ink-soft)] leading-relaxed text-base md:text-lg">
            We work on the side of founders and investors who need more than an introduction. Our
            engagements are structured around mandate clarity, execution discipline, and
            counterparty fit. We do not take on mandates we cannot execute. All work is senior-led
            from first conversation to close.
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
      id="advisory"
      className="py-28 lg:py-36 border-b border-[var(--rule)] bg-[oklch(0.97_0.006_85)]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Buy-side and sell-side advisory"
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
      d: "Sell-side advisory across capital raises, secondary transactions, and strategic placements.",
      b: "Capital raising is executed through allocator-aligned positioning, where narrative, valuation, and structure are engineered to withstand institutional diligence. Positioning is stress-tested against the entry logic and return expectations of the target investor universe.",
    },
    {
      t: "M&A and strategic transactions",
      d: "Advisory across founder-led and mid-market transactions from €2M to €50M.",
      b: "We advise on transactions involving private equity, strategic acquirers, family offices, and search funds across Europe, MENA, and North America. Engagements are structured around valuation realism, buyer intent verification, and executable deal pathways.",
    },
    {
      t: "Buy-side diligence and opportunity screening",
      d: "Investment opportunities filtered and stress-tested through institutional-grade analysis.",
      b: "Work is delivered as an extension of the investment team, with emphasis on downside protection and return visibility. Our approach replicates the scrutiny of an internal investment committee, not a third-party opinion.",
    },
    {
      t: "Search fund and direct deal advisory",
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
              <span className="font-serif text-[var(--bronze)] text-sm tracking-widest pt-1">
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
      b: "Cross-border mandates across Western and Southern Europe with particular depth in Italy, France, Germany, Luxembourg, Greece, and the United Kingdom. Relationships span founder-led SMEs, mid-market sponsors, and institutional allocators.",
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
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {TEAM.map((m) => (
            <div key={m.name} className="text-center px-4">
              <div className="mx-auto w-32 h-32 rounded-full bg-[var(--ink)] text-[oklch(0.95_0.008_85)] flex items-center justify-center font-serif text-2xl tracking-wider border border-[var(--bronze)]/40 mb-6">
                {m.initials}
              </div>
              <h3 className="font-serif text-xl text-[var(--ink)] mb-1">{m.name}</h3>
              <p className="text-sm text-[var(--ink-soft)] leading-snug max-w-xs mx-auto">
                {m.title}
              </p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[var(--bronze)] hover:text-[var(--ink)] transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[var(--ink-soft)] italic mt-16 tracking-wide">
          All engagements are senior-led. No junior handoffs.
        </p>
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
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs tracking-wide">
        <p>
          Ravencourt Capital © 2025 · P.IVA 11381320966 · Milan, Italy ·{" "}
          <a
            href="mailto:contact@ravencourtcapital.com"
            className="hover:text-[var(--bronze)] transition-colors"
          >
            contact@ravencourtcapital.com
          </a>
        </p>
        <p className="text-[oklch(0.55_0.015_85)]">Private Markets Advisory</p>
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
        <FulfillmentOS />
        <Geographies />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
