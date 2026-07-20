import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { absoluteUrl } from "@/lib/site";
import { CALENDAR_URLS } from "@/lib/calendars";
import { SiteLayout, PageHero, SectionHeading, ExternalCTA } from "@/components/site";
import { submitEnquiry } from "@/lib/enquiry.functions";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Ravencourt Capital | Confidential Mandate Intake" },
      {
        name: "description",
        content:
          "Begin with a clear operating or strategic question. Ravencourt reviews enquiries selectively and requests further information only where there is a credible basis to proceed.",
      },
      {
        property: "og:title",
        content: "Contact Ravencourt Capital | Confidential Mandate Intake",
      },
      {
        property: "og:description",
        content:
          "Confidential mandate intake for operating intelligence, strategic advisory and commercial expansion.",
      },
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
});

const PATHWAYS = [
  {
    title: "Operating Intelligence",
    body: "Governed systems for mandate intake, diligence, portfolio oversight and decision accountability.",
    href: CALENDAR_URLS.operatingIntelligence,
    cta: "Schedule a diagnostic",
  },
  {
    title: "Strategic Advisory",
    body: "Senior judgement across positioning, capital strategy, M&A and buy-side diligence.",
    href: CALENDAR_URLS.strategicAdvisory,
    cta: "Schedule an assessment",
  },
  {
    title: "Commercial Expansion",
    body: "Cross-border market entry, account intelligence and governed pipeline execution.",
    href: CALENDAR_URLS.commercialExpansion,
    cta: "Evaluate market entry",
  },
] as const;

const PREVIEW_MODE = import.meta.env.VITE_ENQUIRY_MODE !== "production";
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";

type TurnstileApi = {
  render: (container: HTMLElement, options: { sitekey: string; action?: string; theme?: "light" | "dark" }) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

function TurnstileWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !containerRef.current) return;
    let widgetId = "";
    let cancelled = false;

    const render = () => {
      if (cancelled || !containerRef.current || !window.turnstile || widgetId) return;
      widgetId = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        action: "website_enquiry",
        theme: "light",
      });
    };

    const existing = document.querySelector<HTMLScriptElement>("script[data-rc-turnstile]");
    if (window.turnstile) {
      render();
    } else if (existing) {
      existing.addEventListener("load", render, { once: true });
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.dataset.rcTurnstile = "true";
      script.addEventListener("load", render, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, []);

  if (!TURNSTILE_SITE_KEY) return null;
  return <div ref={containerRef} className="min-h-[65px]" />;
}

const COUNTERPARTY_TYPES = [
  "Founder-led company",
  "Fund manager / GP",
  "Family office / principal investor",
  "Independent sponsor / search fund",
  "Private-credit / venture-debt team",
  "Established company (commercial expansion)",
  "Other",
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      counterpartyType: String(formData.get("counterpartyType") || ""),
      name: String(formData.get("name") || ""),
      title: String(formData.get("title") || ""),
      companyWebsite: String(formData.get("companyWebsite") || ""),
      region: String(formData.get("region") || ""),
      profileUrl: String(formData.get("profileUrl") || ""),
      pathway: String(formData.get("pathway") || ""),
      context: String(formData.get("context") || ""),
      honeypot: String(formData.get("websiteFax") || ""),
      turnstileToken: String(formData.get("cf-turnstile-response") || ""),
    };

    try {
      await submitEnquiry({ data: payload });
      setStatus("success");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Submission failed.");
    }
  }

  const inputClass =
    "mt-2 block w-full border border-[var(--rule)] bg-background px-3 py-2 text-[var(--ink)] focus:border-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--ink)]";
  const labelClass =
    "block text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]";

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        headline="Begin with a clear operating or strategic question."
        body="Share enough context for an initial fit assessment. Ravencourt reviews enquiries selectively and requests further information only where there is a credible basis to proceed."
      />

      <section className="border-b border-[var(--rule)] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Schedule directly"
            title="Choose the most relevant discussion."
            body="The initial call is used to assess fit, clarify the operating problem or mandate, and determine whether further materials are warranted."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {PATHWAYS.map((pathway, index) => (
              <article key={pathway.title} className="border border-[var(--rule)] bg-background p-7">
                <p className="font-serif text-3xl text-[var(--gold)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-2xl text-[var(--ink)]">
                  {pathway.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">
                  {pathway.body}
                </p>
                <div className="mt-7">
                  <ExternalCTA href={pathway.href} variant="inline">
                    {pathway.cta}
                  </ExternalCTA>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--rule)] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <SectionHeading eyebrow="Confidential Mandate Intake" title="Send written context." />

          {PREVIEW_MODE && (
            <p className="mb-8 inline-block border border-[var(--rule)] bg-[oklch(0.94_0.008_85)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              Staging preview — no data is transmitted
            </p>
          )}

          {status === "success" ? (
            <div className="border border-[var(--rule)] bg-background p-8">
              <p className="font-serif text-xl text-[var(--ink)]">
                Thank you. Your enquiry has been received for an initial fit assessment.
              </p>
              <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">
                Ravencourt will revert directly where there is a credible basis to proceed. Submission does not create an advisory relationship or confirm mandate acceptance.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="websiteFax">Leave this field empty</label>
                <input id="websiteFax" name="websiteFax" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="email">
                    Work Email <span className="text-[var(--gold)]">*</span>
                  </label>
                  <input required type="email" id="email" name="email" maxLength={255} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="company">
                    Company <span className="text-[var(--gold)]">*</span>
                  </label>
                  <input required type="text" id="company" name="company" maxLength={200} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="counterpartyType">
                    Counterparty Type <span className="text-[var(--gold)]">*</span>
                  </label>
                  <select required id="counterpartyType" name="counterpartyType" className={inputClass} defaultValue="">
                    <option value="" disabled>Select…</option>
                    {COUNTERPARTY_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" maxLength={100} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="title">Title</label>
                  <input type="text" id="title" name="title" maxLength={150} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="companyWebsite">Company Website</label>
                  <input type="url" id="companyWebsite" name="companyWebsite" maxLength={255} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="region">Region</label>
                  <input type="text" id="region" name="region" maxLength={100} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="profileUrl">Professional Profile URL</label>
                  <input type="url" id="profileUrl" name="profileUrl" maxLength={500} className={inputClass} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="pathway">Enquiry Pathway</label>
                  <select id="pathway" name="pathway" className={inputClass} defaultValue="">
                    <option value="">—</option>
                    <option value="Operating Intelligence">Operating Intelligence</option>
                    <option value="Strategic Advisory">Strategic Advisory</option>
                    <option value="Commercial Expansion">Commercial Expansion</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass} htmlFor="context">Brief Context</label>
                  <textarea
                    id="context"
                    name="context"
                    rows={6}
                    maxLength={2000}
                    className={inputClass}
                    placeholder="Up to 2000 characters."
                  />
                </div>
              </div>

              <TurnstileWidget />

              {status === "error" && (
                <p role="alert" className="text-sm text-[oklch(0.5_0.18_25)]">
                  {error || "Please review the required fields."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 border border-[var(--ink)] bg-[var(--ink)] px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-[var(--ink)] disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting…" : "Send Enquiry"}
                <span aria-hidden>→</span>
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="eyebrow mb-4">Direct contact</p>
          <a
            href="mailto:contact@ravencourtcapital.com"
            className="font-serif text-2xl text-[var(--ink)] underline-offset-4 hover:underline md:text-3xl"
          >
            contact@ravencourtcapital.com
          </a>
          <p className="mt-3 text-[var(--ink-soft)]">Milan, Italy</p>
        </div>
      </section>
    </SiteLayout>
  );
}
