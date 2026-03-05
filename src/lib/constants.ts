export const SITE_CONFIG = {
  name: "Lumis",
  tagline: "Feel understood. Grow for real.",
  subtitle: "An AI that actually knows you",
  description:
    "Lumis is an AI growth companion that remembers your story, notices your patterns, and supports you when nothing else can. Available 24/7.",
  url: "https://getlumis.app",
  appStore: "#",
  playStore: "#",
  email: "support@getlumis.app",
  crisisLine: "988",
  crisisText: "HOME to 741741",
};

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
];

export const PRICING_TIERS = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    description: "Start your growth journey",
    features: [
      "3 AI sessions",
      "Daily mood check-ins",
      "Crisis support (always free)",
      "Basic insights",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: { monthly: 14.99, annual: 99.99 },
    description: "For those ready to grow",
    features: [
      "Unlimited AI sessions",
      "Long-term memory",
      "Pattern detection",
      "Session Echo action items",
      "Growth dashboard",
      "Monthly Wrapped",
      "Journal + mood trends",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Growth+",
    price: { monthly: 24.99, annual: 179.99 },
    description: "The complete experience",
    features: [
      "Everything in Growth",
      "Voice sessions",
      "Priority responses",
      "Advanced analytics",
      "Relationship mapping",
      "Early access to new features",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
];

export const FEATURES = [
  {
    id: "memory",
    title: "It Remembers You",
    headline: "AI Chat with Long-Term Memory",
    description:
      "Unlike generic chatbots that reset every session, Lumis remembers your story — your patterns, relationships, goals, and struggles. Session 100 feels like session 100, not session 1.",
    benefits: [
      "4-tier memory system that grows with you",
      "References past conversations naturally",
      "Notices patterns you can't see yourself",
      "Gets more valuable the longer you use it",
    ],
    icon: "brain",
  },
  {
    id: "voice",
    title: "Talk, Don't Type",
    headline: "Voice Sessions",
    description:
      "Sometimes typing isn't enough. Have natural voice conversations with Lumis — like talking to a wise friend who truly listens and remembers everything.",
    benefits: [
      "Natural voice conversations",
      "Same memory and insight as text",
      "Perfect for walks, commutes, or late nights",
      "Full transcripts saved automatically",
    ],
    icon: "mic",
  },
  {
    id: "sos",
    title: "There When Nothing Else Is",
    headline: '"In The Moment" SOS Mode',
    description:
      "Panic attack at 2 AM? Overwhelmed before a meeting? One tap gets you immediate, context-aware support with grounding exercises, breathing tools, and coping strategies tailored to what has worked for you before.",
    benefits: [
      "One-tap crisis support",
      "Knows your triggers and what helps",
      "Grounding, breathing, and coping tools",
      "Professional crisis resources always available",
    ],
    icon: "heart",
  },
  {
    id: "echo",
    title: "From Insight to Action",
    headline: "Session Echo",
    description:
      "Every session produces real takeaways — action items, reflections, and commitments. Lumis follows up at the right moment, gently holding you accountable to the growth you chose.",
    benefits: [
      "Auto-extracted action items",
      "Contextual follow-up check-ins",
      "Tracks what you committed to",
      "Gentle accountability, not nagging",
    ],
    icon: "sparkles",
  },
  {
    id: "mood",
    title: "See Your Story Unfold",
    headline: "Mood Check-ins + Growth Dashboard",
    description:
      "Quick daily mood check-ins build into powerful trends. See your emotional patterns over weeks and months — proof that growth is happening, even when it doesn't feel like it.",
    benefits: [
      "30-second daily check-ins",
      "Non-judgmental mood spectrum",
      "Weekly and monthly trend visualization",
      "PHQ-9 and GAD-7 validated assessments",
    ],
    icon: "chart",
  },
  {
    id: "journal",
    title: "Your Growth Story",
    headline: "Journal + Monthly Wrapped",
    description:
      "Every session becomes a journal entry. At the end of each month, get a beautiful Wrapped-style summary — your patterns, milestones, and growth in shareable cards.",
    benefits: [
      "Sessions automatically journaled",
      "Personalized journal prompts",
      "Spotify-style Monthly Wrapped",
      "Shareable progress cards",
    ],
    icon: "book",
  },
  {
    id: "companion",
    title: "Grows As You Grow",
    headline: "Your Companion",
    description:
      "Lumis isn't just a tool — it's a presence. A softly glowing companion that reflects your journey, celebrates your milestones, and evolves as you do.",
    benefits: [
      "Expressive companion character",
      "Evolves with your progress",
      "Celebrates milestones with you",
      "Breathing animation for calm",
    ],
    icon: "star",
  },
  {
    id: "relationships",
    title: "Understand Your World",
    headline: "Relationship Mapping",
    description:
      'Lumis tracks how the people in your life affect your wellbeing. See your "My World" map — understanding relationship patterns is key to personal growth.',
    benefits: [
      "Visual relationship mapping",
      "Pattern detection across relationships",
      "Understand emotional triggers",
      "Context-aware support during conflicts",
    ],
    icon: "users",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Is Lumis a replacement for therapy?",
    answer:
      "No. Lumis is a wellness and personal growth companion, not a licensed therapist or medical provider. It uses evidence-based techniques (CBT, DBT, ACT, Motivational Interviewing) to support your growth, but it's not a substitute for professional mental health care. If you're in crisis, Lumis will always connect you to professional resources.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. Your conversations are encrypted in transit and at rest. We never sell your data to anyone — period. You can export or delete all your data at any time. We use Supabase for secure data storage with row-level security policies.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel your subscription at any time through your app store settings. Your data remains accessible and you can continue using the free tier. No lock-in, no tricks.",
  },
  {
    question: "How does the AI memory work?",
    answer:
      "Lumis uses a 4-tier memory system: session summaries, semantic embeddings, structured memories, and relationship mapping. This means it remembers your story across sessions — your patterns, goals, relationships, and what techniques have helped you. The longer you use it, the more personalized it becomes.",
  },
  {
    question: "What happens in a crisis?",
    answer:
      'Lumis has built-in crisis detection and will always surface professional resources like the 988 Suicide & Crisis Lifeline and Crisis Text Line. The "In The Moment" SOS mode provides immediate grounding and coping tools. Crisis support is always free, regardless of your subscription.',
  },
  {
    question: "What AI model does Lumis use?",
    answer:
      "Lumis uses Claude by Anthropic — one of the most advanced and safety-focused AI models available. We chose Claude specifically for its nuanced understanding, empathetic responses, and built-in safety features.",
  },
];
