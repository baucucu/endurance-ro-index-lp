"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

export default function BuilderPreview({ content }) {
  const isPreviewing = useIsPreviewing();

  // Always render in preview mode for this page
  return (
    <BuilderComponent
      model="blog-article"
      content={content}
      apiKey={BUILDER_API_KEY}
    />
  );
}


