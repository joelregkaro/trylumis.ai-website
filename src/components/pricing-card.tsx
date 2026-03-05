"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

interface PricingCardProps {
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  annual: boolean;
  index: number;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  highlighted,
  annual,
  index,
}: PricingCardProps) {
  const displayPrice = annual ? price.annual : price.monthly;
  const period = annual ? "/yr" : "/mo";
  const monthlyEquivalent = annual
    ? (price.annual / 12).toFixed(2)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-8 rounded-[var(--radius-xl)] border ${
        highlighted
          ? "bg-gradient-to-b from-brand-purple/10 to-bg-surface border-brand-purple/40"
          : "bg-bg-surface border-white/5"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-purple text-white text-xs font-semibold rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold text-text-primary">{name}</h3>
      <p className="mt-1 text-sm text-text-secondary">{description}</p>

      <div className="mt-6 mb-8">
        {displayPrice === 0 ? (
          <div className="text-4xl font-bold text-text-primary">Free</div>
        ) : (
          <>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-text-primary">
                ${displayPrice}
              </span>
              <span className="text-sm text-text-secondary">{period}</span>
            </div>
            {monthlyEquivalent && (
              <p className="mt-1 text-xs text-brand-teal">
                ${monthlyEquivalent}/mo — Save 44%
              </p>
            )}
          </>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
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
            <span className="text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={SITE_CONFIG.appStore}
        className={`block w-full py-3 text-center text-sm font-semibold rounded-[var(--radius-md)] transition-colors ${
          highlighted
            ? "bg-brand-purple hover:bg-brand-purple-light text-white"
            : "bg-white/5 hover:bg-white/10 text-text-primary border border-white/10"
        }`}
      >
        {cta}
      </a>
    </motion.div>
  );
}
