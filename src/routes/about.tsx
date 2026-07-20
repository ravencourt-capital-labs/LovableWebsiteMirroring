import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { SiteLayout, PageHero, SectionHeading, BoundaryCallout, CTA } from "@/components/site";
import rohanPhoto from "@/assets/rohan-kapoor-team-photo-july-2026.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Ravencourt Capital | Milan-Based Private Markets Firm" },
      { name: "description", content: "Milan-based, cross-border private-markets firm combining senior judgement, operating infrastructure and disciplined execution." },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
});

const TEAM = [
  { slug: "rohan-kapoor", name: "Rohan Kapoor", role: "Founder & Principal", location: "Milan, Italy", image: rohanPhoto, objectPosition: "50% 25%" },
  { slug: "saania-shaikh", name: "Saania Shaikh", role: "Partnerships & Operations Director", location: "Dubai, UAE", image: "/images/saania.jpg", objectPosition: "50% 26%" },
  { slug: "luciano-mazzola", name: "Dr. Luciano Mazzola", role: "Legal & Cross-Border Structuring Advisor", location: "Milan, Italy", image: "/images/luciano.jpg", objectPosition: "50% 5%" },
  { slug: "isabella-xu", name: "Isabella Xu", role: "Private Markets Analyst", location: "Hong Kong SAR", image: "/images/isabella-xu.jpg", objectPosition: "50% 20%" },
] as const;

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        headline="Milan-based. Cross-border. Mandate-driven."
        body="Ravencourt Capital combines private-markets judgement, operating infrastructure and disciplined execution across Europe, MENA, North America and select global markets."
      />
      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-12">
          <SectionHeading eyebrow="Firm philosophy" title="Access is not the constraint. Discipline is." />
          <div className="space-y-5 leading-relaxed text-[var(--ink)]">
            <p>Private-market outcomes depend on evidence quality, institutional readiness, counterparty fit, governance and the ability to manage a process under uncertainty.</p>
            <p>Ravencourt was built around that operating reality. We work selectively, maintain clear attribution and proceed only where there is a credible basis for execution.</p>
          </div>
        </div>
      </section>
      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Ravencourt team"
            title="Founder-led, with cross-border analytical coverage."
            body="Ravencourt combines senior operating and legal judgement with analytical coverage across Milan, Dubai and Hong Kong."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {TEAM.map((member) => (
              <Link key={member.slug} to="/team/$slug" params={{ slug: member.slug }} className="group border border-[var(--rule)]">
                <div className="aspect-[4/5] overflow-hidden bg-[oklch(0.9_0.012_85)]">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" style={{ objectPosition: member.objectPosition }} />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[var(--ink)]">{member.name}</h3>
                  <p className="mt-2 text-[var(--ink)]">{member.role}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">{member.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <BoundaryCallout eyebrow="Regulatory">
        Ravencourt Capital provides strategic and operating advisory services. Regulated activities, where applicable, are undertaken through appropriately authorised partners. No information on this website constitutes an offer, solicitation or investment recommendation.
      </BoundaryCallout>
      <section className="py-24 text-center lg:py-32">
        <CTA to="/contact">Start a Confidential Mandate Intake</CTA>
      </section>
    </SiteLayout>
  );
}
