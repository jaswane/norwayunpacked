# Norway Unpacked — project instructions for Claude

English-language knowledge base for understanding Norway. Canonical spec:
`docs/Norway_Unpacked_PRD_v1.1.pdf` (do not reconstruct scope from chat memory —
the PRD is source of truth). Design reference: `docs/design-reference-homepage.png`.
Shared standards: the two other PDFs under `docs/`.

**Positioning:** "Norway Unpacked — Understand Norway. The country, the culture and
how things actually work." A source-verified editorial knowledge base, not a travel
blog, affiliate site or SEO content farm.

## Hard preservation requirements (never break without explicit approval)

1. Public site is ENGLISH only. No Norwegian language version.
2. Public author byline is **Andreas** (no full name).
3. `kontakt@swanecreative.no` appears ONLY on `/contact` — never in header, footer,
   metadata, schema or global components. Other pages link to /contact instead.
4. Footer may credit "Developed by Swane Creative".
5. NEVER invent personal experiences, memories, opinions, anecdotes or quotes for
   Andreas. Missing personal context → explicit placeholder
   (`[ANDREAS INPUT REQUIRED: …]`), handled by the `andreasNote` block with `text: null`.
6. NEVER fabricate fact checks or sources. `factCheckedAt`/`checkedAt` stay `null`
   until a real verification happened. Prefer primary/official sources
   (regjeringen.no, ssb.no, nav.no, nbim.no, lovdata.no, …) for changeable, legal,
   health, economic and statistical information.
7. **Placeholder-first images.** Never replace an image placeholder with stock,
   remote, AI-generated or scraped imagery without explicit approval. Placeholders
   have stable IDs + briefs (PRD Appendix F) and reserve final aspect ratios.
   `ABOUT-ANDREAS-01` must eventually be a real photo of Andreas — never generated.
   **Publication image rule:** every production article has one
   `ARTICLE-HERO-[slug]` record (placeholder during research/review; normally
   approved before publication). Once approved, that record is the single source
   of truth for the article page AND image-based promotion surfaces (homepage
   features, hubs) — never copy image metadata into surface-specific data.
   Surfaces may re-crop via ImagePlaceholder's `aspectRatio`/`focal` props.
8. Editorial Scandinavian design. Not generic Tailwind/SaaS/shadcn aesthetics: no
   pill buttons, glassmorphism, gradient decor, icon-circle feature cards, badge
   soup, universal card shadows or "Recent posts" sidebars.
9. No aggressive advertising; knowledge content never gets commercial CTAs.
10. No AI chat in MVP. Site search is static/local.
11. No CMS or database without documented need. Content is typed repository files.
12. No content mass production — articles ship in small fact-checked waves.
13. **`SITE_INDEXABLE=false` is the default.** The single gate lives in
    `src/lib/site.ts`; robots/sitemap/metadata all derive from it. Open indexing
    only on explicit instruction by setting `SITE_INDEXABLE=true` in production.
14. Future `/go/[slug]` affiliate redirects: noindex, out of sitemap,
    sponsored/nofollow. Not built in Phase 0.
15. No commits or pushes unless explicitly requested.
16. No analytics until a real GA4 ID exists; when added it must be consent-gated.
    Never invent a Measurement ID.

## Architecture

- Next.js App Router (16.x) + TypeScript strict + Tailwind CSS 4 (tokens in
  `src/app/globals.css` `@theme`; Tailwind is an implementation tool, not the
  design identity). Server Components by default — the only client component is
  the mobile nav toggle.
- Fonts: Source Serif 4 (display) + Source Sans 3 (body/UI) via `next/font`.
- Content: typed TS modules under `src/content/` validated with zod on import
  (`src/content/index.ts`) → invalid content fails the build. Article model
  supports slug/seo/dek/excerpt/aliases/topics/relatedTopics/status/reviewStatus/
  freshnessClass (F0–F3)/publishedAt/updatedAt/factCheckedAt/image/sources/body.
- Body = composable editorial primitives (shortAnswer, andreasNote, factBox,
  definition, timeline, figure, editorialNote, …) rendered by
  `src/components/editorial/ArticleBody.tsx`. Published articles may not contain
  `editorialNote` blocks or unfilled Andreas notes (enforced by schema).
- Editorial state: `status` is draft → review → published and `reviewStatus` is
  draft → needs-fact-check → fact-checked. Only `status: "published"` enters the
  sitemap, drops noindex and gets Article schema. Never describe a fact-checked
  article as a draft or vice versa — the labels live in `src/content/status.ts`.
- Every production article needs a research record under `docs/research/` with a
  claim inventory, the sources actually opened, the mutable figures with dates,
  and known gaps. `factCheckedAt` may only be set when that work was really done.
- Categories = the 8 stable worlds (`src/content/categories.ts`). Knowledge graph =
  explicit topic IDs (`src/content/topics.ts`) referenced by `relatedTopics`.
- Routes: `/` + 8 world hubs + `/{world}/{slug}` articles + search + info pages.
  Unknown worlds/slugs 404 via `dynamicParams = false`.
- Search: static in-memory index (`src/lib/search.ts`) over title/aliases/topics/
  excerpt incl. Norwegian aliases. Drafts appear labeled DRAFT (local QA), never in
  sitemap. `/search` is permanently noindex.
- Metadata: `buildMetadata()` in `src/lib/metadata.ts` (canonical on apex
  `https://norwayunpacked.com`). Schema builders in `src/lib/schema.ts` — Article
  schema only for published articles; FAQPage only when a real visible FAQ exists.

## Workflow

- QA chain before any commit: `npm run lint` && `npm run typecheck` && `npm run build`.
- Draft articles: `status: "draft"` → always noindex, excluded from sitemap,
  DRAFT banner on page.
- Current status: see `docs/IMPLEMENTATION_STATUS.md`.
