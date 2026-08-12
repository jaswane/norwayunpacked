import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "How to contact Norway Unpacked with questions, feedback or corrections.",
  path: "/contact",
});

/**
 * The public contact address appears ONLY on this page — never in the
 * header, footer, metadata, schema or any global component.
 */
export default function ContactPage() {
  return (
    <InfoPage kicker="Contact" title="Get in touch">
      <p>
        Questions, feedback or corrections are always welcome — especially corrections. If you
        think something on Norway Unpacked is wrong or outdated, we want to know.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:kontakt@swanecreative.no"
          className="text-accent underline decoration-line-strong underline-offset-4"
        >
          kontakt@swanecreative.no
        </a>
      </p>
      <p>
        Norway Unpacked is developed and operated by Swane Creative. We read everything, but
        it may take a few days before you get a reply.
      </p>
    </InfoPage>
  );
}
