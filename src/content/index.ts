import { articleSchema, type Article, type CategorySlug } from "./types";
import { getTopic } from "./topics";
import { oilFundArticle } from "./articles/oil-fund";

/**
 * Article registry + build-time validation.
 * Every article is parsed with zod when this module is first imported.
 * Since all routes import from here, an invalid article fails the
 * production build instead of shipping.
 */
const rawArticles: Article[] = [oilFundArticle];

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

/** Drafts/review articles — visible for local QA, always noindex, never in sitemap. */
export function getWorkInProgressArticles(): Article[] {
  return allArticles.filter((a) => a.status !== "published");
}

export function getArticle(category: CategorySlug, slug: string): Article | undefined {
  return allArticles.find((a) => a.category === category && a.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return allArticles.filter((a) => a.category === category);
}

export function articlePath(article: Article): string {
  return `/${article.category}/${article.slug}`;
}
