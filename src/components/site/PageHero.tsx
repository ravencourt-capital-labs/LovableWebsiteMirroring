import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  headline,
  body,
  children,
  media,
  dark = false,
}: {
  eyebrow?: string;
  headline: string;
  body?: string;
  children?: ReactNode;
  media?: ReactNode;
  dark?: boolean;
}) {
  const text = dark ? "text-white" : "text-[var(--ink)]";
  const soft = dark ? "text-white/68" : "text-[var(--ink-soft)]";

  return (
    <section
      className={`border-b border-[var(--rule)] ${dark ? "bg-[var(--ink)]" : "bg-background"}`}
    >
      <div
        className={`mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-36 lg:px-12 lg:pb-32 lg:pt-44 ${
          media ? "lg:grid-cols-[1.08fr_.92fr] lg:items-center" : ""
        }`}
      >
        <div className="max-w-4xl">
          {eyebrow && <p className="eyebrow mb-7">{eyebrow}</p>}
          <h1
            className={`max-w-5xl font-serif text-[2.85rem] leading-[.98] tracking-[-0.025em] sm:text-5xl lg:text-[4.5rem] ${text}`}
          >
            {headline}
          </h1>
          {body && (
            <p className={`mt-8 max-w-3xl text-lg font-light leading-[1.75] ${soft}`}>
              {body}
            </p>
          )}
          {children && <div className="mt-11">{children}</div>}
        </div>
        {media && <div className="min-w-0">{media}</div>}
      </div>
    </section>
  );
}
