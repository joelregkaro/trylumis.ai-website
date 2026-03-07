"use client";

import { motion } from "framer-motion";
import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";
import { FaqAccordion } from "@/components/faq-accordion";
import { FAQ_ITEMS, SITE_CONFIG } from "@/lib/constants";

const SUPPORT_FAQ = [
  ...FAQ_ITEMS,
  {
    question: "How do I delete my account?",
    answer:
      'You can delete your account from the "Me" tab in the app under Settings > Account > Delete Account. This permanently removes all your data including conversations, memories, mood data, and journal entries within 30 days.',
  },
  {
    question: "How do I export my data?",
    answer:
      'Go to the "Me" tab in the app, then Settings > Data > Export My Data. You\'ll receive a downloadable file containing all your personal data including conversations, mood check-ins, and journal entries.',
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Subscriptions are managed through your app store. On iOS: Settings > Your Name > Subscriptions > Lumis > Cancel. On Android: Google Play Store > Profile > Payments & subscriptions > Subscriptions > Lumis > Cancel.",
  },
  {
    question: "The app is crashing or not working properly",
    answer:
      "First, try closing and reopening the app. If the issue persists, make sure you're on the latest version (check your app store for updates). If problems continue, contact us at support@getlumis.app with your device model, OS version, and a description of the issue.",
  },
  {
    question: "Can I use Lumis on multiple devices?",
    answer:
      "Yes. Sign in with the same account on any device and your conversations, memories, and progress will sync automatically.",
  },
];

export default function SupportPage() {
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
              Support
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              How can we help?
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <CrisisBanner />

          <div className="mt-16">
            <SectionHeader title="Frequently Asked Questions" />
            <FaqAccordion items={SUPPORT_FAQ} />
          </div>
        </div>
      </Section>

      <Section id="get-in-touch" className="bg-bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Get in Touch"
            description="Can't find what you're looking for? We're here to help."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <ContactCard
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brand-purple"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
              title="Email Support"
              description="Get a response within 24 hours"
              action={
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-brand-purple hover:underline text-sm font-medium"
                >
                  {SITE_CONFIG.email}
                </a>
              }
            />
            <ContactCard
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brand-purple"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              }
              title="In-App Chat"
              description="Chat with us directly from the app"
              action={
                <span className="text-text-tertiary text-sm">
                  Me tab &gt; Settings &gt; Help
                </span>
              }
            />
            <ContactCard
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brand-purple"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              }
              title="Privacy Requests"
              description="Data export, deletion, or corrections"
              action={
                <a
                  href="mailto:privacy@getlumis.app"
                  className="text-brand-purple hover:underline text-sm font-medium"
                >
                  privacy@getlumis.app
                </a>
              }
            />
          </div>
        </div>
      </Section>
    </>
  );
}

function CrisisBanner() {
  return (
    <div className="bg-status-crisis/10 border border-status-crisis/20 rounded-[var(--radius-lg)] p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-status-crisis/20 flex items-center justify-center shrink-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-status-crisis"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-semibold text-text-primary mb-2">
            If you&apos;re in crisis right now
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            If you or someone you know is in immediate danger, please contact
            professional crisis services. These are free, confidential, and
            available 24/7.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:988"
              className="inline-flex items-center gap-2 px-4 py-2 bg-status-crisis/20 hover:bg-status-crisis/30 rounded-[var(--radius-md)] text-sm font-medium text-status-crisis transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call 988 Lifeline
            </a>
            <a
              href="sms:741741&body=HOME"
              className="inline-flex items-center gap-2 px-4 py-2 bg-status-crisis/20 hover:bg-status-crisis/30 rounded-[var(--radius-md)] text-sm font-medium text-status-crisis transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Text HOME to 741741
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}) {
  return (
    <div className="bg-bg-surface border border-white/5 rounded-[var(--radius-lg)] p-6 text-center">
      <div className="w-12 h-12 mx-auto rounded-[var(--radius-md)] bg-brand-purple/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-text-primary mb-1">
        {title}
      </h3>
      <p className="text-xs text-text-secondary mb-3">{description}</p>
      {action}
    </div>
  );
}
