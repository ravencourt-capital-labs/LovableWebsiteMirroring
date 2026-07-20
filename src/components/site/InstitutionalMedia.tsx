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
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
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

export function EvidenceFlowVisual({ compact = false }: { compact?: boolean }) {
  const nodes = compact
    ? [
        { x: 22, y: 50, label: "Sources" },
        { x: 50, y: 28, label: "Evidence" },
        { x: 50, y: 72, label: "Review" },
        { x: 78, y: 50, label: "Decision" },
      ]
    : [
        { x: 14, y: 24, label: "Email" },
        { x: 14, y: 50, label: "Meetings" },
        { x: 14, y: 76, label: "Documents" },
        { x: 43, y: 34, label: "Evidence" },
        { x: 43, y: 66, label: "Lifecycle" },
        { x: 72, y: 34, label: "Priority" },
        { x: 72, y: 66, label: "Review" },
        { x: 91, y: 50, label: "Decision" },
      ];

  const lines = compact
    ? [
        [22, 50, 50, 28],
        [22, 50, 50, 72],
        [50, 28, 78, 50],
        [50, 72, 78, 50],
      ]
    : [
        [14, 24, 43, 34],
        [14, 50, 43, 34],
        [14, 50, 43, 66],
        [14, 76, 43, 66],
        [43, 34, 72, 34],
        [43, 66, 72, 66],
        [72, 34, 91, 50],
        [72, 66, 91, 50],
      ];

  return (
    <div className="flex h-full w-full items-center justify-center p-5" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full max-h-[28rem] w-full">
        <defs>
          <linearGradient id="rc-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,.16)" />
            <stop offset="100%" stopColor="rgba(214,177,85,.9)" />
          </linearGradient>
          <filter id="rc-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {lines.map(([x1, y1, x2, y2], index) => (
          <line
            key={`${x1}-${y1}-${x2}-${y2}-${index}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#rc-line)"
            strokeWidth="0.65"
          />
        ))}
        {nodes.map((node, index) => (
          <g key={`${node.label}-${index}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={compact ? 4.3 : 3.8}
              fill="rgba(16,16,16,.82)"
              stroke={index === nodes.length - 1 ? "#d6b155" : "rgba(255,255,255,.6)"}
              strokeWidth="0.7"
              filter={index === nodes.length - 1 ? "url(#rc-glow)" : undefined}
            />
            <text
              x={node.x}
              y={node.y + (compact ? 8 : 7)}
              textAnchor="middle"
              fill="rgba(255,255,255,.86)"
              fontSize={compact ? "4" : "3.5"}
              fontFamily="Inter, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function ProofStrip() {
  const items = [
    ["13", "governed intelligence modules"],
    ["4", "core evidence layers"],
    ["1", "named human authority"],
  ];

  return (
    <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-3">
      {items.map(([value, label]) => (
        <div key={label} className="bg-[var(--ink)] px-6 py-7 text-white">
          <p className="font-serif text-4xl text-[var(--gold)]">{value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/65">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
