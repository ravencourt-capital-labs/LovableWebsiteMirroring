import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import {
  SiteLayout,
  PageHero,
  SectionHeading,
  CTA,
  BoundaryCallout,
  EditorialImage,
  EvidenceFlowVisual,
  ProofStrip,
} from "@/components/site";

export const Route = createFileRoute("/raaven")({
  component: RaavenPage,
  head: () => ({
    meta: [
      { title: "RAAVEN Intelligence & Decision Infrastructure | Ravencourt Capital" },
      {
        name: "description",
        content:
          "RAAVEN structures fragmented information, evidence and operating context into governed workflows, accountable decisions and institutional memory.",
      },
      { property: "og:url", content: absoluteUrl("/raaven") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/raaven") }],
  }),
});

const TRAJECTORY = [
  {
    horizon: "Present",
    title: "RAAVEN as a Service",
    body: "Ravencourt configures and operates RAAVEN within selected client environments, beginning with the Mandate Intelligence Baseline and extending into implementation and managed intelligence.",
  },
  {
    horizon: "Emerging",
    title: "RAAVEN as a Product",
    body: "A configurable intelligence and decision platform being developed for direct client deployment, governed access and continuous operating use.",
  },
  {
    horizon: "Long term",
    title: "Institutional Decision Infrastructure",
    body: "Reusable infrastructure for evidence, policy, authority, institutional memory and accountable execution across complex commercial and investment workflows.",
  },
] as const;

const DURABLE_POINTS = [
  {
    title: "Software is one layer",
    body: "The product combines governed infrastructure, implementation responsibility and operating knowledge rather than treating software alone as the answer.",
  },
  {
    title: "Human judgement remains central",
    body: "Evidence and decision support improve the quality of review; consequential decisions remain subject to named human authority.",
  },
  {
    title: "Fragmentation becomes context",
    body: "Relevant information, evidence and operating history are structured into a coherent environment for accountable decisions.",
  },
  {
    title: "A defined starting point",
    body: "Clients begin through a bounded service engagement while the configurable product layer continues to mature.",
  },
] as const;

const PRINCIPLES = [
  "Evidence before assertion",
  "Human authority for consequential decisions",
  "Accountable ownership",
  "Security and governance by design",
];

function RaavenPage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="RAAVEN intelligence infrastructure"
        headline="Intelligence infrastructure for complex commercial and investment decisions."
        body="RAAVEN is Ravencourt Capital's proprietary intelligence and decision infrastructure, designed to structure fragmented information, evidence and operating context into governed workflows, accountable decisions and institutional memory."
        media={
          <EditorialImage
            src="/images/corridor.jpg"
            alt="Institutional corridor representing governed operating discipline"
            eyebrow="Ravencourt intelligence infrastructure"
            caption="A governed environment for clearer decisions and accountable execution."
            className="min-h-[31rem]"
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <CTA to="/operating-intelligence" variant="light">Explore the Mandate Intelligence Baseline</CTA>
          <CTA to="/contact" variant="light">Discuss a governed use case</CTA>
        </div>
      </PageHero>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="One institutional model"
            title="Three horizons, developed through one shared intelligence core."
            body="RAAVEN as a Service and RAAVEN as a Product develop together. Service work reveals recurring operating patterns; the reusable and non-confidential learning strengthens the platform without transferring client-confidential information."
          />
          <div className="grid gap-px border border-[var(--rule)] bg-[var(--rule)] lg:grid-cols-3">
            {TRAJECTORY.map((item, index) => (
              <article key={item.title} className="bg-background p-8 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--bronze)]">
                    {item.horizon}
                  </p>
                  <span className="font-serif text-2xl text-[var(--gold)]/75">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-7 font-serif text-3xl leading-tight text-[var(--ink)]">
                  {item.title}
                </h2>
                <p className="mt-5 leading-relaxed text-[var(--ink-soft)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[var(--ink)] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5">Public operating model</p>
              <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
                From fragmented information to accountable decisions.
              </h2>
            </div>
            <p className="max-w-3xl leading-relaxed text-white/68">
              The public model is intentionally high-level: information is organised, intelligence is formed, decision support is produced and execution remains accountable. Human judgement remains central throughout.
            </p>
          </div>
          <div className="mt-12 border border-white/15 bg-black/20">
            <EvidenceFlowVisual />
          </div>
          <div className="mt-5">
            <ProofStrip />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Durable operating position"
            title="Infrastructure, implementation and judgement work as one system."
            body="RAAVEN is designed around operating outcomes, evidence and responsibility—not a temporary feature list."
          />
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {DURABLE_POINTS.map((point, index) => (
              <article key={point.title} className="relative border-t border-[var(--rule)] pt-8">
                <span className="absolute left-0 top-0 h-px w-12 bg-[var(--gold)]" />
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--bronze)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-[var(--ink)]">
                  {point.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] bg-[oklch(0.94_0.008_85)] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
          <SectionHeading eyebrow="Operating principles" title="Governance before automation." />
          <ul className="grid gap-x-12 gap-y-5 md:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <li key={principle} className="flex gap-4 border-t border-[var(--rule)] pt-5">
                <span className="mt-2 h-px w-6 shrink-0 bg-[var(--gold)]" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BoundaryCallout>
        Direct client deployment remains under controlled development and is available only through selected design-partner engagements. RAAVEN access and use are structured around each organisation's operating context, governance requirements and named human authority.
      </BoundaryCallout>
    </SiteLayout>
  );
}
