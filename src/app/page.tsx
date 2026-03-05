"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { FeatureCard } from "@/components/feature-card";
import { DownloadBadge } from "@/components/footer";
import {
  BrainIcon,
  HeartIcon,
  SparklesIcon,
  ChartIcon,
  BookIcon,
  StarIcon,
} from "@/components/icons";
import { SITE_CONFIG } from "@/lib/constants";

const LumisOrb = dynamic(() => import("@/components/orb/lumis-orb"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-brand-purple/20 blur-3xl animate-pulse" />
    </div>
  ),
});

export default function HomePage() {
  return (
    <>
      <OrbHero />
      <SocialProofBar />
      <HighlightFeatures />
      <HowItWorks />
      <CompanionSection />
      <CtaSection />
    </>
  );
}

function OrbHero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Full-screen orb canvas */}
      <div className="absolute inset-0">
        <LumisOrb className="w-full h-full" autoTransition />
      </div>

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none lg:hidden" />

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between pt-24 pb-12">
        {/* Top tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center px-6"
        >
          <p className="text-sm font-medium text-brand-purple/80 tracking-[0.3em] uppercase">
            Your AI Growth Companion
          </p>
        </motion.div>

        {/* Center — empty space for the orb */}
        <div className="flex-1" />

        {/* Bottom content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center px-6 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            <span className="text-white">Feel understood.</span>
            <br />
            <span className="bg-gradient-to-r from-brand-purple via-brand-purple-light to-brand-teal bg-clip-text text-transparent">
              Grow for real.
            </span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            {SITE_CONFIG.subtitle}. Lumis remembers your story, notices your
            patterns, and supports you when nothing else can.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <DownloadBadge store="apple" />
            <DownloadBadge store="google" />
          </div>

          <p className="mt-4 text-xs text-white/25">
            Free to start. No credit card required.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-white/20"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialProofBar() {
  const stats = [
    { value: "24/7", label: "Available" },
    { value: "100%", label: "Private" },
    { value: "Free", label: "Crisis Support" },
  ];

  return (
    <section className="border-y border-white/5 bg-bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-12 md:gap-20">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-text-primary">
              {stat.value}
            </p>
            <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HighlightFeatures() {
  const features = [
    {
      icon: <BrainIcon />,
      title: "It Remembers You",
      description:
        "Unlike chatbots that reset every session, Lumis remembers your story — patterns, relationships, goals. Session 100 feels like session 100.",
    },
    {
      icon: <ChartIcon />,
      title: "It Notices What You Can't",
      description:
        "Lumis detects patterns in your mood, behavior, and relationships that are invisible to you. Insights that compound over time.",
    },
    {
      icon: <HeartIcon />,
      title: "There at 2 AM",
      description:
        "Panic attack? Overwhelmed? One tap gets you immediate, context-aware support with techniques that have worked for you before.",
    },
    {
      icon: <SparklesIcon />,
      title: "From Insight to Action",
      description:
        "Every session produces real takeaways. Lumis follows up at the right moment, gently holding you accountable to the growth you chose.",
    },
    {
      icon: <BookIcon />,
      title: "Your Growth Story",
      description:
        "Every session becomes a journal entry. Monthly Wrapped shows your patterns, milestones, and growth in shareable cards.",
    },
    {
      icon: <StarIcon />,
      title: "Grows As You Grow",
      description:
        "Lumis isn't just a tool — it's a companion that evolves with your journey, celebrates milestones, and deepens its understanding.",
    },
  ];

  return (
    <Section>
      <SectionHeader
        eyebrow="Why Lumis"
        title="An AI that actually knows you"
        description="Lumis uses a 4-tier memory system to remember your story, detect patterns, and deliver personalized support that gets better over time."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} index={i} />
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Download & Say Hi",
      description:
        "A 90-second onboarding that feels like a warm conversation, not a form. Tell Lumis what brought you here — no pressure, no labels.",
    },
    {
      step: "02",
      title: "Have a Conversation",
      description:
        "Text or voice — your choice. Lumis uses evidence-based techniques (CBT, DBT, ACT, Motivational Interviewing) tailored to you.",
    },
    {
      step: "03",
      title: "Watch Yourself Grow",
      description:
        "See mood trends, track action items, discover patterns, and get a monthly Wrapped that proves growth is happening — even when it doesn't feel like it.",
    },
  ];

  return (
    <Section className="bg-bg-surface/30">
      <SectionHeader
        eyebrow="How It Works"
        title="Three steps to real growth"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-purple/10 text-brand-purple text-lg font-bold mb-5">
              {step.step}
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function CompanionSection() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <LumisOrb className="w-full h-full max-w-2xl max-h-[600px]" mood="peaceful" autoTransition={false} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-brand-purple mb-3 tracking-wide uppercase">
              Meet Your Companion
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A living presence that reflects your journey
            </h2>
            <p className="mt-4 text-lg text-white/50 leading-relaxed">
              The Lumis orb is more than an animation — it&apos;s a
              metamorphic companion that breathes, morphs, and shifts its form
              based on your emotional state. Calm and smooth when you&apos;re at
              peace. Energized and iridescent when you&apos;re charged.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Morphs shape based on your mood",
                "Iridescent, reflective surface",
                "5 emotional states with smooth transitions",
                "A visual mirror of your inner world",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/40"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <Section className="bg-gradient-to-b from-bg-primary to-bg-surface/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Ready to feel understood?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Start your growth journey today. Free to begin, no credit card
            required. Crisis support is always free.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DownloadBadge store="apple" />
            <DownloadBadge store="google" />
          </div>
          <p className="mt-10 text-xs text-text-tertiary">
            Lumis is a wellness companion, not a medical provider. If
            you&apos;re in crisis, call{" "}
            <a
              href="tel:988"
              className="text-status-crisis hover:underline font-medium"
            >
              988
            </a>{" "}
            or text{" "}
            <a
              href="sms:741741&body=HOME"
              className="text-status-crisis hover:underline font-medium"
            >
              HOME to 741741
            </a>
            .
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
