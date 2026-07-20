import { CTA } from "./TextLink";

export function CapabilityCard({
  number,
  title,
  body,
  to,
  linkLabel = "Explore",
}: {
  number: string;
  title: string;
  body: string;
  to?: string;
  linkLabel?: string;
}) {
  return (
    <article className="relative border-t border-[var(--rule)] pt-8">
      <span className="absolute left-0 top-0 h-px w-12 bg-[var(--gold)]" />
      <p className="font-serif text-3xl text-[var(--gold)]">{number}</p>
      <h3 className="mt-5 font-serif text-2xl leading-snug text-[var(--ink)]">
        {title}
      </h3>
      <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">{body}</p>
      {to && (
        <div className="mt-6">
          <CTA to={to as never} variant="inline">
            {linkLabel}
          </CTA>
        </div>
      )}
    </article>
  );
}
