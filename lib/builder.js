import { builder } from "@builder.io/sdk";

// Initialize Builder.io with your public API key
// Get your API key from https://builder.io/account/settings
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export { builder };

// Model names for Builder.io content types
export const BUILDER_MODELS = {
  // Section model - has visual editor for content blocks
  BLOG_ARTICLE: "blog-article",
};

/**
 * Fetch a single blog article by slug
 */
export async function getBlogArticle(slug) {
  const article = await builder
    .get(BUILDER_MODELS.BLOG_ARTICLE, {
      query: {
        "data.slug": slug,
      },
      options: {
        includeUnpublished: process.env.NODE_ENV === "development",
      },
    })
    .toPromise();

  return article;
}

/**
 * Fetch all blog articles for the list page
 */
export async function getAllBlogArticles() {
  const articles = await builder.getAll(BUILDER_MODELS.BLOG_ARTICLE, {
    options: {
      includeUnpublished: process.env.NODE_ENV === "development",
    },
    omit: "data.blocks", // Don't fetch full content for list view
    fields: "data,id,name",
    limit: 100,
  });

  return articles;
}

/**
 * Get all blog slugs for static generation
 */
export async function getAllBlogSlugs() {
  const articles = await builder.getAll(BUILDER_MODELS.BLOG_ARTICLE, {
    options: {
      includeUnpublished: false,
    },
    fields: "data.slug",
    limit: 100,
  });

  return articles
    .filter((article) => article.data?.slug)
    .map((article) => article.data.slug);
}

