import type { Article } from "../types";

/**
 * Norway's Oil Fund, Explained — first production article (Phase 1A).
 *
 * All factual claims were researched and verified against primary sources on
 * 2026-08-12. The claim inventory, source list, mutable-figure register and
 * known gaps are recorded in docs/research/oil-fund-research.md.
 *
 * Status is "review": the research and fact check are real, but the site has
 * not launched and Andreas has not given final editorial approval. The article
 * therefore stays noindex and out of the sitemap.
 *
 * F3: the market value, allocation percentages and budget figures change.
 * See the refresh checklist in the research file before updating.
 */
export const oilFundArticle: Article = {
  slug: "oil-fund",
  title: "Norway's Oil Fund, Explained",
  seoTitle: "Norway's Oil Fund, Explained: How Oljefondet Works",
  description:
    "What Norway's Oil Fund actually is, who controls it, how it's invested, and why the Norwegian state can't simply spend the money it has saved.",
  dek: "Norway puts its net oil and gas revenues into one of the world's largest investment funds. Here is who controls it, where the money actually sits, and why the state can't simply spend it.",
  excerpt:
    "What the Oil Fund is, where the money came from, who decides how it is invested, and how the fiscal rule limits what Norwegian politicians can spend.",
  category: "how-norway-works",
  subcategory: "Economy",
  aliases: [
    "oil fund",
    "oljefondet",
    "sovereign wealth fund",
    "government pension fund global",
    "norway pension fund",
    "statens pensjonsfond utland",
    "spu",
    "nbim",
    "handlingsregelen",
    "fiscal rule",
  ],
  topics: ["oil-fund"],
  relatedTopics: [
    "oil-gas",
    "norwegian-economy",
    "welfare-state",
    "government-budget",
    "fiscal-rule",
    "taxes",
    "why-norway-is-rich",
  ],
  author: "Andreas",
  status: "review",
  reviewStatus: "fact-checked",
  publishedAt: null,
  updatedAt: null,
  factCheckedAt: "2026-08-12",
  freshnessClass: "F3",
  commercialIntent: "none",
  image: {
    id: "ARTICLE-HERO-oil-fund",
    // Approved by the owner in the Phase 1A voice/hero sprint (2026-08-12).
    // Licensed stock purchased by the owner from Depositphotos under a
    // Standard License (asset 5906581; not Editorial Use Only — verified
    // against the asset page 2026-08-12). Original JPEG kept locally,
    // unversioned ("Norway's Oil Fund, Explained.jpg", 2832×1888, native
    // 3:2 — no crop). Optimized variants in public/images/article.
    status: "approved",
    src: "/images/article/oil-fund-hero-2400.webp",
    brief:
      "A real Norwegian offshore petroleum installation, photographed in a documentary editorial style — wide landscape composition, natural light and weather, the surrounding sea clearly visible. The point is the physical origin of the wealth, not corporate promotion. Avoid: oil barrels, coins, banknotes, stock charts, abstract finance imagery, glossy brochure aesthetics, and any AI-generated image presented as documentary photography.",
    alt: "An offshore drilling platform moored on the Norwegian coast, with a rocky islet in front and snow-covered mountains behind",
    aspectRatio: "3 / 2",
    source: "Depositphotos (asset 5906581)",
    credit: "AGLPhotoproduction / Depositphotos",
    license: "Depositphotos Standard License",
  },
  sources: [
    {
      name: "Government Pension Fund Act (Act no. 123 of 21 December 2005), English translation",
      organisation: "Norwegian Ministry of Finance",
      url: "https://www.regjeringen.no/contentassets/9d68c55c272c41e99f0bf45d24397d8c/governmentpensionfundact.pdf",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "the fund's legal set-up, its purpose, and the rule that money can only move to the state budget",
      supportsClaims: [
        "The fund's statutory purpose",
        "The Ministry of Finance manages the fund",
        "The fund is deposited in an account at Norges Bank",
        "Capital may only be transferred to the central government budget by resolution of the Storting",
        "The fund has no rights or obligations of its own",
      ],
      notes:
        "Unofficial English translation dated 8 October 2012. The legally binding text is the Norwegian one; the provisions used here are confirmed by the Ministry's 2023 self-assessment and the 2024 management mandate.",
    },
    {
      name: "Management mandate for the Government Pension Fund Global (as of 30 June 2024)",
      organisation: "Norwegian Ministry of Finance",
      url: "https://www.regjeringen.no/contentassets/9d68c55c272c41e99f0bf45d24397d8c/2024.06.30_gpfg_management_mandate.pdf",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "what the fund may and may not invest in, the 70/30 target, and the bank's independence from the Ministry",
      supportsClaims: [
        "The fund is a krone deposit whose countervalue Norges Bank invests in its own name",
        "The strategic benchmark is 70 percent equities and 30 percent fixed income",
        "Norges Bank makes investment decisions independently of the Ministry",
        "The fund may not be invested in Norwegian securities, kroner-denominated securities or property in Norway",
        "Unlisted investments may be held via Norwegian or non-Norwegian legal entities",
      ],
    },
    {
      name: "The Norwegian Fiscal Policy Framework",
      organisation: "Norwegian Ministry of Finance",
      url: "https://www.regjeringen.no/en/topics/the-economy/economic-policy/economic-policy/id418083/",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "the fiscal rule, the 3 percent estimate, and how petroleum income reaches the fund",
      supportsClaims: [
        "The fiscal rule: transfers should over time follow the fund's expected real return",
        "The expected real return was reduced from 4 to 3 percent in spring 2017",
        "The state's entire net cash flow from petroleum is transferred to the fund",
        "Large movements in the fund's value are smoothed over several years",
      ],
    },
    {
      name: "Fiscal policy in 2026 (National Budget 2026, chapter 3.1)",
      organisation: "Norwegian Ministry of Finance",
      url: "https://www.regjeringen.no/contentassets/6b87b3bf3f2d43cc813e09630547cc9c/engelsk_kap_3.1.pdf",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "why normal-year spending is about 2.7 percent, and the size of the budget and the transfer",
      supportsClaims: [
        "Fund spending should be below the expected real return in good and normal times",
        "Spending about 2.7 percent of the fund in normal times corresponds over time to the expected real return of 3 percent",
        "The non-oil deficit is the actual transfer from the fund to the fiscal budget, estimated at NOK 452.2 billion for 2026",
        "The structural non-oil deficit for 2026 is NOK 579.4 billion",
        "State budget expenditure for 2026 of NOK 2,200.6 billion",
        "Definition of the structural non-oil deficit as underlying fund spending adjusted for cyclical and one-off variation",
      ],
    },
    {
      name: "Adherence of the Government Pension Fund Global to the Santiago Principles (self-assessment, January 2023)",
      organisation: "Norwegian Ministry of Finance",
      url: "https://www.regjeringen.no/contentassets/c8147ad904aa46949a8b1bd05717e843/en-gb/pdfs/adherence-of-the-gpfg.pdf",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "that the fund is not a legal body, that its money is not earmarked, and the no-borrowing rule",
      supportsClaims: [
        "The fund is not a separate legal entity and has no board or staff of its own",
        "The fund's capital is not earmarked for specific purposes",
        "The fund is invested outside Norway in foreign currency only",
        "The state does not borrow to fund budget expenditure while there is capital in the fund",
        "Capital can be spent only once, while the real return may fund a permanently higher level of government expenditure",
      ],
    },
    {
      name: "Half-year report 2026 and press release (published 12 August 2026)",
      organisation: "Norges Bank Investment Management",
      url: "https://www.nbim.no/en/news-and-insights/the-press/press-releases/2026/record-high-krone-return-in-the-first-half-of-the-year/",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "the fund's value and how it was invested on 30 June 2026",
      supportsClaims: [
        "Market value of 22,683 billion kroner at 30 June 2026",
        "Return of 9.4 percent in the first half of 2026",
        "Asset allocation at 30 June 2026",
      ],
    },
    {
      name: "The fund's value, and Investments",
      organisation: "Norges Bank Investment Management",
      url: "https://www.nbim.no/en/investments/the-funds-value/",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "how much of the fund is investment return rather than transferred oil money",
      supportsClaims: [
        "Breakdown of the fund's value into investment return, government inflow and krone effects",
        "Annualised return of 6.86 percent since 1998",
        "Investments in more than 7,200 companies and roughly 1.5 percent of the world's listed shares",
      ],
      notes:
        "The three components are published rounded to whole billions, so they add up to one billion more than the reported total.",
    },
    {
      name: "The history of the fund",
      organisation: "Norges Bank Investment Management",
      url: "https://www.nbim.no/en/about-us/about-the-fund/the-history/",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "every date in the timeline, from the 1969 Ekofisk discovery onwards",
      supportsClaims: ["All dates in the timeline, from the 1969 Ekofisk discovery to the 2024 milestone"],
    },
    {
      name: "Key figures in the Revised National Budget 2026 (published 12 May 2026)",
      organisation: "Norwegian Ministry of Finance",
      url: "https://www.regjeringen.no/en/whats-new/key-figures-in-the-revised-national-budget-2026/id3158931/",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "the 2026 spending figure and what share of the fund it represents",
      supportsClaims: [
        "Spending of fund revenues of 579 billion kroner in 2026",
        "Equal to 2.7 percent of the fund's value and 12.6 percent of trend mainland GDP",
      ],
    },
    {
      name: "The government's revenues from petroleum activities (updated 12 May 2026)",
      organisation: "Norwegian Offshore Directorate and Ministry of Energy",
      url: "https://www.norskpetroleum.no/en/economy/governments-revenues/",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "the four sources of the state's petroleum income, and what the state's own ownership stake means",
      supportsClaims: [
        "Four components of state petroleum revenue for 2026: taxes 386.1bn, SDFI 262.8bn, Equinor dividend 25.4bn, environmental taxes and area fees 11.3bn",
        "Estimated state net cash flow from petroleum of 686 billion kroner in 2026",
        "Definition of the State's Direct Financial Interest as state ownership in fields, pipelines and onshore facilities",
        "Petroleum is Norway's largest industry by value creation, state revenue, investment and export value",
        "About half of the estimated recoverable resources on the shelf remain",
      ],
    },
    {
      name: "Petroleum tax",
      organisation: "Norwegian Offshore Directorate and Ministry of Energy",
      url: "https://www.norskpetroleum.no/en/economy/petroleum-tax/",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "the tax rate oil and gas companies pay in Norway",
      supportsClaims: ["Ordinary corporation tax of 22 percent plus special tax of 71.8 percent, a marginal rate of 78 percent"],
    },
    {
      name: "The Management of the Government Pension Fund in 2013 (Meld. St. 19 (2013–2014))",
      organisation: "Norwegian Ministry of Finance",
      url: "https://www.regjeringen.no/en/documents/meld.-st.-19-2013-2014/id754743/?ch=2",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "why the savings are kept outside the Norwegian economy",
      supportsClaims: [
        "The fund structure was created to shelter the mainland economy from large and variable petroleum revenues and ensure a smooth phase-in of petroleum revenues",
      ],
    },
    {
      name: "National Budget 2026: high production and large revenues from the petroleum industry (published 15 October 2025)",
      organisation: "Norwegian Ministry of Energy",
      url: "https://www.regjeringen.no/en/whats-new/high-production-and-large-revenues-from-the-petroleum-industry/id3121780/",
      sourceType: "official",
      checkedAt: "2026-08-12",
      publicUseSummary: "how long production is expected to stay high before it declines",
      supportsClaims: [
        "Production is expected to stay at a stable, high level before declining through the 2030s as fields deplete",
      ],
    },
    {
      name: "Population, 1st quarter 2026",
      organisation: "Statistics Norway (SSB)",
      url: "https://www.ssb.no/en/befolkning/folketall/statistikk/befolkning",
      sourceType: "data",
      checkedAt: "2026-08-12",
      publicUseSummary: "Norway's population, for the per-person calculation",
      supportsClaims: ["Norway's population of 5,633,770 at the end of the first quarter of 2026"],
    },
  ],
  body: [
    {
      type: "shortAnswer",
      text: "Norway puts the money the state earns from oil and gas into a fund officially called the Government Pension Fund Global. That money is invested in markets outside Norway, and it has been growing there for decades — most of the fund's value today comes from investment returns rather than from the petroleum money paid in. The Ministry of Finance sets the rules, Norges Bank Investment Management does the investing, and only Parliament can move money from the fund into the state budget. A guideline called the fiscal rule says those transfers should, over time, match roughly what the fund is expected to earn.",
    },

    { type: "heading", text: "What the Oil Fund actually is" },
    {
      type: "paragraph",
      text: "In Norway we simply call it Oljefondet — the Oil Fund. Its official name is the Government Pension Fund Global. There is a second, much less discussed fund called the Government Pension Fund Norway, run by a different state manager, but when people say \"the Oil Fund\" they nearly always mean the global one.",
    },
    {
      type: "paragraph",
      text: "It helps to start with what the fund is not. It is not a vault. It is not a company. It is not a bank account with oil money sitting in it.",
    },
    {
      type: "paragraph",
      text: "The real set-up is more abstract. The Ministry of Finance holds a very large sum of Norwegian kroner in an account at Norges Bank, the central bank. The bank then invests the same amount in shares, loans and property around the world, in its own name. The account and the investments are two sides of the same thing.",
    },
    {
      type: "paragraph",
      text: "Legally, the fund is not a separate organisation. It has no board, no staff and no office of its own. The Ministry describes it as an account plus a set of rules, rather than an organisation. It cannot sue anyone, and nobody can sue it.",
    },
    {
      type: "definition",
      term: "Oljefondet",
      text: "Everyday Norwegian for the Government Pension Fund Global. You will also see the Norwegian name shortened to SPU. Despite the word \"pension\", nobody has a personal account in it — more on that further down.",
    },
    {
      type: "andreasNote",
      // Owner-approved personal observation, supplied 2026-08-12.
      text: "Most Norwegians I know don't think much about the Oil Fund in everyday life. It is just there in the background. Every now and then we joke that if you divided it between everyone in Norway, we would all be millionaires. But in my own circle, the fund itself is treated as almost untouchable. People may argue about budgets and how much Norway should spend, but I rarely hear anyone seriously suggest that we should simply use a large part of the fund.",
    },

    { type: "heading", text: "Where the money comes from" },
    {
      type: "paragraph",
      text: "Norway's first oil field, Ekofisk, was found in the North Sea in 1969, and production started in 1971. The important decisions came much later. Parliament passed the law creating the fund in 1990, but the first krone did not go in until 1996. For six years the machinery existed with nothing to put in it.",
    },
    {
      type: "paragraph",
      text: "The state does not make this money by selling oil itself. It comes from four sources, and the two big ones are quite different from each other.",
    },
    {
      type: "factBox",
      title: "The state's petroleum income in 2026",
      items: [
        { label: "Tax from oil and gas companies", value: "386.1 billion kroner" },
        { label: "The state's own share of the fields", value: "262.8 billion kroner" },
        { label: "Dividend from Equinor", value: "25.4 billion kroner" },
        { label: "Environmental taxes and area fees", value: "11.3 billion kroner" },
        { label: "The state's net petroleum income", value: "686 billion kroner" },
      ],
      note:
        "Estimates for 2026 from the Norwegian Offshore Directorate and the Ministry of Energy, updated 12 May 2026.",
    },
    {
      type: "paragraph",
      text: "The first source is tax. Companies producing oil and gas in Norway pay the ordinary company tax of 22 percent, plus a special petroleum tax of 71.8 percent, which comes to 78 percent in total on their petroleum profits.",
    },
    {
      type: "paragraph",
      text: "The second is easy to miss but almost as large: the state is a direct part-owner of many fields, pipelines and onshore plants. It pays its share of the costs and takes its share of the income, exactly like any other owner. In Norwegian this is called SDØE; in English, the State's Direct Financial Interest.",
    },
    {
      type: "paragraph",
      text: "The last two are smaller: a dividend from the state's shareholding in Equinor, and environmental taxes and fees for the areas companies are allowed to explore.",
    },
    {
      type: "paragraph",
      text: "Whatever is left when the state's own costs are paid goes into the fund. Not part of it — all of it. That is the rule the whole system rests on.",
    },
    {
      type: "figure",
      image: {
        id: "ARTICLE-DIAGRAM-oil-fund-flow",
        status: "placeholder",
        brief:
          "Simple editorial diagram in the site's palette, line work rather than infographic clip art. Left to right or top to bottom: the four state petroleum revenue streams (company tax, the state's own share of fields (SDFI), Equinor dividend, environmental taxes and area fees) → the state's net petroleum income → the Government Pension Fund Global (an account at Norges Bank, invested abroad by NBIM) → one controlled annual transfer into the state budget, approved by the Storting and guided by the fiscal rule. Two things must be visually clear: investment returns stay inside the fund, and the only outflow is the single transfer to the budget. The diagram must NOT show money flowing from the fund directly to hospitals, schools or any individual service.",
        alt: "Diagram showing Norway's petroleum revenue flowing into the Government Pension Fund Global, and a single annual transfer flowing from the fund into the state budget",
        aspectRatio: "16 / 9",
      },
      caption:
        "Petroleum income goes in; investment returns stay in; one approved transfer a year goes out to the state budget.",
    },
    {
      type: "paragraph",
      text: "Here is the part that surprises people. On 30 June 2026 the fund was worth 22,683 billion kroner. Of that, 15,210 billion was money the investments had earned, 5,509 billion was money the state had actually paid in, and 1,965 billion came from changes in the value of the krone. (Those three figures are published rounded to whole billions, so they add up to one billion more than the total.)",
    },
    {
      type: "paragraph",
      text: "In other words, most of the fund's value today comes from investment returns, not from the petroleum money transferred in. Oil paid for the first bricks. The returns built most of the house.",
    },
    {
      type: "timeline",
      items: [
        { year: "1969", text: "Ekofisk, Norway's first oil field, is found in the North Sea. Production starts in 1971." },
        { year: "1990", text: "Parliament passes the law creating the fund, then called the Government Petroleum Fund." },
        { year: "1996", text: "The first money is transferred into the fund." },
        { year: "1998", text: "Norges Bank Investment Management is set up on 1 January, and the fund starts buying shares." },
        { year: "2001", text: "The fiscal rule for spending money from the fund is introduced." },
        { year: "2004", text: "The fund gets its ethical guidelines." },
        { year: "2006", text: "The fund is renamed the Government Pension Fund Global." },
        { year: "2011", text: "The fund buys its first property, starting with buildings on Regent Street in London." },
        { year: "2017", text: "The fund passes 1 trillion US dollars. The expected return used in the fiscal rule is lowered from 4 to 3 percent." },
        { year: "2019", text: "The fund reaches 10,000 billion kroner on 25 October." },
        { year: "2024", text: "It passes 20,000 billion kroner for the first time, in December." },
      ],
    },

    { type: "heading", text: "Who owns it, and who decides what it buys" },
    {
      type: "paragraph",
      text: "The chain is short, and every link has a different job. Parliament writes the law. The Ministry of Finance is responsible for the fund and writes the rulebook: what may be bought, in what proportions, and how much risk is acceptable. Norges Bank was given the job of managing the money, and it does that through a unit set up in 1998, Norges Bank Investment Management — usually shortened to NBIM.",
    },
    {
      type: "paragraph",
      text: "One rule matters more than it sounds. The bank must make its investment decisions independently of the Ministry. Politicians decide the frame: how much goes into shares, which countries and asset types are allowed, and which companies are shut out on ethical grounds. They do not pick the investments, and they cannot order the fund to buy or sell a particular company.",
    },

    { type: "heading", text: "What the fund owns" },
    {
      type: "paragraph",
      text: "The fund buys four things: shares in listed companies, bonds — which means lending money to governments and companies — property, and renewable energy projects such as wind farms.",
    },
    {
      type: "paragraph",
      text: "The Ministry sets a target shape for the portfolio: 70 percent shares, 30 percent bonds. The real portfolio drifts away from that as markets move, and gets pulled back when it drifts too far. On 30 June 2026 it was 72.1 percent shares, 25.8 percent bonds, 1.6 percent property and 0.5 percent renewable energy infrastructure.",
    },
    {
      type: "paragraph",
      text: "The fund spreads its share investments across more than 7,200 companies, adding up to almost 1.5 percent of all shares in the world's listed companies. That is deliberate. Its performance is compared with a broad market index, so it follows whole markets rather than betting on a few winners.",
    },
    {
      type: "factBox",
      title: "The fund in numbers, 30 June 2026",
      items: [
        { label: "Value", value: "22,683 billion kroner" },
        { label: "Earned by the investments", value: "15,210 billion kroner" },
        { label: "Paid in by the state", value: "5,509 billion kroner" },
        { label: "From krone exchange rates", value: "1,965 billion kroner" },
        { label: "Average yearly return since 1998", value: "6.86 percent" },
        { label: "Companies owned", value: "More than 7,200" },
      ],
      note:
        "Figures from Norges Bank Investment Management. The value changes every trading day, so treat any single number as a snapshot with a date on it.",
      link: {
        label: "Want today's number? See the Oil Fund's live value at Norges Bank Investment Management.",
        href: "https://www.nbim.no/en/",
      },
    },

    { type: "heading", text: "Why the fund doesn't invest directly in Norway" },
    {
      type: "paragraph",
      text: "The fund's money is invested abroad, in foreign currencies. That is not a preference. It is written into the rulebook: the bank may not buy shares or bonds issued by Norwegian companies, may not hold investments priced in Norwegian kroner, and may not buy property or infrastructure located in Norway. (It may use Norwegian companies as legal wrappers for foreign holdings — the rule is about where the money ends up, not about paperwork.)",
    },
    {
      type: "paragraph",
      text: "The reason is practical. Norway is a small country with a large and unpredictable income. If all that money were spent or invested at home, it would tend to push up prices, wages and the krone, and squeeze every other Norwegian industry that has to compete abroad. The Ministry of Finance says the fund and the fiscal rule were built to shelter the mainland economy from large and variable petroleum revenues.",
    },
    {
      type: "paragraph",
      text: "Keeping the savings outside the country puts a wall between a volatile resource income and ordinary Norwegian economic life.",
    },

    { type: "heading", text: "Why Norway doesn't simply spend it" },
    {
      type: "paragraph",
      text: "There is a legal answer and an economic one, and both are worth knowing.",
    },
    {
      type: "paragraph",
      text: "The legal answer is that money can leave the fund in exactly one way: as a transfer to the state budget, approved by Parliament. There is no other door. No minister, agency or citizen can take money out any other way. A second rule pushes in the same direction — as long as there is money in the fund, the state is not supposed to borrow to pay for its spending.",
    },
    {
      type: "paragraph",
      text: "The economic answer is simpler. Spend the savings and they are gone. Spend only what the savings earn, and they can keep paying out indefinitely. As the Ministry puts it, the capital can be spent only once, while the return can pay for a permanently higher level of public spending. Norway is not being careful for the sake of being careful. It is trying to turn an income that will run out into one that doesn't.",
    },

    { type: "heading", text: "The fiscal rule, and what \"3 percent\" really means" },
    {
      type: "paragraph",
      text: "You will often read that Norway is allowed to spend 3 percent of the Oil Fund every year. The number is real. The sentence is still wrong, and in an interesting way.",
    },
    {
      type: "definition",
      term: "Handlingsregelen — the fiscal rule",
      text: "The guideline Norway has used since 2001: money moved from the fund to the state budget should, over time, match what the fund is expected to earn above inflation. That expected return was first estimated at 4 percent a year and lowered to 3 percent in 2017.",
    },
    {
      type: "paragraph",
      text: "Three things separate that from a yearly spending allowance.",
    },
    {
      type: "paragraph",
      text: "First, it is an average across many years, not a limit for each one. In a downturn the state is meant to spend more to support the economy. In good years it should hold back. When the fund's value jumps or falls sharply, the change in spending is spread over several years instead of following the market.",
    },
    {
      type: "paragraph",
      text: "Second, the government does not measure itself against the whole budget gap. It first works out how big the gap would be in a normal year, once oil income is set aside and once temporary swings in taxes and unemployment are stripped out. Economists call that the structural non-oil deficit, and for 2026 it came to 579 billion kroner. That adjusted figure is what the rule applies to.",
    },
    {
      type: "paragraph",
      text: "Third — and this is the part usually left out — 3 percent is not the target for a normal year. The Ministry of Finance has been explicit that spending should stay below the expected return in good and normal times, so there is room to spend more when the country needs it. Its own estimate is that spending about 2.7 percent of the fund in normal years works out at roughly 3 percent over time. That is why the 2026 figure is 2.7 percent of the fund's value, not 3.",
    },
    {
      type: "paragraph",
      text: "So the accurate version is not \"Norway spends 3 percent a year\". It is closer to this: Norway aims to spend a little less than the fund is expected to earn, precisely so it can spend more in a bad year.",
    },

    { type: "heading", text: "Does every Norwegian own a share of the fund?" },
    {
      type: "paragraph",
      text: "You can do the division, and Norwegian media do it every time the fund passes a round number. On 30 June 2026 the fund was worth 22,683 billion kroner. Norway had 5,633,770 residents at the end of March that year. That works out at roughly 4 million kroner per person — the arithmetic behind the joke that every Norwegian is a millionaire.",
    },
    {
      type: "paragraph",
      text: "The sum is real. The claim on the money is not. Nobody has an account, a share certificate or a balance they can draw on. The fund's money is not set aside for any particular purpose, and it can only leave as a transfer to the state budget that Parliament has approved.",
    },
    {
      type: "paragraph",
      text: "Whatever any of us eventually gets from it arrives as ordinary public spending — a hospital appointment, a school place, a pension paid out by the national insurance system — and never as a payment from the fund.",
    },
    {
      type: "paragraph",
      text: "The word \"pension\" in the official name causes a lot of this confusion. It describes why the state is saving: Norway expects to pay far more in pensions as the population ages. It does not mean the fund holds anyone's individual pension, and the fund does not pay pensions directly.",
    },

    { type: "heading", text: "Does the Oil Fund pay for Norway's welfare state?" },
    {
      type: "paragraph",
      text: "The honest answer is that it pays for a large part of the state budget, and taxes pay for most of the rest.",
    },
    {
      type: "paragraph",
      text: "Four things get mixed together here, so it is worth separating them. Petroleum revenue is what the state earns from oil and gas, and all of it goes into the fund. The fund is the savings. The state budget is the yearly plan for public spending, paid for mainly by ordinary taxes. The transfer is the money moved out of the fund to cover what the taxes do not.",
    },
    {
      type: "paragraph",
      text: "The scale is easier to grasp with two numbers from the same budget. For 2026 the state planned to spend about 2,200 billion kroner, and the transfer out of the fund was estimated at about 452 billion. That is roughly one krone in every five.",
    },
    {
      type: "paragraph",
      text: "But the fund does not pay for anything in particular. Its money is not earmarked, so there is no point where fund money becomes hospital money or school money. What it really buys Norway is the ability to plan a deficit every year, on purpose, without borrowing to cover it. That is a more accurate description than \"the Oil Fund pays for the welfare state\".",
    },

    { type: "heading", text: "What happens as Norway's petroleum revenues decline?" },
    {
      type: "paragraph",
      text: "Gradually, and not for a while yet. In the 2026 budget the government expected production to stay high and steady before falling through the 2030s as fields empty out. Around half of the oil and gas thought to be recoverable on the Norwegian shelf is still in the ground.",
    },
    {
      type: "paragraph",
      text: "The money is also still coming in faster than it goes out. The state's net petroleum income for 2026 was estimated at 686 billion kroner — more than the roughly 452 billion moved from the fund into the budget the same year. For now the fund is still growing from both directions: new petroleum money in, and returns on what is already there.",
    },
    {
      type: "paragraph",
      text: "So the tidy version of the story — that Norway has already turned oil into a machine that runs itself — is early. Petroleum is still Norway's largest industry, measured by what it produces, what it pays the state, what is invested in it and what it exports. The change the fund was built for is real and it is under way. Norway is in the middle of it, not past it.",
    },

    { type: "heading", text: "What the Oil Fund is — and isn't" },
    {
      type: "paragraph",
      text: "It is not a bank account full of oil money. It is an account at the central bank, matched by investments in thousands of companies, bonds and buildings abroad — and most of its value today is money those investments earned.",
    },
    {
      type: "paragraph",
      text: "Money cannot be taken out freely. It leaves only as a transfer to the state budget that Parliament has approved, and the state is not meant to borrow while the fund holds capital.",
    },
    {
      type: "paragraph",
      text: "Oil companies do not run it. NBIM invests the money under the Ministry's rulebook, and makes its investment decisions independently of the politicians who wrote that rulebook.",
    },
    {
      type: "paragraph",
      text: "It is not invested in Norway. Norwegian shares, bonds and property are excluded on purpose, because the whole point is to keep the savings out of the domestic economy.",
    },
    {
      type: "paragraph",
      text: "And nobody has 4 million kroner waiting for them. That number is a division sum, not a balance.",
    },
    {
      type: "paragraph",
      text: "What makes the fund unusual is not only its size. It is that a country that came into a fortune wrote the rules for spending it before the money got big — and has mostly stuck to them for 25 years.",
    },
  ],
};
