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
  InstitutionalMotionField,
  EvidenceFlowVisual,
  ProofStrip,
  type ProcessStep,
} from "@/components/site";
import rohanPhoto from "@/assets/rohan-kapoor-team-photo-july-2026.png";
import { saaniaPhoto } from "@/assets/saania-shaikh-website-photo";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Ravencourt Capital | Data Intelligence & Decision Infrastructure" },
      {
        name: "description",
        content:
          "Milan-based data intelligence and technology infrastructure firm shaped by direct private-markets execution and focused on complex commercial and investment decisions.",
      },
      {
        property: "og:title",
        content: "Ravencourt Capital | Data Intelligence & Decision Infrastructure",
      },
      {
        property: "og:description",
        content:
          "Proprietary intelligence infrastructure for complex commercial and investment decisions, informed by allocator-grade private-markets execution.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
});

const ENGAGEMENT: ProcessStep[] = [
  {
    number: "01",
    title: "Initial assessment",
    body: "We define the decision, operating problem or transaction context and identify the material information gaps.",
  },
  {
    number: "02",
    title: "Governed discovery",
    body: "Relevant information, workflows and decision requirements are assessed within an appropriate confidentiality framework.",
  },
  {
    number: "03",
    title: "Fit decision",
    body: "Ravencourt reaches an explicit decision on whether the use case or engagement is suitable for further work.",
  },
  {
    number: "04",
    title: "Scope activation",
    body: "Objectives, responsibilities, governance, economics and decision authority are agreed before execution begins.",
  },
  {
    number: "05",
    title: "Accountable execution",
    body: "The work proceeds through structured information, visible ownership, human judgement and disciplined follow-through.",
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
    image: saaniaPhoto,
    objectPosition: "50% 22%",
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
    location: "Hong Kong & United States",
    image: "/images/isabella-xu.jpg",
    objectPosition: "50% 20%",
  },
] as const;

const CAPABILITIES = [
  {
    number: "01",
    title: "Intelligence infrastructure",
    body: "Proprietary environments that bring fragmented information, operating context and decision workflows into a more coherent and accountable system.",
    to: "/operating-intelligence" as const,
  },
  {
    number: "02",
    title: "Commercial intelligence",
    body: "Structured market, account, counterparty and partnership intelligence for selective cross-border commercial expansion.",
    to: "/commercial-expansion" as const,
  },
  {
    number: "03",
    title: "Selective strategic advisory",
    body: "Senior-led capital readiness, M&A, secondaries, transaction preparation and buy-side diligence where judgement and execution discipline remain decisive.",
    to: "/strategic-advisory" as const,
  },
] as const;

const REGIONS = ["North America", "Europe", "Middle East", "East Asia"] as const;

function HomePage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Milan-based. Intelligence-led. Cross-border."
        headline="Intelligence infrastructure for complex commercial and investment decisions."
        body="Ravencourt Capital develops proprietary data intelligence and decision infrastructure shaped by direct private-markets execution. Selected advisory engagements remain part of the operating model where senior judgement, diligence and transaction discipline are required."
        media={
          <EditorialImage
            src="/images/milan-hero.jpg"
            alt="Milan skyline, Ravencourt Capital's home market"
            eyebrow="Ravencourt Capital"
            caption="Structured intelligence for consequential decisions."
            className="min-h-[31rem] lg:min-h-[37rem]"
            objectPosition="center"
            motion
            overlay={<InstitutionalMotionField />}
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <CTA to="/contact" variant="light">Discuss a Use Case</CTA>
          <ExternalCTA href={CALENDAR_URLS.operatingIntelligence} variant="light">
            Schedule a Baseline Assessment
          </ExternalCTA>
        </div>
      </PageHero>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
          <SectionHeading
            eyebrow="Ravencourt positioning"
            title="Private-markets experience, applied through decision infrastructure."
          />
          <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-[var(--ink)]/85">
            <p>
              Ravencourt originated through allocator-grade private-markets advisory and direct work across capital formation, transactions, diligence and counterparty engagement.
            </p>
            <p>
              That experience revealed a recurring operating problem: consequential decisions are still managed through fragmented information, disconnected workflows and limited institutional memory. Ravencourt applies its operating knowledge through proprietary intelligence and decision infrastructure designed to improve clarity, accountability and execution.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-12">
          <p className="eyebrow mb-4">Operating coverage</p>
          <div className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((region) => (
              <div
                key={region}
                className="bg-background px-6 py-5 text-sm uppercase tracking-[0.16em] text-[var(--ink)]"
              >
                {region}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Core capabilities"
            title="One operating model across intelligence, decisions and execution."
            body="Each use case is selectively scoped, senior-led and governed by explicit evidence, accountability and human decision authority."
          />
          <div className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article key={capability.number} className="bg-background p-8 lg:p-10">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--bronze)]">
                  {capability.number}
                </p>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-[var(--ink)]">
                  {capability.title}
                </h3>
                <p className="mt-5 leading-relaxed text-[var(--ink-soft)]">{capability.body}</p>
                <div className="mt-8">
                  <CTA to={capability.to} variant="inline">Explore capability</CTA>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--ink)] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5">RAAVEN intelligence infrastructure</p>
              <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
                Proprietary infrastructure behind more disciplined decisions.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-white/70">
                RAAVEN brings complex information, operating context and decision workflows into a governed environment designed to improve clarity, accountability and execution while keeping consequential decisions under explicit human authority.
              </p>
              <div className="mt-8">
                <CTA to="/raaven" variant="light">Explore the RAAVEN framework</CTA>
              </div>
            </div>
          </div>
          <div className="mt-12 border border-white/15 bg-black/20">
            <EvidenceFlowVisual />
          </div>
          <div className="mt-4">
            <ProofStrip />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Ravencourt team"
            title="Founder-led, with cross-border operating coverage."
            body="Work spans North America, Europe, the Middle East and East Asia, supported by legal, operational and analytical coverage."
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
                    className="h-full w-full object-cover saturate-[.88] transition-transform duration-500 group-hover:scale-[1.02]"
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
            eyebrow="Engagement discipline"
            title="A controlled path from initial assessment to accountable execution."
          />
          <ProcessSteps steps={ENGAGEMENT} />
        </div>
      </section>

      <BoundaryCallout>
        Ravencourt accepts selected engagements where the decision context is material, relevant evidence is available and accountable senior ownership exists. Scope, responsibilities and governance are agreed before work begins.
      </BoundaryCallout>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="eyebrow mb-5">Begin a conversation</p>
          <h2 className="font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
            Start with the decision, workflow or transaction that requires better infrastructure.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTA to="/contact">Discuss a Use Case</CTA>
            <ExternalCTA href={CALENDAR_URLS.team} variant="secondary">
              View Ravencourt Calendars
            </ExternalCTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
