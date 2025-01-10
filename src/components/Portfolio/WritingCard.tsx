'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface WritingCardProps {
  imageSrc: string;
  authorImageSrc: string;
  authorName: string;
  authorTitle: string;
  title: string;
  excerpt: string;
  link: string;
  readTime?: string;
  date?: string;
}

const WritingCard: React.FC<WritingCardProps> = ({
  imageSrc,
  authorImageSrc,
  authorName,
  authorTitle,
  title,
  excerpt,
  link,
  readTime = '5 min read',
  date = 'Jan 2024',
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/60" />
        <Image
          src={imageSrc}
          alt={title}
          className="h-full w-full transform object-cover object-top duration-700 group-hover:scale-110"
          width={600}
          height={400}
          priority
        />

        {/* Reading Time & Date Badge */}
        <div className="absolute right-4 top-4 z-20 flex gap-4">
          <div className="flex items-center rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm dark:bg-gray-800/90">
            <Clock className="mr-1 h-4 w-4 text-blue-500" />
            <span className="text-xs font-medium">{readTime}</span>
          </div>
          <div className="flex items-center rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm dark:bg-gray-800/90">
            <Calendar className="mr-1 h-4 w-4 text-blue-500" />
            <span className="text-xs font-medium">{date}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6">
        {/* Title with animated underline */}
        <h2 className="relative mb-4 text-2xl font-bold text-gray-800 dark:text-white">
          {title}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
        </h2>

        {/* Excerpt */}
        <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{excerpt}</p>

        {/* Author Section */}
        <div className="mb-6 flex items-center">
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-blue-500 ring-offset-2">
            <Image src={authorImageSrc} alt={authorName} className="object-cover" fill />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-800 dark:text-white">{authorName}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{authorTitle}</p>
          </div>
        </div>

        {/* Read More Link */}
        <a href={link} className="group/link inline-flex items-center font-semibold text-blue-500">
          Read Article
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default WritingCard;
