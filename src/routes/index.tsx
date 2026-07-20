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
      { title: "Ravencourt Capital | Allocator-Aligned Private Markets Advisory" },
      {
        name: "description",
        content:
          "Milan-based, allocator-aligned private-markets advisory boutique supporting capital readiness, M&A, secondaries, buy-side diligence, counterparty intelligence and disciplined execution.",
      },
      { property: "og:title", content: "Ravencourt Capital | Allocator-Aligned Private Markets Advisory" },
      {
        property: "og:description",
        content:
          "Senior-led private-markets advisory strengthened by governed operating intelligence and disciplined execution.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
});

const ENGAGEMENT: ProcessStep[] = [
  { number: "01", title: "Initial assessment", body: "We review the opportunity, materials, mandate logic and immediate evidence gaps." },
  { number: "02", title: "NDA & diligence", body: "Where fit is credible, confidential materials are reviewed against institutional expectations." },
  { number: "03", title: "Go / no-go", body: "Ravencourt reaches an explicit decision on whether the mandate is suitable for execution." },
  { number: "04", title: "Mandate activation", body: "Scope, economics, responsibilities, decision gates and reporting discipline are agreed." },
  { number: "05", title: "Execution oversight", body: "The process is managed through evidence, counterparty fit, accountable actions and senior judgement." },
];

const TEAM = [
  { slug: "rohan-kapoor", name: "Rohan Kapoor", role: "Founder & Principal", location: "Milan, Italy", image: rohanPhoto, objectPosition: "50% 25%" },
  { slug: "saania-shaikh", name: "Saania Shaikh", role: "Partnerships & Operations Director", location: "Dubai, UAE", image: "/images/saania.jpg", objectPosition: "50% 26%" },
  { slug: "luciano-mazzola", name: "Dr. Luciano Mazzola", role: "Legal & Cross-Border Structuring Advisor", location: "Milan, Italy", image: "/images/luciano.jpg", objectPosition: "50% 5%" },
  { slug: "isabella-xu", name: "Isabella Xu", role: "Private Markets Analyst", location: "Hong Kong SAR", image: "/images/isabella-xu.jpg", objectPosition: "50% 20%" },
] as const;

const CAPABILITIES = [
  {
    number: "01",
    title: "Strategic advisory",
    body: "Capital readiness, M&A, secondaries, fund positioning, transaction preparation and buy-side diligence for private-market participants.",
    to: "/strategic-advisory" as const,
  },
  {
    number: "02",
    title: "Operating intelligence",
    body: "Governed evidence, lifecycle discipline, allocator and counterparty intelligence, decision gates and mandate monitoring.",
    to: "/operating-intelligence" as const,
  },
  {
    number: "03",
    title: "Commercial intelligence",
    body: "Selective cross-border market entry, account prioritisation, partnership intelligence and disciplined pipeline execution.",
    to: "/commercial-expansion" as const,
  },
] as const;

function HomePage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Milan-based. Allocator-aligned. Cross-border."
        headline="Private-markets advisory built around evidence, fit and execution discipline."
        body="Ravencourt Capital supports founder-led companies, fund managers, allocators, family offices, searchers and strategic counterparties where capital readiness, transaction judgement, diligence and counterparty fit determine outcomes."
        media={
          <EditorialImage
            src="/images/milan-hero.jpg"
            alt="Milan skyline, Ravencourt Capital's home market"
            eyebrow="Ravencourt Capital"
            caption="Senior judgement for consequential private-market decisions."
            className="min-h-[31rem] lg:min-h-[37rem]"
            objectPosition="center"
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <CTA to="/contact" variant="light">Discuss a Confidential Mandate</CTA>
          <ExternalCTA href={CALENDAR_URLS.strategicAdvisory} variant="light">Schedule an Assessment</ExternalCTA>
        </div>
      </PageHero>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
          <SectionHeading eyebrow="Ravencourt positioning" title="Not an introduction service. An execution partner." />
          <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-[var(--ink)]/85">
            <p>Ravencourt replicates the discipline institutional counterparties apply before committing time, capital or credibility.</p>
            <p>We challenge mandate logic, structure evidence, assess allocator and counterparty fit, prepare organisations for diligence and maintain accountability through execution.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Core capabilities"
            title="One advisory model across capital, transactions and operating intelligence."
            body="Each engagement is selectively scoped, senior-led and governed by explicit evidence and decision standards."
          />
          <div className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article key={capability.number} className="bg-background p-8 lg:p-10">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--bronze)]">{capability.number}</p>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-[var(--ink)]">{capability.title}</h3>
                <p className="mt-5 leading-relaxed text-[var(--ink-soft)]">{capability.body}</p>
                <div className="mt-8"><CTA to={capability.to} variant="inline">Explore capability</CTA></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--ink)] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5">RAAVEN operating infrastructure</p>
              <h2 className="font-serif text-4xl leading-tight lg:text-5xl">Governed intelligence behind the advisory process.</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-white/70">
                RAAVEN is Ravencourt’s governed operating and intelligence infrastructure for evidence capture, mandate discipline, decision support and execution oversight. It strengthens advisory work without replacing human judgement or exposing confidential internal systems.
              </p>
              <div className="mt-8"><CTA to="/raaven" variant="light">Explore the RAAVEN framework</CTA></div>
            </div>
          </div>
          <div className="mt-12 border border-white/15 bg-black/20"><EvidenceFlowVisual /></div>
          <div className="mt-4"><ProofStrip /></div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading eyebrow="Ravencourt team" title="Founder-led, with cross-border operating coverage." body="Senior judgement is supported by legal, operational and analytical coverage across Milan, Dubai and Hong Kong." />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {TEAM.map((member) => (
              <Link key={member.slug} to="/team/$slug" params={{ slug: member.slug }} className="group border border-[var(--rule)] bg-background">
                <div className="aspect-[4/5] overflow-hidden bg-[oklch(0.9_0.012_85)]">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover saturate-[.88] transition-transform duration-500 group-hover:scale-[1.02]" style={{ objectPosition: member.objectPosition }} loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[var(--ink)] transition-colors group-hover:text-[var(--bronze)]">{member.name}</h3>
                  <p className="mt-2 text-[var(--ink)]">{member.role}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">{member.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading eyebrow="Engagement discipline" title="A controlled path from first assessment to accountable execution." />
          <ProcessSteps steps={ENGAGEMENT} />
        </div>
      </section>

      <BoundaryCallout>
        Ravencourt is not a database broker, volume placement agent or generic technology consultancy. We work selectively, protect attribution and proceed only where mandate quality, evidence and execution credibility are sufficient.
      </BoundaryCallout>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="eyebrow mb-5">Begin a conversation</p>
          <h2 className="font-serif text-3xl leading-tight text-[var(--ink)] md:text-4xl lg:text-5xl">Start with the mandate, transaction or decision that requires discipline.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTA to="/contact">Discuss a Confidential Mandate</CTA>
            <ExternalCTA href={CALENDAR_URLS.team} variant="secondary">View Ravencourt Calendars</ExternalCTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
