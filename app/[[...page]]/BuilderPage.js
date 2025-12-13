"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

export default function BuilderPage({ content }) {
  const isPreviewing = useIsPreviewing();

  // Show content if we have it or if we're in preview mode
  if (content || isPreviewing) {
    return (
      <BuilderComponent
        model="page"
        content={content}
        apiKey={BUILDER_API_KEY}
      />
    );
  }

  return null;
}



