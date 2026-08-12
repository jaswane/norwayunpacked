import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Editorial policy",
  description:
    "Norway Unpacked's editorial policy: authorship, AI assistance, source verification, corrections and commercial independence.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <InfoPage kicker="Trust" title="Editorial policy">
      <h2>Authorship</h2>
      <p>
        Articles are published under the byline “By Andreas”. Personal observations are genuine
        and are never invented; where an article would benefit from personal context that
        hasn&apos;t been written yet, the section is left out or clearly marked as pending.
      </p>

      <h2>AI assistance</h2>
      <p>
        AI tools may assist with research, drafting, structure and quality checks. They are
        never allowed to invent personal experiences, fabricate facts, or mark something as
        fact-checked when it isn&apos;t. Every published claim that matters is verified by a
        human against its source.
      </p>

      <h2>Sources and corrections</h2>
      <p>
        Changeable, legal, health-related, economic and official information is anchored in
        primary sources. When we find or receive a report of an error, we check the current
        official source, correct the article and update its fact-check information. Material
        corrections are noted.
      </p>

      <h2>Commercial independence</h2>
      <p>
        Explanations and opinions are not for sale. Knowledge content — how Norway works, its
        systems and institutions — carries no commercial calls to action. If travel-related
        pages later include commercial links, they will be clearly disclosed and will never
        change a factual explanation.
      </p>
    </InfoPage>
  );
}
