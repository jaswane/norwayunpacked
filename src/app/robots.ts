import type { MetadataRoute } from "next";
import { siteIndexable, absoluteUrl } from "@/lib/site";

/**
 * robots.txt derives from the central indexability gate (src/lib/site.ts).
 * Closed: disallow everything, no sitemap reference.
 * Open: allow crawling, keep /search and future /go redirects out.
 */
export default function robots(): MetadataRoute.Robots {
  if (!siteIndexable) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/search", "/go/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
