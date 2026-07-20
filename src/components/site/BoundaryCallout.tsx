import type { ReactNode } from "react";

export function BoundaryCallout({
  children,
  eyebrow = "Positioning boundary",
}: {
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <section className="border-b border-white/10 bg-[var(--ink)] py-16 text-white lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <p className="font-serif text-2xl leading-relaxed text-white/90 md:text-3xl">
          {children}
        </p>
      </div>
    </section>
  );
}
