# Norway Unpacked

**Understand Norway.** The country, the culture and how things actually work.

An English-language, source-verified editorial knowledge base about Norway —
published at [norwayunpacked.com](https://norwayunpacked.com), developed by
Swane Creative.

## Stack

- Next.js (App Router) + TypeScript strict
- Tailwind CSS 4 (design tokens in `src/app/globals.css`)
- Typed repository-based content validated with zod — no CMS, no database
- Static site search — no external services
- Hosting: Vercel

## Development

```bash
npm install
npm run dev        # local dev server
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run build      # production build (also validates all content via zod)
```

## Key facts

- **Indexability gate:** the site is non-indexable by default. The single switch
  is `SITE_INDEXABLE` (see `.env.example` and `src/lib/site.ts`). Robots, sitemap
  and per-page metadata all derive from it.
- **Content:** articles live as typed TS modules in `src/content/articles/` and are
  registered in `src/content/index.ts`. Invalid content fails the build.
- **Images:** placeholder-first workflow. Every image slot has a stable ID and
  brief; real assets require explicit editorial approval (see PRD Appendix F).
- **Project rules:** see `CLAUDE.md`. Canonical product spec:
  `docs/Norway_Unpacked_PRD_v1.1.pdf`.
