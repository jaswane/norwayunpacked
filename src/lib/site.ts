/**
 * Central site configuration — single source of truth.
 *
 * INDEXABILITY GATE
 * -----------------
 * `siteIndexable` is the one switch that controls whether the site invites
 * search-engine indexing. It is read from the SITE_INDEXABLE environment
 * variable and is FALSE unless that variable is explicitly set to "true".
 *
 * While false:
 *   - robots.txt disallows all crawling (src/app/robots.ts)
 *   - every page carries noindex/nofollow robots metadata (src/lib/metadata.ts)
 *   - the sitemap is empty (src/app/sitemap.ts)
 *
 * To open the site for indexing later: set SITE_INDEXABLE=true in the
 * production environment (e.g. Vercel project env vars) and redeploy.
 * Do not hardcode indexability anywhere else.
 */
export const siteIndexable: boolean = process.env.SITE_INDEXABLE === "true";

export const siteConfig = {
  name: "Norway Unpacked",
  origin: "https://norwayunpacked.com",
  tagline: "Understand Norway.",
  supportingLine: "The country, the culture and how things actually work.",
  description:
    "Norway Unpacked is an English-language knowledge base for understanding Norway — the country, the culture and how things actually work. Clear explanations, local context and documented facts.",
  author: "Andreas",
  developer: "Swane Creative",
  // The public contact address may only be rendered on /contact.
  // Never surface it in the header, footer, metadata, schema or global components.
} as const;

export function absoluteUrl(path: string): string {
  return `${siteConfig.origin}${path === "/" ? "" : path}`;
}
