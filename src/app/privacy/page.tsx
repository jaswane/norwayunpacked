import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy",
  description: "Norway Unpacked's privacy policy — what data the site does and does not collect.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <InfoPage kicker="Site" title="Privacy">
      <p>
        Norway Unpacked is designed to be a calm site, and that includes how it treats your
        data.
      </p>

      <h2>What we collect today</h2>
      <p>
        The site currently uses no analytics, no advertising scripts and no marketing cookies.
        Pages are served statically; standard technical server logs may exist at the hosting
        provider for security and operations.
      </p>

      <h2>If this changes</h2>
      <p>
        If consent-based analytics is introduced later, it will only run after you actively
        agree, and this policy will be updated to describe exactly what is measured. We will
        not describe hypothetical tools here — this page reflects what the site actually does.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy can be sent via the contact page.
      </p>
    </InfoPage>
  );
}
