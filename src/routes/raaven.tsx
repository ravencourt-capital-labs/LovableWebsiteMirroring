import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { SiteLayout, PageHero, SectionHeading, CTA, BoundaryCallout, EvidenceFlowVisual, ProofStrip } from "@/components/site";

export const Route = createFileRoute("/raaven")({
  component: RaavenPage,
  head: () => ({
    meta: [
      { title: "RAAVEN | Ravencourt Capital Operating Intelligence" },
      { name: "description", content: "Ravencourt Capital's governed internal operating-intelligence architecture." },
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

function RaavenPage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="RAAVEN"
        headline="A governed intelligence architecture built for private-market work."
        body="RAAVEN is Ravencourt Capital's internal operating-intelligence architecture. It connects source evidence, lifecycle governance, private-market intelligence and human decision authority within one controlled operating model."
        media={<div className="h-[31rem] border border-white/15 bg-black/20"><EvidenceFlowVisual /></div>}
      >
        <CTA to="/contact" variant="light">Discuss a governed use case</CTA>
      </PageHero>
      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading eyebrow="Operating principles" title="How RAAVEN is disciplined." />
          <ul className="grid gap-x-12 gap-y-5 md:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <li key={principle} className="flex gap-4 border-t border-[var(--rule)] pt-5">
                <span className="mt-2 h-px w-6 shrink-0 bg-[var(--gold)]" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12"><ProofStrip /></div>
        </div>
      </section>
      <BoundaryCallout>
        RAAVEN is not offered as off-the-shelf software. Client engagements use Ravencourt's architecture, methods and governance principles without exposing internal data, confidential workflows or proprietary operating history.
      </BoundaryCallout>
    </SiteLayout>
  );
}
