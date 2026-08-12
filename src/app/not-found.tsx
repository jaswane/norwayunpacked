import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";
import { categories } from "@/content/categories";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-page px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-signal">
          404 — Page not found
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
          This page doesn&apos;t exist<span className="text-signal">.</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          The page may have moved, or the address may be wrong. Try a search, or start from one
          of the main topics.
        </p>
        <div className="mt-8">
          <SearchForm variant="page" />
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-2 border-t border-line pt-6 sm:grid-cols-2">
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
      </div>
    </div>
  );
}
