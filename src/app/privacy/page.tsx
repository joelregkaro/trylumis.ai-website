import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Lumis protects your data. Your conversations are encrypted and never sold.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-text-primary mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-text-tertiary mb-10">
          Last updated: March 5, 2026
        </p>

        <div className="prose-custom space-y-8">
          <SectionBlock title="Our Promise">
            <p>
              Your conversations are encrypted and never sold. Period. Lumis is
              built on the belief that your most personal thoughts deserve the
              highest level of protection. We collect only what we need to make
              the app work, and nothing more.
            </p>
          </SectionBlock>

          <SectionBlock title="1. Information We Collect">
            <h3>Account Information</h3>
            <p>
              When you create an account, we collect your email address and
              authentication credentials. If you sign in with Apple or Google, we
              receive the information you authorize (typically name and email).
            </p>

            <h3>Conversation Data</h3>
            <p>
              Your text and voice conversations with Lumis are stored securely to
              power the long-term memory feature. This data is encrypted in
              transit (TLS 1.3) and at rest (AES-256). Voice sessions are
              transcribed and stored as text; audio files are not retained.
            </p>

            <h3>Mood and Wellness Data</h3>
            <p>
              Mood check-ins, journal entries, goals, and habit tracking data you
              voluntarily provide. This data is used exclusively to power your
              personal insights and growth dashboard.
            </p>

            <h3>Usage Analytics</h3>
            <p>
              We collect anonymized usage data (screen views, feature usage,
              session duration) through PostHog to improve the app experience.
              This data is not linked to your conversations or personal identity.
            </p>

            <h3>Device Information</h3>
            <p>
              Basic device information (OS version, app version, device type) for
              crash reporting through Sentry. This helps us fix bugs and improve
              stability.
            </p>
          </SectionBlock>

          <SectionBlock title="2. How We Use Your Information">
            <ul>
              <li>
                <strong>Powering your experience:</strong> Your conversation
                history enables Lumis&apos;s long-term memory, pattern detection, and
                personalized support.
              </li>
              <li>
                <strong>Improving the service:</strong> Anonymized, aggregated
                data helps us understand which features are most helpful and where
                we can improve.
              </li>
              <li>
                <strong>Communications:</strong> We may send you service-related
                emails (account updates, security alerts). You can opt out of
                marketing communications at any time.
              </li>
              <li>
                <strong>Safety:</strong> In cases where our crisis detection
                system identifies immediate risk to life, we may surface
                professional crisis resources within the app.
              </li>
            </ul>
          </SectionBlock>

          <SectionBlock title="3. What We Never Do">
            <ul>
              <li>
                <strong>Sell your data.</strong> We will never sell your personal
                data or conversation content to third parties.
              </li>
              <li>
                <strong>Use conversations for advertising.</strong> Your
                conversations are never used for ad targeting.
              </li>
              <li>
                <strong>Train general AI models.</strong> Your conversations are
                not used to train AI models outside of your personal Lumis
                experience.
              </li>
              <li>
                <strong>Share with employers or insurers.</strong> Your data is
                never shared with employers, insurance companies, or similar
                entities.
              </li>
            </ul>
          </SectionBlock>

          <SectionBlock title="4. Third-Party Services">
            <p>We use the following services to operate Lumis:</p>
            <ul>
              <li>
                <strong>Supabase</strong> — Database hosting and authentication
                (PostgreSQL with row-level security)
              </li>
              <li>
                <strong>Anthropic (Claude)</strong> — AI conversation processing
                (your messages are sent to generate responses; Anthropic does not
                retain your data for training per their data usage policy)
              </li>
              <li>
                <strong>RevenueCat</strong> — Subscription management
              </li>
              <li>
                <strong>PostHog</strong> — Anonymized product analytics
              </li>
              <li>
                <strong>Sentry</strong> — Error monitoring and crash reporting
              </li>
              <li>
                <strong>Deepgram & ElevenLabs</strong> — Voice transcription and
                synthesis (for voice session features)
              </li>
            </ul>
          </SectionBlock>

          <SectionBlock title="5. Data Retention">
            <p>
              Your data is retained for as long as your account is active. If you
              delete your account, all personal data — including conversation
              history, memories, mood data, and journal entries — is permanently
              deleted within 30 days. Anonymized, aggregated analytics data may
              be retained.
            </p>
          </SectionBlock>

          <SectionBlock title="6. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access</strong> your data — view everything Lumis knows
                about you through the &quot;What I Know About You&quot; feature in the
                app.
              </li>
              <li>
                <strong>Export</strong> your data — download a complete copy of
                your data at any time.
              </li>
              <li>
                <strong>Delete</strong> your data — permanently delete your
                account and all associated data.
              </li>
              <li>
                <strong>Correct</strong> your data — update or correct personal
                information through your account settings.
              </li>
              <li>
                <strong>Opt out</strong> of analytics data collection in your app
                settings.
              </li>
            </ul>
          </SectionBlock>

          <SectionBlock title="7. GDPR & CCPA Compliance">
            <p>
              <strong>For EU/EEA residents (GDPR):</strong> We process your data
              based on consent (conversations), contract (service provision), and
              legitimate interest (security, service improvement). You may
              exercise your rights under Articles 15-22 of the GDPR by contacting
              us.
            </p>
            <p>
              <strong>For California residents (CCPA):</strong> You have the
              right to know what personal information we collect, request
              deletion, and opt out of the sale of personal information (though we
              never sell your data). We do not discriminate against users who
              exercise their privacy rights.
            </p>
          </SectionBlock>

          <SectionBlock title="8. Children's Privacy">
            <p>
              Lumis is not intended for children under 13. We do not knowingly
              collect personal information from children under 13. If you believe
              a child has provided us with personal information, please contact us
              and we will delete it.
            </p>
          </SectionBlock>

          <SectionBlock title="9. Security">
            <p>
              We implement industry-standard security measures including
              encryption in transit (TLS 1.3), encryption at rest (AES-256),
              row-level security policies, and regular security reviews. However,
              no system is 100% secure. We encourage you to use strong
              authentication for your account.
            </p>
          </SectionBlock>

          <SectionBlock title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of significant changes through the app or via email. Continued
              use of Lumis after changes constitutes acceptance of the updated
              policy.
            </p>
          </SectionBlock>

          <SectionBlock title="Contact Us">
            <p>
              For privacy-related questions or to exercise your data rights,
              contact us at{" "}
              <a
                href="mailto:privacy@getlumis.app"
                className="text-brand-purple hover:underline"
              >
                privacy@getlumis.app
              </a>
              .
            </p>
          </SectionBlock>
        </div>
      </div>
    </div>
  );
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-text-primary mb-4">{title}</h2>
      <div className="space-y-3 text-sm text-text-secondary leading-relaxed [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-text-primary [&_h3]:mt-4 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-sm [&_li]:text-text-secondary [&_strong]:text-text-primary [&_strong]:font-medium">
        {children}
      </div>
    </section>
  );
}
