import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/ravencourt-logo.png";

const NAV = [
  { to: "/strategic-advisory", label: "Strategic Advisory" },
  { to: "/operating-intelligence", label: "Operating Intelligence" },
  { to: "/commercial-expansion", label: "Commercial Intelligence" },
  { to: "/raaven", label: "RAAVEN Framework" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--rule)] bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-3 text-[var(--ink)]">
            <img src={logo} alt="Ravencourt Capital" className="h-9 w-9 object-contain" />
            <span className="hidden font-serif text-lg tracking-wide sm:inline">Ravencourt Capital</span>
          </Link>
          <div className="flex items-center gap-4 lg:gap-7">
            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-5">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-[10px] uppercase tracking-[0.13em] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                      activeProps={{ className: "text-[var(--ink)]" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              to="/contact"
              className="hidden border border-[var(--ink)] bg-[var(--ink)] px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-transparent hover:text-[var(--ink)] sm:inline-flex"
            >
              Discuss a Mandate
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="xl:hidden"
            >
              <Menu className="h-6 w-6 text-[var(--ink)]" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-[var(--ink)] text-white"
        >
          <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between border-b border-white/10 px-6 lg:px-12">
            <span className="font-serif text-lg tracking-wide">Ravencourt Capital</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-[10px] uppercase tracking-[0.35em] text-white/80 hover:text-white"
            >
              Close
            </button>
          </div>
          <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto">
            <ol className="mx-auto flex max-w-7xl flex-col divide-y divide-white/10 px-6 py-10 lg:px-12">
              {NAV.map((item, index) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-6 py-5 lg:gap-10 lg:py-6"
                  >
                    <span className="w-8 shrink-0 text-[10px] uppercase tracking-[0.3em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-3xl text-white transition-colors group-hover:text-white/70 lg:text-5xl">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}
    </>
  );
}
