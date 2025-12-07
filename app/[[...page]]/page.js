import { builder } from "@builder.io/sdk";
import { notFound } from "next/navigation";
import BuilderPage from "./BuilderPage";

// Initialize builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// Pages that should NOT be handled by Builder.io (your existing routes)
const RESERVED_PATHS = [
  "", // Homepage
  "blog",
  "blog-article",
];

export const revalidate = 60;

// Generate static paths for Builder.io pages
export async function generateStaticParams() {
  const pages = await builder.getAll("page", {
    options: { noTargeting: true },
    fields: "data.url",
  });

  return pages
    .filter((page) => page.data?.url && !RESERVED_PATHS.includes(page.data.url.replace(/^\//, "")))
    .map((page) => ({
      page: page.data.url === "/" ? [] : page.data.url.split("/").filter(Boolean),
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams?.page?.join("/") || "");

  // Skip reserved paths
  const pathWithoutSlash = urlPath.replace(/^\//, "");
  if (RESERVED_PATHS.includes(pathWithoutSlash) || pathWithoutSlash.startsWith("blog/")) {
    return {};
  }

  const page = await builder
    .get("page", {
      userAttributes: { urlPath },
      options: { includeUnpublished: process.env.NODE_ENV === "development" },
    })
    .toPromise();

  if (!page) {
    return { title: "Pagină negăsită" };
  }

  return {
    title: page.data?.title || "Endurance Ro-Index",
    description: page.data?.description,
    openGraph: {
      title: page.data?.title,
      description: page.data?.description,
      images: page.data?.image ? [{ url: page.data.image }] : undefined,
    },
  };
}

export default async function CatchAllPage({ params }) {
  const resolvedParams = await params;
  const urlPath = "/" + (resolvedParams?.page?.join("/") || "");

  // Skip reserved paths - let Next.js handle them
  const pathWithoutSlash = urlPath.replace(/^\//, "");
  if (RESERVED_PATHS.includes(pathWithoutSlash) || pathWithoutSlash.startsWith("blog/")) {
    notFound();
  }

  // Fetch the page from Builder.io
  const page = await builder
    .get("page", {
      userAttributes: { urlPath },
      options: { includeUnpublished: process.env.NODE_ENV === "development" },
    })
    .toPromise();

  // If no page found in Builder.io, show 404
  if (!page) {
    notFound();
  }

  return <BuilderPage content={page} />;
}

