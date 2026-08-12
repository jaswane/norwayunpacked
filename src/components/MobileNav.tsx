"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/content/categories";

/** Mobile/tablet navigation. Client component only because the toggle needs state. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="flex h-10 w-10 items-center justify-center text-ink-soft transition-colors hover:text-ink"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <div id="mobile-nav" className="absolute inset-x-0 top-16 z-50 border-b border-line bg-paper lg:top-[4.5rem]">
          <nav aria-label="Main menu" className="mx-auto max-w-page px-5 py-4">
            <ul className="divide-y divide-line">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    onClick={close}
                    className="block py-3 font-serif text-lg font-semibold text-ink"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/search" onClick={close} className="block py-3 font-serif text-lg font-semibold text-ink">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={close} className="block py-3 text-sm font-medium text-ink-soft">
                  About Norway Unpacked
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
