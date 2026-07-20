import type { ReactNode } from "react";

export function EditorialImage({
  src,
  alt,
  eyebrow,
  caption,
  objectPosition = "center",
  overlay,
  motion = false,
  className = "",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  caption?: string;
  objectPosition?: string;
  overlay?: ReactNode;
  motion?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`relative isolate min-h-[22rem] overflow-hidden border border-white/10 bg-[var(--ink)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover saturate-[.72] contrast-[1.04] ${
          motion ? "rc-editorial-drift" : ""
        }`}
        style={{ objectPosition }}
        loading={motion ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/90 via-black/20 to-black/5" />
      <div className="absolute inset-y-0 left-0 z-20 w-px bg-[var(--gold)]/70" />
      {overlay && <div className="pointer-events-none absolute inset-0 z-10">{overlay}</div>}
      <div className="absolute inset-x-0 bottom-0 z-20 p-6 text-white lg:p-8">
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
    </figure>
  );
}

export function InstitutionalMotionField() {
  return (
    <div className="relative h-full w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <path
          className="rc-motion-path rc-motion-path-muted"
          d="M-120 690 C170 470 370 430 620 500 C850 565 1010 475 1320 165"
        />
        <path
          className="rc-motion-path rc-motion-path-accent"
          d="M-180 545 C120 320 390 265 640 350 C875 430 1030 325 1350 40"
        />
        <path
          className="rc-motion-path rc-motion-path-muted rc-motion-path-reverse"
          d="M-80 770 C250 590 425 565 680 625 C925 685 1090 595 1370 310"
        />
      </svg>
      <div className="rc-motion-wash absolute -right-1/4 top-0 h-full w-3/4 bg-gradient-to-l from-[var(--gold)]/10 via-white/[.03] to-transparent" />
    </div>
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
        {OPERATING_STAGES.map((stage, index) => (
          <li
            key={stage.number}
            className={`relative bg-[var(--ink)] text-white ${compact ? "p-4" : "min-h-48 p-6 lg:p-7"}`}
          >
            <span className="absolute inset-x-0 top-0 h-px overflow-hidden bg-white/10">
              <span
                className="rc-stage-signal block h-full w-1/3 bg-[var(--gold)]"
                style={{ animationDelay: `${index * 1.4}s` }}
              />
            </span>
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
