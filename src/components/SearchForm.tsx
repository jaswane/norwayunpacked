/**
 * Site search form — a plain GET form to /search. No client JavaScript
 * needed; works before hydration and with JS disabled.
 */
export function SearchForm({
  defaultValue = "",
  variant = "hero",
}: {
  defaultValue?: string;
  variant?: "hero" | "page";
}) {
  return (
    <form action="/search" role="search" className="flex w-full max-w-xl">
      <label htmlFor={`search-${variant}`} className="sr-only">
        Search Norway Unpacked
      </label>
      <input
        id={`search-${variant}`}
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="What do you want to understand about Norway?"
        autoComplete="off"
        className="h-12 w-full min-w-0 rounded-l-sm border border-r-0 border-line-strong bg-white px-4 text-[0.9375rem] text-ink placeholder:text-ink-faint"
      />
      <button
        type="submit"
        className="flex h-12 w-14 shrink-0 items-center justify-center rounded-r-sm bg-signal text-white transition-colors hover:bg-[#b8441a]"
        aria-label="Search"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </button>
    </form>
  );
}
