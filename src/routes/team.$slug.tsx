import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import rohanPhoto from "@/assets/rohan-kapoor-team-photo-july-2026.png";
import { saaniaPhoto } from "@/assets/saania-shaikh-website-photo";
import { SiteLayout } from "@/components/site";
import { absoluteUrl } from "@/lib/site";

type Profile = {
  name: string;
  role: string;
  location: string;
  image: string;
  objectPosition?: string;
  paragraphs: string[];
  coreRelevance: string;
};

const PROFILES: Record<string, Profile> = {
  "rohan-kapoor": {
    name: "Rohan Kapoor",
    role: "Founder & Principal",
    location: "Milan, Italy",
    image: rohanPhoto,
    objectPosition: "50% 25%",
    paragraphs: [
      "Rohan Kapoor brings an operator-led perspective to data intelligence, decision infrastructure and private-market execution, shaped by more than 16 years across engineering, semiconductor operations, manufacturing, commercial leadership, strategic partnerships and capital formation.",
      "At Ravencourt Capital, Rohan leads the firm’s transition from advisory-led execution toward proprietary intelligence and decision infrastructure, while retaining senior responsibility for selected private-market and strategic engagements.",
    ],
    coreRelevance: "data intelligence, decision infrastructure, private-market execution, institutional operating discipline and cross-border strategy.",
  },
  "saania-shaikh": {
    name: "Saania Shaikh",
    role: "Partnerships & Operations Director",
    location: "Dubai, UAE",
    image: saaniaPhoto,
    objectPosition: "50% 22%",
    paragraphs: [
      "Saania Shaikh supports Ravencourt Capital’s partnerships, business development and operating infrastructure, with a particular focus on relationship-led engagement across the Middle East.",
      "Her role covers partnership development, meeting coordination, follow-up discipline, fulfilment operations and internal workflow alignment.",
    ],
    coreRelevance: "Middle East partnerships, stakeholder coordination, fulfilment operations and relationship management.",
  },
  "luciano-mazzola": {
    name: "Dr. Luciano Mazzola",
    role: "Legal & Cross-Border Structuring Advisor",
    location: "Milan, Italy",
    image: "/images/luciano.jpg",
    objectPosition: "50% 5%",
    paragraphs: [
      "Dr. Luciano Mazzola brings legal, tax, corporate, audit and governance expertise to Ravencourt Capital’s mandate review and structuring process.",
      "At Ravencourt Capital, Luciano supports legal-process alignment, cross-border structuring, corporate readiness, mandate documentation and transaction-related governance considerations.",
    ],
    coreRelevance: "legal structuring, tax and audit discipline, corporate governance, cross-border execution and documentation readiness.",
  },
  "isabella-xu": {
    name: "Isabella Xu",
    role: "Private Markets Analyst",
    location: "Hong Kong SAR",
    image: "/images/isabella-xu.jpg",
    objectPosition: "50% 20%",
    paragraphs: [
      "Originally from and based in Hong Kong SAR, Isabella Xu supports Ravencourt Capital’s private-markets research, origination and analytical execution. She is studying Applied Mathematics at Columbia University and brings early experience across equity research, finance operations, real-assets investing and business analysis.",
      "At Ravencourt Capital, Isabella contributes to counterparty research, market mapping, opportunity qualification, CRM and Airtable discipline, and selected valuation, memo and transaction-readiness work. Her role strengthens Ravencourt’s Hong Kong and Greater China coverage and supports selected cross-border opportunities across Asian and global private markets.",
    ],
    coreRelevance: "private-markets research, quantitative analysis, market mapping, opportunity qualification, and Hong Kong and Greater China coverage.",
  },
};

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const profile = PROFILES[params.slug];
    if (!profile) throw notFound();
    return { profile };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.profile.name} — Ravencourt Capital` },
          { name: "description", content: `${loaderData.profile.name}, ${loaderData.profile.role} at Ravencourt Capital.` },
          { property: "og:url", content: absoluteUrl(`/team/${params.slug}`) },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: absoluteUrl(`/team/${params.slug}`) }] : [],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { profile } = Route.useLoaderData();
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-12 lg:pt-32">
        <Link to="/about" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)] hover:text-[var(--bronze)]">
          <ArrowLeft size={14} /> Team
        </Link>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-[2fr_3fr] lg:gap-20 lg:px-12 lg:py-20">
        <div className="aspect-[4/5] overflow-hidden border border-[var(--rule)] bg-[oklch(0.9_0.012_85)]">
          <img src={profile.image} alt={profile.name} className="h-full w-full object-cover" style={{ objectPosition: profile.objectPosition ?? "50% 25%" }} />
        </div>
        <div className="lg:pt-4">
          <p className="eyebrow mb-4">Ravencourt team</p>
          <h1 className="font-serif text-4xl leading-tight text-[var(--ink)] lg:text-5xl">{profile.name}</h1>
          <p className="mt-4 font-medium text-[var(--ink)]">{profile.role}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">{profile.location}</p>
          <div className="mt-10 space-y-6 text-[1.0625rem] leading-relaxed text-[var(--ink)]/90">
            {profile.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-10 border-t border-[var(--rule)] pt-8">
            <p className="leading-relaxed"><span className="eyebrow mr-2">Core relevance:</span>{profile.coreRelevance}</p>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
