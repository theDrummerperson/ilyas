"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPostType } from '@/types/blog';

function BlogCard({ post }: { post: BlogPostType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {post.image && (
          <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" />
        )}
        {post.video && (
          <video className="w-full h-48 object-cover" controls src={post.video} />
        )}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;