import Link from "next/link";
import { categories } from "@/content/categories";
import { MobileNav } from "./MobileNav";
import { BrandMark } from "./BrandMark";

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-6 px-5 lg:h-[4.5rem] lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <BrandMark size={34} />
          <span className="font-serif text-[1.0625rem] font-bold leading-[1.05] tracking-tight">
            Norway
            <br />
            Unpacked
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/${category.slug}`}
                  className="text-[0.8125rem] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {category.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="flex h-10 w-10 items-center justify-center text-ink-soft transition-colors hover:text-ink"
            aria-label="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
