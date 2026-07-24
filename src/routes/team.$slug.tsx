import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import rohanPhoto from "@/assets/rohan-kapoor-team-photo-july-2026.png";
import { saaniaPhoto } from "@/assets/saania-shaikh-website-photo";
import { mitulPhoto } from "@/assets/mitul-gouni-website-photo";
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
      "At Ravencourt Capital, Rohan leads RAAVEN's strategic direction and remains responsible for selected private-market and commercial engagements where senior judgement, governance and cross-border execution are decisive.",
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
      "Saania Shaikh leads partnership development and operating coordination across Ravencourt Capital’s intelligence, commercial and selected advisory work, with a particular focus on relationship-led engagement across the UAE, Saudi Arabia, Qatar and the wider Middle East.",
      "She translates external conversations into disciplined follow-through, structured stakeholder context and accountable execution across business development, client coordination and cross-border relationship management.",
    ],
    coreRelevance: "Middle East partnerships, business development, stakeholder intelligence, client coordination and cross-border execution.",
  },
  "luciano-mazzola": {
    name: "Dr. Luciano Mazzola",
    role: "Legal & Cross-Border Structuring Advisor",
    location: "Milan, Italy",
    image: "/images/luciano.jpg",
    objectPosition: "50% 5%",
    paragraphs: [
      "Dr. Luciano Mazzola brings legal, tax, corporate, audit and governance expertise to Ravencourt Capital’s decision infrastructure and selected mandate work.",
      "He supports legal-process alignment, cross-border structuring, corporate readiness, documentation controls and governance standards that strengthen evidence quality and execution discipline across complex commercial and investment contexts.",
    ],
    coreRelevance: "legal structuring, tax and audit discipline, corporate governance, evidence quality, cross-border execution and documentation readiness.",
  },
  "isabella-xu": {
    name: "Isabella Xu",
    role: "Private Markets Analyst",
    location: "Hong Kong & United States",
    image: "/images/isabella-xu.jpg",
    objectPosition: "50% 20%",
    paragraphs: [
      "From Hong Kong and studying Applied Mathematics at Columbia University in New York, Isabella Xu spends her time between Hong Kong and the United States. She supports Ravencourt Capital’s private-markets and commercial intelligence work and brings early experience across equity research, finance operations, real-assets investing and business analysis.",
      "At Ravencourt Capital, Isabella contributes to counterparty research, market mapping, opportunity qualification and selected valuation, memo and transaction-readiness work. Her role strengthens Ravencourt’s Hong Kong and Greater China coverage while supporting selected cross-border opportunities across Asian and US private markets.",
    ],
    coreRelevance: "private-markets research, quantitative analysis, market mapping, opportunity qualification, and Hong Kong, Greater China and US coverage.",
  },
  "mitul-gouni": {
    name: "Mitul Gouni",
    role: "Private Markets Analyst",
    location: "New York, United States",
    image: mitulPhoto,
    objectPosition: "50% 18%",
    paragraphs: [
      "Mitul Gouni is an undergraduate at Columbia University in New York whose work spans private-markets research and relationship-led commercial development. He supports Ravencourt Capital’s North American coverage through company and institutional research, target-account qualification, and decision-maker and relationship mapping.",
      "At Ravencourt Capital, Mitul translates market research and operating context into structured, evidence-led business-development activity across selected commercial and private-market opportunities.",
    ],
    coreRelevance: "North American market research, target-account qualification, institutional relationship mapping and commercial development.",
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
