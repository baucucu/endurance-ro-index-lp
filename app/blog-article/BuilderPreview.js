"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

export default function BuilderPreview({ content }) {
  const isPreviewing = useIsPreviewing();

  // Always render in preview/editing mode for this page
  // Builder.io will automatically enable visual editing when accessed from the studio
  return (
    <BuilderComponent
      model="blog-article"
      content={content}
      apiKey={BUILDER_API_KEY}
      options={{
        includeRefs: true,
        enrich: true,
      }}
    />
  );
}



