import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { homeImages } from "@/content/homeImages";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "About Norway Unpacked — a personal, source-verified English knowledge base for understanding Norway, written by Andreas.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <InfoPage kicker="About" title="About Norway Unpacked">
      <p>
        Norway Unpacked is an English-language knowledge base for understanding Norway — the
        country, the culture and how things actually work. It is written for curious foreigners,
        tourists, people considering a life in Norway, and anyone who wants a clear answer with
        the sources to back it up.
      </p>

      <div className="max-w-[200px]">
        <ImagePlaceholder image={homeImages.andreas} sizes="200px" className="w-full" />
      </div>

      <h2>Who writes this?</h2>
      <p>
        Articles are written by Andreas, a Norwegian who explains the country from the inside.
        Personal observations are always clearly framed as personal perspective; factual claims
        are anchored in primary and trusted sources.
      </p>

      <h2>How the site works</h2>
      <p>
        Norway Unpacked treats sources as a product feature. Facts that can change — rules,
        rights, numbers and official procedures — are traced to official sources, and important
        articles show when they were last fact-checked. You can read more about this on the{" "}
        <Link href="/sources" className="text-accent underline decoration-line-strong underline-offset-4">
          sources page
        </Link>{" "}
        and in the{" "}
        <Link href="/editorial-policy" className="text-accent underline decoration-line-strong underline-offset-4">
          editorial policy
        </Link>
        .
      </p>

      <h2>Who runs it</h2>
      <p>
        Norway Unpacked is developed and operated by Swane Creative. Questions and corrections
        are welcome via the{" "}
        <Link href="/contact" className="text-accent underline decoration-line-strong underline-offset-4">
          contact page
        </Link>
        .
      </p>
    </InfoPage>
  );
}
