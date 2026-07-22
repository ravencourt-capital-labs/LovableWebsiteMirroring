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
      { title: "RAAVEN Intelligence Infrastructure | Ravencourt Capital" },
      {
        name: "description",
        content:
          "RAAVEN is Ravencourt Capital's proprietary intelligence and decision infrastructure for complex commercial and investment environments.",
      },
      { property: "og:url", content: absoluteUrl("/raaven") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/raaven") }],
  }),
});

const PRINCIPLES = [
  "Evidence before assertion",
  "Human authority for consequential decisions",
  "Accountable ownership",
  "Security and governance by design",
];

const APPLICATIONS = [
  {
    title: "Structured intelligence",
    body: "Bring relevant information and operating context into a coherent, governed environment.",
  },
  {
    title: "Decision infrastructure",
    body: "Support more disciplined prioritisation, review and human decision-making across complex workflows.",
  },
  {
    title: "Institutional continuity",
    body: "Preserve accountability, operating context and organisational knowledge across changing teams and workflows.",
  },
];

function RaavenPage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="RAAVEN framework"
        headline="Proprietary intelligence infrastructure for complex commercial and investment decisions."
        body="RAAVEN is Ravencourt's proprietary intelligence and decision infrastructure. It brings fragmented information, operating context and decision workflows into a governed environment designed to improve clarity, accountability and execution. Human authority remains central throughout."
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
        <CTA to="/contact" variant="light">Discuss a governed use case</CTA>
      </PageHero>

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
              The public model is intentionally high-level: information is organised, intelligence is formed, decision support is produced and execution remains accountable. Internal architecture, data structures, credentials, controls and confidential workflows are not exposed.
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
            eyebrow="Public applications"
            title="What RAAVEN enables."
            body="RAAVEN supports more structured, evidence-led and accountable operating processes without publishing the proprietary methods through which those outcomes are produced."
          />
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-3">
            {APPLICATIONS.map((application, index) => (
              <article key={application.title} className="relative border-t border-[var(--rule)] pt-8">
                <span className="absolute left-0 top-0 h-px w-12 bg-[var(--gold)]" />
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--bronze)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-[var(--ink)]">
                  {application.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">{application.body}</p>
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
        RAAVEN is proprietary Ravencourt infrastructure. Access, deployment and use are selectively structured around the requirements, governance standards and operating context of each engagement.
      </BoundaryCallout>
    </SiteLayout>
  );
}
