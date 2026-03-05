"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { PricingCard } from "@/components/pricing-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { DownloadBadge } from "@/components/footer";
import { PRICING_TIERS, FAQ_ITEMS, SITE_CONFIG } from "@/lib/constants";

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className="pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-brand-purple mb-3 tracking-wide uppercase">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              Start free. Upgrade when you&apos;re ready.
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              10-20x cheaper than traditional therapy. Crisis support is always
              free, regardless of your plan.
            </p>
          </motion.div>

          <div className="mt-10 inline-flex items-center bg-bg-surface border border-white/5 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                !annual
                  ? "bg-brand-purple text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                annual
                  ? "bg-brand-purple text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs text-brand-teal font-semibold">
                Save 44%
              </span>
            </button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, i) => (
            <PricingCard
              key={tier.name}
              {...tier}
              annual={annual}
              index={i}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-text-secondary">
            All paid plans include a{" "}
            <span className="text-text-primary font-medium">
              14-day free trial
            </span>
            . Cancel anytime.
          </p>
        </div>
      </Section>

      <Section className="bg-bg-surface/30">
        <SectionHeader title="Frequently asked questions" />
        <div className="max-w-2xl mx-auto">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary">
            Ready to start growing?
          </h2>
          <p className="mt-4 text-text-secondary">
            Download Lumis and begin your journey today.
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
