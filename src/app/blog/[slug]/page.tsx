"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const BlogPostPage = () => {
  const searchParams = useSearchParams();
  const slug = searchParams ? searchParams.get("slug") : null;

  if (!slug) {
    return <div>Loading...</div>; // or handle the case where slug is not available
  }

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Content for the blog post with slug: {slug}</p>
      {/* You can fetch and display the blog post content here */}
    </div>
  );
};

export default BlogPostPage;
