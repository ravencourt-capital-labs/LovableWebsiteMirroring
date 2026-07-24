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
  BoundaryCallout,
  ProcessSteps,
  EditorialImage,
  type ProcessStep,
} from "@/components/site";

export const Route = createFileRoute("/commercial-expansion")({
  component: CommercialExpansionPage,
  head: () => ({
    meta: [
      { title: "Cross-Border Commercial Intelligence | Ravencourt Capital" },
      {
        name: "description",
        content:
          "Cross-border commercial expansion built on evidence — quantified market selection, account intelligence, partnership mapping and governed pipeline execution.",
      },
      {
        property: "og:title",
        content: "Cross-Border Commercial Intelligence | Ravencourt Capital",
      },
      {
        property: "og:description",
        content:
          "Cross-border commercial expansion built on evidence — quantified market selection, account intelligence and governed pipeline execution.",
      },
      { property: "og:url", content: absoluteUrl("/commercial-expansion") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/commercial-expansion") }],
  }),
});

const CAPS = [
  {
    number: "01",
    title: "Market Prioritisation",
    body: "Quantified selection of target markets based on demand signals, competitive posture and delivery feasibility. Prevents scattered expansion attempts driven by anecdotal interest.",
  },
  {
    number: "02",
    title: "Account Intelligence",
    body: "Structured profiles of priority accounts, decision-maker context and buying-process signals. Focuses senior time where it can most credibly convert.",
  },
  {
    number: "03",
    title: "Partner & Channel Intelligence",
    body: "Evidence-based evaluation of distributors, integrators and channel partners across the target market. Aligns partnership choice with commercial and delivery reality.",
  },
  {
    number: "04",
    title: "Market-Entry Positioning",
    body: "Positioning, reference-account narrative and proof-point discipline tuned to local buyer expectations. Removes generic messaging that fails in new geographies.",
  },
  {
    number: "05",
    title: "Governed Pipeline Execution",
    body: "Structured pipeline management with evidence thresholds, owner accountability and stalled-case detection. Keeps expansion pipelines honest and reviewable.",
  },
  {
    number: "06",
    title: "Expansion Intelligence System",
    body: "A durable operating layer that reconciles market, account and pipeline evidence into a single decision surface. Provides ongoing intelligence rather than one-off reports.",
  },
];

const PATH: ProcessStep[] = [
  {
    number: "01",
    title: "Expansion Diagnostic",
    body: "Structured review of expansion readiness, evidence gaps and internal capacity.",
  },
  {
    number: "02",
    title: "Priority-Market Engagement",
    body: "Focused work on one market and a named account set, with evidence-backed prioritisation.",
  },
  {
    number: "03",
    title: "Market Activation",
    body: "Apply commercial intelligence, positioning and pipeline discipline across selected markets.",
  },
  {
    number: "04",
    title: "Managed Intelligence",
    body: "Ongoing market, account and pipeline intelligence with defined ownership and review cadence.",
  },
  {
    number: "05",
    title: "Selective BD Support",
    body: "Selective senior business-development support where institutional or commercial fit is clear.",
  },
];

function CommercialExpansionPage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Cross-Border Commercial Intelligence"
        headline="Commercial expansion built on evidence—not volume outreach."
        body="Ravencourt helps established private companies evaluate and execute cross-border growth through quantified market selection, account intelligence, partnership mapping and governed pipeline execution."
        media={
          <EditorialImage
            src="/images/delta.jpg"
            alt="Cross-border commercial network representing market expansion"
            eyebrow="Europe and select global markets"
            caption="Market selection, account intelligence and execution discipline in one operating model."
            className="min-h-[31rem]"
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <ExternalCTA href={CALENDAR_URLS.commercialExpansion} variant="light">
            Evaluate a Market-Entry Mandate
          </ExternalCTA>
          <CTA to="/contact" variant="light">Confidential Mandate Intake</CTA>
        </div>
      </PageHero>

      <section className="border-b border-[var(--rule)] bg-[oklch(0.94_0.008_85)] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="eyebrow mb-4">Suitable clients</p>
          <p className="font-serif text-xl leading-relaxed text-[var(--ink)] md:text-2xl">
            This service is for mature or scaling businesses with existing customers, referenceable delivery, an accountable senior sponsor, a defined expansion budget and internal capacity to execute.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Capabilities"
            title="Six areas of disciplined expansion work."
            body="The objective is not to create a longer prospect list. It is to make market, account and partnership decisions more selective, better evidenced and easier to govern."
          />
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {CAPS.map((capability) => (
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

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-12">
          <EditorialImage
            src="/images/corridor.jpg"
            alt="Institutional corridor representing market-entry sequencing"
            eyebrow="Market-entry control"
            caption="A disciplined route from market thesis to named account action."
            className="min-h-[30rem]"
          />
          <div>
            <SectionHeading eyebrow="Engagement path" title="From diagnostic to selective execution support." />
            <ProcessSteps steps={PATH} />
          </div>
        </div>
      </section>

      <BoundaryCallout>
        Ravencourt is not a volume lead-generation agency. We do not sell contact lists, guarantee customers or substitute for the client’s sales and delivery team. We build the market intelligence, account priorities and operating discipline required for senior teams to expand more effectively.
      </BoundaryCallout>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className="font-serif text-3xl leading-tight text-[var(--ink)] md:text-4xl">
            Test the market-entry thesis before committing senior time and capital.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ExternalCTA href={CALENDAR_URLS.commercialExpansion}>
              Evaluate a Market-Entry Mandate
            </ExternalCTA>
            <CTA to="/contact" variant="secondary">Send confidential context</CTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
