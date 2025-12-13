import Link from "next/link";
import Image from "next/image";
import { getAllBlogArticles } from "@/lib/builder";
import { CalendarDays, ArrowRight, Clock } from "lucide-react";

export const metadata = {
  title: "Blog | Articole despre sporturile de anduranță",
  description:
    "Citește cele mai recente articole despre alergare, ciclism, triatlon și alte sporturi de anduranță din România. Sfaturi, povești și analize de la experți.",
  openGraph: {
    title: "Blog | Endurance Ro-Index",
    description:
      "Articole și analize despre sporturile de anduranță din România",
  },
};

// Revalidate every 60 seconds for fresh content
export const revalidate = 60;

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
  // Rough estimate: 200 words per minute
  const wordCount = content?.length || 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 1000));
  return `${minutes} min`;
}

export default async function BlogListPage() {
  const articles = await getAllBlogArticles();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/30 via-slate-900/50 to-emerald-900/20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />

        <div className="mx-auto max-w-6xl px-6 sm:px-8 pt-20 pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Înapoi la pagina principală
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Articole, povești și analize despre sporturile de anduranță din
            România. Descoperă tendințele, sfaturile experților și poveștile
            comunității.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto max-w-6xl px-6 sm:px-8 pb-20">
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6">
              <CalendarDays className="w-8 h-8 text-white/40" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Niciun articol încă
            </h2>
            <p className="text-white/60 max-w-md mx-auto">
              Revino în curând pentru articole despre sporturile de anduranță
              din România.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

function ArticleCard({ article }) {
  const { data } = article;
  const slug = data?.slug;
  const title = data?.title || "Untitled";
  const excerpt = data?.blurb || ""; // Builder.io field name
  const image = data?.image;
  const author = data?.author;
  const publishedDate = data?.date; // Builder.io field name
  const category = data?.category;

  if (!slug) return null;

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="h-full rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden transition-all duration-300 hover:ring-white/20 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-indigo-500/5">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-emerald-600/20 flex items-center justify-center">
              <span className="text-4xl opacity-40">📝</span>
            </div>
          )}
          {category && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/20">
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-white line-clamp-2 group-hover:text-indigo-300 transition-colors">
            {title}
          </h2>

          {excerpt && (
            <p className="mt-2 text-sm text-white/60 line-clamp-3">{excerpt}</p>
          )}

          <div className="mt-4 flex items-center justify-between text-xs text-white/50">
            <div className="flex items-center gap-3">
              {publishedDate && (
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {formatDate(publishedDate)}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {estimateReadTime(excerpt)}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>

          {author && (
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
              {author.image && (
                <Image
                  src={author.image}
                  alt={author.name || "Author"}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <span className="text-xs text-white/60">
                {author.name || "Echipa Endurance"}
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

