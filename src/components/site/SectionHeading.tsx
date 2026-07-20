export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-12 max-w-4xl lg:mb-16">
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="font-serif text-3xl leading-tight text-[var(--ink)] md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body && (
        <p className="mt-6 max-w-3xl leading-relaxed text-[var(--ink-soft)]">
          {body}
        </p>
      )}
    </div>
  );
}
