import type { ReactNode } from "react";

export function EditorialImage({
  src,
  alt,
  eyebrow,
  caption,
  objectPosition = "center",
  overlay,
  className = "",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  caption?: string;
  objectPosition?: string;
  overlay?: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`relative isolate min-h-[22rem] overflow-hidden border border-white/10 bg-[var(--ink)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover saturate-[.72] contrast-[1.04]"
        style={{ objectPosition }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/5" />
      <div className="absolute inset-y-0 left-0 w-px bg-[var(--gold)]/70" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white lg:p-8">
        {eyebrow && (
          <p className="mb-3 text-[10px] uppercase tracking-[0.24em] text-white/65">
            {eyebrow}
          </p>
        )}
        {caption && (
          <figcaption className="max-w-xl font-serif text-2xl leading-tight text-white lg:text-3xl">
            {caption}
          </figcaption>
        )}
      </div>
      {overlay && <div className="absolute inset-0 z-20">{overlay}</div>}
    </figure>
  );
}

const OPERATING_STAGES = [
  {
    number: "01",
    title: "Evidence inputs",
    body: "Mandate materials, meetings, communications, diligence records and verified market evidence.",
  },
  {
    number: "02",
    title: "Governed intelligence",
    body: "Source provenance, lifecycle discipline, counterparty context and structured interpretation.",
  },
  {
    number: "03",
    title: "Decision support",
    body: "Explicit gates, prioritisation, escalation and named human authority for consequential decisions.",
  },
  {
    number: "04",
    title: "Execution & oversight",
    body: "Mandate monitoring, accountable next actions, review trails and disciplined follow-through.",
  },
] as const;

export function EvidenceFlowVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex h-full w-full items-center ${compact ? "p-3" : "p-5 lg:p-7"}`}
      aria-label="RAAVEN operating model: evidence inputs, governed intelligence, decision support, and mandate execution and oversight"
    >
      <ol
        className={`grid w-full gap-px overflow-hidden border border-white/15 bg-white/15 ${
          compact ? "grid-cols-2" : "md:grid-cols-2 xl:grid-cols-4"
        }`}
      >
        {OPERATING_STAGES.map((stage) => (
          <li
            key={stage.number}
            className={`relative bg-[var(--ink)] text-white ${compact ? "p-4" : "min-h-48 p-6 lg:p-7"}`}
          >
            <span className="absolute inset-x-0 top-0 h-px bg-[var(--gold)]" />
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--gold-soft)]">
              {stage.number}
            </p>
            <h3
              className={`mt-4 font-serif leading-tight text-white ${
                compact ? "text-lg" : "text-2xl lg:text-[1.7rem]"
              }`}
            >
              {stage.title}
            </h3>
            {!compact && (
              <p className="mt-5 text-sm leading-relaxed text-white/65">{stage.body}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProofStrip() {
  const items = [
    ["Provenance", "Every material conclusion remains connected to its evidence."],
    ["Decision gates", "Consequential changes require explicit review and authority."],
    ["Accountability", "Ownership, next actions and mandate status remain visible."],
  ];

  return (
    <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-3">
      {items.map(([title, body]) => (
        <div key={title} className="bg-[var(--ink)] px-6 py-7 text-white">
          <p className="font-serif text-2xl text-[var(--gold)]">{title}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">{body}</p>
        </div>
      ))}
    </div>
  );
}
