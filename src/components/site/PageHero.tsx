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
  const soft = dark ? "text-white/70" : "text-[var(--ink-soft)]";

  return (
    <section
      className={`border-b border-[var(--rule)] ${dark ? "bg-[var(--ink)]" : "bg-background"}`}
    >
      <div
        className={`mx-auto grid max-w-7xl gap-12 px-6 pt-32 pb-20 lg:px-12 lg:pt-40 lg:pb-28 ${
          media ? "lg:grid-cols-[1.02fr_.98fr] lg:items-center" : ""
        }`}
      >
        <div className="max-w-4xl">
          {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
          <h1
            className={`font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl lg:text-6xl ${text}`}
          >
            {headline}
          </h1>
          {body && (
            <p className={`mt-8 max-w-3xl text-lg font-light leading-relaxed ${soft}`}>
              {body}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
        {media && <div className="min-w-0">{media}</div>}
      </div>
    </section>
  );
}
