import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ],
  Support: [
    { label: "Help Center", href: "/support" },
    { label: "Contact", href: `mailto:${SITE_CONFIG.email}` },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-text-primary">
              Lumis
            </Link>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              <DownloadBadge store="apple" small />
              <DownloadBadge store="google" small />
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-text-primary mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Lumis. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-text-tertiary">
            <span>Crisis?</span>
            <a
              href="tel:988"
              className="text-status-crisis hover:underline font-medium"
            >
              Call 988
            </a>
            <span>or text</span>
            <a
              href="sms:741741&body=HOME"
              className="text-status-crisis hover:underline font-medium"
            >
              HOME to 741741
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function DownloadBadge({
  store,
  small = false,
}: {
  store: "apple" | "google";
  small?: boolean;
}) {
  const href =
    store === "apple" ? SITE_CONFIG.appStore : SITE_CONFIG.playStore;
  const height = small ? "h-9" : "h-11";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3 ${height} bg-white/5 hover:bg-white/10 border border-white/10 rounded-[var(--radius-sm)] transition-colors`}
    >
      {store === "apple" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-text-primary"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-text-primary"
        >
          <path d="M3.18 23.08L14.47 12 3.18.92a1.49 1.49 0 00-.18.71v21.75c0 .26.06.5.18.7zm12.9-9.47l-2.82-2.82L16.32 7.7l5.14 2.96a1.49 1.49 0 010 2.58l-5.14 2.96-3.06-3.09 2.82-2.82v.32zM5.38 1.96l8.07 8.07 2.82-2.82L5.88.03c-.1-.03-.2-.03-.3-.03-.08 0-.14.02-.2.04v1.92zm0 20.08V23.96c.06.02.12.04.2.04.1 0 .2 0 .3-.03l10.39-7.18-2.82-2.82-8.07 8.07z" />
        </svg>
      )}
      <span className="text-xs font-medium text-text-primary">
        {store === "apple" ? "App Store" : "Google Play"}
      </span>
    </a>
  );
}

export { DownloadBadge };
