import { z } from "zod";

/**
 * Content model — typed, repository-based content (no CMS in Phase 0).
 * All articles are validated with zod when the article registry is imported,
 * which means a schema violation fails typecheck/build rather than shipping.
 */

export const categorySlugs = [
  "how-norway-works",
  "life-in-norway",
  "culture",
  "history",
  "travel",
  "nature",
  "food",
  "sport",
] as const;

export const categorySlugSchema = z.enum(categorySlugs);
export type CategorySlug = z.infer<typeof categorySlugSchema>;

/**
 * Image assets follow the placeholder-first workflow (PRD Appendix F).
 * A slot is a layout contract: stable ID, written brief, final aspect ratio.
 * `status` only becomes "approved" through an explicit editorial decision —
 * never because an asset was found, generated or hotlinked.
 */
export const imageAssetSchema = z
  .object({
    id: z.string().min(1),
    status: z.enum(["placeholder", "approved"]),
    src: z.string().min(1).optional(),
    brief: z.string().min(1),
    alt: z.string().min(1),
    aspectRatio: z.string().regex(/^\d+\s*\/\s*\d+$/, "Use CSS aspect-ratio form, e.g. \"16 / 9\""),
    focalPoint: z.string().optional(),
    source: z.string().optional(),
    credit: z.string().optional(),
    license: z.string().optional(),
  })
  .superRefine((img, ctx) => {
    if (img.status === "approved" && !img.src) {
      ctx.addIssue({ code: "custom", message: `Approved image ${img.id} must have a src.` });
    }
    if (img.status === "placeholder" && img.src) {
      ctx.addIssue({ code: "custom", message: `Placeholder ${img.id} must not carry a src.` });
    }
  });

export type ImageAsset = z.infer<typeof imageAssetSchema>;

/**
 * Source registry entry. `checkedAt` is null until the source has actually
 * been opened and verified — never pre-fill it.
 */
export const sourceRefSchema = z.object({
  name: z.string().min(1),
  organisation: z.string().min(1),
  url: z.string().url(),
  sourceType: z.enum(["official", "data", "research", "reference", "journalism", "specialist"]),
  checkedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable(),
  /**
   * Detailed internal audit trail: the specific claims this source backs.
   * Kept in the data for future fact-check refreshes; not rendered publicly,
   * because a reader wants to know roughly what a source was used for, not
   * read a compliance report.
   */
  supportsClaims: z.array(z.string()).optional(),
  /** One short line shown to readers: what this source was used for. */
  publicUseSummary: z.string().optional(),
  notes: z.string().optional(),
});

export type SourceRef = z.infer<typeof sourceRefSchema>;

/** Freshness classes (PRD section 7). */
export const freshnessClassSchema = z.enum(["F0", "F1", "F2", "F3"]);
export type FreshnessClass = z.infer<typeof freshnessClassSchema>;

/**
 * Article body blocks — the shared editorial primitives.
 * Templates stay flexible: articles compose the primitives they need.
 */
const paragraphBlock = z.object({ type: z.literal("paragraph"), text: z.string().min(1) });
const headingBlock = z.object({ type: z.literal("heading"), text: z.string().min(1) });
const shortAnswerBlock = z.object({ type: z.literal("shortAnswer"), text: z.string().min(1) });
const definitionBlock = z.object({
  type: z.literal("definition"),
  term: z.string().min(1),
  text: z.string().min(1),
});
const factBoxBlock = z.object({
  type: z.literal("factBox"),
  title: z.string().min(1),
  items: z.array(z.object({ label: z.string(), value: z.string(), asOf: z.string().optional() })),
  note: z.string().optional(),
  /** Small trailing source link, e.g. to a live official figure. Not a CTA. */
  link: z.object({ label: z.string().min(1), href: z.string().url() }).optional(),
});
const timelineBlock = z.object({
  type: z.literal("timeline"),
  items: z.array(z.object({ year: z.string(), text: z.string() })),
});
/**
 * Personal context from Andreas. `text` is null until Andreas has actually
 * supplied the observation; `pending` describes what is needed. Rendering a
 * fabricated note is prohibited — the UI shows an explicit editorial
 * placeholder instead.
 */
const andreasNoteBlock = z.object({
  type: z.literal("andreasNote"),
  text: z.string().nullable(),
  pending: z.string().optional(),
});
/** Visible editorial scaffolding for drafts — never shipped on published pages. */
const editorialNoteBlock = z.object({ type: z.literal("editorialNote"), text: z.string().min(1) });
/**
 * An inline editorial image or explanatory graphic, with an optional caption.
 * Uses the same placeholder-first image model as article heroes, so a planned
 * diagram or photograph reserves its final ratio and carries a written brief
 * long before the asset exists.
 */
const figureBlock = z.object({
  type: z.literal("figure"),
  image: imageAssetSchema,
  caption: z.string().min(1).optional(),
});

export const bodyBlockSchema = z.discriminatedUnion("type", [
  paragraphBlock,
  headingBlock,
  shortAnswerBlock,
  definitionBlock,
  factBoxBlock,
  timelineBlock,
  andreasNoteBlock,
  editorialNoteBlock,
  figureBlock,
]);

export type BodyBlock = z.infer<typeof bodyBlockSchema>;

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

export const articleSchema = z
  .object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    seoTitle: z.string().min(1),
    description: z.string().min(1),
    /** Dek — the one-or-two sentence editorial standfirst under the H1. */
    dek: z.string().min(1),
    excerpt: z.string().min(1),
    category: categorySlugSchema,
    subcategory: z.string().optional(),
    /** Search aliases incl. Norwegian terms, e.g. "oljefondet". */
    aliases: z.array(z.string()),
    /** Topic IDs this article is about (see src/content/topics.ts). */
    topics: z.array(z.string()),
    /** Curated knowledge-graph relations — topic IDs, never "recent posts". */
    relatedTopics: z.array(z.string()),
    author: z.literal("Andreas"),
    status: z.enum(["draft", "review", "published"]),
    reviewStatus: z.enum(["draft", "needs-fact-check", "fact-checked"]),
    publishedAt: isoDate.nullable(),
    updatedAt: isoDate.nullable(),
    /** Null until an actual fact check happened. Never fake this. */
    factCheckedAt: isoDate.nullable(),
    freshnessClass: freshnessClassSchema,
    commercialIntent: z.enum(["none", "editorial", "transactional"]),
    image: imageAssetSchema,
    sources: z.array(sourceRefSchema),
    body: z.array(bodyBlockSchema),
  })
  .superRefine((article, ctx) => {
    if (article.status === "published") {
      if (!article.publishedAt) {
        ctx.addIssue({ code: "custom", message: `${article.slug}: published article needs publishedAt.` });
      }
      if (article.sources.length === 0) {
        ctx.addIssue({ code: "custom", message: `${article.slug}: published article needs sources.` });
      }
      if (article.sources.some((s) => s.checkedAt === null)) {
        ctx.addIssue({ code: "custom", message: `${article.slug}: published article has unverified sources.` });
      }
      if ((article.freshnessClass === "F2" || article.freshnessClass === "F3") && !article.factCheckedAt) {
        ctx.addIssue({ code: "custom", message: `${article.slug}: published F2/F3 article needs factCheckedAt.` });
      }
      if (article.body.some((b) => b.type === "editorialNote")) {
        ctx.addIssue({ code: "custom", message: `${article.slug}: published article may not contain editorial notes.` });
      }
      if (article.body.some((b) => b.type === "andreasNote" && b.text === null)) {
        ctx.addIssue({ code: "custom", message: `${article.slug}: published article has an unfilled Andreas note.` });
      }
      if (article.reviewStatus !== "fact-checked") {
        ctx.addIssue({ code: "custom", message: `${article.slug}: published article must be fact-checked.` });
      }
    }
  });

export type Article = z.infer<typeof articleSchema>;
