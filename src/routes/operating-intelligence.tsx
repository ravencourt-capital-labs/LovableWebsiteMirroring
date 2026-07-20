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
          "Governed operating intelligence for private markets: mandate intake, allocator and counterparty intelligence, diligence, portfolio monitoring, and decision accountability.",
      },
      {
        property: "og:title",
        content: "Private Markets Operating Intelligence | Ravencourt Capital",
      },
      {
        property: "og:description",
        content:
          "Governed operating intelligence for mandate intake, allocator intelligence, diligence, portfolio monitoring and decision accountability.",
      },
      { property: "og:url", content: absoluteUrl("/operating-intelligence") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/operating-intelligence") }],
  }),
});

const CAPABILITIES = [
  {
    number: "01",
    title: "Mandate & Pipeline Intelligence",
    body: "Structured opportunity intake, fit scoring, lifecycle governance, next-action prioritisation, stalled-case detection and ownership accountability.",
  },
  {
    number: "02",
    title: "Allocator & Counterparty Intelligence",
    body: "Type, ticket and geography fit, verified prior activity, relationship context, decision-process mapping and evidence-backed prioritisation.",
  },
  {
    number: "03",
    title: "Diligence Command Centre",
    body: "Document tracking, missing-evidence detection, diligence-question classification, response coordination, inconsistency flags and approval trails.",
  },
  {
    number: "04",
    title: "Meeting & Communications Intelligence",
    body: "Email and transcript normalisation, commitment and objection capture, follow-up extraction and human review of ambiguous conclusions.",
  },
  {
    number: "05",
    title: "Portfolio & Governance Intelligence",
    body: "Material-event monitoring, board and IC action tracking, operating milestones, risk escalation and source health.",
  },
  {
    number: "06",
    title: "Transaction & Lifecycle Control",
    body: "Stage transitions, evidence thresholds, decision queues and auditable operating history.",
  },
];

const OUTCOMES = [
  "Less reconciliation time",
  "Faster stalled-opportunity detection",
  "Consistent diligence preparation",
  "Clearer ownership",
  "Improved auditability",
  "Durable operating capability",
];

function OperatingIntelligencePage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Operating Intelligence"
        headline="The operating layer behind better private-market decisions."
        body="Ravencourt designs and deploys governed intelligence systems that convert fragmented communications, documents, pipelines and meeting evidence into structured priorities, auditable decisions and accountable next actions."
        media={
          <EditorialImage
            src="/images/corridor.jpg"
            alt="Architectural corridor representing governed operating pathways"
            eyebrow="Evidence architecture"
            caption="Sources, evidence, review and authority made explicit."
            className="min-h-[31rem]"
            overlay={<EvidenceFlowVisual compact />}
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <ExternalCTA href={CALENDAR_URLS.operatingIntelligence} variant="light">
            Schedule an Intelligence Diagnostic
          </ExternalCTA>
          <CTA to="/contact" variant="light">Confidential Mandate Intake</CTA>
        </div>
      </PageHero>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Six capabilities"
            title="An integrated operating stack."
            body="Each capability is configured around the organisation's actual evidence, authority and decision process—not around generic automation templates."
          />
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <CapabilityCard
                key={capability.title}
                number={capability.number}
                title={capability.title}
                body={capability.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--ink)] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-12">
          <div>
            <p className="eyebrow mb-5">Governance architecture</p>
            <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
              Automation proposes. Human authority decides.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-white/70">
              Every proposed change carries source provenance, confidence, timestamp and decision ownership. Consequential decisions require a named human owner; ambiguous evidence is escalated for review.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-px bg-white/15">
              {[
                "Source provenance",
                "Confidence signal",
                "Timestamp",
                "Decision ownership",
              ].map((item) => (
                <div key={item} className="bg-[var(--ink)] p-5 text-sm text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[28rem] border border-white/15 bg-black/20">
            <EvidenceFlowVisual />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading eyebrow="Outcomes" title="What clients retain after deployment." />
          <ul className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((outcome) => (
              <li key={outcome} className="bg-background p-6 leading-relaxed text-[var(--ink)]">
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className="font-serif text-3xl leading-tight text-[var(--ink)] md:text-4xl">
            Begin with one material operating problem and a measurable baseline.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ExternalCTA href={CALENDAR_URLS.operatingIntelligence}>
              Schedule an Intelligence Diagnostic
            </ExternalCTA>
            <CTA to="/contact" variant="secondary">Send confidential context</CTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
