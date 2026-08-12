import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sources & verification",
  description:
    "How Norway Unpacked uses primary sources, fact-check dates and freshness classes to keep explanations verifiable.",
  path: "/sources",
});

export default function SourcesPage() {
  return (
    <InfoPage kicker="Trust" title="Sources & verification">
      <p>
        Norway Unpacked separates two kinds of content: documented facts and personal
        perspective. Facts about rules, rights, money, health and official systems are anchored
        in primary sources — government bodies, public agencies and official statistics — rather
        than other blogs. Personal observations from Andreas are always framed as exactly that.
      </p>

      <h2>Where facts come from</h2>
      <p>
        When information can change or matters for real decisions, we prefer the institution
        that actually owns it: the Storting for parliament, NAV for welfare services, the
        Norwegian Tax Administration for taxes, Norges Bank Investment Management for the Oil
        Fund, Statistics Norway for national statistics, and so on. Articles list their most
        important sources in a visible “Sources &amp; fact check” section.
      </p>

      <h2>Fact-check dates</h2>
      <p>
        Articles that depend on changeable information show when they were last fact-checked.
        If an article has not been fact-checked yet, it says so — we never display a
        verification date that isn&apos;t real. For important decisions, always confirm details
        with the official source directly.
      </p>

      <h2>Found an error?</h2>
      <p>
        Corrections make the site better. If something looks wrong or outdated, please reach out
        via the contact page and we will check the claim against its source.
      </p>
    </InfoPage>
  );
}
