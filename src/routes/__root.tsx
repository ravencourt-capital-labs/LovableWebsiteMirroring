import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";

import faviconIco from "../assets/favicons/favicon.ico.asset.json";
import favicon16 from "../assets/favicons/favicon-16x16.png.asset.json";
import favicon32 from "../assets/favicons/favicon-32x32.png.asset.json";
import appleTouch from "../assets/favicons/apple-touch-icon.png.asset.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Ravencourt Capital | Allocator-Aligned Private Markets Execution Across Europe, MENA & North America",
      },
      {
        name: "description",
        content:
          "Ravencourt Capital is a Milan-based private markets boutique executing capital formation, M&A, and buy-side mandates across Europe, MENA, and North America.",
      },
      { name: "author", content: "Ravencourt Capital" },
      {
        property: "og:title",
        content: "Ravencourt Capital – Private Markets Execution",
      },
      {
        property: "og:description",
        content:
          "Allocator-aligned, cross-border execution across private capital, M&A, and buy-side mandates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:description",
        content:
          "Allocator-aligned, cross-border execution across private capital, M&A, and buy-side mandates.",
      },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Capital Connect is a single-page institutional website for Ravencourt Capital, a boutique advisory firm." },
      { property: "og:description", content: "Capital Connect is a single-page institutional website for Ravencourt Capital, a boutique advisory firm." },
      { name: "twitter:description", content: "Capital Connect is a single-page institutional website for Ravencourt Capital, a boutique advisory firm." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c27ce419-1370-47d8-a70d-b041d3771c1a/id-preview-94b67a04--88b375e9-9c24-418e-bf50-01417d8a7da8.lovable.app-1781211209238.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c27ce419-1370-47d8-a70d-b041d3771c1a/id-preview-94b67a04--88b375e9-9c24-418e-bf50-01417d8a7da8.lovable.app-1781211209238.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Analytics />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
