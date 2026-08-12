import Link from "next/link";
import { getTopic } from "@/content/topics";
import { getPublishedArticles, articlePath } from "@/content";

/**
 * Curated knowledge-graph links — explicit relations, never "recent posts".
 * Topics whose article exists and is published become links; the rest render
 * as quiet planned topics so the graph is honest about what is live.
 */
export function RelatedTopics({ topicIds }: { topicIds: string[] }) {
  if (topicIds.length === 0) return null;

  const items = topicIds
    .map((id) => getTopic(id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
    .map((topic) => {
      const article = topic.articleSlug
        ? getPublishedArticles().find((a) => a.slug === topic.articleSlug)
        : undefined;
      return { topic, href: article ? articlePath(article) : null };
    });

  return (
    <section aria-labelledby="related-heading" className="mt-12">
      <h2 id="related-heading" className="font-serif text-xl font-semibold">
        Keep exploring
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map(({ topic, href }) =>
          href ? (
            <li key={topic.id}>
              <Link
                href={href}
                className="inline-block border border-line-strong bg-white px-3 py-1.5 text-sm text-accent transition-colors hover:border-accent"
              >
                {topic.label}
              </Link>
            </li>
          ) : (
            <li key={topic.id}>
              <span className="inline-block border border-line bg-paper-shade px-3 py-1.5 text-sm text-ink-faint">
                {topic.label}
                <span className="ml-1.5 text-[0.625rem] uppercase tracking-wide">soon</span>
              </span>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
