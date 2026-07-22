import { createFileRoute, Link } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";
import { SiteLayout, PageHero, SectionHeading, BoundaryCallout, CTA } from "@/components/site";
import rohanPhoto from "@/assets/rohan-kapoor-team-photo-july-2026.png";
import { saaniaPhoto } from "@/assets/saania-shaikh-website-photo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Ravencourt Capital | Data Intelligence & Decision Infrastructure" },
      {
        name: "description",
        content:
          "Milan-based data intelligence and technology infrastructure firm shaped by private-markets execution and focused on complex commercial and investment decisions.",
      },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
});

const TEAM = [
  { slug: "rohan-kapoor", name: "Rohan Kapoor", role: "Founder & Principal", location: "Milan, Italy", image: rohanPhoto, objectPosition: "50% 25%" },
  { slug: "saania-shaikh", name: "Saania Shaikh", role: "Partnerships & Operations Director", location: "Dubai, UAE", image: saaniaPhoto, objectPosition: "50% 22%" },
  { slug: "luciano-mazzola", name: "Dr. Luciano Mazzola", role: "Legal & Cross-Border Structuring Advisor", location: "Milan, Italy", image: "/images/luciano.jpg", objectPosition: "50% 5%" },
  { slug: "isabella-xu", name: "Isabella Xu", role: "Private Markets Analyst", location: "Hong Kong & United States", image: "/images/isabella-xu.jpg", objectPosition: "50% 20%" },
] as const;

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Ravencourt"
        headline="Milan-based. Intelligence-led. Built from execution."
        body="Ravencourt Capital is a data intelligence and technology infrastructure firm shaped by direct private-markets execution. We build proprietary decision infrastructure for complex commercial and investment environments while undertaking selected advisory engagements where senior judgement and execution discipline remain essential."
      />
      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
          <SectionHeading eyebrow="Firm evolution" title="From operating experience to intelligence infrastructure." />
          <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-[var(--ink)]/85">
            <p>
              Ravencourt originated through allocator-grade private-markets advisory and direct work across capital formation, transactions, diligence and counterparty engagement.
            </p>
            <p>
              That experience exposed a recurring structural problem: consequential decisions are still managed through fragmented information, disconnected workflows and limited institutional memory.
            </p>
            <p>
              Ravencourt is converting that operating experience into proprietary intelligence and decision infrastructure designed to improve clarity, accountability and execution. Selected advisory engagements remain part of the model and provide live operating context without defining the firm’s future solely as an advisory boutique.
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Ravencourt team"
            title="Founder-led, with cross-border operating coverage."
            body="Work spans North America, Europe, the Middle East and East Asia, supported by senior operating, legal, analytical and relationship coverage."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {TEAM.map((member) => (
              <Link key={member.slug} to="/team/$slug" params={{ slug: member.slug }} className="group border border-[var(--rule)] bg-background">
                <div className="aspect-[4/5] overflow-hidden bg-[oklch(0.9_0.012_85)]">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover saturate-[.88] transition-transform duration-500 group-hover:scale-[1.02]" style={{ objectPosition: member.objectPosition }} />
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
      <BoundaryCallout eyebrow="Regulatory">
        Ravencourt Capital develops proprietary intelligence infrastructure and provides selected strategic and operating advisory services. Regulated activities, where applicable, are undertaken through appropriately authorised partners. No information on this website constitutes an offer, solicitation or investment recommendation.
      </BoundaryCallout>
      <section className="py-24 text-center lg:py-32">
        <CTA to="/contact">Discuss a Use Case</CTA>
      </section>
    </SiteLayout>
  );
}
