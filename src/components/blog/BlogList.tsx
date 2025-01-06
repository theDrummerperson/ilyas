import React from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  slug: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.slug} className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-2">
            <Link href={`/blog/${post.slug}`}>
              <a className="hover:text-blue-600">{post.title}</a>
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
