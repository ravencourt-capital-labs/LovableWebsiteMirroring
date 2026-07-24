import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { CALENDAR_URLS } from "@/lib/calendars";
import {
  SiteLayout,
  PageHero,
  SectionHeading,
  CTA,
  ExternalCTA,
  BoundaryCallout,
  EditorialImage,
} from "@/components/site";

export const Route = createFileRoute("/strategic-advisory")({
  component: StrategicAdvisoryPage,
  head: () => ({
    meta: [
      { title: "Private Markets Strategic Advisory | Ravencourt Capital" },
      {
        name: "description",
        content:
          "Senior private-markets advisory for founder-led companies, fund managers and principal investors where positioning, evidence and counterparty fit determine credibility.",
      },
      {
        property: "og:title",
        content: "Private Markets Strategic Advisory | Ravencourt Capital",
      },
      {
        property: "og:description",
        content:
          "Senior judgement for private-markets decisions that cannot be automated: positioning, evidence, counterparty fit and process discipline.",
      },
      { property: "og:url", content: absoluteUrl("/strategic-advisory") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/strategic-advisory") }],
  }),
});

const GROUPS = [
  {
    title: "Founder-led companies and management teams",
    items: [
      "Strategic capital and transaction readiness",
      "Institutional positioning",
      "Valuation and evidence alignment",
      "Data-room and diligence preparation",
      "Counterparty-fit mapping",
      "Management preparation",
    ],
  },
  {
    title: "Fund managers and emerging GPs",
    items: [
      "Fund positioning",
      "Track-record presentation",
      "LP-readiness",
      "Allocator-fit intelligence",
      "Governance",
      "Meeting preparation",
    ],
  },
  {
    title: "Principal investors and specialist investment teams",
    items: [
      "Opportunity screening",
      "Commercial and operating diligence",
      "Management questions",
      "Risk review",
      "Transaction mapping",
      "Decision-memo support",
    ],
  },
];

const PROCESS = [
  "Initial assessment",
  "Confidential review",
  "Engagement decision",
  "Defined scope and responsibilities",
];

function StrategicAdvisoryPage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Strategic Advisory"
        headline="Judgement for decisions that cannot be automated."
        body="Ravencourt advises private companies, fund managers and principal investors where positioning, evidence, counterparty fit and process discipline determine whether a mandate is credible."
        media={
          <EditorialImage
            src="/images/boardroom.jpg"
            alt="Institutional boardroom representing senior private-markets advisory"
            eyebrow="Senior-led execution"
            caption="Preparation, challenge and judgement before consequential market engagement."
            className="min-h-[31rem]"
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <ExternalCTA href={CALENDAR_URLS.strategicAdvisory} variant="light">
            Schedule a Private-Markets Assessment
          </ExternalCTA>
          <CTA to="/contact" variant="light">Confidential Mandate Intake</CTA>
        </div>
      </PageHero>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading eyebrow="Who we advise" title="Selectively, and with clear scope." />
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-3">
            {GROUPS.map((group) => (
              <div key={group.title} className="relative border-t border-[var(--rule)] pt-10">
                <span className="absolute left-0 top-0 h-px w-12 bg-[var(--gold)]" />
                <h3 className="font-serif text-2xl leading-snug text-[var(--ink)]">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2 text-[var(--ink-soft)]">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-[var(--bronze)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] bg-[oklch(0.94_0.008_85)] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-12">
          <EditorialImage
            src="/images/corridor.jpg"
            alt="Institutional corridor representing a controlled advisory process"
            eyebrow="Mandate discipline"
            caption="A defined path from first evidence to engagement scope."
            className="min-h-[28rem]"
          />
          <div>
            <SectionHeading eyebrow="Engagement process" title="From first materials to defined scope." />
            <ol className="grid gap-px bg-[var(--rule)] sm:grid-cols-2">
              {PROCESS.map((step, index) => (
                <li key={step} className="bg-background p-6">
                  <p className="font-serif text-3xl text-[var(--gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-[var(--ink)]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <BoundaryCallout>
        Ravencourt proceeds only where the opportunity is sufficiently prepared, economically credible and suitable for disciplined execution.
      </BoundaryCallout>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className="font-serif text-3xl leading-tight text-[var(--ink)] md:text-4xl">
            Where senior judgement is decisive, begin with an assessment.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ExternalCTA href={CALENDAR_URLS.strategicAdvisory}>
              Schedule an assessment
            </ExternalCTA>
            <CTA to="/contact" variant="secondary">Send confidential context</CTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
