'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

// Types
type BlogPostType = {
  slug: string;
  title: string;
  date: string;
  image?: string;
  video?: string;
  excerpt: string;
  content: string;
};

// Blog Card Component
function BlogCard({ post }: { post: BlogPostType }) {
  return (
    <a href={`/blog/${post.slug}`} className="block group">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {post.image && (
          <div className="relative h-48">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        {post.video && (
          <div className="relative h-48">
            <video className="w-full h-full object-cover" controls src={post.video} />
          </div>
        )}
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-gray-600">{post.excerpt}</p>
        </div>
      </div>
    </a>
  );
}

// Sample blog posts data
const blogPosts: BlogPostType[] = [
  {
    slug: 'mountain-adventure',
    title: 'A Journey Through the Alps',
    date: 'February 15, 2024',
    image: '/api/placeholder/800/400',
    excerpt: 'Discovering hidden trails and breathtaking views in the Swiss Alps.',
    content: 'Full article content here...'
  },
  {
    slug: 'urban-exploration',
    title: 'Lost in Tokyo',
    date: 'February 10, 2024',
    image: '/api/placeholder/800/400',
    excerpt: 'Navigating the neon-lit streets of Shinjuku at midnight.',
    content: 'Full article content here...'
  }
];

// Main Blog Page Component
export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Travel & Adventures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}