import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogArticle, getAllBlogSlugs } from "@/lib/builder";
import { CalendarDays, Clock, ArrowLeft, Share2 } from "lucide-react";
import BuilderContent from "./BuilderContent";

// Revalidate every 60 seconds
export const revalidate = 60;

// Generate static paths for all blog articles
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getBlogArticle(slug);

  if (!article) {
    return {
      title: "Articol negăsit",
    };
  }

  const { data } = article;

  return {
    title: data?.title || "Blog",
    description: data?.excerpt || data?.title,
    openGraph: {
      title: data?.title,
      description: data?.excerpt,
      type: "article",
      publishedTime: data?.publishedDate,
      authors: data?.author?.name ? [data.author.name] : undefined,
      images: data?.image
        ? [
            {
              url: data.image,
              width: 1200,
              height: 630,
              alt: data.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title,
      description: data?.excerpt,
      images: data?.image ? [data.image] : undefined,
    },
  };
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("ro-RO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function estimateReadTime(content) {
  const wordCount = content?.length || 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 1000));
  return `${minutes} min citire`;
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = await getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const { data } = article;
  const title = data?.title;
  const excerpt = data?.excerpt;
  const image = data?.image;
  const author = data?.author;
  const publishedDate = data?.publishedDate;
  const category = data?.category;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="mx-auto max-w-4xl px-6 sm:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Înapoi la blog
        </Link>
      </nav>

      {/* Article Header */}
      <article className="mx-auto max-w-4xl px-6 sm:px-8 pt-8 pb-20">
        <header className="mb-10">
          {/* Category Badge */}
          {category && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/30 mb-4">
              {category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {/* Excerpt */}
          {excerpt && (
            <p className="mt-4 text-lg sm:text-xl text-white/70 leading-relaxed">
              {excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/50">
            {publishedDate && (
              <span className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {formatDate(publishedDate)}
              </span>
            )}
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {estimateReadTime(excerpt)}
            </span>
            <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto">
              <Share2 className="w-4 h-4" />
              Distribuie
            </button>
          </div>

          {/* Author */}
          {author && (
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
              {author.image && (
                <Image
                  src={author.image}
                  alt={author.name || "Author"}
                  width={40}
                  height={40}
                  className="rounded-full ring-2 ring-white/10"
                />
              )}
              <div>
                <p className="text-white font-medium">
                  {author.name || "Echipa Endurance"}
                </p>
                {author.role && (
                  <p className="text-sm text-white/50">{author.role}</p>
                )}
              </div>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {image && (
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 ring-1 ring-white/10">
            <Image
              src={image}
              alt={title || "Article image"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        {/* Builder.io Content - Visual Editor Area */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-slate-800/50 prose-pre:ring-1 prose-pre:ring-white/10">
          <BuilderContent content={article} />
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Vezi toate articolele
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-sm text-white/50">Distribuie articolul:</span>
              <div className="flex gap-2">
                <ShareButton network="facebook" title={title} />
                <ShareButton network="twitter" title={title} />
                <ShareButton network="linkedin" title={title} />
              </div>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}

function ShareButton({ network, title }) {
  const icons = {
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };

  return (
    <button
      className="p-2 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors ring-1 ring-white/10"
      aria-label={`Share on ${network}`}
    >
      {icons[network]}
    </button>
  );
}

