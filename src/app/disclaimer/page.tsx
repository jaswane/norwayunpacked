import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description: "What Norway Unpacked's content is — and what it is not.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <InfoPage kicker="Site" title="Disclaimer">
      <p>
        Norway Unpacked explains Norwegian systems, culture and everyday life as clearly and
        accurately as we can, with visible sources for facts that matter.
      </p>
      <p>
        The site is independent and is not affiliated with any Norwegian government body or
        public institution. Content is general information, not legal, financial, medical or
        immigration advice. Rules and numbers change; for decisions that affect you, always
        confirm the current details with the official source — articles link to them where
        relevant.
      </p>
      <p>
        If you find something that looks wrong or outdated, please tell us via the contact
        page and we will check it.
      </p>
    </InfoPage>
  );
}
