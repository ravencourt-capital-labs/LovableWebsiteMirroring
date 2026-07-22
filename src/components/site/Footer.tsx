import { Link } from "@tanstack/react-router";

const REGIONS = ["North America", "Europe", "Middle East", "East Asia"] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--rule)] bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.5fr_.8fr_1.2fr]">
          <div>
            <p className="font-serif text-2xl text-[var(--ink)]">Ravencourt Capital</p>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              Data intelligence & decision infrastructure
            </p>
            <address className="mt-7 space-y-1 text-sm not-italic leading-relaxed text-[var(--ink-soft)]">
              <p className="text-[var(--ink)]">Ravencourt Capital di Rohan Kapoor</p>
              <p>P. IVA IT11381320966</p>
              <p className="pt-2">Via Carlo Imbonati, 62/2</p>
              <p>20159 Milano, Italy</p>
            </address>
            <div className="mt-5 flex flex-col items-start gap-1 text-sm">
              <a
                href="mailto:contact@ravencourtcapital.com"
                className="text-[var(--ink)] underline-offset-4 hover:underline"
              >
                contact@ravencourtcapital.com
              </a>
              <a
                href="tel:+393780118145"
                className="text-[var(--ink)] underline-offset-4 hover:underline"
              >
                +39 378 011 8145
              </a>
            </div>
          </div>
          <nav aria-label="Footer" className="text-sm">
            <p className="eyebrow mb-4">Firm</p>
            <ul className="space-y-2 text-[var(--ink-soft)]">
              <li><Link to="/operating-intelligence" className="hover:text-[var(--ink)]">Operating Intelligence</Link></li>
              <li><Link to="/raaven" className="hover:text-[var(--ink)]">RAAVEN Framework</Link></li>
              <li><Link to="/commercial-expansion" className="hover:text-[var(--ink)]">Commercial Intelligence</Link></li>
              <li><Link to="/strategic-advisory" className="hover:text-[var(--ink)]">Selective Strategic Advisory</Link></li>
              <li><Link to="/about" className="hover:text-[var(--ink)]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--ink)]">Contact</Link></li>
            </ul>
          </nav>
          <div className="text-sm text-[var(--ink-soft)]">
            <p className="eyebrow mb-4">Operating coverage</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {REGIONS.map((region) => <li key={region}>{region}</li>)}
            </ul>
            <div className="mt-8 border-t border-[var(--rule)] pt-6">
              <p className="eyebrow mb-4">Regulatory</p>
              <p className="leading-relaxed">
                Ravencourt Capital develops proprietary intelligence infrastructure and provides selected strategic and operating advisory services. Regulated activities, where applicable, are undertaken through appropriately authorised partners. No information on this website constitutes an offer, solicitation or investment recommendation.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[var(--rule)] pt-6 text-xs text-[var(--ink-soft)] md:flex-row md:items-center">
          <p>© {year} Ravencourt Capital. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">North America · Europe · Middle East · East Asia</p>
        </div>
      </div>
    </footer>
  );
}
