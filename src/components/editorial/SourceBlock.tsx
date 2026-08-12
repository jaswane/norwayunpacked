import type { Article } from "@/content/types";

const sourceTypeLabels: Record<string, string> = {
  official: "Official source",
  data: "Data / statistics",
  research: "Research",
  reference: "Reference work",
  journalism: "Journalism",
  specialist: "Specialist source",
};

/**
 * Sources & fact check — a product feature, and an honest one.
 * "Fact checked" only renders when factCheckedAt actually exists.
 * Unverified sources are labeled as planned, never as checked.
 */
export function SourceBlock({ article }: { article: Article }) {
  if (article.sources.length === 0) return null;

  const allVerified = article.sources.every((s) => s.checkedAt !== null);

  return (
    <section aria-labelledby="sources-heading" className="mt-12 border-t-2 border-ink pt-6">
      <h2 id="sources-heading" className="font-serif text-xl font-semibold">
        Sources &amp; fact check
      </h2>

      {article.factCheckedAt ? (
        <p className="mt-2 text-sm text-ink-soft">
          This article was fact-checked on {formatDate(article.factCheckedAt)}.
        </p>
      ) : (
        <p className="mt-2 text-sm text-ink-soft">
          This article has not yet been fact-checked. The sources below are planned reference
          points and have not been verified against this text.
        </p>
      )}

      <ul className="mt-5 divide-y divide-line border-y border-line">
        {article.sources.map((source) => (
          <li key={source.url} className="py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <a
                href={source.url}
                rel="noopener"
                className="font-medium text-accent underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-accent"
              >
                {source.name}
              </a>
              <span className="text-xs uppercase tracking-wide text-ink-faint">
                {sourceTypeLabels[source.sourceType]}
              </span>
            </div>
            <p className="mt-1 text-sm text-ink-soft">{source.organisation}</p>
            {source.notes && <p className="mt-1 text-sm text-ink-faint">{source.notes}</p>}
            <p className="mt-1 text-xs text-ink-faint">
              {source.checkedAt ? `Last checked ${formatDate(source.checkedAt)}` : "Not yet verified"}
            </p>
          </li>
        ))}
      </ul>

      {!allVerified && (
        <p className="mt-4 text-xs text-ink-faint">
          For important decisions, always confirm details with the official source directly.
        </p>
      )}
    </section>
  );
}

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
