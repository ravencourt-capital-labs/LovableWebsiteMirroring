import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--rule)] bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-[var(--ink)]">Ravencourt Capital</p>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              Private Markets Operating Intelligence &amp; Strategic Advisory
            </p>
            <p className="mt-6 text-sm text-[var(--ink-soft)]">Milan, Italy</p>
            <a href="mailto:contact@ravencourtcapital.com" className="mt-1 inline-block text-sm text-[var(--ink)] underline-offset-4 hover:underline">
              contact@ravencourtcapital.com
            </a>
          </div>
          <nav aria-label="Footer" className="text-sm">
            <p className="eyebrow mb-4">Firm</p>
            <ul className="space-y-2 text-[var(--ink-soft)]">
              <li><Link to="/operating-intelligence" className="hover:text-[var(--ink)]">Operating Intelligence</Link></li>
              <li><Link to="/strategic-advisory" className="hover:text-[var(--ink)]">Strategic Advisory</Link></li>
              <li><Link to="/commercial-expansion" className="hover:text-[var(--ink)]">Commercial Expansion</Link></li>
              <li><Link to="/raaven" className="hover:text-[var(--ink)]">RAAVEN</Link></li>
              <li><Link to="/about" className="hover:text-[var(--ink)]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--ink)]">Contact</Link></li>
            </ul>
          </nav>
          <div className="text-sm text-[var(--ink-soft)]">
            <p className="eyebrow mb-4">Regulatory</p>
            <p className="leading-relaxed">
              Ravencourt Capital provides strategic and operating advisory services. Regulated activities, where applicable, are undertaken through appropriately authorised partners. No information on this website constitutes an offer, solicitation or investment recommendation.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[var(--rule)] pt-6 text-xs text-[var(--ink-soft)] md:flex-row md:items-center">
          <p>© {year} Ravencourt Capital. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Milan · Cross-Border · Senior-Led</p>
        </div>
      </div>
    </footer>
  );
}
