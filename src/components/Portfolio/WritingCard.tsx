"use client"


import React, { useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
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
  readTime = "5 min read",
  date = "Jan 2024"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover object-top w-full h-full transform duration-700 group-hover:scale-110"
          width={600}
          height={400}
          priority
        />
        
        {/* Reading Time & Date Badge */}
        <div className="absolute top-4 right-4 z-20 flex gap-4">
          <div className="flex items-center bg-white/90 dark:bg-gray-800/90 rounded-full px-3 py-1 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-blue-500 mr-1" />
            <span className="text-xs font-medium">{readTime}</span>
          </div>
          <div className="flex items-center bg-white/90 dark:bg-gray-800/90 rounded-full px-3 py-1 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-blue-500 mr-1" />
            <span className="text-xs font-medium">{date}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative">
        {/* Title with animated underline */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 relative">
          {title}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
          {excerpt}
        </p>

        {/* Author Section */}
        <div className="flex items-center mb-6">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500 ring-offset-2">
            <Image
              src={authorImageSrc}
              alt={authorName}
              className="object-cover"
              fill
            />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-800 dark:text-white">{authorName}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{authorTitle}</p>
          </div>
        </div>

        {/* Read More Link */}
        <a 
          href={link}
          className="inline-flex items-center text-blue-500 font-semibold group/link"
        >
          Read Article
          <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default WritingCard;