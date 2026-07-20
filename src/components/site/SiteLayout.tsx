import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-[var(--ink)]">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
