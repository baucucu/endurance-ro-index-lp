import React from "react";
import { builder } from "@builder.io/sdk";
// See the full code: https://www.builder.io/c/docs/integrate-section-building?codeFramework=nextApp#add-an-announcement-bar-section-to-your-app
import { RenderBuilderContent } from "../components/builder";

// Replace with your Public API Key
builder.init("b556177e043944a9968f883a8ec77af0");

export default async function Page(props) {
  const content = await builder
    .get("blog-article", {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model="blog-article" />
    </>
  );
}

// components/builder.tsx
"use client";
import { ComponentProps } from "react";
import { builder } from "@builder.io/sdk";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

// Replace with your Public API Key 
builder.init(YOUR_API_KEY);

// type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// export function RenderBuilderContent(props: BuilderPageProps) {
export function RenderBuilderContent(props) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If "content" has a value or the section is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} />;
  }

  return null;
}