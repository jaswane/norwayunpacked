import type { Metadata } from "next";
import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { searchArticles } from "@/lib/search";
import { categories } from "@/content/categories";
import { buildMetadata } from "@/lib/metadata";

// Search result pages stay out of search engines even after launch —
// query-parameter combinations create low-value index entries.
export const metadata: Metadata = buildMetadata({
  title: "Search",
  description: "Search Norway Unpacked — explanations of the country, the culture and how things actually work.",
  path: "/search",
  forceNoindex: true,
});

const suggestedTopics = [
  { label: "Norway's Oil Fund", q: "oil fund" },
  { label: "The welfare state", q: "welfare state" },
  { label: "Dugnad", q: "dugnad" },
  { label: "17 May", q: "17 may" },
  { label: "Friluftsliv", q: "friluftsliv" },
];

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const raw = (await searchParams).q;
  const query = (Array.isArray(raw) ? raw[0] : raw ?? "").slice(0, 100).trim();
  const results = query ? searchArticles(query) : [];

  return (
    <div className="mx-auto max-w-page px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-4xl font-bold tracking-tight">Search</h1>
        <p className="mt-3 text-[0.9375rem] text-ink-soft">
          Find explanations of Norwegian systems, culture and everyday life.
        </p>
        <div className="mt-6">
          <SearchForm defaultValue={query} variant="page" />
        </div>

        {query && results.length > 0 && (
          <section aria-label="Search results" className="mt-10">
            <p className="text-sm text-ink-faint">
              {results.length} {results.length === 1 ? "result" : "results"} for “{query}”
            </p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {results.map((result) => (
                <li key={result.slug} className="py-5">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    {result.categoryName}
                  </p>
                  <h2 className="mt-1 font-serif text-xl font-semibold leading-snug">
                    <Link href={result.url} className="transition-colors hover:text-accent">
                      {result.title}
                    </Link>
                    {result.statusBadge && (
                      <span className="ml-2 align-middle border border-line-strong bg-paper-shade px-1.5 py-0.5 font-sans text-[0.625rem] font-semibold uppercase tracking-wide text-ink-faint">
                        {result.statusBadge}
                      </span>
                    )}
                  </h2>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{result.excerpt}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {query && results.length === 0 && (
          <section aria-label="No results" className="mt-10">
            <h2 className="font-serif text-2xl font-semibold">No results for “{query}”</h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
              Norway Unpacked is young and growing carefully — the topic you searched for may
              simply not be written yet. Try one of these instead:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {suggestedTopics.map((topic) => (
                <li key={topic.q}>
                  <Link
                    href={`/search?q=${encodeURIComponent(topic.q)}`}
                    className="inline-block border border-line-strong bg-white px-3 py-1.5 text-sm text-accent transition-colors hover:border-accent"
                  >
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              Or browse by topic
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    className="text-[0.9375rem] text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
