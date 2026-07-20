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
} from "@/components/site";

export const Route = createFileRoute("/operating-intelligence")({
  component: OperatingIntelligencePage,
  head: () => ({
    meta: [
      { title: "Private Markets Operating Intelligence | Ravencourt Capital" },
      {
        name: "description",
        content:
          "Governed operating intelligence for mandate discipline, allocator and counterparty intelligence, diligence, monitoring and decision accountability.",
      },
      { property: "og:url", content: absoluteUrl("/operating-intelligence") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/operating-intelligence") }],
  }),
});

const CAPABILITIES = [
  { number: "01", title: "Mandate & lifecycle discipline", body: "Structured intake, fit assessment, evidence thresholds, next-action control, stalled-case detection and accountable ownership." },
  { number: "02", title: "Allocator & counterparty intelligence", body: "Type, ticket, geography, prior activity, relationship context and decision-process evidence assessed against the mandate." },
  { number: "03", title: "Diligence readiness", body: "Document control, missing-evidence detection, inconsistency review, question management and auditable response coordination." },
  { number: "04", title: "Communications intelligence", body: "Commitments, objections, decisions and follow-ups captured from relevant communications with human review of ambiguity." },
  { number: "05", title: "Mandate monitoring", body: "Material events, milestones, risks, unresolved decisions and execution responsibilities remain visible throughout the engagement." },
  { number: "06", title: "Decision accountability", body: "Consequential changes require explicit authority, documented reasoning and a durable review trail." },
];

const OUTCOMES = [
  "Less time reconciling fragmented evidence",
  "Earlier identification of stalled mandates",
  "More consistent diligence preparation",
  "Clearer ownership and escalation",
  "Stronger evidence provenance",
  "A durable operating discipline",
];

function OperatingIntelligencePage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Operating Intelligence"
        headline="Governed intelligence for decisions that cannot rely on fragmented activity."
        body="Ravencourt structures mandate evidence, allocator and counterparty intelligence, diligence signals and execution responsibilities into a controlled operating model. The objective is not more automation. It is better judgement, clearer ownership and defensible action."
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
          <ExternalCTA href={CALENDAR_URLS.operatingIntelligence} variant="light">Schedule an Intelligence Diagnostic</ExternalCTA>
          <CTA to="/contact" variant="light">Send Confidential Context</CTA>
        </div>
      </PageHero>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Six capabilities"
            title="An operating model built around evidence and authority."
            body="Each capability is configured around the organisation's actual mandate process—not around generic software templates or opaque automation."
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

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className="font-serif text-3xl leading-tight text-[var(--ink)] md:text-4xl">Begin with one material operating problem and a measurable baseline.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ExternalCTA href={CALENDAR_URLS.operatingIntelligence}>Schedule an Intelligence Diagnostic</ExternalCTA>
            <CTA to="/contact" variant="secondary">Send Confidential Context</CTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
