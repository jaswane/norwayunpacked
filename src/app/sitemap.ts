import type { MetadataRoute } from "next";
import { siteIndexable, absoluteUrl } from "@/lib/site";
import { categories } from "@/content/categories";
import { getPublishedArticles, articlePath } from "@/content";

/**
 * Sitemap derives from the central indexability gate. While the gate is
 * closed the sitemap is empty. When open, it contains only canonical,
 * indexable routes: core pages, hubs and PUBLISHED articles. Drafts,
 * /search and /go never appear here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteIndexable) {
    return [];
  }

  const corePaths = [
    "/",
    "/about",
    "/sources",
    "/editorial-policy",
    "/contact",
    "/privacy",
    "/disclaimer",
  ];

  const hubPaths = categories.map((category) => `/${category.slug}`);

  const articleEntries = getPublishedArticles().map((article) => ({
    url: absoluteUrl(articlePath(article)),
    lastModified: article.updatedAt ?? article.publishedAt ?? undefined,
  }));

  return [
    ...corePaths.map((path) => ({ url: absoluteUrl(path) })),
    ...hubPaths.map((path) => ({ url: absoluteUrl(path) })),
    ...articleEntries,
  ];
}
