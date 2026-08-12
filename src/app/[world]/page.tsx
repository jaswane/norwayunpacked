import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/content/categories";
import { getArticlesByCategory, articlePath } from "@/content";
import { categorySlugSchema } from "@/content/types";
import { statusLabel } from "@/content/status";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ world: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ world: string }>;
}): Promise<Metadata> {
  const { world } = await params;
  const category = getCategory(world);
  if (!category) return {};
  return buildMetadata({
    title: category.name,
    description: category.hubIntro,
    path: `/${category.slug}`,
  });
}

export default async function WorldHubPage({
  params,
}: {
  params: Promise<{ world: string }>;
}) {
  const { world } = await params;
  const parsed = categorySlugSchema.safeParse(world);
  if (!parsed.success) notFound();
  const category = getCategory(parsed.data);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);
  const published = articles.filter((a) => a.status === "published");
  const inProduction = articles.filter((a) => a.status !== "published");

  return (
    <div className="mx-auto max-w-page px-5 py-12 lg:px-8 lg:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: category.name, path: `/${category.slug}` },
        ])}
      />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-faint">
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{category.name}</span>
      </nav>

      <header className="max-w-2xl border-b border-line pb-8">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">{category.name}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{category.hubIntro}</p>
      </header>

      {published.length > 0 && (
        <section aria-label="Articles" className="mt-10">
          <ul className="divide-y divide-line border-b border-line">
            {published.map((article) => (
              <li key={article.slug} className="py-6">
                <h2 className="font-serif text-2xl font-semibold leading-snug">
                  <Link href={articlePath(article)} className="transition-colors hover:text-accent">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-soft">
                  {article.excerpt}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {published.length === 0 && (
        <section aria-label="Section status" className="mt-10 max-w-2xl">
          <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
            Articles for this section are in production. Norway Unpacked publishes in small,
            carefully fact-checked batches rather than all at once — the first pieces will
            appear here as they pass editorial review.
          </p>
        </section>
      )}

      {inProduction.length > 0 && (
        <section aria-labelledby="production-heading" className="mt-10 max-w-2xl">
          <h2 id="production-heading" className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            {statusLabel(inProduction[0])?.groupHeading ?? "Not yet published"}
          </h2>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {inProduction.map((article) => (
              <li key={article.slug} className="py-5">
                <h3 className="font-serif text-xl font-semibold leading-snug">
                  <Link href={articlePath(article)} className="transition-colors hover:text-accent">
                    {article.title}
                  </Link>
                  <span className="ml-2 align-middle border border-line-strong bg-paper-shade px-1.5 py-0.5 text-[0.625rem] font-sans font-semibold uppercase tracking-wide text-ink-faint">
                    {statusLabel(article)?.badge}
                  </span>
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{article.excerpt}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
