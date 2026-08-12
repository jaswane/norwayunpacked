import { allArticles, articlePath } from "@/content";
import { getCategory } from "@/content/categories";
import { getTopic } from "@/content/topics";

/**
 * Simple static site search (no external service, no AI).
 * Matches against title, aliases (incl. Norwegian terms), excerpt, dek,
 * topic labels and category name. Draft articles are included for local QA
 * but clearly labeled; they never enter the sitemap or published registries.
 */
export interface SearchRecord {
  slug: string;
  url: string;
  title: string;
  excerpt: string;
  categoryName: string;
  status: "draft" | "review" | "published";
  haystackStrong: string;
  haystackWeak: string;
}

function normalize(text: string): string {
  return text.toLowerCase().normalize("NFC").replace(/\s+/g, " ").trim();
}

const records: SearchRecord[] = allArticles.map((article) => {
  const category = getCategory(article.category);
  const topicLabels = article.topics
    .map((id) => getTopic(id)?.label ?? "")
    .filter(Boolean);
  return {
    slug: article.slug,
    url: articlePath(article),
    title: article.title,
    excerpt: article.excerpt,
    categoryName: category?.name ?? article.category,
    status: article.status,
    haystackStrong: normalize([article.title, ...article.aliases, ...topicLabels].join(" | ")),
    haystackWeak: normalize(
      [article.dek, article.excerpt, article.description, category?.name ?? ""].join(" | "),
    ),
  };
});

export function searchArticles(query: string): SearchRecord[] {
  const q = normalize(query);
  if (!q) return [];
  const terms = q.split(" ");

  return records
    .map((record) => {
      let score = 0;
      let allMatch = true;
      for (const term of terms) {
        if (record.haystackStrong.includes(term)) score += 3;
        else if (record.haystackWeak.includes(term)) score += 1;
        else allMatch = false;
      }
      return { record, score: allMatch ? score : 0 };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.record);
}
