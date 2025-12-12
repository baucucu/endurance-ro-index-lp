import { builder } from "@/lib/builder";
import BuilderPreview from "./BuilderPreview";

// This page is used by Builder.io's visual editor for previewing blog articles
// The actual blog articles are served at /blog/[slug]

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Preview | Blog Article",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BlogArticlePreviewPage({ searchParams }) {
  const params = await searchParams;
  
  // Check if we're in Builder.io's preview/edit mode
  const isBuilderPreview =
    params?.["builder.preview"] === "blog-article" ||
    params?.["builder.editing"] === "true";

  // Get the content from Builder.io for preview
  const content = await builder
    .get("blog-article", {
      userAttributes: {
        urlPath: "/blog-article",
      },
      options: {
        includeUnpublished: true,
      },
    })
    .toPromise();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 py-20">
        {/* Preview Banner */}
        {isBuilderPreview && (
          <div className="mb-8 p-4 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-200 text-sm text-center">
            👁️ Builder.io Preview Mode - Editează conținutul vizual mai jos
          </div>
        )}

        {/* Builder.io Content Area */}
        <div className="prose prose-invert prose-lg max-w-none">
          <BuilderPreview content={content} />
        </div>
      </div>
    </main>
  );
}


