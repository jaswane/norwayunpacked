import type { BodyBlock } from "@/content/types";

/**
 * Renders the shared editorial primitives. Reading width is constrained by
 * the parent; fact boxes and timelines may break slightly wider later.
 */
export function ArticleBody({ blocks }: { blocks: BodyBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: BodyBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="pt-4 font-serif text-2xl font-semibold leading-snug tracking-tight">
          {block.text}
        </h2>
      );

    case "paragraph":
      return <p className="text-[1.0625rem] leading-[1.75] text-ink-soft">{block.text}</p>;

    case "shortAnswer":
      return (
        <section aria-label="The short version" className="border-y border-line py-5">
          <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-signal">
            The short version
          </p>
          <p className="font-serif text-lg leading-relaxed text-ink">{block.text}</p>
        </section>
      );

    case "definition":
      return (
        <div className="border-l-2 border-accent bg-cool px-5 py-4">
          <p className="font-serif text-base font-semibold italic">{block.term}</p>
          <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{block.text}</p>
        </div>
      );

    case "factBox":
      return (
        <aside aria-label={block.title} className="border border-line bg-paper-shade p-5">
          <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            {block.title}
          </p>
          <dl className="space-y-2">
            {block.items.map((item) => (
              <div key={item.label} className="flex flex-wrap justify-between gap-x-4 text-sm">
                <dt className="text-ink-soft">{item.label}</dt>
                <dd className="font-medium text-ink">
                  {item.value}
                  {item.asOf && <span className="ml-1 text-xs text-ink-faint">(as of {item.asOf})</span>}
                </dd>
              </div>
            ))}
          </dl>
          {block.note && <p className="mt-3 text-xs text-ink-faint">{block.note}</p>}
        </aside>
      );

    case "timeline":
      return (
        <ol className="space-y-3 border-l border-line-strong pl-5">
          {block.items.map((item) => (
            <li key={item.year} className="text-[0.9375rem] leading-relaxed">
              <span className="mr-2 font-serif font-semibold text-ink">{item.year}</span>
              <span className="text-ink-soft">{item.text}</span>
            </li>
          ))}
        </ol>
      );

    case "andreasNote":
      if (block.text === null) {
        // Personal input has not been supplied — show an explicit editorial
        // placeholder. Never fill this creatively.
        return (
          <aside aria-label="Editorial placeholder" className="border border-dashed border-line-strong bg-paper-shade px-5 py-4">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
              Andreas note — pending
            </p>
            <p className="mt-1 text-sm text-ink-faint">[{block.pending ?? "ANDREAS INPUT REQUIRED"}]</p>
          </aside>
        );
      }
      return (
        <aside aria-label="A note from Andreas" className="border-l-2 border-signal bg-paper-shade px-5 py-4">
          <p className="mb-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            From Andreas
          </p>
          <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{block.text}</p>
        </aside>
      );

    case "editorialNote":
      // Draft scaffolding — schema validation guarantees this never appears
      // in a published article.
      return (
        <div className="border border-dashed border-line-strong px-5 py-3">
          <p className="text-sm italic leading-relaxed text-ink-faint">{block.text}</p>
        </div>
      );
  }
}
