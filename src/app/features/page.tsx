"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";
import { DownloadBadge } from "@/components/footer";
import { FEATURES } from "@/lib/constants";
import { ICON_MAP } from "@/components/icons";

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-brand-purple mb-3 tracking-wide uppercase">
              Features
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              Everything you need to grow
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Lumis combines evidence-based therapeutic techniques with AI
              memory to create support that actually understands you.
            </p>
          </motion.div>
        </div>
      </section>

      {FEATURES.map((feature, index) => (
        <FeatureSection
          key={feature.id}
          feature={feature}
          index={index}
          reversed={index % 2 === 1}
        />
      ))}

      <Section className="bg-gradient-to-b from-bg-primary to-bg-surface/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary">
            Ready to experience the difference?
          </h2>
          <p className="mt-4 text-text-secondary">
            Download Lumis and have your first conversation today — free.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <DownloadBadge store="apple" />
            <DownloadBadge store="google" />
          </div>
        </div>
      </Section>
    </>
  );
}

function FeatureSection({
  feature,
  index,
  reversed,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
  reversed: boolean;
}) {
  const IconComponent = ICON_MAP[feature.icon];

  return (
    <Section className={index % 2 === 0 ? "" : "bg-bg-surface/30"}>
      <div
        className={`grid lg:grid-cols-2 gap-16 items-center ${
          reversed ? "lg:direction-rtl" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: reversed ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={reversed ? "lg:order-2" : ""}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-purple/10 rounded-full mb-4">
            <span className="text-brand-purple">
              {IconComponent && <IconComponent />}
            </span>
            <span className="text-xs font-semibold text-brand-purple">
              {feature.title}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-text-primary">
            {feature.headline}
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            {feature.description}
          </p>
          <ul className="mt-6 space-y-3">
            {feature.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-sm text-text-secondary"
              >
                <svg
                  className="w-5 h-5 text-brand-teal shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reversed ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`flex justify-center ${reversed ? "lg:order-1" : ""}`}
        >
          <FeatureVisual featureId={feature.id} />
        </motion.div>
      </div>
    </Section>
  );
}

function FeatureVisual({ featureId }: { featureId: string }) {
  const visuals: Record<string, React.ReactNode> = {
    memory: (
      <MockCard>
        <div className="space-y-3 p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-brand-teal" />
            <span className="text-xs text-brand-teal font-medium">
              Memory Active
            </span>
          </div>
          <MemoryItem label="Sessions together" value="47" />
          <MemoryItem label="Patterns detected" value="12" />
          <MemoryItem label="Goals tracked" value="5" />
          <MemoryItem label="Relationships mapped" value="8" />
        </div>
      </MockCard>
    ),
    voice: (
      <MockCard>
        <div className="p-4 flex flex-col items-center justify-center h-full">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [8, 20 + Math.random() * 20, 8] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
                className="w-1 bg-brand-purple rounded-full"
              />
            ))}
          </div>
          <p className="text-sm text-text-secondary">Voice session active</p>
          <p className="text-xs text-text-tertiary mt-1">12:34</p>
        </div>
      </MockCard>
    ),
    sos: (
      <MockCard>
        <div className="p-4 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-status-crisis/20 flex items-center justify-center mb-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-status-crisis"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <p className="text-base font-semibold text-text-primary">
            I&apos;m here with you
          </p>
          <p className="text-xs text-text-secondary mt-2">
            Let&apos;s take a breath together
          </p>
          <div className="mt-4 flex gap-2 justify-center">
            <span className="px-3 py-1.5 bg-bg-elevated rounded-full text-xs text-text-secondary">
              Breathing
            </span>
            <span className="px-3 py-1.5 bg-bg-elevated rounded-full text-xs text-text-secondary">
              Grounding
            </span>
          </div>
        </div>
      </MockCard>
    ),
    echo: (
      <MockCard>
        <div className="p-4 space-y-3">
          <p className="text-xs font-semibold text-brand-gold mb-3">
            Session Echo
          </p>
          <EchoItem
            text="Practice the 5-4-3-2-1 grounding before your presentation"
            done
          />
          <EchoItem text="Journal about the conversation with your sister" done={false} />
          <EchoItem
            text="Try replacing 'I should' with 'I choose to' this week"
            done={false}
          />
        </div>
      </MockCard>
    ),
    mood: (
      <MockCard>
        <div className="p-4">
          <p className="text-xs font-semibold text-text-primary mb-4">
            This Week
          </p>
          <div className="flex items-end gap-2 h-24">
            {[40, 55, 45, 70, 65, 80, 75].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="w-full rounded-t-sm bg-gradient-to-t from-brand-purple to-brand-teal"
                />
                <span className="text-[9px] text-text-tertiary">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MockCard>
    ),
    journal: (
      <MockCard>
        <div className="p-4 space-y-3">
          <p className="text-xs font-semibold text-text-primary mb-3">
            Monthly Wrapped
          </p>
          <div className="bg-gradient-to-br from-brand-purple/20 to-brand-teal/10 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-text-primary">12</p>
            <p className="text-xs text-text-secondary">Sessions this month</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-bg-elevated rounded-lg p-2.5 text-center">
              <p className="text-lg font-bold text-brand-teal">+23%</p>
              <p className="text-[10px] text-text-tertiary">Mood trend</p>
            </div>
            <div className="bg-bg-elevated rounded-lg p-2.5 text-center">
              <p className="text-lg font-bold text-brand-gold">5</p>
              <p className="text-[10px] text-text-tertiary">Goals hit</p>
            </div>
          </div>
        </div>
      </MockCard>
    ),
    companion: (
      <MockCard>
        <div className="p-4 flex flex-col items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-purple via-brand-purple-light to-brand-teal shadow-lg shadow-brand-purple/20 mb-4"
          />
          <p className="text-sm font-semibold text-text-primary">
            Level 12 Companion
          </p>
          <p className="text-xs text-text-secondary mt-1">
            47 sessions together
          </p>
          <div className="mt-3 w-full bg-bg-elevated rounded-full h-2">
            <div className="bg-brand-purple rounded-full h-2 w-3/4" />
          </div>
          <p className="text-[10px] text-text-tertiary mt-1">
            3 sessions to next evolution
          </p>
        </div>
      </MockCard>
    ),
    relationships: (
      <MockCard>
        <div className="p-4">
          <p className="text-xs font-semibold text-text-primary mb-4">
            My World
          </p>
          <div className="relative h-36 flex items-center justify-center">
            <div className="absolute w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-[10px] text-white font-bold">
              Me
            </div>
            {[
              { name: "Mom", x: -50, y: -30, color: "bg-brand-teal" },
              { name: "Alex", x: 45, y: -25, color: "bg-brand-gold" },
              { name: "Sara", x: -40, y: 35, color: "bg-brand-purple-light" },
              { name: "Work", x: 50, y: 30, color: "bg-status-warning" },
            ].map((person) => (
              <div
                key={person.name}
                className="absolute flex flex-col items-center"
                style={{
                  transform: `translate(${person.x}px, ${person.y}px)`,
                }}
              >
                <div
                  className={`w-6 h-6 rounded-full ${person.color} flex items-center justify-center text-[8px] text-white font-bold`}
                >
                  {person.name[0]}
                </div>
                <span className="text-[8px] text-text-tertiary mt-0.5">
                  {person.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MockCard>
    ),
  };

  return (
    visuals[featureId] || (
      <MockCard>
        <div className="p-4 flex items-center justify-center h-full text-text-tertiary text-sm">
          Feature preview
        </div>
      </MockCard>
    )
  );
}

function MockCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-64 bg-bg-surface border border-white/5 rounded-[var(--radius-xl)] overflow-hidden shadow-xl shadow-brand-purple/5">
      {children}
    </div>
  );
}

function MemoryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <span className="text-xs text-text-secondary">{label}</span>
      <span className="text-sm font-semibold text-text-primary">{value}</span>
    </div>
  );
}

function EchoItem({ text, done }: { text: string; done: boolean }) {
  return (
    <div className="flex items-start gap-2.5">
      <div
        className={`w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
          done
            ? "border-brand-teal bg-brand-teal/20"
            : "border-white/20"
        }`}
      >
        {done && (
          <svg
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-brand-teal"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span
        className={`text-xs leading-relaxed ${
          done ? "text-text-tertiary line-through" : "text-text-secondary"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
