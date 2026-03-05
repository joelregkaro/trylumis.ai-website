import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Lumis — a wellness companion, not a medical provider.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-text-primary mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-text-tertiary mb-10">
          Last updated: March 5, 2026
        </p>

        <div className="space-y-8">
          <SectionBlock title="Important Notice">
            <p>
              <strong>
                Lumis is a wellness and personal growth companion. It is not a
                medical device, licensed therapist, or healthcare provider.
              </strong>{" "}
              Lumis does not diagnose, treat, cure, or prevent any medical
              condition or mental illness. If you are experiencing a mental
              health emergency, please call 988 (Suicide & Crisis Lifeline),
              text HOME to 741741 (Crisis Text Line), or call your local
              emergency services.
            </p>
          </SectionBlock>

          <SectionBlock title="1. Acceptance of Terms">
            <p>
              By downloading, accessing, or using Lumis (&quot;the Service&quot;), you
              agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do
              not agree to these Terms, do not use the Service.
            </p>
          </SectionBlock>

          <SectionBlock title="2. Description of Service">
            <p>
              Lumis is an AI-powered personal growth companion that provides:
            </p>
            <ul>
              <li>
                Conversational support using evidence-based wellness techniques
                (CBT, DBT, ACT, Motivational Interviewing, Solution-Focused
                Brief Therapy)
              </li>
              <li>Long-term memory to personalize your experience over time</li>
              <li>Mood tracking, journaling, and growth visualization</li>
              <li>
                Crisis resource referrals (professional helplines and services)
              </li>
              <li>Voice conversation capabilities</li>
            </ul>
            <p>
              The Service is intended for general wellness and personal
              development purposes only.
            </p>
          </SectionBlock>

          <SectionBlock title="3. Eligibility">
            <p>
              You must be at least 13 years old to use Lumis. If you are between
              13 and 18, you must have parental or guardian consent. By using the
              Service, you represent that you meet these requirements.
            </p>
          </SectionBlock>

          <SectionBlock title="4. Account Registration">
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account. You
              agree to notify us immediately of any unauthorized use. We reserve
              the right to suspend or terminate accounts that violate these
              Terms.
            </p>
          </SectionBlock>

          <SectionBlock title="5. Subscription and Payments">
            <p>
              Lumis offers free and paid subscription tiers. Paid subscriptions
              are billed through Apple App Store or Google Play Store. By
              subscribing, you agree to:
            </p>
            <ul>
              <li>
                Automatic renewal at the end of each billing period unless
                cancelled at least 24 hours before renewal
              </li>
              <li>
                Managing and cancelling your subscription through your app store
                account settings
              </li>
              <li>
                Refund policies as governed by Apple App Store and Google Play
                Store policies
              </li>
            </ul>
            <p>
              Free trial periods, where offered, automatically convert to paid
              subscriptions unless cancelled before the trial ends.
            </p>
          </SectionBlock>

          <SectionBlock title="6. Acceptable Use">
            <p>You agree not to:</p>
            <ul>
              <li>
                Use Lumis as a substitute for professional medical or mental
                health treatment
              </li>
              <li>
                Attempt to extract, reverse-engineer, or manipulate the AI
                system
              </li>
              <li>Use the Service for any illegal or harmful purpose</li>
              <li>
                Share your account credentials or allow unauthorized access
              </li>
              <li>
                Attempt to circumvent subscription requirements or usage limits
              </li>
              <li>
                Harass, abuse, or send threatening content through the Service
              </li>
            </ul>
          </SectionBlock>

          <SectionBlock title="7. AI Limitations">
            <p>You acknowledge and agree that:</p>
            <ul>
              <li>
                Lumis is powered by AI and may occasionally provide inaccurate,
                incomplete, or inappropriate responses
              </li>
              <li>
                Lumis is not capable of providing medical diagnoses, treatment
                plans, or clinical recommendations
              </li>
              <li>
                AI responses should not be relied upon as professional advice
              </li>
              <li>
                The quality and relevance of AI responses may vary and are not
                guaranteed
              </li>
              <li>
                Lumis may not detect all signs of crisis or distress and should
                not be relied upon as an emergency service
              </li>
            </ul>
          </SectionBlock>

          <SectionBlock title="8. Intellectual Property">
            <p>
              All content, features, and functionality of the Service —
              including software, text, graphics, logos, and AI models — are
              owned by Lumis and protected by intellectual property laws. Your
              conversation content remains yours. We do not claim ownership of
              content you create through the Service.
            </p>
          </SectionBlock>

          <SectionBlock title="9. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, LUMIS AND ITS OFFICERS,
              DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL,
              ARISING FROM YOUR USE OF THE SERVICE.
            </p>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID
              FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </SectionBlock>

          <SectionBlock title="10. Disclaimer of Warranties">
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
              NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </SectionBlock>

          <SectionBlock title="11. Indemnification">
            <p>
              You agree to indemnify and hold harmless Lumis from any claims,
              damages, losses, liabilities, and expenses arising from your use
              of the Service or violation of these Terms.
            </p>
          </SectionBlock>

          <SectionBlock title="12. Termination">
            <p>
              You may terminate your account at any time through the app
              settings. We may suspend or terminate your access if you violate
              these Terms. Upon termination, your data will be handled in
              accordance with our Privacy Policy.
            </p>
          </SectionBlock>

          <SectionBlock title="13. Changes to Terms">
            <p>
              We may modify these Terms at any time. We will notify you of
              material changes through the app or via email. Continued use after
              changes constitutes acceptance. If you disagree with changes, you
              may terminate your account.
            </p>
          </SectionBlock>

          <SectionBlock title="14. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the State of Delaware, United States, without regard to
              conflict of law principles.
            </p>
          </SectionBlock>

          <SectionBlock title="15. Dispute Resolution">
            <p>
              Any disputes arising from these Terms or your use of the Service
              shall first be attempted to be resolved through good-faith
              negotiation. If negotiation fails, disputes shall be resolved
              through binding arbitration in accordance with the American
              Arbitration Association rules, except that either party may seek
              injunctive relief in court.
            </p>
          </SectionBlock>

          <SectionBlock title="Contact Us">
            <p>
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:legal@getlumis.app"
                className="text-brand-purple hover:underline"
              >
                legal@getlumis.app
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
      <div className="space-y-3 text-sm text-text-secondary leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-sm [&_li]:text-text-secondary [&_strong]:text-text-primary [&_strong]:font-medium">
        {children}
      </div>
    </section>
  );
}
