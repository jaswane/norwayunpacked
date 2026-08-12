import { siteConfig, absoluteUrl } from "./site";
import type { Article } from "@/content/types";
import { getCategory } from "@/content/categories";

/**
 * JSON-LD builders. Rule: schema must match what the user actually sees.
 * Article schema is only emitted for published articles; drafts get none.
 * No FAQPage until real visible FAQ content exists.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.origin,
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.origin}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Only call for published articles — enforced by the caller. */
export function articleSchema(article: Article) {
  const category = getCategory(article.category);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.origin },
    mainEntityOfPage: absoluteUrl(`/${article.category}/${article.slug}`),
    articleSection: category?.name,
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
  };
}
