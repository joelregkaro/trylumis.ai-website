import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on personal growth, AI technology, and mental wellness from the Lumis team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-purple mb-3 tracking-wide uppercase">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            Insights & Updates
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Thoughts on personal growth, AI, and building Lumis.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article
                className={`p-6 md:p-8 bg-bg-surface border border-white/5 rounded-[var(--radius-xl)] hover:border-brand-purple/30 transition-all duration-300 ${
                  index === 0 ? "md:p-10" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-tertiary">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-text-tertiary">
                    {post.readingTime}
                  </span>
                </div>

                <h2
                  className={`font-bold text-text-primary group-hover:text-brand-purple transition-colors ${
                    index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {post.title}
                </h2>

                <p className="mt-2 text-text-secondary leading-relaxed line-clamp-2">
                  {post.description}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-brand-purple font-medium group-hover:underline">
                    Read more
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-brand-purple"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
