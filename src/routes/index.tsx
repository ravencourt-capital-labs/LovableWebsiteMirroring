import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { CALENDAR_URLS } from "@/lib/calendars";
import {
  SiteLayout,
  PageHero,
  SectionHeading,
  CTA,
  ExternalCTA,
  ProcessSteps,
  BoundaryCallout,
  EditorialImage,
  EvidenceFlowVisual,
  ProofStrip,
  type ProcessStep,
} from "@/components/site";
import rohanPhoto from "@/assets/rohan-kapoor-team-photo-july-2026.png";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title:
          "Ravencourt Capital | Private Markets Operating Intelligence & Strategic Advisory",
      },
      {
        name: "description",
        content:
          "Milan-based, cross-border private-markets firm building governed operating intelligence for capital formation, M&A, diligence, portfolio oversight and selected commercial expansion mandates.",
      },
      {
        property: "og:title",
        content:
          "Ravencourt Capital | Private Markets Operating Intelligence & Strategic Advisory",
      },
      {
        property: "og:description",
        content:
          "Governed operating intelligence and senior private-markets advisory across capital, transactions, diligence and commercial expansion.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
});

const ENGAGEMENT: ProcessStep[] = [
  {
    number: "01",
    title: "Intelligence Diagnostic",
    body: "A structured review of evidence sources, operating bottlenecks and decision responsibilities, resulting in a prioritised implementation roadmap.",
  },
  {
    number: "02",
    title: "Governed Pilot",
    body: "One material workflow is configured against a measurable baseline, with explicit evidence and human-approval requirements.",
  },
  {
    number: "03",
    title: "Deployment",
    body: "The operating layer is expanded across agreed workflows, permissions, dashboards, documentation and internal training.",
  },
  {
    number: "04",
    title: "Managed Intelligence",
    body: "Ongoing source monitoring, quality control, recalibration and operating reporting under defined governance.",
  },
  {
    number: "05",
    title: "Strategic Advisory",
    body: "Senior judgement is applied where capital, transaction, diligence or commercial decisions require interpretation and execution support.",
  },
];

const TEAM = [
  {
    slug: "rohan-kapoor",
    name: "Rohan Kapoor",
    role: "Founder & Principal",
    location: "Milan, Italy",
    image: rohanPhoto,
    objectPosition: "50% 25%",
  },
  {
    slug: "saania-shaikh",
    name: "Saania Shaikh",
    role: "Partnerships & Operations Director",
    location: "Dubai, UAE",
    image: "/images/saania.jpg",
    objectPosition: "50% 26%",
  },
  {
    slug: "luciano-mazzola",
    name: "Dr. Luciano Mazzola",
    role: "Legal & Cross-Border Structuring Advisor",
    location: "Milan, Italy",
    image: "/images/luciano.jpg",
    objectPosition: "50% 5%",
  },
  {
    slug: "isabella-xu",
    name: "Isabella Xu",
    role: "Private Markets Analyst",
    location: "Hong Kong SAR",
    image: "/images/isabella-xu.jpg",
    objectPosition: "50% 20%",
  },
] as const;

function HomePage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Milan-based. Cross-border. Senior-led."
        headline="Operating Intelligence for Private Markets"
        body="Ravencourt builds governed operating infrastructure for capital formation, strategic transactions, diligence, portfolio oversight and cross-border commercial expansion—and provides senior advisory through the decisions it produces."
        media={
          <EditorialImage
            src="/images/milan-hero.jpg"
            alt="Milan skyline, Ravencourt Capital's home market"
            eyebrow="Ravencourt Capital"
            caption="Private-market judgement supported by governed operating infrastructure."
            className="min-h-[32rem] lg:min-h-[36rem]"
            overlay={
              <div className="absolute inset-x-4 top-4 h-44 border border-white/15 bg-black/45 backdrop-blur-sm lg:inset-x-6 lg:top-6 lg:h-52">
                <EvidenceFlowVisual compact />
              </div>
            }
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <ExternalCTA href={CALENDAR_URLS.operatingIntelligence} variant="light">
            Assess Your Operating Infrastructure
          </ExternalCTA>
          <CTA to="/contact" variant="light">
            Confidential Mandate Intake
          </CTA>
        </div>
      </PageHero>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="The operating problem"
            title="Private markets still run on fragmented evidence."
            body="Critical decisions are often distributed across email, spreadsheets, CRM records, meeting notes, data rooms and individual judgement. Ravencourt creates a governed operating layer that reconciles those sources, structures evidence and converts activity into accountable decisions."
          />
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Three connected capabilities"
            title="One firm. Three institutional applications."
            body="Each capability is delivered through a defined operating model, measurable scope and senior accountability."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="border border-[var(--rule)] bg-background">
              <EditorialImage
                src="/images/corridor.jpg"
                alt="Architectural corridor representing governed operating pathways"
                eyebrow="01 / Operating Intelligence"
                caption="From fragmented activity to governed decisions."
                className="min-h-[24rem]"
                overlay={<EvidenceFlowVisual compact />}
              />
              <div className="p-7">
                <p className="leading-relaxed text-[var(--ink-soft)]">
                  Governed systems for opportunity intake, allocator and counterparty intelligence, diligence, portfolio monitoring and decision accountability.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <CTA to="/operating-intelligence" variant="inline">Explore</CTA>
                  <ExternalCTA href={CALENDAR_URLS.operatingIntelligence} variant="inline">
                    Schedule a diagnostic
                  </ExternalCTA>
                </div>
              </div>
            </article>

            <article className="border border-[var(--rule)] bg-background">
              <EditorialImage
                src="/images/boardroom.jpg"
                alt="Institutional boardroom representing senior strategic advisory"
                eyebrow="02 / Strategic Advisory"
                caption="Judgement for decisions that cannot be automated."
                className="min-h-[24rem]"
              />
              <div className="p-7">
                <p className="leading-relaxed text-[var(--ink-soft)]">
                  Senior private-markets judgement across institutional readiness, capital strategy, M&A, allocator alignment, transaction preparation and buy-side diligence.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <CTA to="/strategic-advisory" variant="inline">Explore</CTA>
                  <ExternalCTA href={CALENDAR_URLS.strategicAdvisory} variant="inline">
                    Schedule an assessment
                  </ExternalCTA>
                </div>
              </div>
            </article>

            <article className="border border-[var(--rule)] bg-background">
              <EditorialImage
                src="/images/delta.jpg"
                alt="Cross-border commercial network representing market expansion"
                eyebrow="03 / Commercial Intelligence"
                caption="Cross-border expansion built on evidence."
                className="min-h-[24rem]"
              />
              <div className="p-7">
                <p className="leading-relaxed text-[var(--ink-soft)]">
                  Quantified market-entry, account and partnership intelligence for established private companies pursuing disciplined expansion.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <CTA to="/commercial-expansion" variant="inline">Explore</CTA>
                  <ExternalCTA href={CALENDAR_URLS.commercialExpansion} variant="inline">
                    Evaluate market entry
                  </ExternalCTA>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--ink)] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:px-12">
          <div>
            <p className="eyebrow mb-5">RAAVEN proof point</p>
            <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
              Developed through live private-market operations.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-white/70">
              RAAVEN is Ravencourt Capital’s governed internal operating-intelligence architecture. It has been developed across mandate intake, evidence reconciliation, allocator intelligence, diligence, lifecycle governance, portfolio monitoring and decision control.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
              Client work uses the architecture and methodology without exposing Ravencourt’s internal data, confidential workflows or proprietary operating history.
            </p>
            <div className="mt-9">
              <CTA to="/raaven" variant="light">Explore the RAAVEN architecture</CTA>
            </div>
          </div>
          <div>
            <div className="h-[24rem] border border-white/15 bg-black/25">
              <EvidenceFlowVisual />
            </div>
            <div className="mt-4">
              <ProofStrip />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Ravencourt team"
            title="Founder-led. Cross-border coverage."
            body="Every mandate remains founder-led, supported by operating, legal and analytical coverage across Milan, Dubai and Hong Kong."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {TEAM.map((member) => (
              <Link
                key={member.slug}
                to="/team/$slug"
                params={{ slug: member.slug }}
                className="group border border-[var(--rule)] bg-background"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[oklch(0.9_0.012_85)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: member.objectPosition }}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[var(--ink)] transition-colors group-hover:text-[var(--bronze)]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[var(--ink)]">{member.role}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                    {member.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Engagement model"
            title="A controlled path from diagnosis to deployment."
          />
          <ProcessSteps steps={ENGAGEMENT} />
        </div>
      </section>

      <BoundaryCallout>
        Ravencourt is not an introducer, database broker or generic AI consultancy. We do not sell access to contacts, promise capital or operate as a volume lead-generation agency. We build the governed operating capability through which private-market organisations assess opportunities, manage evidence and act with greater discipline.
      </BoundaryCallout>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <p className="eyebrow mb-5">Begin a conversation</p>
          <h2 className="font-serif text-3xl leading-tight text-[var(--ink)] md:text-4xl lg:text-5xl">
            Start with the mandate, operating problem or expansion decision.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ExternalCTA href={CALENDAR_URLS.team}>View Ravencourt calendars</ExternalCTA>
            <CTA to="/contact" variant="secondary">Confidential Mandate Intake</CTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
