import type { ImageAsset } from "./types";

/**
 * Homepage image slots — layout contracts from PRD Appendix F.
 * All placeholders until assets are explicitly approved.
 * ABOUT-ANDREAS-01 must eventually be a real photo of Andreas — never
 * a generated person.
 */
export const homeImages: Record<string, ImageAsset> = {
  hero: {
    id: "HOME-HERO-01",
    // Approved by the owner in the Phase 0.6 hero test (2026-08-12):
    // owner-supplied licensed stock placed in public/images.
    // Original: Depositphotos_380868968_XL.jpg (4950×3300). Optimized
    // variants live in public/images/hero (2400/1200 WebP + 2400 AVIF).
    status: "approved",
    src: "/images/hero/home-hero-2400.webp",
    brief:
      "Wide editorial Norway scene with space for hero text. Recognizably Norwegian, but not pure postcard tourism — fjord or mountains with signs of real life such as a house, road, ferry or settlement.",
    alt: "Red wooden cabins on a rocky shoreline beneath steep snow-covered mountains on the Norwegian coast",
    aspectRatio: "3 / 2",
    source: "Owner-supplied licensed stock (Depositphotos_380868968_XL.jpg)",
    credit: "Depositphotos",
    license: "Depositphotos Standard License",
  },
  culture1: {
    id: "HOME-CULTURE-01",
    status: "placeholder",
    brief: "Shoes by the entrance of a normal Norwegian home. Everyday and believable, not luxury interior stock.",
    alt: "Shoes lined up by the entrance of a Norwegian home",
    aspectRatio: "3 / 2",
  },
  culture2: {
    id: "HOME-CULTURE-02",
    status: "placeholder",
    brief: "A typical Norwegian matpakke. Simple packed lunch, believable everyday presentation, not restaurant styling.",
    alt: "A typical Norwegian matpakke packed lunch",
    aspectRatio: "3 / 2",
  },
  culture3: {
    id: "HOME-CULTURE-03",
    status: "placeholder",
    brief: "Norwegian pølse in a Norwegian context — kiosk, outing or 17 May — not a generic American hot dog image.",
    alt: "Norwegian pølse in lompe at a kiosk",
    aspectRatio: "3 / 2",
  },
  culture4: {
    id: "HOME-CULTURE-04",
    status: "placeholder",
    brief: "Cabin / friluftsliv scene that feels used and real. Avoid luxury-property advertising aesthetics.",
    alt: "A well-used Norwegian cabin in the outdoors",
    aspectRatio: "3 / 2",
  },
  culture5: {
    id: "HOME-CULTURE-05",
    status: "placeholder",
    brief: "Authentic 17 May scene: flags, parade or people. Must be clearly Norwegian and culturally credible.",
    alt: "17 May celebration with Norwegian flags",
    aspectRatio: "3 / 2",
  },
  works1: {
    id: "HOME-WORKS-01",
    status: "placeholder",
    brief: "North Sea offshore / energy visual for oil and Oil Fund context. Avoid generic oil-barrel graphics or misleading fund imagery.",
    alt: "Offshore platform in the North Sea",
    aspectRatio: "16 / 10",
  },
  works2: {
    id: "HOME-WORKS-02",
    status: "placeholder",
    brief: "Stortinget or another concrete democratic / political Norway visual. Documentary, factual context.",
    alt: "The Storting, Norway's parliament building",
    aspectRatio: "16 / 10",
  },
  works3: {
    id: "HOME-WORKS-03",
    status: "placeholder",
    brief: "Everyday Norwegian public-service / social infrastructure scene that can represent the welfare state without cheesy stock metaphors.",
    alt: "Everyday Norwegian public-service scene",
    aspectRatio: "16 / 10",
  },
  works4: {
    id: "HOME-WORKS-04",
    status: "placeholder",
    brief: "Norway / Europe visual for EEA / EU context. Must not imply Norway is an EU member.",
    alt: "Norway in a European context",
    aspectRatio: "16 / 10",
  },
  works5: {
    id: "HOME-WORKS-05",
    status: "placeholder",
    brief: "NAV office, sign or credible public-service context. Prefer documentary visual over generic office people.",
    alt: "A NAV office entrance",
    aspectRatio: "16 / 10",
  },
  andreas: {
    id: "ABOUT-ANDREAS-01",
    status: "placeholder",
    brief: "Real portrait of Andreas. Natural, informal, credible. Never AI-generated.",
    alt: "Portrait of Andreas",
    aspectRatio: "1 / 1",
  },
};
