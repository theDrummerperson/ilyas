'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  timestamp: string;
  link: string;
}

const InstagramFeed = () => {
  // Sample data - replace with your Instagram API integration
  const recentPosts: InstagramPost[] = [
    {
      id: '1',
      image: '/LoveJones.jpg',
      caption: 'Exploring Black Love through visual narratives',
      timestamp: '2h ago',
      link: 'https://instagram.com/yourusername'
    },
    {
      id: '2',
      image: '/kig-1.jpg',
      caption: 'African Arts Gallery NYE celebration',
      timestamp: '1d ago',
      link: 'https://instagram.com/yourusername'
    },
    {
      id: '3',
      image: '/binto.jpg',
      caption: 'Latest photography series',
      timestamp: '2d ago',
      link: 'https://instagram.com/yourusername'
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Instagram className="w-5 h-5 text-red-500" />
          <h2 className="text-xl font-bold">
            <span className="text-red-500">a.</span>Recent Updates
          </h2>
        </div>
        <Link 
          href="https://instagram.com/yourusername"
          className="group flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Instagram
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link 
              href={post.link}
              className="group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.caption}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {post.caption}
                    </p>
                    <span className="text-white/70 text-xs mt-1 block">
                      {post.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;