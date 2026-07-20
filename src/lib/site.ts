export const SITE_URL = "https://ravencourtcapital.com";

export function absoluteUrl(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return normalised === "/" ? SITE_URL : `${SITE_URL}${normalised.replace(/\/$/, "")}`;
}
