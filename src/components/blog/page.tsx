// src/components/blog/page.tsx
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogList from "@/components/blog/BlogList";

interface Post {
  title: string;
  date: string;
  slug: string;
}



// Function to get all posts
async function getAllPosts() {
  const files = fs.readdirSync(path.join("src/posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      ...(frontmatter as Pick<Post, "title" | "date">),
      slug: filename.replace(".md", ""),
    };
  });

  return posts;
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
}