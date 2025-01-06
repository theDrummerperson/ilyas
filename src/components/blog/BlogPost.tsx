// src/components/blog/BlogPost.tsx
"use client";
import React from "react";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

export default function BlogPost({ title, date, content }: BlogPostProps) {
  return (
    <article>
      <h1>{title}</h1>
      <time>{date}</time>
      <div>{content}</div>
    </article>
  );
}