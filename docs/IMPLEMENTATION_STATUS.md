# Implementation status

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
