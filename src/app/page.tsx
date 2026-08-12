import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/content/categories";
import { homeImages } from "@/content/homeImages";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { worldIcons } from "@/components/WorldIcons";
import { SearchForm } from "@/components/SearchForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { organizationSchema, webSiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const base = buildMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline} How the country actually works`,
  description: siteConfig.description,
  path: "/",
});

export const metadata: Metadata = {
  ...base,
  title: { absolute: `${siteConfig.name} — ${siteConfig.tagline} How the country actually works` },
};

const popularSearches = [
  { label: "Oil Fund", q: "oil fund" },
  { label: "Janteloven", q: "janteloven" },
  { label: "Tipping", q: "tipping" },
  { label: "NAV", q: "nav" },
  { label: "Visiting in winter", q: "visiting in winter" },
];

const cultureCards = [
  { image: homeImages.culture1, title: "Why do Norwegians take their shoes off indoors?", world: "Life in Norway" },
  { image: homeImages.culture2, title: "What is a Norwegian matpakke?", world: "Food" },
  { image: homeImages.culture3, title: "Why do we eat so many hot dogs?", world: "Food" },
  { image: homeImages.culture4, title: "What is friluftsliv?", world: "Culture & Traditions" },
  { image: homeImages.culture5, title: "What happens on 17 May?", world: "Culture & Traditions" },
];

const worksCards = [
  {
    image: homeImages.works1,
    title: "Norway's Oil Fund, explained",
    text: "How Norway turned oil into the world's largest sovereign wealth fund — and why the state can't just spend the money.",
    href: "/how-norway-works/oil-fund",
    draft: true,
  },
  {
    image: homeImages.works2,
    title: "How Norwegian politics works",
    text: "Parties, elections, the Storting and how decisions are actually made.",
  },
  {
    image: homeImages.works3,
    title: "The Norwegian welfare state",
    text: "Healthcare, education, parental leave and the safety net that covers (almost) everyone.",
  },
  {
    image: homeImages.works4,
    title: "Why isn't Norway in the EU?",
    text: "The history, the referendums and why Norway chose a different path.",
  },
  {
    image: homeImages.works5,
    title: "What is NAV?",
    text: "Norway's labour and welfare administration — what they do and how it affects you.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webSiteSchema()} />

      {/* Hero — text integrated over the scene on desktop, stacked on mobile */}
      <section className="relative isolate border-b border-line">
        <div className="relative z-10 mx-auto max-w-page px-5 pt-12 lg:px-8 lg:py-24">
          <div className="lg:max-w-[33rem]">
            <p className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-signal" />
              Understand the country. Beyond the clichés.
            </p>
            <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Norway,
              <br />
              unpacked<span className="text-signal">.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Clear explanations. Local insights. No fluff. Everything you need to understand
              Norway — the country, the culture and how things actually work.
            </p>
            <div className="mt-8">
              <SearchForm />
            </div>
            <p className="mt-4 text-sm text-ink-faint">
              Popular searches:{" "}
              {popularSearches.map((item, i) => (
                <span key={item.q}>
                  <Link
                    href={`/search?q=${encodeURIComponent(item.q)}`}
                    className="text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
                  >
                    {item.label}
                  </Link>
                  {i < popularSearches.length - 1 && <span aria-hidden="true"> · </span>}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/*
          One shared image element for both breakpoints (single preload, no
          duplicate download): in-flow 3:2 block under the text on mobile,
          full-bleed scene behind the section on desktop. Aspect ratio /
          absolute positioning reserve the space — no CLS.
        */}
        <div className="relative mt-10 aspect-[3/2] lg:absolute lg:inset-0 lg:-z-10 lg:mt-0 lg:aspect-auto">
          <Image
            src={homeImages.hero.src!}
            alt={homeImages.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_40%]"
          />
          {/* Paper fade keeps the text column calm and readable on desktop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-gradient-to-r from-paper from-32% via-paper/75 via-52% to-paper/0 to-78% lg:block"
          />
        </div>
      </section>

      {/* The eight worlds — one editorial row on wide desktop */}
      <section aria-labelledby="worlds-heading" className="border-b border-line bg-paper-shade">
        <div className="mx-auto max-w-page px-5 py-10 lg:px-8">
          <h2 id="worlds-heading" className="sr-only">
            Explore Norway by topic
          </h2>
          <ul className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-4 xl:grid-cols-8">
            {categories.map((category) => {
              const Icon = worldIcons[category.slug];
              return (
                <li key={category.slug} className="bg-paper">
                  <Link
                    href={`/${category.slug}`}
                    className="flex h-full flex-col items-center gap-2 px-3 py-6 text-center transition-colors hover:bg-cool"
                  >
                    <span className="text-ink" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="font-serif text-[0.9375rem] font-semibold leading-snug">
                      {category.name}
                    </span>
                    <span className="text-xs leading-snug text-ink-soft">
                      {category.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Things Norwegians rarely think about */}
      <section aria-labelledby="culture-heading" className="border-b border-line">
        <div className="mx-auto max-w-page px-5 py-14 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-6">
            <div className="sm:col-span-2 xl:col-span-1 xl:pr-4">
              <h2 id="culture-heading" className="font-serif text-2xl font-bold leading-snug tracking-tight xl:text-[1.625rem]">
                Things Norwegians rarely think about
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The small things that often surprise visitors.
              </p>
              <p className="mt-4">
                <Link
                  href="/culture"
                  className="text-sm font-medium text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
                >
                  Explore all →
                </Link>
              </p>
            </div>
            {cultureCards.map((card) => (
              <div key={card.title}>
                <ImagePlaceholder image={card.image} sizes="(min-width: 1280px) 16vw, (min-width: 640px) 50vw, 100vw" className="w-full" />
                <h3 className="mt-3 font-serif text-base font-semibold leading-snug">{card.title}</h3>
                <p className="mt-1 text-xs text-ink-faint">
                  {card.world} · <span className="uppercase tracking-wide">Coming soon</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep dives: How Norway works */}
      <section aria-labelledby="works-heading" className="border-b border-line bg-cool">
        <div className="mx-auto max-w-page px-5 py-14 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-lg">
              <h2 id="works-heading" className="font-serif text-3xl font-bold tracking-tight">
                Deep dives: How Norway works
              </h2>
              <p className="mt-2 text-[0.9375rem] text-ink-soft">
                Understand the systems, institutions and choices that shape modern Norway.
              </p>
            </div>
            <Link
              href="/how-norway-works"
              className="text-sm font-medium text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
            >
              See the section →
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {worksCards.map((card) => (
              <li key={card.title} className="flex flex-col">
                <ImagePlaceholder image={card.image} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="w-full" />
                <h3 className="mt-3 font-serif text-base font-semibold leading-snug">
                  {card.href ? (
                    <Link href={card.href} className="transition-colors hover:text-accent">
                      {card.title}
                    </Link>
                  ) : (
                    card.title
                  )}
                </h3>
                <p className="mt-1.5 text-[0.8125rem] leading-snug text-ink-soft">{card.text}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-ink-faint">
                  {card.draft ? "Draft preview" : "Coming soon"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Andreas */}
      <section aria-labelledby="andreas-heading" className="border-b border-line">
        <div className="mx-auto max-w-page px-5 py-14 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
            <ImagePlaceholder
              image={homeImages.andreas}
              sizes="180px"
              shape="circle"
              className="mx-auto w-40 md:w-full"
            />
            <div className="max-w-xl">
              <h2 id="andreas-heading" className="font-serif text-3xl font-bold tracking-tight">
                Hi, I&apos;m Andreas.
              </h2>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-soft">
                I&apos;m Norwegian, and Norway Unpacked is my way of explaining the things that
                make this country tick — with honest local context and facts you can trace to
                their sources.
              </p>
              <p className="mt-4">
                <Link
                  href="/about"
                  className="text-sm font-medium text-accent underline decoration-line-strong underline-offset-4 hover:decoration-accent"
                >
                  More about me and this site →
                </Link>
              </p>
            </div>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-y-5 border-t border-line pt-6 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-line">
            <div className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <dt className="font-serif text-base font-semibold">Local perspective</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                Written from the inside, by a Norwegian.
              </dd>
            </div>
            <div className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <dt className="font-serif text-base font-semibold">Clear &amp; honest</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                Complex things, explained simply — trade-offs included.
              </dd>
            </div>
            <div className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <dt className="font-serif text-base font-semibold">Researched</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                Facts anchored in primary and official sources.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
