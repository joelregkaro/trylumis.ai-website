"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { FaqAccordion } from "@/components/faq-accordion";
import { DownloadBadge } from "@/components/footer";
import { FAQ_ITEMS, SITE_CONFIG, FEATURES } from "@/lib/constants";

export default function PricingPage() {
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
              Plans
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              Start free. Upgrade when you&apos;re ready.
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Download Lumis and explore plans directly in the app. Crisis
              support is always free, regardless of your plan.
            </p>
          </motion.div>

          <div className="mt-10 flex justify-center gap-4">
            <DownloadBadge store="apple" />
            <DownloadBadge store="google" />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Everything you need to grow"
          description="All features are available to every user. Upgrade in the app for more sessions and deeper tools."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {FEATURES.slice(0, 8).map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-[var(--radius-xl)] bg-bg-surface border border-white/5"
            >
              <h3 className="text-base font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {feature.description.slice(0, 120)}...
              </p>
            </motion.div>
          ))}
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
