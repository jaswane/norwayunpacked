import type { Article } from "../types";

/**
 * DRAFT — architecture pilot for the vertical journey
 * homepage → category → article → sources → related topics.
 *
 * This is deliberately an editorial template, not a finished article.
 * No facts have been researched or verified in Phase 0, so the body uses
 * explicit editorial scaffolding instead of plausible-sounding content.
 * The draft is excluded from the sitemap and carries noindex.
 */
export const oilFundArticle: Article = {
  slug: "oil-fund",
  title: "Norway's Oil Fund, Explained",
  seoTitle: "Norway's Oil Fund, Explained — how it works",
  description:
    "How Norway turned oil income into the world's largest sovereign wealth fund, what the fund owns, and why the state can't just spend the money.",
  dek: "How Norway turned oil and gas income into a national savings fund — and why the state can't just spend the money.",
  excerpt:
    "What the Oil Fund is, where the money comes from and how the fiscal rule limits what politicians can spend.",
  category: "how-norway-works",
  subcategory: "Economy",
  aliases: ["oil fund", "oljefondet", "sovereign wealth fund", "government pension fund global", "pension fund"],
  topics: ["oil-fund"],
  relatedTopics: ["oil-gas", "norwegian-economy", "welfare-state", "government-budget", "fiscal-rule", "taxes"],
  author: "Andreas",
  status: "draft",
  reviewStatus: "draft",
  publishedAt: null,
  updatedAt: null,
  factCheckedAt: null,
  freshnessClass: "F3",
  commercialIntent: "none",
  image: {
    id: "ARTICLE-HERO-oil-fund",
    status: "placeholder",
    brief:
      "North Sea offshore / energy visual for oil and Oil Fund context. Wide editorial photograph. Avoid generic oil-barrel graphics or misleading fund imagery.",
    alt: "Offshore platform on the Norwegian continental shelf",
    aspectRatio: "21 / 9",
  },
  sources: [
    {
      name: "Norges Bank Investment Management",
      organisation: "Norges Bank",
      url: "https://www.nbim.no/",
      sourceType: "official",
      checkedAt: null,
      notes: "Planned primary source for fund value, holdings and mandate. Not yet opened and verified.",
    },
    {
      name: "Ministry of Finance",
      organisation: "Government of Norway",
      url: "https://www.regjeringen.no/",
      sourceType: "official",
      checkedAt: null,
      notes: "Planned primary source for the fiscal rule and budget policy. Not yet opened and verified.",
    },
  ],
  body: [
    {
      type: "shortAnswer",
      text: "[DRAFT — the 40–80 word direct answer goes here once facts are verified against NBIM and the Ministry of Finance. It will state what the fund is, roughly how large it is with an as-of date, and why spending from it is limited by the fiscal rule.]",
    },
    {
      type: "editorialNote",
      text: "This article is a Phase 0 architecture pilot. Every section below is scaffolding for the editorial team — no factual content has been researched or fact-checked yet.",
    },
    { type: "heading", text: "What the fund actually is" },
    {
      type: "editorialNote",
      text: "CONTENT PENDING VERIFICATION: the fund's official name (Government Pension Fund Global), who manages it, and what it invests in. Source: NBIM.",
    },
    { type: "heading", text: "Where the money comes from" },
    {
      type: "editorialNote",
      text: "CONTENT PENDING VERIFICATION: petroleum revenues, state ownership and how income flows into the fund. Sources: NBIM, Ministry of Finance.",
    },
    { type: "heading", text: "The fiscal rule — why Norway can't just spend it" },
    {
      type: "editorialNote",
      text: "CONTENT PENDING VERIFICATION: the fiscal rule (handlingsregelen), the expected-return percentage and how it enters the government budget. Source: Ministry of Finance.",
    },
    {
      type: "andreasNote",
      text: null,
      pending: "ANDREAS INPUT REQUIRED: personal observation about how ordinary Norwegians talk (or don't talk) about the Oil Fund in daily life.",
    },
    { type: "heading", text: "Common misunderstandings" },
    {
      type: "editorialNote",
      text: "CONTENT PENDING VERIFICATION: typical misconceptions, e.g. that the fund is a pot of cash politicians can freely use, or that it pays individual pensions directly.",
    },
  ],
};
