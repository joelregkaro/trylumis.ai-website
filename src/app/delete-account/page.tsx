import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Learn how to permanently delete your Lumis account and all associated data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-text-primary mb-2">
          Delete Your Account
        </h1>
        <p className="text-sm text-text-tertiary mb-10">
          Last updated: March 12, 2026
        </p>

        <div className="prose-custom space-y-8">
          <SectionBlock title="How to Delete Your Account">
            <p>
              You can delete your Lumis account directly from within the app.
              Follow these steps:
            </p>
            <ol>
              <li>
                Open the Lumis app and go to the <strong>Me</strong> tab.
              </li>
              <li>
                Tap <strong>Settings</strong> (gear icon).
              </li>
              <li>
                Tap <strong>Account</strong>.
              </li>
              <li>
                Tap <strong>Delete Account</strong>.
              </li>
              <li>
                Confirm your decision when prompted.
              </li>
            </ol>
          </SectionBlock>

          <SectionBlock title="What Happens When You Delete Your Account">
            <p>
              When you request account deletion, the following data is
              permanently removed within 30 days:
            </p>
            <ul>
              <li>
                <strong>Conversation history</strong> — all text and voice
                session transcripts
              </li>
              <li>
                <strong>Memories</strong> — everything Lumis has learned about
                you
              </li>
              <li>
                <strong>Mood check-ins</strong> — all mood data and trends
              </li>
              <li>
                <strong>Journal entries</strong> — all auto-generated and manual
                journal entries
              </li>
              <li>
                <strong>Goals and habits</strong> — all tracked goals, habits,
                and progress
              </li>
              <li>
                <strong>Account information</strong> — your email, profile, and
                authentication credentials
              </li>
            </ul>
            <p>
              Anonymized, aggregated analytics data (which cannot be linked back
              to you) may be retained.
            </p>
          </SectionBlock>

          <SectionBlock title="Before You Delete">
            <p>Please keep the following in mind:</p>
            <ul>
              <li>
                <strong>This action is irreversible.</strong> Once your account
                is deleted, your data cannot be recovered.
              </li>
              <li>
                <strong>Export your data first.</strong> If you&apos;d like a
                copy of your data, go to{" "}
                <strong>Me &gt; Settings &gt; Data &gt; Export My Data</strong>{" "}
                before deleting your account.
              </li>
              <li>
                <strong>Cancel your subscription separately.</strong> Deleting
                your account does not automatically cancel an active
                subscription. Please cancel through your app store (iOS:
                Settings &gt; Your Name &gt; Subscriptions; Android: Google Play
                &gt; Payments &amp; subscriptions) to avoid future charges.
              </li>
            </ul>
          </SectionBlock>

          <SectionBlock title="Need Help?">
            <p>
              If you&apos;re unable to access the app or need assistance
              deleting your account, contact us at{" "}
              <a
                href="mailto:privacy@getlumis.app"
                className="text-brand-purple hover:underline"
              >
                privacy@getlumis.app
              </a>{" "}
              with the email address associated with your account and we will
              process your request.
            </p>
            <p>
              For more information about how we handle your data, see our{" "}
              <Link
                href="/privacy"
                className="text-brand-purple hover:underline"
              >
                Privacy Policy
              </Link>
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
      <div className="space-y-3 text-sm text-text-secondary leading-relaxed [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-text-primary [&_h3]:mt-4 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_li]:text-sm [&_li]:text-text-secondary [&_strong]:text-text-primary [&_strong]:font-medium">
        {children}
      </div>
    </section>
  );
}
