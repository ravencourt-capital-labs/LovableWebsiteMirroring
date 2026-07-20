import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "inline" | "light";

const base =
  "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] transition-colors";

const styles: Record<Variant, string> = {
  primary:
    "border border-[var(--ink)] bg-[var(--ink)] px-5 py-3 text-white hover:bg-transparent hover:text-[var(--ink)]",
  secondary:
    "border border-[var(--ink)] px-5 py-3 text-[var(--ink)] hover:bg-[var(--ink)] hover:text-white",
  inline: "text-[var(--ink)] underline-offset-4 hover:underline",
  light:
    "border border-white/70 bg-white px-5 py-3 text-[var(--ink)] hover:bg-transparent hover:text-white",
};

export function CTA({
  to,
  variant = "primary",
  children,
}: {
  to: ComponentProps<typeof Link>["to"];
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={`${base} ${styles[variant]}`}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

export function ExternalCTA({
  href,
  variant = "primary",
  children,
  newTab = true,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  newTab?: boolean;
}) {
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]}`}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  );
}
