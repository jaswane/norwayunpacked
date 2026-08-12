# Implementation status

## Phase 1A voice + hero — final personal voice and article hero (2026-08-12)

- Andreas note replaced with the owner-approved observation (supplied
  2026-08-12). One personal note per article; no second placeholder.
- Article hero approved: owner-supplied photo "Norway's Oil Fund,
  Explained.jpg" (2832×1888, native 3:2, no crop needed). Variants:
  public/images/article/oil-fund-hero-{2400,1200}.webp + 2400 AVIF.
  Originals in public/images root are now ignored via a broadened
  .gitignore rule (/public/images/*.jpg). Licence/credit details beyond
  "owner-supplied" are not on file — confirm before launch.
- Owner's NBIM live-value screenshot kept as local reference only; the
  fund-numbers fact box instead links to NBIM's front page for the live
  figure (new optional `link` field on factBox).
- Per-person section ties the calculation to the millionaire joke.
- Four micro language fixes (dek, "legal body", "spread thin",
  "measured against").

## Phase 1A polish — plain-English rewrite of the Oil Fund article (2026-08-12)

- The article was rewritten for plain international English (B1–B2): shorter
  sentences, common words, one idea per paragraph, technical terms introduced
  with a simple explanation first. 46 body paragraphs, average 47 words,
  longest 91.
- Factual corrections after re-opening primary sources: four petroleum revenue
  components instead of three (environmental taxes and area fees were missing),
  SDFI explained in plain English, the rounding gap in NBIM's published value
  components stated openly, and the structural non-oil deficit (579bn) no longer
  conflated with the actual transfer to the budget (452bn).
- New verified nuance in the fiscal-rule section: the Ministry says spending
  should stay *below* the expected return in good and normal times, and
  estimates that about 2.7 percent in normal years works out at 3 percent over
  time — which is why 2026 is 2.7 percent.
- Public Sources & Fact Check is now compact: one `publicUseSummary` line per
  source instead of dozens of bullets. The detailed `supportsClaims` audit trail
  is kept in the data and the research file.
- **Visibility safeguard:** `previewVisible` / `getDiscoverableArticles()` in
  `src/content/index.ts`. While `SITE_INDEXABLE=false`, drafts and in-review
  articles stay browsable for review. When the gate is opened, they vanish from
  hub lists, search, homepage modules and related links, and their routes are no
  longer generated, so they 404 instead of relying on a noindex tag. Verified by
  building with `SITE_INDEXABLE=true`.
- Second `[ANDREAS INPUT REQUIRED]` placeholder removed; the current officeholder
  at NBIM is no longer named.

## Phase 1A — First production article: Norway's Oil Fund (2026-08-12)

- `/how-norway-works/oil-fund` rewritten as a real, researched article
  (~3,000 words) with all factual claims verified against primary sources on
  2026-08-12. Research record, claim inventory, mutable-figure register and
  known gaps: `docs/research/oil-fund-research.md`.
- Sources: Ministry of Finance (Government Pension Fund Act, management
  mandate, fiscal policy framework, Santiago Principles self-assessment,
  Revised National Budget 2026, Meld. St. 19 (2013–2014)), NBIM (H1 2026
  report, fund value, history, investments), Ministry of Energy /
  Norwegian Offshore Directorate (norskpetroleum.no), SSB (population).
- Status model now used honestly: `status: "review"` +
  `reviewStatus: "fact-checked"`. The article is fact-checked but not
  approved for publication, so it stays noindex, stays out of the sitemap,
  and gets no Article schema (BreadcrumbList only).
- Content/UI additions this sprint:
  - `figure` body block — inline editorial image/diagram using the existing
    placeholder-first image model (used for a money-flow diagram brief).
  - `src/content/status.ts` — single source of truth for honest status
    labels; "Draft" and "In review" are no longer conflated in the article
    banner, hub list, search results or homepage card.
  - Sources block now renders `supportsClaims` per source, and states that
    Andreas notes are personal observation not covered by the sources.
- Two image briefs, both placeholders: `ARTICLE-HERO-oil-fund` (documentary
  North Sea installation, 3:2) and `ARTICLE-DIAGRAM-oil-fund-flow` (16:9).
- One `[ANDREAS INPUT REQUIRED]` placeholder remains, for a personal
  observation near the end of the article.


## Phase 0.6 — Hero image test with real local asset (2026-08-12)

- HOME-HERO-01 is now an approved asset (explicit owner decision this
  sprint): owner-supplied licensed stock `Depositphotos_380868968_XL.jpg`
  (4950×3300, Lofoten winter scene). Original kept untouched.
- Optimized variants in `public/images/hero/`: home-hero-2400.webp (494 KB),
  home-hero-2400.avif (336 KB), home-hero-1200.webp (156 KB). next/image
  serves responsive widths from the 2400 WebP master.
- Hero rebuilt as an integrated scene: on desktop (≥1024) the image fills
  the section full-bleed behind the text with a paper gradient fade
  (opaque left → transparent right) for readability; on mobile the text
  sits on paper with the full-width 3:2 image below. One shared <Image>
  element (single preload, no duplicate download), priority for LCP,
  CLS measured 0.
- The other home sections still use placeholders per the
  placeholder-first workflow.

## Phase 0.5 — Design calibration + SEO verification (2026-08-12)

- Brand mark added: simple local SVG (navy disc, paper mountains, orange
  fjord band) in `src/components/BrandMark.tsx` + `src/app/icon.svg`
  (favicon). Preliminary — refine before launch.
- Eight worlds now render as one editorial row on ≥1280 px (4×2 medium,
  2×4 mobile) with local monochrome line icons (`src/components/WorldIcons.tsx`),
  hairline separators, no circles/badges/shadows.
- Hero: editorial kicker (rule + small caps, no border box), image column
  given more visual weight (1fr/1.15fr, full column height on desktop).
- Culture section: intro + Explore all → as first cell of the row on xl.
- Andreas: circular portrait placeholder + honest three-item value row.
- Placeholder labels clamped (line-clamp) so small slots stay quiet.
- Verified: self-referencing apex canonicals on all representative routes,
  robots closed, sitemap empty, SITE_INDEXABLE still false.

## Phase 0 — Project foundation (this session, 2026-08-12)

Delivered:

- Next.js 16.3 App Router + TypeScript strict + Tailwind 4, git initialized (main)
- Design tokens (editorial Scandinavian palette, Source Serif 4 / Source Sans 3)
- Site shell: header, mobile nav, footer, skip link, 404
- Indexability gate (`SITE_INDEXABLE`, default false) driving robots, sitemap and
  per-page robots metadata
- Typed content model with zod validation at build time (articles, sources,
  freshness classes F0–F3, image placeholders, body blocks)
- Category registry (8 worlds) + topic registry (knowledge graph)
- Homepage v1 based on the design reference (all image slots as Appendix F
  placeholders)
- 8 world hub pages, article route `/{world}/{slug}`, info pages
  (about/sources/editorial-policy/contact/privacy/disclaimer)
- Static site search with Norwegian aliases + no-results state
- One DRAFT pilot article (`oil-fund`) testing homepage → hub → article →
  sources → related topics. No facts researched/verified yet — body is explicit
  editorial scaffolding.

Not done (deliberately out of Phase 0 scope):

- No real article content, no fact-checking, no source verification
- No real images (placeholder-first workflow)
- No analytics/consent (no GA4 ID exists)
- No affiliate system, no /go route
- No newsletter (no real workflow exists)
- No deployment to Vercel yet
- Nothing committed/pushed (awaiting explicit instruction)

## Next: Phase 1+ (per PRD roadmap)

Validate design shell against the visual direction, then build the
content/source system out with the five pilot articles (Oil Fund, Dugnad,
Short History, Right to Roam, Oslo) with real research and verified sources.
