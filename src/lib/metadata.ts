import type { Metadata } from "next";
import { siteConfig, siteIndexable, absoluteUrl } from "./site";

/**
 * Central metadata builder. Canonical always uses the apex origin
 * (https://norwayunpacked.com). Robots derive from the indexability gate —
 * pass `forceNoindex` for surfaces that must stay out of search even after
 * launch (drafts, search results, future /go routes).
 */
export function buildMetadata(options: {
  title: string;
  description: string;
  path: string;
  forceNoindex?: boolean;
  ogType?: "website" | "article";
}): Metadata {
  const { title, description, path, forceNoindex = false, ogType = "website" } = options;
  const indexable = siteIndexable && !forceNoindex;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      type: ogType,
      locale: "en_US",
    },
  };
}
