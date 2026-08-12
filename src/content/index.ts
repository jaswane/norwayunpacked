import { articleSchema, type Article, type CategorySlug } from "./types";
import { siteIndexable } from "@/lib/site";
import { getTopic } from "./topics";
import { oilFundArticle } from "./articles/oil-fund";
import { dugnadArticle } from "./articles/dugnad";

/**
 * Article registry + build-time validation.
 * Every article is parsed with zod when this module is first imported.
 * Since all routes import from here, an invalid article fails the
 * production build instead of shipping.
 */
const rawArticles: Article[] = [oilFundArticle, dugnadArticle];

function validateArticles(articles: Article[]): Article[] {
  const slugs = new Set<string>();
  for (const article of articles) {
    const result = articleSchema.safeParse(article);
    if (!result.success) {
      throw new Error(
        `Invalid article "${article.slug}": ${result.error.issues.map((i) => i.message).join("; ")}`,
      );
    }
    if (slugs.has(article.slug)) {
      throw new Error(`Duplicate article slug: ${article.slug}`);
    }
    slugs.add(article.slug);
    for (const id of [...article.topics, ...article.relatedTopics]) {
      if (!getTopic(id)) {
        throw new Error(`Article "${article.slug}" references unknown topic "${id}".`);
      }
    }
  }
  return articles;
}

export const allArticles: Article[] = validateArticles(rawArticles);

/** Published articles only — the set that may appear in the sitemap and indexes. */
export function getPublishedArticles(): Article[] {
  return allArticles.filter((a) => a.status === "published");
}

/**
 * Whether unpublished work may be surfaced at all.
 *
 * While the site is closed (SITE_INDEXABLE=false) drafts and in-review
 * articles stay browsable so they can be reviewed in a real page. The moment
 * the site is opened for indexing, they disappear from every public surface —
 * hub lists, search, homepage modules, related links — and their routes stop
 * being generated, so they 404 rather than sitting on the open web with only
 * a noindex tag protecting them.
 */
export const previewVisible: boolean = !siteIndexable;

/**
 * The articles any public surface is allowed to show. Use this — not
 * `allArticles` — for listings, search indexes and route generation.
 */
export function getDiscoverableArticles(): Article[] {
  return previewVisible ? allArticles : getPublishedArticles();
}

export function getArticle(category: CategorySlug, slug: string): Article | undefined {
  return getDiscoverableArticles().find((a) => a.category === category && a.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return getDiscoverableArticles().filter((a) => a.category === category);
}

export function articlePath(article: Article): string {
  return `/${article.category}/${article.slug}`;
}
