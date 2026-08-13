import type { Article } from "../types";

/**
 * The Right to Roam in Norway — third production article (Phase 1C).
 *
 * Researched and verified on 2026-08-13 against the statutes themselves
 * (friluftsloven, motorferdselloven, hundeloven, forskrift om brannforebygging,
 * the Lofoten friluftsforskrift) plus Miljødirektoratet's guidance and
 * NOU 2023: 10. Claim inventory, rejected claims and the owner-supplied
 * Andreas material are recorded in docs/research/right-to-roam-research.md.
 *
 * Status is "review": research and fact check are real, but the site has not
 * launched and Andreas has not given final editorial approval.
 *
 * F2: the core access right is stable, but seasonal rules, municipal
 * regulations and the underlying acts change. See the refresh checklist in the
 * research file before updating.
 *
 * PENDING LAW CHANGE — check before publication: a new motorferdsellov
 * (lov 19 June 2026 no. 53) has been passed and repeals the 1977 act, but it
 * enters into force only when the King decides. As of the fact-check date the
 * 1977 act still applies, and the article describes current law. It also makes
 * consequential changes to friluftsloven. Re-verify the campervan and motor
 * traffic sections before this article is published.
 */
export const rightToRoamArticle: Article = {
  slug: "right-to-roam",
  title: "The Right to Roam in Norway",
  seoTitle: "Right to Roam in Norway: What Allemannsretten Allows",
  description:
    "Allemannsretten lets you walk, ski and camp in Norwegian nature without asking the landowner. What it covers, where it stops, and why a campervan is different.",
  dek: "You can walk, ski and pitch a tent in Norwegian nature without asking anyone's permission. Here is what allemannsretten actually covers, where it stops, and why a campervan is a different question.",
  excerpt:
    "What Norway's right of public access really allows — the land it applies to, the camping rules, and the important difference between a tent and a vehicle.",
  category: "nature",
  subcategory: "Outdoor rules",
  aliases: [
    "allemannsretten",
    "right to roam",
    "right to roam norway",
    "freedom to roam norway",
    "wild camping norway",
    "camping rules norway",
    "norway camping rules",
    "utmark",
    "innmark",
    "friluftsloven",
  ],
  topics: ["right-to-roam"],
  relatedTopics: ["friluftsliv", "wild-camping", "hiking", "national-parks", "cabin-culture"],
  author: "Andreas",
  status: "review",
  reviewStatus: "fact-checked",
  publishedAt: null,
  updatedAt: null,
  factCheckedAt: "2026-08-13",
  freshnessClass: "F2",
  commercialIntent: "none",
  image: {
    id: "ARTICLE-HERO-right-to-roam",
    status: "placeholder",
    brief:
      "An ordinary Norwegian forest or mountain landscape with one or two hikers moving naturally through open, uncultivated terrain. The image should communicate access and freedom rather than spectacular tourism: understated scale, everyday walking, a visible path or natural line of passage. A simple fence, gate or track may help say 'you may cross here'. Documentary photography. Avoid: dramatic summit poses, influencer framing, Norwegian flags, luxury hiking fashion, staged family stock photos, a campervan as the main subject, and famous tourist hotspots that would make the article look like a destination guide.",
    alt: "A hiker walking a path through open Norwegian forest and mountain terrain",
    aspectRatio: "3 / 2",
  },
  sources: [
    {
      name: "Friluftsloven — the Outdoor Recreation Act (Act of 28 June 1957 no. 16)",
      organisation: "Lovdata (Norwegian statute)",
      url: "https://lovdata.no/dokument/NL/lov/1957-06-28-16",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "the right itself, the innmark/utmark definitions, walking and cycling, picking, and the tent rules",
      supportsClaims: [
        "§ 1 purpose: protect the natural basis for outdoor life and secure public access",
        "§ 1a definitions of innmark and utmark",
        "§ 2 on foot in utmark all year, considerately and with due care",
        "§ 2 second paragraph: horse, sledge and bicycle on roads and paths in utmark, and everywhere in utmark on the mountain, unless the municipality has forbidden it",
        "§ 3 innmark on foot only when frozen or snow-covered, never 30 April to 14 October",
        "§ 3a: travel through innmark on a road or path leading to utmark is allowed all year — on foot, and by horse, bicycle or sledge on a road or made-up path — provided it does not pass through a farmyard or house plot or cause unreasonable nuisance; organised events excluded; owner may forbid it where it risks noticeable damage",
        "§ 5 picking of wild flowers, plants, berries, mushrooms and roots; cloudberry rule for Nordland, Troms and Finnmark",
        "§ 9 tent at least 150 metres from an inhabited house or cabin; two døgn without consent; exception in the high mountains or far from habitation; consent required in innmark",
        "§ 11 duty to behave considerately and carefully",
        "§ 15 municipal authority to regulate access",
      ],
      notes: "Last amended 6 December 2024, in force 1 January 2025.",
    },
    {
      name: "Allemannsretten (guidance)",
      organisation: "Miljødirektoratet, the Norwegian Environment Agency",
      url: "https://www.miljodirektoratet.no/ansvarsomrader/friluftsliv/friluftsliv-og-allemannsretten/allemannsretten/",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "what the right covers in practice, and that motorised traffic is not part of it",
      supportsClaims: [
        "The right covers free movement on foot and on skis, and harvesting",
        "Cycling requires a made-up path",
        "\"Allemannsretten inkluderer ikke ferdsel med motorkjøretøy i utmark\"",
        "E-cycling is not covered by allemannsretten, so there is no right to it against an objecting landowner",
        "Duty to act considerately",
      ],
    },
    {
      name: "Forskrift for bruk av motorkjøretøyer i utmark og på islagte vassdrag § 2a",
      organisation: "Lovdata (Norwegian regulation)",
      url: "https://lovdata.no/dokument/SF/forskrift/1988-05-15-356",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "the separate rule that lets pedal-assisted electric bikes be used in uncultivated land",
      supportsClaims: [
        "\"Elektriske sykler kan brukes i utmark\"",
        "\"Kommunen kan i forskrift begrense eller forby bruk av elektriske sykler i hele eller deler av utmarka\"",
        "Definition: pedal-assisted, max 0.25 kW, assistance ending at 25 km/h",
      ],
    },
    {
      name: "Guide: where can I pitch a tent or hammock?",
      organisation: "Miljødirektoratet",
      url: "https://www.miljodirektoratet.no/ansvarsomrader/friluftsliv/friluftsliv-og-allemannsretten/telt-og-hengekoye/",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "the practical camping rules, protected areas, and the fact that local rules can be stricter",
      supportsClaims: [
        "150 metres from the nearest inhabited house or cabin",
        "Two nights in the same place, longer in the high mountains or far from settlement",
        "Tenting in innmark only with the landowner's permission",
        "The right applies in protected areas, but protection regulations can restrict activities, especially in nature reserves",
        "Camping is limited in some places — check local rules",
        "The distance rule does not apply in areas prepared for camping",
      ],
    },
    {
      name: "Frequently asked questions about allemannsretten",
      organisation: "Miljødirektoratet",
      url: "https://www.miljodirektoratet.no/ansvarsomrader/friluftsliv/friluftsliv-og-allemannsretten/ofte-stilte-sporsmal-om-allemannsretten/",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "the official answer on campervans, caravans and roadside parking",
      supportsClaims: [
        "\"Camping med bil, bobil og lignende i terrenget er ikke tillatt, parkering ved vei må skje på veiskulder.\"",
        "\"Kjøring i utmark utenfor vei reguleres av motorferdselloven og er som hovedregel forbudt.\"",
      ],
    },
    {
      name: "Motorferdselloven — the Motor Traffic Act (Act of 10 June 1977 no. 82)",
      organisation: "Lovdata (Norwegian statute)",
      url: "https://lovdata.no/dokument/NL/lov/1977-06-10-82",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "the separate rules that govern driving in uncultivated land",
      supportsClaims: [
        "§ 3: \"I utmark og vassdrag er motorferdsel ikke tillatt med mindre annet følger av denne lov eller vedtak med hjemmel i loven\"",
        "§ 2 uses the same definition of utmark as friluftsloven",
      ],
      notes:
        "Last amended in force 1 July 2025. A replacement act was passed on 19 June 2026 but has not yet entered into force, so the 1977 act still applies.",
    },
    {
      name: "Forskrift om brannforebygging § 3 (fire prevention regulation)",
      organisation: "Lovdata (Norwegian regulation)",
      url: "https://lovdata.no/dokument/SF/forskrift/2015-12-17-1710",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "the open-fire season, its exceptions, and municipal fire bans",
      supportsClaims: [
        "General duty of care with anything that can cause fire",
        "15 April to 15 September: no open fire in or near forest and other utmark without the municipality's permission",
        "Municipalities may deviate by local regulation",
        "Still allowed where it is obvious that fire cannot start",
        "Municipalities may impose extra bans in periods of exceptional fire danger, limited to 60 days",
      ],
    },
    {
      name: "Hundeloven — the Dog Act (Act of 4 July 2003 no. 74) § 6",
      organisation: "Lovdata (Norwegian statute)",
      url: "https://lovdata.no/dokument/NL/lov/2003-07-04-74",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "the national leash period and municipal extensions",
      supportsClaims: [
        "General leash requirement from 1 April to and including 20 August",
        "Municipalities may extend leash rules by local regulation for specified areas and situations",
      ],
      notes: "Last amended in force 1 July 2026.",
    },
    {
      name: "Guide: fishing and allemannsretten",
      organisation: "Miljødirektoratet",
      url: "https://www.miljodirektoratet.no/ansvarsomrader/friluftsliv/friluftsliv-og-allemannsretten/fiske/",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "who may fish where, and which permits and fees apply",
      supportsClaims: [
        "Saltwater fishing needs no permit for ordinary rod fishing",
        "Freshwater fishing is a right only for children under 16, free 1 January to 20 August, except in waters with salmon, sea trout and sea char",
        "Adults need a fishing card bought from the landowner for inland fish",
        "Salmon, sea trout and sea char require both the state fishing fee and a fishing card",
        "Under-18s do not pay the state fishing fee",
      ],
    },
    {
      name: "Friluftsforskrift for Lofoten (FOR-2021-06-22-2418), §§ 5–6",
      organisation: "Lovdata (local regulation for six Lofoten municipalities)",
      url: "https://lovdata.no/dokument/LF/forskrift/2021-06-22-2418/%C2%A75",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "a real example of a municipality restricting camping and overnight campervan parking",
      supportsClaims: [
        "Adopted under friluftsloven § 15 by Røst, Værøy, Moskenes, Flakstad, Vestvågøy and Vågan",
        "§ 5 regulates tenting and outdoor overnight stays",
        "§ 6 bans parking caravans and campervans at designated places between 00:00 and 06:00",
      ],
      notes: "Adopted 22 June 2021, last amended 18 June 2024.",
    },
    {
      name: "NOU 2023: 10 Leve og oppleve — destinations for a sustainable future",
      organisation: "Norwegian Government (Reisemålsutvalget)",
      url: "https://www.regjeringen.no/contentassets/1d876bb6e74642908297a9e2bc981118/no/pdfs/nou202320230010000dddpdfs.pdf",
      sourceType: "research",
      checkedAt: "2026-08-13",
      publicUseSummary: "what visitor pressure looks like in practice, and why Lofoten introduced camping rules",
      supportsClaims: [
        "Tent restrictions were introduced in several Lofoten municipalities in 2021 to prevent further damage to nature and to secure local access to attractive areas",
        "Many tourism municipalities see their population multiply in high season; Lofoten in summer is given as an example",
        "High visitor volume can increase pollution, damage nature, cause littering and create crowding",
        "Residents in visited destinations name traffic problems and villcamping as the biggest challenges, alongside insufficient toilet and waste capacity",
        "Many municipalities are uncertain about the legal frameworks for handling littering, villcamping and parking",
      ],
    },
    {
      name: "Besøksbidragsloven — the Visitor Contribution Act (LOV-2025-06-20-104)",
      organisation: "Lovdata (Norwegian statute)",
      url: "https://lovdata.no/dokument/NL/lov/2025-06-20-104",
      sourceType: "official",
      checkedAt: "2026-08-13",
      publicUseSummary: "the new levy municipalities may charge on paid accommodation",
      supportsClaims: [
        "Purpose: help finance tourism-related shared goods in areas with a particularly large burden from tourism",
        "Municipalities may charge an overnight accommodation levy of 3 percent",
        "In force 1 July 2026",
      ],
    },
  ],
  body: [
    {
      type: "shortAnswer",
      text: "Allemannsretten — the right to roam — lets anyone walk in Norwegian nature without asking the landowner first. It applies to uncultivated land: forest, mountain, moor and most open country, whether or not somebody owns it. It does not apply to gardens, farmyards and fields in use, and it comes with conditions: keep a tent 150 metres from the nearest inhabited house, move on after two nights, and behave so that nobody has to clean up after you. It also does not cover motor vehicles. A campervan is not a tent with wheels.",
    },

    { type: "heading", text: "What allemannsretten actually is" },
    {
      type: "paragraph",
      text: "Norway's right to roam is not a tradition or a friendly local habit. It is written into law. Friluftsloven — the Outdoor Recreation Act — dates from 1957, and its stated purpose is to protect the natural basis for outdoor life and to secure everyone's right to move around and spend time in nature.",
    },
    {
      type: "paragraph",
      text: "The central rule is a single sentence: in utmark, anyone may travel on foot all year round, as long as it is done considerately and with due care.",
    },
    {
      type: "paragraph",
      text: "The useful part is what that sentence leaves out. It does not say public land. It does not mention ownership at all. Most Norwegian forest is privately owned, and you may still walk through it. What decides your access is the kind of land you are on, what you are doing there, and how you behave — not who holds the deed.",
    },
    {
      type: "andreasNote",
      // Owner-supplied lived experience, provided 2026-08-13. Lightly edited for
      // natural English; no details added.
      text: "I have spent a lot of my life walking in Norwegian forests and mountains, and allemannsretten is one of those things I rarely stop to think about. You simply head out and walk. I don't normally find myself wondering who owns the ground under my feet or whether I am allowed to be there. That creates a kind of freedom that is easy to take for granted when you grow up with it. You also grow up with the other side of it. You don't walk through someone's garden or across a newly sown field just to get from A to B. The freedom works because you are expected to use some common sense, and to respect the people who live and work there.",
    },

    { type: "heading", text: "Innmark and utmark: the words the law turns on" },
    {
      type: "paragraph",
      text: "Almost every practical question comes back to two Norwegian words. They are worth learning, because everything else follows from them.",
    },
    {
      type: "definition",
      term: "Utmark",
      text: "Uncultivated land: forest, mountain, moor, bog and most open country. This is where the right to roam applies — on foot, all year, regardless of who owns it.",
    },
    {
      type: "definition",
      term: "Innmark",
      text: "Land tied to homes and active use. The law lists farmyards, house plots, cultivated land, hay meadows and cultivated pasture, plus similar areas where your presence would be an unreasonable nuisance to the people using them.",
    },
    {
      type: "paragraph",
      text: "In innmark the right works differently. Walking across a field or meadow is allowed only while the ground is frozen or covered in snow — and never between 30 April and 14 October, which is to say never during the growing season. The same field can be open to you in February and closed in July.",
    },
    {
      type: "paragraph",
      text: "There is an important exception, and in practice it is the one you will use most. Where a road or path through innmark leads to utmark, you may follow it on foot all year. The same goes for a bicycle, horse or sledge on a road or a made-up path. The conditions are practical ones: the route must not pass through a farmyard or across a house plot, and your passing must not be an unreasonable nuisance to the owner or user. Organised events such as cycle races and riding-club activities fall outside this, and a landowner can close such a route if the traffic is likely to cause real damage.",
    },
    {
      type: "paragraph",
      text: "So the real distinction is between crossing and following. Walking straight over someone's hayfield in July: no. Following the track along the edge of it to reach the forest behind: yes, all year. That is the logic of the whole law — access is fine when it costs the people who work the land nothing.",
    },
    {
      type: "factBox",
      title: "Can I walk here?",
      items: [
        { label: "Forest, mountain, moor", value: "Yes, on foot, all year" },
        { label: "Open uncultivated country and most shoreline", value: "Yes" },
        { label: "Someone's garden or house plot", value: "No" },
        { label: "A farmyard", value: "No" },
        { label: "Straight across a field in use, 30 April – 14 October", value: "No" },
        { label: "Straight across a frozen or snow-covered field, outside that period", value: "Normally yes" },
        { label: "A road or path through farmland leading to open country", value: "Yes, on foot all year" },
      ],
      note:
        "From friluftsloven §§ 1a, 2, 3 and 3a. Borderline cases exist. If an area is clearly in active use and walking there would genuinely bother the people using it, treat it as innmark.",
    },

    { type: "heading", text: "What you may do out there" },
    {
      type: "paragraph",
      text: "Walking is the core of it, and skiing comes with it: both are travel under your own power, and both are allowed in utmark all year.",
    },
    {
      type: "paragraph",
      text: "Cycling and horse riding are more limited. Bicycles, horses and sledges are allowed on roads and paths in utmark, and everywhere in utmark in the mountains — unless the municipality, with the landowner's agreement, has banned it on a particular stretch. A forest track is fine. Riding straight across soft forest floor is not part of the right.",
    },
    {
      type: "paragraph",
      text: "Electric bikes sit in a category of their own. E-cycling is not part of allemannsretten at all, so it gives you no claim against a landowner who objects. Pedal-assisted e-bikes are nevertheless generally allowed in utmark under the separate motor-traffic regulations — but a municipality may restrict or ban them in all or part of its area.",
    },
    {
      type: "paragraph",
      text: "You may rest, swim and picnic. You may pick wild flowers, plants, berries, mushrooms and the roots of wild herbs, as long as you do it carefully. There is one regional exception worth knowing: cloudberries in Nordland, Troms and Finnmark. There a landowner can forbid picking on their cloudberry ground — but even then, you may always eat the ones you pick on the spot.",
    },

    { type: "heading", text: "Pitching a tent" },
    {
      type: "paragraph",
      text: "You can camp in utmark without asking anyone, and this is the part visitors are usually most curious about. Three rules cover almost every situation.",
    },
    {
      type: "paragraph",
      text: "Keep your distance. A tent must not be so close to an inhabited house or cabin that it disturbs the people living there, and in any case never closer than 150 metres. This does not apply on sites that are set up for camping.",
    },
    {
      type: "paragraph",
      text: "Two nights, then move. You may stay up to two døgn — two 24-hour periods — in the same spot without permission. After that, ask the landowner or move somewhere else. The exception is the high mountains and areas far from any settlement, where you can stay longer, provided the stay will not cause noticeable damage or inconvenience.",
    },
    {
      type: "paragraph",
      text: "Not in innmark. Camping on cultivated land or near homes needs the owner's or user's permission. This is the same rule as for walking, applied to staying still.",
    },

    { type: "heading", text: "A campervan is a different question entirely" },
    {
      type: "paragraph",
      text: "This is where most misunderstandings start, and it is worth reading twice.",
    },
    {
      type: "paragraph",
      text: "The right to roam is about moving under your own power. It does not cover motor vehicles. Driving off-road in uncultivated land falls under an entirely different law, motorferdselloven, whose main rule is blunt: in utmark and watercourses, motorised traffic is not permitted unless the law, or a decision made under it, allows it.",
    },
    {
      type: "paragraph",
      text: "The Norwegian Environment Agency puts the practical consequence in one line: camping with a car, campervan or the like out in the terrain is not allowed, and parking by a road must be done on the road shoulder.",
    },
    {
      type: "paragraph",
      text: "So the same patch of ground can produce three different answers. A tent there, 150 metres from the nearest house, is the right to roam working exactly as intended. Driving a campervan onto that ground is motorised traffic in utmark, and generally not allowed. Parking that campervan on the shoulder of the road beside it is neither — it is a parking question, governed by traffic rules and by whoever controls the road.",
    },
    {
      type: "paragraph",
      text: "Municipalities can tighten this further. They can regulate where campervans may be placed through their land-use plans, including along roads, and some have done exactly that.",
    },

    { type: "heading", text: "Fire and dogs: two dates to remember" },
    {
      type: "paragraph",
      text: "From 15 April to 15 September it is forbidden to light an open fire in or near forest and other uncultivated land without permission from the municipality. There is an exception for situations where it is obvious that no fire can start — a beach, bare rock by the sea, deep snow. Outside those dates the general duty of care still applies: you are responsible for anything you light. Municipalities can also impose extra bans during dry spells, so check locally before you plan a campfire.",
    },
    {
      type: "paragraph",
      text: "Dogs must be kept on a lead from 1 April to 20 August, the season when wildlife and grazing animals are most vulnerable. Municipalities can extend this in specific areas, and many do.",
    },

    { type: "heading", text: "Fishing is not included" },
    {
      type: "paragraph",
      text: "It surprises people, but the right to roam does not hand you a fishing rod.",
    },
    {
      type: "paragraph",
      text: "In the sea, ordinary rod fishing is broadly free and needs no permit. In fresh water it is different. Freshwater fishing is a public right only for children under 16, and only from 1 January to 20 August, and not in waters that hold salmon, sea trout or sea char. Adults need a fishing card bought from the landowner. For salmon, sea trout and sea char you need two things: the state fishing fee and a fishing card. Anyone under 18 is exempt from the state fee.",
    },

    { type: "heading", text: "Where the rules are stricter" },
    {
      type: "paragraph",
      text: "Two things can override the general picture, and both are easy to check before you go.",
    },
    {
      type: "paragraph",
      text: "Protected areas. The right to roam applies inside national parks and nature reserves too, but the individual protection regulation can restrict activities — most often in nature reserves, where the point of the protection may be precisely to keep people out of somewhere sensitive at a particular time of year.",
    },
    {
      type: "paragraph",
      text: "Local rules. Municipalities have their own legal authority to regulate access, and heavily visited places use it. In Lofoten, six municipalities — Røst, Værøy, Moskenes, Flakstad, Vestvågøy and Vågan — share a regulation that governs where you may camp, and separately bans parking caravans and campervans at named places between midnight and six in the morning. If you are heading somewhere popular, look for local information and signs rather than assuming the national rules are the whole story.",
    },

    { type: "heading", text: "When a freedom for a few meets a lot of people" },
    {
      type: "paragraph",
      text: "Allemannsretten was designed for people spread thinly across a large country. It works beautifully at that scale. It becomes harder to sustain when a great many people want to do the same thing in the same small place at the same time of year.",
    },
    {
      type: "paragraph",
      text: "This is documented rather than imagined. A government report on Norwegian destinations notes that many tourism municipalities see their population multiply in high season — Lofoten in summer is one of the examples — and that high visitor numbers can mean litter, pressure on nature and crowding. When residents in visited places were asked what bothered them most, the answers were traffic and motorised wild camping, along with too little capacity for toilets and waste. The Lofoten camping rules came out of that: they were introduced in 2021 to prevent further damage to nature, and to keep the attractive areas accessible to the people who live there.",
    },
    {
      type: "paragraph",
      text: "Norway's answer is not to close the outdoors. From 1 July 2026, municipalities may charge a small levy — three percent — on paid overnight stays, to help fund the shared things that visitors use: paths, toilets, parking, waste collection. It is a quiet acknowledgement that access is free but upkeep is not.",
    },
    {
      type: "paragraph",
      text: "None of this makes visitors the problem. It makes the sheer concentration the problem, and Norwegians camping in the same spots are part of that concentration too.",
    },

    { type: "heading", text: "The rule behind all the other rules" },
    {
      type: "paragraph",
      text: "If you remember nothing else, remember this one, because it is also in the law: anyone moving or staying on someone else's ground must behave considerately and carefully, so as not to cause damage or inconvenience.",
    },
    {
      type: "paragraph",
      text: "That sentence does a lot of work. It is why the right survives without fences and permits, and why it survives being extended to people who did not grow up with it. Leave the gate as you found it. Take your rubbish out with you. Camp out of sight of the kitchen window. Do not drive where you would not walk.",
    },
    {
      type: "paragraph",
      text: "The freedom is genuine, and it is broader than almost anywhere else in Europe. It just comes with the assumption that you will use it like someone who intends to come back.",
    },
  ],
};
