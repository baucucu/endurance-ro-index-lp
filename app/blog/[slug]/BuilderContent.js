"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

// Register your Builder.io API key for the visual editor
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

export default function BuilderContent({ content }) {
  const isPreviewing = useIsPreviewing();

  // If we're in the visual editor or have content, render it
  if (content || isPreviewing) {
    return (
      <BuilderComponent
        model="blog-article"
        content={content}
        apiKey={BUILDER_API_KEY}
      />
    );
  }

  return null;
}

