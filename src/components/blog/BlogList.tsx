import React from 'react';
import Link from 'next/link';

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
        <div key={post.slug} className="rounded-lg bg-white p-4 shadow-md">
          <h2 className="mb-2 text-2xl font-bold">
            <Link href={`/blog/${post.slug}`}>
              <a className="hover:text-blue-600">{post.title}</a>
            </Link>
          </h2>
          <p className="mb-4 text-gray-600">{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
