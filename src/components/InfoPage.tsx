/** Shared shell for the About/policy pages — one H1, calm reading column. */
export function InfoPage({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-page px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-reading">
        {kicker && (
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
            {kicker}
          </p>
        )}
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.75] text-ink-soft [&_h2]:pt-4 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink">
          {children}
        </div>
      </div>
    </div>
  );
}
