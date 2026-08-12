import type { Article } from "./types";

/**
 * Honest status labels for work that is not yet published.
 *
 * A "draft" and a fact-checked article awaiting editorial sign-off are
 * different things, and the UI must not describe one as the other. These
 * labels are the single place that mapping lives.
 */
export interface StatusLabel {
  /** Short badge text, e.g. next to a headline in a list. */
  badge: string;
  /** One-sentence banner explaining the state to the reader. */
  banner: string;
  /** Heading for the "not yet published" group on hub pages. */
  groupHeading: string;
}

export function statusLabel(article: Article): StatusLabel | null {
  if (article.status === "published") return null;

  if (article.status === "review") {
    return article.reviewStatus === "fact-checked"
      ? {
          badge: "In review",
          banner:
            "This article has been researched and fact-checked against the sources listed at the end, but it is awaiting final editorial approval and is not yet published.",
          groupHeading: "In review — awaiting editorial approval",
        }
      : {
          badge: "In review",
          banner:
            "This article is in editorial review. Its factual claims have not been fully checked yet, so treat details as provisional.",
          groupHeading: "In review",
        };
  }

  return {
    badge: "Draft",
    banner:
      "This article is an unpublished draft. Content has not been fact-checked and is not final.",
    groupHeading: "In production — draft previews",
  };
}
