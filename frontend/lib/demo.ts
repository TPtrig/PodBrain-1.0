export type DemoTaskData = {
  taskId: string;
  domain: "Finance" | "Business" | "AI";
  title: string;
  summary: string;
  transcript: string;
  audioUrl: string;
  takeaways: string[];
};

export type DemoSeedSource = {
  id: string;
  domain: "Finance" | "Business" | "AI";
  title: string;
  url: string;
  sourceLabel: string;
  summary: string;
  transcript: string;
  takeaways: string[];
  curatedTakeaways: string[];
  draftTakeaways: string[];
  conversationTitle: string;
  userQuestion: string;
  assistantAnswer: string;
  assistantContexts: string[];
};

const DEMO_TASK_PREFIX = "podbrain:demo-task:";
const DEMO_CURATED_PREFIX = "podbrain:demo-curated:";

const DEMO_AUDIO =
  "https://file-examples.com/storage/fe7f0c9fdf5f8f53e9f8f9f/2017/11/file_example_MP3_700KB.mp3";

const DEMO_SOURCES: DemoSeedSource[] = [
  {
    id: "finance-rates",
    domain: "Finance",
    title: "Macro Allocator Weekly: Higher-for-Longer Rates and the New Value of Cash",
    url: "https://demo.podbrain.app/podcasts/finance/higher-for-longer-rates",
    sourceLabel: "Finance podcast · parsed 12 days ago · 58 min",
    summary:
      "A finance episode on why higher rates changed what operational resilience looks like for software businesses: the conversation focused on refinancing walls, free cash flow after interest expense, and why idle cash became strategic optionality again.",
    transcript: [
      "Host: Markets spent years rewarding speed over discipline, but that trade flipped once capital stopped being free.",
      "Guest: The real breakage point is often debt maturity concentration, not the first quarter of slower revenue.",
      "Host: So cash balances matter differently now?",
      "Guest: Yes. Short-duration yield gives management teams time, and time is strategic when product bets need another two quarters.",
      "Host: What should operators watch besides revenue growth?",
      "Guest: Free cash flow after interest expense, collections health, and any refinancing wall inside the next eighteen months.",
      "Host: Does this change pricing strategy too?",
      "Guest: Absolutely. Expensive capital forces every roadmap bet to answer a payback question."
    ].join(" "),
    takeaways: [
      "In a higher-for-longer rate cycle, the first real fragility often appears in debt maturity concentration rather than headline revenue slowdown.",
      "Teams should review free cash flow after interest expense when judging resilience; EBITDA can hide refinancing pressure.",
      "Cash is not idle if short-duration yield restores optionality for hiring, product timing, and distressed acquisitions.",
      "Usage-based businesses need tighter collections monitoring because billing lag can deteriorate before churn becomes visible.",
      "Board updates should include a refinancing wall view 12 to 18 months out so maturity risk becomes a product and staffing input."
    ],
    curatedTakeaways: [
      "Teams should review free cash flow after interest expense when judging resilience; EBITDA can hide refinancing pressure.",
      "Cash is not idle if short-duration yield restores optionality for hiring, product timing, and distressed acquisitions.",
      "Board updates should include a refinancing wall view 12 to 18 months out so maturity risk becomes a product and staffing input."
    ],
    draftTakeaways: [
      "When capital becomes expensive, roadmap bets should be defended in payback-period language, not only strategic narrative."
    ],
    conversationTitle: "Finance memory: rates, cash, refinancing",
    userQuestion: "From the finance podcasts, what should a software company actually watch if rates stay high for another year?",
    assistantAnswer:
      "The strongest pattern was to stop treating runway as the only health metric. The finance material kept pointing toward debt maturity timing, free cash flow after interest expense, and collection discipline as earlier warning signals.",
    assistantContexts: [
      "Teams should review free cash flow after interest expense when judging resilience; EBITDA can hide refinancing pressure.",
      "Board updates should include a refinancing wall view 12 to 18 months out so maturity risk becomes a product and staffing input."
    ]
  },
  {
    id: "business-ops",
    domain: "Business",
    title: "Operator's Stack: Turning GTM Meetings into a Compounding Operating System",
    url: "https://demo.podbrain.app/podcasts/business/operating-system-cadence",
    sourceLabel: "Business podcast · parsed 9 days ago · 64 min",
    summary:
      "A business episode on why strong execution looks boring from the outside: it linked weekly written operating reviews, ICP discipline, onboarding time-to-value, and packaging simplicity into one compounding operating system.",
    transcript: [
      "Host: Every team says they want alignment, but most of them really just create more meetings.",
      "Guest: Alignment comes from visible ownership and decision continuity, not calendar density.",
      "Host: What tends to break first when growth slows?",
      "Guest: ICP discipline. Teams start taking attractive but distracting deals and the whole system gets noisier.",
      "Host: Where does pricing fit into that?",
      "Guest: Pricing only lands well when packaging is simple and sales can tell a clean migration story.",
      "Host: And written memos?",
      "Guest: Weekly memos keep decisions in sequence. Without them, every review starts from a different interpretation."
    ].join(" "),
    takeaways: [
      "The best operating reviews end with one accountable owner, one leading metric, and one next checkpoint instead of a recap of everything discussed.",
      "Mid-market SaaS teams often lose growth because ICP discipline erodes before top-of-funnel volume does.",
      "Pricing changes land better when paired with packaging simplification and a concrete migration story for sales.",
      "Weekly written memos outperform oversized quarterly decks because they preserve decisions in sequence and reduce reinterpretation.",
      "If onboarding time-to-value trails the sales promise, retention risk is already embedded before expansion ever enters the conversation."
    ],
    curatedTakeaways: [
      "The best operating reviews end with one accountable owner, one leading metric, and one next checkpoint instead of a recap of everything discussed.",
      "Pricing changes land better when paired with packaging simplification and a concrete migration story for sales.",
      "Weekly written memos outperform oversized quarterly decks because they preserve decisions in sequence and reduce reinterpretation."
    ],
    draftTakeaways: [
      "Cross-functional reviews should end with one visible tradeoff, not only a status update, if you want meetings to compound."
    ],
    conversationTitle: "Business memory: cadence and GTM",
    userQuestion: "What kept repeating across the business podcasts about how strong teams actually operate?",
    assistantAnswer:
      "They repeatedly turned management into a cadence problem. The business material favored written continuity, narrow accountability, and metrics that survive handoffs over high-energy but low-memory meetings.",
    assistantContexts: [
      "The best operating reviews end with one accountable owner, one leading metric, and one next checkpoint instead of a recap of everything discussed.",
      "Weekly written memos outperform oversized quarterly decks because they preserve decisions in sequence and reduce reinterpretation."
    ]
  },
  {
    id: "ai-rag-agents",
    domain: "AI",
    title: "Practical AI Systems: Reliable RAG, Eval Loops, and Agent Checkpoints",
    url: "https://demo.podbrain.app/podcasts/ai/reliable-rag-agents",
    sourceLabel: "AI podcast · parsed 3 days ago · 71 min",
    summary:
      "An AI systems episode on why reliable product behavior rarely comes from larger models alone: it walked through retrieval curation, ranking, agent checkpoints, eval loops, and fallback policies as the real levers behind trust.",
    transcript: [
      "Host: Teams keep adding more agents, but users still complain about reliability.",
      "Guest: Because most failures happen before generation, in curation, ranking, and unclear workflow boundaries.",
      "Host: So reliability is really a product systems issue?",
      "Guest: Exactly. Good agents stop at checkpoints, show evidence, and ask for confirmation when the cost of guessing is high.",
      "Host: Where does fine-tuning fit into that stack?",
      "Guest: Later. If prompting, retrieval, and eval are weak, tuning just compresses noise into weights.",
      "Host: What's the fastest win?",
      "Guest: Stronger fallback behavior. A clean 'I don't know' is more trustworthy than confident drift."
    ].join(" "),
    takeaways: [
      "Retrieval quality is usually constrained by curation and ranking before it is constrained by the frontier model.",
      "Agent workflows should expose checkpoints where the system can stop, show evidence, and ask for confirmation.",
      "Eval sets need to mirror product-visible failures: groundedness, latency, refusal quality, and recovery after misses.",
      "Fine-tuning should follow prompt, retrieval, and workflow stabilization; otherwise teams compress noise into weights.",
      "The fastest reliability gain is often a stronger fallback policy that says 'I don't know' before the system starts guessing."
    ],
    curatedTakeaways: [
      "Retrieval quality is usually constrained by curation and ranking before it is constrained by the frontier model.",
      "Agent workflows should expose checkpoints where the system can stop, show evidence, and ask for confirmation.",
      "The fastest reliability gain is often a stronger fallback policy that says 'I don't know' before the system starts guessing."
    ],
    draftTakeaways: [
      "Multi-agent systems only feel useful when each agent has a narrow contract and an observable handoff."
    ],
    conversationTitle: "AI memory: RAG reliability and agents",
    userQuestion: "If we were building AI features next quarter, what should we prioritize before adding more agents?",
    assistantAnswer:
      "The AI material was pretty decisive: get memory curation, retrieval ranking, and visible checkpoints right first. More agents on top of weak evidence mostly create more expensive ambiguity.",
    assistantContexts: [
      "Retrieval quality is usually constrained by curation and ranking before it is constrained by the frontier model.",
      "Agent workflows should expose checkpoints where the system can stop, show evidence, and ask for confirmation."
    ]
  }
];

function pickDemoSource(inputUrl: string): DemoSeedSource {
  const normalized = inputUrl.toLowerCase();
  if (/(finance|macro|market|rates|bank|credit|cash|valuation)/.test(normalized)) {
    return DEMO_SOURCES[0];
  }
  if (/(business|startup|founder|sales|pricing|gtm|operator)/.test(normalized)) {
    return DEMO_SOURCES[1];
  }
  if (/(ai|llm|rag|agent|model|eval|retriev|prompt)/.test(normalized)) {
    return DEMO_SOURCES[2];
  }
  return DEMO_SOURCES[2];
}

export function isDemoModeEnabled(): boolean {
  return (process.env.NEXT_PUBLIC_DEMO_MODE ?? "true") === "true";
}

export function getDemoSeedSources(): DemoSeedSource[] {
  return DEMO_SOURCES.map((item) => ({
    ...item,
    takeaways: [...item.takeaways],
    curatedTakeaways: [...item.curatedTakeaways],
    draftTakeaways: [...item.draftTakeaways],
    assistantContexts: [...item.assistantContexts]
  }));
}

export function createDemoTask(inputUrl: string): DemoTaskData {
  if (typeof window === "undefined") {
    throw new Error("Demo task creation requires browser environment.");
  }

  const taskId = `demo-${Date.now()}`;
  const preset = pickDemoSource(inputUrl);

  const data: DemoTaskData = {
    taskId,
    domain: preset.domain,
    title: preset.title,
    summary: preset.summary,
    transcript: preset.transcript,
    audioUrl: DEMO_AUDIO,
    takeaways: preset.takeaways
  };

  window.sessionStorage.setItem(`${DEMO_TASK_PREFIX}${taskId}`, JSON.stringify(data));
  window.sessionStorage.setItem(`${DEMO_CURATED_PREFIX}${taskId}`, JSON.stringify(preset.curatedTakeaways));
  return data;
}

export function getDemoTask(taskId: string): DemoTaskData | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.sessionStorage.getItem(`${DEMO_TASK_PREFIX}${taskId}`);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as DemoTaskData;
    if (!parsed || !parsed.taskId || !parsed.title) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveDemoCuratedTakeaways(taskId: string, takeaways: string[]): number {
  if (typeof window === "undefined") {
    return 0;
  }

  window.sessionStorage.setItem(`${DEMO_CURATED_PREFIX}${taskId}`, JSON.stringify(takeaways));
  return takeaways.length;
}

export function getDemoCuratedTakeaways(taskId: string): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.sessionStorage.getItem(`${DEMO_CURATED_PREFIX}${taskId}`);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed.filter((t) => typeof t === "string" && t.trim()) : [];
  } catch {
    return [];
  }
}

export function demoChatAnswer(question: string, curatedTakeaways: string[]): { answer: string; contexts: string[] } {
  const contexts = curatedTakeaways.filter((t) => t.trim());
  if (!contexts.length) {
    return {
      answer: "I don't know based on your saved takeaways.",
      contexts: []
    };
  }

  const keywords = question
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 4);

  const scored = contexts
    .map((ctx) => {
      const lower = ctx.toLowerCase();
      const score = keywords.reduce((acc, kw) => (lower.includes(kw) ? acc + 1 : acc), 0);
      return { ctx, score };
    })
    .sort((a, b) => b.score - a.score);

  const selected = scored.slice(0, 2).map((item) => item.ctx);

  if (selected.every((item, idx) => scored[idx]?.score === 0)) {
    return {
      answer: "I don't know based on your saved takeaways.",
      contexts: selected
    };
  }

  return {
    answer: `Based on your curated takeaways: ${selected.join(" ")}`,
    contexts: selected
  };
}
