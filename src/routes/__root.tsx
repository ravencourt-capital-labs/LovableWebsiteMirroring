import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SkipLink } from "../components/site/SkipLink";
import { absoluteUrl } from "../lib/site";

import faviconIco from "../assets/favicons/favicon.ico.asset.json";
import favicon16 from "../assets/favicons/favicon-16x16.png.asset.json";
import favicon32 from "../assets/favicons/favicon-32x32.png.asset.json";
import appleTouch from "../assets/favicons/apple-touch-icon.png.asset.json";

const SITE_DESCRIPTION =
  "Ravencourt Capital is a Milan-based data intelligence and technology infrastructure firm building proprietary decision infrastructure for complex commercial and investment environments.";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: "Ravencourt Capital",
      url: absoluteUrl("/"),
      description: SITE_DESCRIPTION,
      slogan: "Intelligence infrastructure for complex commercial and investment decisions.",
      founder: {
        "@type": "Person",
        name: "Rohan Kapoor",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Carlo Imbonati, 62/2",
        postalCode: "20159",
        addressLocality: "Milan",
        addressCountry: "IT",
      },
      email: "contact@ravencourtcapital.com",
      telephone: "+39 378 011 8145",
      areaServed: ["Europe", "North America", "Middle East", "East Asia"],
      knowsAbout: [
        "Data intelligence",
        "Decision infrastructure",
        "Operating intelligence",
        "Commercial intelligence",
        "Private markets",
        "Strategic advisory",
      ],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: absoluteUrl("/"),
      name: "Ravencourt Capital",
      description: SITE_DESCRIPTION,
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
      inLanguage: "en",
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="mt-6 inline-flex border border-[var(--ink)] bg-[var(--ink)] px-4 py-2 text-sm text-white">
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Ravencourt Capital" },
      { name: "application-name", content: "Ravencourt Capital" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ravencourt Capital" },
      { property: "og:title", content: "Ravencourt Capital | Intelligence & Decision Infrastructure" },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:image", content: absoluteUrl("/images/milan-hero.jpg") },
      { property: "og:image:alt", content: "Milan institutional architecture representing Ravencourt Capital" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ravencourt Capital | Intelligence & Decision Infrastructure" },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: absoluteUrl("/images/milan-hero.jpg") },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", type: "image/x-icon", href: faviconIco.url },
      { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16.url },
      { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32.url },
      { rel: "apple-touch-icon", sizes: "180x180", href: appleTouch.url },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body>
        <SkipLink />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
