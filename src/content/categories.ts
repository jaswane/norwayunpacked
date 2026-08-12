import type { CategorySlug } from "./types";

/**
 * The eight editorial worlds (PRD section 8). Categories are stable —
 * do not add new ones per editorial idea; relationships live in topics.
 */
export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short name used in tight navigation contexts. */
  navLabel: string;
  description: string;
  /** Honest hub intro while the world is still being filled. */
  hubIntro: string;
}

export const categories: Category[] = [
  {
    slug: "how-norway-works",
    name: "How Norway Works",
    navLabel: "How Norway Works",
    description: "Politics, economy, system and society explained.",
    hubIntro:
      "The systems, institutions and choices that shape modern Norway — from the Oil Fund and the welfare state to politics, NAV and Norway's relationship with the EU.",
  },
  {
    slug: "life-in-norway",
    name: "Life in Norway",
    navLabel: "Life in Norway",
    description: "Daily life, practical things and what nobody tells you.",
    hubIntro:
      "Work, housing, family life and the practical systems you meet when you actually live here — explained the way a local would explain them.",
  },
  {
    slug: "culture",
    name: "Culture & Traditions",
    navLabel: "Culture",
    description: "Customs, holidays and the unspoken rules.",
    hubIntro:
      "Dugnad, friluftsliv, cabin culture, 17 May and the quiet social rules Norwegians rarely think about — until someone asks.",
  },
  {
    slug: "history",
    name: "History & Vikings",
    navLabel: "History & Vikings",
    description: "From ancient history to the Viking Age and beyond.",
    hubIntro:
      "From the Viking Age through 1814 and the war years to the oil age — the history that explains why Norway works the way it does.",
  },
  {
    slug: "travel",
    name: "Travel & Places",
    navLabel: "Travel",
    description: "Destinations, tips and itineraries for your trip.",
    hubIntro:
      "Cities, regions and honest first-visit guidance — written to help you understand places, not just photograph them.",
  },
  {
    slug: "nature",
    name: "Nature & Outdoors",
    navLabel: "Nature",
    description: "Mountains, fjords, hiking and life close to nature.",
    hubIntro:
      "Fjords, mountains, the right to roam and the northern lights — and why life close to nature is such a large part of being Norwegian.",
  },
  {
    slug: "food",
    name: "Food",
    navLabel: "Food",
    description: "What we eat, what to try and why it matters.",
    hubIntro:
      "Brunost, matpakke, waffles and Friday taco — what Norwegians actually eat, and what the food says about the country.",
  },
  {
    slug: "sport",
    name: "Sport",
    navLabel: "Sport",
    description: "From football to skiing — the sports we love.",
    hubIntro:
      "Skiing, football, handball and biathlon — the sports Norwegians grow up with and the culture around them.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
