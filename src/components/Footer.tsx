import Link from "next/link";
import { categories } from "@/content/categories";

const infoLinks = [
  { href: "/about", label: "About" },
  { href: "/sources", label: "Sources" },
  { href: "/editorial-policy", label: "Editorial policy" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-paper-shade">
      <div className="mx-auto max-w-page px-5 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <p className="font-serif text-lg font-bold">Norway Unpacked</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Understand Norway. The country, the culture and how things actually work.
            </p>
          </div>

          <nav aria-label="Topics" className="text-sm">
            <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/${category.slug}`} className="text-ink-soft transition-colors hover:text-ink">
                    {category.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site information" className="text-sm">
            <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              Site
            </p>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ink-soft transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:justify-between">
          <p>© 2026 Norway Unpacked</p>
          <p>Developed by Swane Creative</p>
        </div>
      </div>
    </footer>
  );
}
