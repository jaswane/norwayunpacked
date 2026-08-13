import type { CategorySlug } from "./types";

/**
 * Topic registry — stable IDs for the knowledge graph.
 * Articles reference topics via `topics` and `relatedTopics`.
 * A topic may point to an article once one exists; until then it renders as
 * a non-linked "planned" topic. This keeps relations explicit and curated
 * (never recency-based) without a graph database.
 */
export interface Topic {
  id: string;
  label: string;
  /** Slug of the article that covers this topic, once it exists and is published. */
  articleSlug?: string;
  world: CategorySlug;
}

export const topics: Topic[] = [
  // How Norway works
  { id: "oil-fund", label: "Norway's Oil Fund", articleSlug: "oil-fund", world: "how-norway-works" },
  { id: "oil-gas", label: "Oil & gas", world: "how-norway-works" },
  { id: "norwegian-economy", label: "The Norwegian economy", world: "how-norway-works" },
  { id: "welfare-state", label: "The welfare state", world: "how-norway-works" },
  { id: "government-budget", label: "The government budget", world: "how-norway-works" },
  { id: "fiscal-rule", label: "The fiscal rule", world: "how-norway-works" },
  { id: "taxes", label: "Taxes in Norway", world: "how-norway-works" },
  { id: "politics", label: "Norwegian politics", world: "how-norway-works" },
  { id: "nav", label: "NAV", world: "how-norway-works" },
  { id: "eu-eea", label: "Norway and the EU/EEA", world: "how-norway-works" },
  { id: "why-norway-is-rich", label: "Why Norway is rich", world: "how-norway-works" },

  // Culture
  { id: "dugnad", label: "Dugnad", articleSlug: "dugnad", world: "culture" },
  { id: "friluftsliv", label: "Friluftsliv", world: "culture" },
  { id: "cabin-culture", label: "Cabin culture", world: "culture" },
  { id: "17-may", label: "17 May", world: "culture" },
  { id: "janteloven", label: "Janteloven", world: "culture" },
  { id: "volunteer-culture", label: "Volunteer culture", world: "culture" },
  { id: "community-life", label: "Community life", world: "culture" },
  { id: "matpakke", label: "Matpakke", world: "food" },

  // Life in Norway
  { id: "housing-associations", label: "Housing associations", world: "life-in-norway" },

  // Sport
  { id: "sports-clubs", label: "Sports clubs", world: "sport" },

  // History
  { id: "1814", label: "Norway in 1814", world: "history" },
  { id: "viking-age", label: "The Viking Age", world: "history" },
  { id: "oil-history", label: "How oil changed Norway", world: "history" },

  // Nature
  { id: "right-to-roam", label: "The right to roam", articleSlug: "right-to-roam", world: "nature" },
  { id: "wild-camping", label: "Wild camping", world: "nature" },
  { id: "national-parks", label: "National parks", world: "nature" },
  { id: "hiking", label: "Hiking in Norway", world: "nature" },
];

export function getTopic(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}
