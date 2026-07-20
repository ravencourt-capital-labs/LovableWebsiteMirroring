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
      { title: "RAAVEN Framework | Ravencourt Capital" },
      {
        name: "description",
        content:
          "RAAVEN is Ravencourt Capital's governed operating and intelligence infrastructure for evidence capture, mandate discipline, decision support and execution oversight.",
      },
      { property: "og:url", content: absoluteUrl("/raaven") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/raaven") }],
  }),
});

const PRINCIPLES = [
  "Accuracy before speed",
  "Source provenance retained",
  "Ambiguous evidence escalated",
  "No autonomous investment or transaction authority",
  "Human approval for consequential decisions",
  "Least-privilege integration by default",
  "Rollback, audit trail and recovery protection",
];

const APPLICATIONS = [
  {
    title: "Evidence provenance",
    body: "Material conclusions remain connected to identifiable source evidence and an attributable review history.",
  },
  {
    title: "Lifecycle discipline",
    body: "Mandate status changes are tied to explicit evidence thresholds, decision rights and accountable ownership.",
  },
  {
    title: "Allocator & counterparty intelligence",
    body: "Fit, prior activity, relationship context and decision process are assessed against the mandate rather than treated as generic contact data.",
  },
  {
    title: "Decision gates",
    body: "Consequential actions require named authority; ambiguous or incomplete evidence is routed for review rather than silently accepted.",
  },
  {
    title: "Mandate monitoring",
    body: "Material events, unresolved decisions, next actions and execution risks remain visible throughout the engagement lifecycle.",
  },
  {
    title: "Execution accountability",
    body: "Ownership and follow-through are recorded so that the advisory process does not depend on fragmented individual memory.",
  },
];

function RaavenPage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="RAAVEN framework"
        headline="Governed operating infrastructure for private-market advisory work."
        body="RAAVEN is Ravencourt's governed operating and intelligence infrastructure for evidence capture, mandate discipline, decision support and execution oversight. It strengthens—not replaces—senior judgement, accountable ownership and human governance."
        media={
          <EditorialImage
            src="/images/corridor.jpg"
            alt="Institutional corridor representing governed operating discipline"
            eyebrow="Ravencourt operating infrastructure"
            caption="A controlled framework for evidence, decisions and execution oversight."
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
              <p className="eyebrow mb-5">Operating model</p>
              <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
                From evidence inputs to accountable execution.
              </h2>
            </div>
            <p className="max-w-3xl leading-relaxed text-white/68">
              The public model is intentionally simple: evidence is captured, governed intelligence is formed, decision support is produced and mandate execution remains subject to oversight. Internal architecture, credentials, data structures and confidential workflows are not exposed.
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
            eyebrow="Advisory applications"
            title="How RAAVEN strengthens Ravencourt's work."
            body="RAAVEN is applied as governed infrastructure within Ravencourt engagements, with senior interpretation and explicit human authority retained throughout."
          />
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
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
        RAAVEN is not offered as standalone or off-the-shelf software. Client engagements use Ravencourt's governed architecture, methods and controls without exposing internal data, credentials, confidential workflows or proprietary operating history.
      </BoundaryCallout>
    </SiteLayout>
  );
}
