import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { CALENDAR_URLS } from "@/lib/calendars";
import {
  SiteLayout,
  PageHero,
  SectionHeading,
  CTA,
  ExternalCTA,
  CapabilityCard,
  EditorialImage,
  EvidenceFlowVisual,
  BoundaryCallout,
} from "@/components/site";

export const Route = createFileRoute("/operating-intelligence")({
  component: OperatingIntelligencePage,
  head: () => ({
    meta: [
      { title: "Mandate Intelligence Baseline | Ravencourt Capital" },
      {
        name: "description",
        content:
          "A fixed-scope operating-intelligence baseline for private-markets teams managing fragmented mandates, evidence, relationships and decision workflows.",
      },
      { property: "og:url", content: absoluteUrl("/operating-intelligence") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/operating-intelligence") }],
  }),
});

const CAPABILITIES = [
  { number: "01", title: "Mandate control", body: "Current status, ownership, next actions and stalled work are assessed against the mandate's objectives." },
  { number: "02", title: "Counterparty relevance", body: "Material counterparty and relationship context is assessed against the mandate and its decision requirements." },
  { number: "03", title: "Diligence readiness", body: "Evidence gaps, inconsistencies, outstanding questions and response responsibilities are made visible." },
  { number: "04", title: "Commitments & follow-through", body: "Material commitments, objections, decisions and follow-ups are organised for accountable review." },
  { number: "05", title: "Risk & progress visibility", body: "Milestones, risks, unresolved decisions and execution responsibilities remain visible throughout the engagement." },
  { number: "06", title: "Decision accountability", body: "Consequential changes require named ownership, documented reasoning and an appropriate review record." },
];

const BASELINE_OUTPUTS = [
  "Current-state operating map",
  "Mandate, opportunity and evidence reconciliation",
  "Workflow integrity and progress assessment",
  "Prioritised management action queue",
  "Commercial and relationship observations within scope",
  "Implementation and managed-intelligence roadmap",
];

const QUALIFICATION_SIGNALS = [
  "At least three concurrent mandates or recurring commercial processes",
  "Material information spread across multiple operating tools and records",
  "Recurring senior time spent reconciling status, evidence and next actions",
  "An accountable executive sponsor and operating budget for improvement",
];

const OUTCOMES = [
  "Less time reconciling fragmented evidence",
  "Earlier identification of stalled mandates",
  "More consistent diligence preparation",
  "Clearer ownership and escalation",
  "Clearer traceability from evidence to decision",
  "A durable operating discipline",
];

function OperatingIntelligencePage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Operating Intelligence"
        headline="Establish the evidence-supported condition of the mandate workflow before expanding it."
        body="Ravencourt's Mandate Intelligence Baseline is a fixed-scope initial engagement for private-markets teams whose opportunity, relationship and decision evidence is fragmented across systems. The objective is to measure the current operating condition, identify material gaps and produce a governed management action queue."
        media={
          <EditorialImage
            src="/images/corridor.jpg"
            alt="Architectural corridor representing governed operating discipline"
            eyebrow="Institutional operating discipline"
            caption="Evidence, authority and next actions made explicit."
            className="min-h-[31rem]"
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <ExternalCTA href={CALENDAR_URLS.operatingIntelligence} variant="light">Schedule a Baseline Assessment</ExternalCTA>
          <CTA to="/contact" variant="light">Send Confidential Context</CTA>
        </div>
      </PageHero>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Mandate Intelligence Baseline"
            title="A decision-ready baseline delivered through a controlled initial scope."
            body="The Baseline is designed to create measurable value independently of whether a financing or transaction subsequently closes. It is not a free pilot, generic software implementation or investor-introduction service."
          />
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div className="border-t border-[var(--rule)] pt-7">
              <p className="eyebrow mb-4">Initial engagement</p>
              <h3 className="font-serif text-3xl leading-tight text-[var(--ink)]">15 business days. €3,500 design-partner fee.</h3>
              <p className="mt-5 leading-relaxed text-[var(--ink-soft)]">
                One organisation, one primary workflow and a bounded set of priority processes and evidence sources. The engagement has a fixed scope and is not offered as a free pilot. Scope, evidence access, responsibilities and governance are agreed before activation.
              </p>
              <div className="mt-8">
                <ExternalCTA href={CALENDAR_URLS.operatingIntelligence}>Discuss the Baseline</ExternalCTA>
              </div>
            </div>
            <ul className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-2">
              {BASELINE_OUTPUTS.map((output, index) => (
                <li key={output} className="bg-background p-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--bronze)]">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-4 leading-relaxed text-[var(--ink)]">{output}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] bg-[oklch(0.94_0.008_85)] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
          <SectionHeading
            eyebrow="Initial client profile"
            title="Built for organisations with recurring private-markets workflow complexity."
            body="The strongest initial clients are advisory firms, emerging managers, independent sponsors, acquisition platforms and related organisations with an operating budget. The Baseline is not designed for one-off capital introductions or success-fee-only engagements."
          />
          <ul className="space-y-5">
            {QUALIFICATION_SIGNALS.map((signal) => (
              <li key={signal} className="flex gap-4 border-t border-[var(--rule)] pt-5">
                <span className="mt-2 h-px w-6 shrink-0 bg-[var(--gold)]" />
                <span className="leading-relaxed text-[var(--ink)]">{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="What the Baseline examines"
            title="The mandate conditions that most affect decision quality."
            body="The review is tailored to the organisation's actual mandate process, with transparent findings and explicit human accountability."
          />
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <CapabilityCard key={capability.title} number={capability.number} title={capability.title} body={capability.body} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--ink)] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5">Governed operating model</p>
              <h2 className="font-serif text-4xl leading-tight lg:text-5xl">Evidence informs. Human authority decides.</h2>
            </div>
            <p className="text-lg leading-relaxed text-white/70">
              Evidence is captured and structured before it becomes decision support. Consequential changes require named ownership, explicit review and accountable execution oversight.
            </p>
          </div>
          <div className="mt-12 border border-white/15 bg-black/20"><EvidenceFlowVisual /></div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading eyebrow="Outcomes" title="What disciplined operating intelligence should improve." />
          <ul className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((outcome) => (
              <li key={outcome} className="bg-background p-6 leading-relaxed text-[var(--ink)]">{outcome}</li>
            ))}
          </ul>
        </div>
      </section>

      <BoundaryCallout>
        The Mandate Intelligence Baseline is a fixed-scope professional service delivered through Ravencourt's proprietary RAAVEN infrastructure. It does not promise capital raised, transactions completed, investor introductions, investment performance or another contingent outcome.
      </BoundaryCallout>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className="font-serif text-3xl leading-tight text-[var(--ink)] md:text-4xl">Begin with one material operating problem and a measurable baseline.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ExternalCTA href={CALENDAR_URLS.operatingIntelligence}>Schedule a Baseline Assessment</ExternalCTA>
            <CTA to="/contact" variant="secondary">Send Confidential Context</CTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
