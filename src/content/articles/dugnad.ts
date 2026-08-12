import type { Article } from "../types";

/**
 * What Is Dugnad? — second production article (Phase 1B).
 *
 * Researched and verified against the sources listed below on 2026-08-12.
 * Claim inventory, rejected claims, the post-war finding and the owner-supplied
 * Andreas material are recorded in docs/research/dugnad-research.md.
 *
 * Status is "review": the research and fact check are real, but the site has
 * not launched and Andreas has not given final editorial approval.
 *
 * F1: the culture and history are stable. The practical/legal section and the
 * 2017 volunteering figures are the parts to re-check — see the research file.
 */
export const dugnadArticle: Article = {
  slug: "dugnad",
  title: "What Is Dugnad?",
  seoTitle: "What Is Dugnad? Norway's Unpaid Community Work",
  description:
    "Dugnad is unpaid work Norwegians do together for something they share. What the word means, where you will meet it, and whether you really have to turn up.",
  dek: "Unpaid work, done together, for something everyone uses. Here is what dugnad means, where you will run into it, and how voluntary it really is.",
  excerpt:
    "The Norwegian tradition of getting together to do unpaid work on something you share — what it means, where it comes from, and whether you can say no.",
  category: "culture",
  subcategory: "Social customs",
  aliases: [
    "dugnad",
    "dugnad meaning",
    "what is dugnad",
    "norwegian dugnad",
    "dugnadsånd",
    "community work norway",
    "volunteer work norway",
    "work day norway",
    "talkoot",
  ],
  topics: ["dugnad"],
  relatedTopics: [
    "housing-associations",
    "sports-clubs",
    "volunteer-culture",
    "community-life",
    "janteloven",
    "friluftsliv",
  ],
  author: "Andreas",
  status: "review",
  reviewStatus: "fact-checked",
  publishedAt: null,
  updatedAt: null,
  factCheckedAt: "2026-08-12",
  freshnessClass: "F1",
  commercialIntent: "none",
  image: {
    id: "ARTICLE-HERO-dugnad",
    status: "placeholder",
    brief:
      "A real Norwegian dugnad in spring or autumn, in an ordinary apartment-block or housing-cooperative setting. Several residents of different ages doing practical shared outdoor work — raking, trimming bushes, painting, tidying a common area — in normal everyday clothes. Documentary editorial feel: a mixture of work and casual conversation, visible shared outdoor space, ordinary residential Norway. Coffee or food in the background is fine if it looks natural. Avoid: corporate volunteer teams, matching T-shirts, high-vis charity-event imagery, staged handshakes, construction-site imagery, generic American suburbia, flags, and exaggerated stock-photo smiling.",
    alt: "Residents of a Norwegian apartment block raking and tidying the shared grounds together",
    aspectRatio: "3 / 2",
  },
  sources: [
    {
      name: "Dugnad (article by Børge Nordbø, last updated 20 November 2025)",
      organisation: "Store norske leksikon",
      url: "https://snl.no/dugnad",
      sourceType: "reference",
      checkedAt: "2026-08-12",
      publicUseSummary: "the history of dugnad, what the work involved on farms, the food tradition, and where it is common today",
      supportsClaims: [
        "Definition: voluntary, unpaid work done in a community",
        "The word comes from Old Norse dugnaðr, 'help, support'",
        "Not used for an organised form of work before around 1600",
        "The word was also used for the party that ended the dugnad",
        "Historical tasks: roof thatching, haymaking, transporting timber, fencing, house building",
        "Workers were treated to food and drink; older dugnads could end with a large meal and a party",
        "Especially common in Norway until the 1800s",
        "The work form has existed in most agricultural societies in the world",
        "Modern dugnad is common in housing cooperatives, local organisations and associations",
      ],
    },
    {
      name: "Bokmålsordboka and Nynorskordboka, entry \"dugnad\"",
      organisation: "Språkrådet (Language Council of Norway) and the University of Bergen",
      url: "https://ordbokene.no/nob/bm,nn/dugnad",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "the dictionary definition of the word and its Old Norse origin",
      supportsClaims: [
        "Definition: felles, ulønnet og frivillig arbeid, ofte av praktisk karakter",
        "Etymology: norrønt dugnaðr 'hjelp'; av duge",
      ],
    },
    {
      name: "Tid for dugnad: – Ulovlig å straffe hjemmesitterne (21 April 2022)",
      organisation: "NBBL, the federation of Norwegian housing cooperatives",
      url: "https://www.nbbl.no/aktuelt/21-04-2022-tid-for-dugnad-ulovlig-a-straffe-hjemmesitterne/",
      sourceType: "specialist",
      checkedAt: "2026-08-12",
      publicUseSummary: "that there is no duty to take part, and that fining people who stay away is not allowed",
      supportsClaims: [
        "There is no obligation to take part in dugnad",
        "It is not permitted to penalise those who do not attend",
        "Participants may instead be compensated through reduced common costs",
      ],
      notes:
        "Guidance from a member organisation, not legislation. Quotes NBBL's lawyer Line C.B. Bjerkek.",
    },
    {
      name: "Ikke gi dugnadsbot: Gode råd for en vellykket dugnad (updated 22 October 2025)",
      organisation: "Huseierne, the Norwegian homeowners' association",
      url: "https://www.huseierne.no/hus-bolig/tema/juss/ikke-gi-dugnadsbot-gode-rad-for-en-vellykket-dugnad/",
      sourceType: "specialist",
      checkedAt: "2026-08-12",
      publicUseSummary: "the legal position in housing cooperatives and what a board may do instead of fines",
      supportsClaims: [
        "Residents in a sameie, borettslag or boligaksjeselskap cannot be required to attend dugnad",
        "There is no legal basis for imposing a duty to work",
        "Fines for non-attendance are not permitted",
        "A board may price the job, share the cost between units, and exempt those who take part",
      ],
      notes:
        "Also guidance from a member organisation. It refers to the maintenance rules in the Norwegian condominium act, and the reasoning rests on how shared costs may be divided.",
    },
    {
      name: "Mest frivillig arbeid for idrettslagene (13 November 2017)",
      organisation: "Statistics Norway (SSB)",
      url: "https://www.ssb.no/kultur-og-fritid/artikler-og-publikasjoner/mest-frivillig-arbeid-for-idrettslagene",
      sourceType: "data",
      checkedAt: "2026-08-12",
      publicUseSummary: "how common unpaid work for sports clubs is, especially among families with children",
      supportsClaims: [
        "38 percent of people aged 16+ had done unpaid work for an organisation in the past year",
        "Sports clubs receive the most voluntary work: 16 percent of adults",
        "44 percent of couples with children aged 7–19 had done unpaid work for a sports club in the past 12 months",
      ],
      notes: "Figures come from the 2017 living conditions survey and are dated as such in the article.",
    },
    {
      name: "Prime Minister's introduction, press conference on the corona situation (28 August 2020)",
      organisation: "Office of the Prime Minister of Norway",
      url: "https://www.regjeringen.no/no/aktuelt/statsministerens-innledning-pa-pressekonferanse-om-koronasituasjonen/id2737406/",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "an example of the word being used for a national effort rather than practical work",
      supportsClaims: [
        "Erna Solberg: \"Jeg oppfordret alle til å finne frem dugnadsånden fra i vår\"",
      ],
    },
    {
      name: "Slik stakk politikerne av med nasjonalordet «dugnad» (10 June 2019)",
      organisation: "Aftenposten",
      url: "https://www.aftenposten.no/norge/i/dOqVgX/slik-stakk-politikerne-av-med-nasjonalordet-dugnad",
      sourceType: "journalism",
      checkedAt: "2026-08-12",
      publicUseSummary: "the 2004 national-word vote, and criticism of how politicians stretch the word",
      supportsClaims: [
        "Dugnad topped a public vote for Norway's national word run by NRK in 2004",
        "Politicians have used the word for campaigns far outside practical shared work",
      ],
      notes: "Partly behind a paywall; only the openly visible text was used.",
    },
    {
      name: "Pages on talkoot and community life in Finland",
      organisation: "thisisFINLAND, published by the Finnish Ministry for Foreign Affairs",
      url: "https://finland.fi/life-society/finnish-festivals-driven-by-volunteer-power/",
      sourceType: "reference",
      checkedAt: "2026-08-12",
      publicUseSummary: "the comparable Finnish tradition of talkoot",
      supportsClaims: [
        "Talkoot: neighbours, villagers or colleagues getting together to do a large job, such as cleaning the grounds around an apartment building or improving a schoolyard",
      ],
    },
  ],
  body: [
    {
      type: "shortAnswer",
      text: "Dugnad is unpaid work that people do together on something they share. Neighbours tidy the grounds around their building, parents paint a fence at the kindergarten, a sports club sets up its own tents before a tournament. Nobody gets paid, and there is usually coffee and something to eat afterwards. The tradition is old, and taking part is voluntary — although in practice it can feel like something you are expected to turn up for.",
    },

    { type: "heading", text: "What the word actually means" },
    {
      type: "paragraph",
      text: "Norwegian dictionaries define dugnad as shared, unpaid and voluntary work, usually of a practical kind. That is the whole idea in one line: several people, one job, no wages.",
    },
    {
      type: "paragraph",
      text: "The word itself is old. It comes from the Old Norse dugnaðr, meaning help or support, and is related to the verb duge — to be good enough, to be up to the job.",
    },
    {
      type: "paragraph",
      text: "English has no single everyday word for it. \"Volunteering\" is close, but it usually means giving your time to an organisation or a cause. Dugnad is narrower and more local: you are working on something you use yourself, together with the other people who use it. \"Working bee\" and \"community work day\" describe the same thing, but they are not words most English speakers reach for often. In Norwegian, dugnad is completely ordinary.",
    },
    {
      type: "definition",
      term: "Dugnad",
      text: "Shared, unpaid and voluntary work, usually practical. Pronounced roughly \"DOOG-nahd\". You will also hear dugnadsånd — \"dugnad spirit\" — used for the willingness to pitch in.",
    },
    {
      type: "andreasNote",
      // Owner-supplied lived experience, provided 2026-08-12. Lightly edited for
      // natural English; no details added.
      text: "I was born in 1980 and grew up in an apartment block, so dugnad was completely normal to me. Every so often, everyone living there was expected to help look after the shared areas. We painted, cleared things away, trimmed bushes and raked leaves. Afterwards, those who could stay would usually gather for some food and something to drink.",
    },

    { type: "heading", text: "A tradition older than it looks" },
    {
      type: "paragraph",
      text: "Dugnad is not a modern invention. The word is Old Norse, although it does not seem to have been used for an organised way of working until around 1600.",
    },
    {
      type: "paragraph",
      text: "What it described then was farm life. When a job was too big for one household — putting a roof on a building, getting the hay in, moving timber, setting up fencing, raising a house — the neighbours came and did it together. Then they were fed. In earlier times a dugnad could finish with a proper meal and a party, and the word was used for the celebration as well as the work.",
    },
    {
      type: "paragraph",
      text: "This was a normal part of Norwegian life until the 1800s, and then it faded as farming changed. It did not disappear, though. It moved into towns and into organisations: housing cooperatives, sports clubs, local associations. Smaller jobs, same principle.",
    },
    {
      type: "paragraph",
      text: "One thing is worth saying clearly, because it is a natural guess: dugnad did not grow out of rebuilding Norway after 1945. The dates do not fit. The tradition was already centuries old by then, and had been fading as an everyday farm institution for a hundred years.",
    },

    { type: "heading", text: "Where you meet dugnad today" },
    {
      type: "paragraph",
      text: "If you live in Norway for any length of time, the word will find you.",
    },
    {
      type: "paragraph",
      text: "Housing is the most common setting. If you rent or own a flat in a block, there is a good chance the building holds a dugnad in spring, and sometimes another one in autumn: raking, sweeping, clearing out the bike shed, painting what needs painting, planting something.",
    },
    {
      type: "paragraph",
      text: "Children's activities are the other big one. Sports clubs are the organisations Norwegians most often do unpaid work for. In Statistics Norway's 2017 survey, 16 percent of everyone over 16 had done unpaid work for a sports club in the previous year — and among couples with children aged 7 to 19, it was 44 percent. If your child plays football, sooner or later somebody will ask you to run the kiosk, drive to a tournament or help put up a tent.",
    },
    {
      type: "paragraph",
      text: "Local associations and clubs work the same way: the yearly clean-up, getting a venue ready before an event, taking everything down again afterwards.",
    },
    {
      type: "andreasNote",
      // Owner-supplied lived experience, provided 2026-08-12.
      text: "Years later I met dugnad again when my own children were in kindergarten. Parents would turn up to paint, clean and tidy, and sometimes build practical things the kindergarten needed — a sandbox, a shelter for the rubbish bins, or similar small projects.",
    },

    { type: "heading", text: "Is dugnad really voluntary?" },
    {
      type: "paragraph",
      text: "This is the question most newcomers actually want answered, and it has three separate parts.",
    },
    {
      type: "paragraph",
      text: "In law, it is voluntary. Norway's two large housing organisations both say so plainly. NBBL, which represents housing cooperatives, states that there is no duty to take part. Huseierne, the homeowners' association, puts it more firmly still: residents cannot be required to attend a dugnad, because there is no legal basis for imposing a duty to work.",
    },
    {
      type: "paragraph",
      text: "A board also may not fine you for staying away. Some buildings have written a \"dugnadsbot\" into their house rules anyway. According to both organisations, that is not allowed.",
    },
    {
      type: "paragraph",
      text: "What a board may do is a little different, and worth understanding before you decide to skip. It can work out what the job would cost if a company did it, divide that cost between the flats in the normal way, and then let the people who turn up avoid paying their share. So nobody can make you work — but in a building that uses this arrangement, not working can cost you money.",
    },
    {
      type: "factBox",
      title: "Voluntary, expected or required?",
      items: [
        { label: "In law", value: "No duty to take part; you cannot be required to attend" },
        { label: "Fines for absence", value: "Not allowed, even if the house rules say otherwise" },
        { label: "What is allowed", value: "Sharing the cost of hired help, with participants exempt from their share" },
        { label: "In practice", value: "Often expected — and people notice who came" },
      ],
      note:
        "Based on guidance from NBBL and Huseierne, checked on 12 August 2026. Both are member organisations rather than public authorities, housing rules can change, and the details depend on how your building is organised.",
    },
    {
      type: "paragraph",
      text: "Socially, it is a different story, and this is the part the rules do not capture. In many buildings, turning up is simply what people do. Everyone can see who came and who did not. Nobody hands you a penalty. You are just the household that was not there.",
    },
    {
      type: "paragraph",
      text: "That gap between the rule and the feeling is the honest answer to the question. Dugnad is voluntary in the same way that bringing something to a shared dinner is voluntary.",
    },

    { type: "heading", text: "Why there is always coffee" },
    {
      type: "paragraph",
      text: "The food is not a modern nicety added to make the work bearable. It is part of the tradition. People who came to a dugnad were fed and given something to drink, and a large one could end with a real meal and a celebration — the word covered the party as well as the work.",
    },
    {
      type: "paragraph",
      text: "A small version of that has survived. Someone brings a thermos and a bag of buns, and in summer there may be a grill. For a lot of people this is the part that matters: two hours of light work, and a conversation with neighbours you otherwise only nod to in the stairwell.",
    },

    { type: "heading", text: "Is dugnad uniquely Norwegian?" },
    {
      type: "paragraph",
      text: "You will read that dugnad is unique to Norway and impossible to translate. Both claims are a little too strong.",
    },
    {
      type: "paragraph",
      text: "Getting together to do a job too big for one household is not a Norwegian invention. Store norske leksikon notes that this way of working has existed in most farming societies in the world. Finland has talkoot, which covers almost exactly the same ground: neighbours, villagers or colleagues joining forces to clean the grounds around an apartment building, improve a schoolyard, or make a festival happen.",
    },
    {
      type: "paragraph",
      text: "What is distinctive is the word rather than the practice — that it is still in daily use, that everyone immediately knows what is expected when they hear it, and that it now stretches well beyond raking leaves. When NRK asked the public to choose a Norwegian national word in 2004, dugnad won. During the pandemic in 2020, the prime minister asked people to find again \"the dugnad spirit\" from earlier that year. Politicians have applied it to so many campaigns — electric cars, toll roads, school curriculums — that Norwegian newspapers have accused them of wearing the word out.",
    },
    {
      type: "paragraph",
      text: "That is the genuinely interesting bit. Not that Norway invented working together, but that it kept one short word for it, and now reaches for that word whenever it wants people to pull in the same direction.",
    },

    { type: "heading", text: "What dugnad says about living in Norway" },
    {
      type: "paragraph",
      text: "It would be easy to turn this into a story about Norwegian community spirit. The reality is more practical than that.",
    },
    {
      type: "paragraph",
      text: "Dugnad works because the things being looked after are genuinely shared and genuinely close by: your stairwell, your child's kindergarten, your club's equipment. You can see the result on your way home. And because everyone lives with it, everyone gets asked.",
    },
    {
      type: "paragraph",
      text: "For a newcomer, the practical advice is short. If an invitation turns up in your letterbox or the building's chat group, going is the easy choice. You will do a couple of hours of light work, meet people you otherwise only nod to, and pick up a word that explains a surprising amount about how things get done here.",
    },
  ],
};
