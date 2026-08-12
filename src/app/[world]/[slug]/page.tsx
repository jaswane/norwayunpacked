import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDiscoverableArticles, getArticle, articlePath } from "@/content";
import { getCategory } from "@/content/categories";
import { categorySlugSchema } from "@/content/types";
import { statusLabel } from "@/content/status";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ArticleBody } from "@/components/editorial/ArticleBody";
import { SourceBlock, formatDate } from "@/components/editorial/SourceBlock";
import { RelatedTopics } from "@/components/editorial/RelatedTopics";

export const dynamicParams = false;

export function generateStaticParams() {
  // Unpublished work only gets a route while the site is closed; see
  // getDiscoverableArticles(). With dynamicParams = false it 404s otherwise.
  return getDiscoverableArticles().map((article) => ({
    world: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ world: string; slug: string }>;
}): Promise<Metadata> {
  const { world, slug } = await params;
  const parsed = categorySlugSchema.safeParse(world);
  if (!parsed.success) return {};
  const article = getArticle(parsed.data, slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle,
    description: article.description,
    path: articlePath(article),
    // Drafts and review articles must never be indexable, even after launch.
    forceNoindex: article.status !== "published",
    ogType: "article",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ world: string; slug: string }>;
}) {
  const { world, slug } = await params;
  const parsed = categorySlugSchema.safeParse(world);
  if (!parsed.success) notFound();
  const article = getArticle(parsed.data, slug);
  if (!article) notFound();
  const category = getCategory(article.category)!;
  const isPublished = article.status === "published";
  const status = statusLabel(article);

  return (
    <article className="pb-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: category.name, path: `/${category.slug}` },
          { name: article.title, path: articlePath(article) },
        ])}
      />
      {isPublished && <JsonLd data={articleSchema(article)} />}

      {status && (
        <div className="border-b border-line bg-paper-shade">
          <p className="mx-auto max-w-page px-5 py-3 text-sm leading-relaxed text-ink-soft lg:px-8">
            <strong className="font-semibold text-signal">{status.badge}.</strong> {status.banner}
          </p>
        </div>
      )}

      <div className="mx-auto max-w-page px-5 lg:px-8">
        {/* Article header — reading column */}
        <header className="mx-auto max-w-reading pt-10">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-ink-faint">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href={`/${category.slug}`} className="hover:text-ink">
              {category.name}
            </Link>
          </nav>

          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
            {category.name}
            {article.subcategory ? ` · ${article.subcategory}` : ""}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 font-serif text-xl leading-relaxed text-ink-soft">{article.dek}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-line py-3 text-sm text-ink-soft">
            <span>
              By <span className="font-medium text-ink">{article.author}</span>
            </span>
            {article.publishedAt && <span>Published {formatDate(article.publishedAt)}</span>}
            {article.updatedAt && <span>Updated {formatDate(article.updatedAt)}</span>}
            {article.factCheckedAt && (
              <span className="text-accent">Fact-checked {formatDate(article.factCheckedAt)}</span>
            )}
            {status && (
              <span className="border border-line-strong bg-paper-shade px-1.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-ink-faint">
                {status.badge} — not yet published
              </span>
            )}
          </div>
        </header>

        {/* Hero image breaks wider than the reading column */}
        <div className="mx-auto mt-8 max-w-4xl">
          <ImagePlaceholder image={article.image} sizes="(min-width: 1024px) 56rem, 100vw" priority className="w-full" />
        </div>

        <div className="mx-auto max-w-reading pt-10">
          <ArticleBody blocks={article.body} />
          <SourceBlock article={article} />
          <RelatedTopics topicIds={article.relatedTopics} />
        </div>
      </div>
    </article>
  );
}
