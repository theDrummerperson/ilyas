"use client";


'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import exp from 'constants';

interface Update {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tag: string;
}

export default function UpdatesSection() {
  const updates: Update[] = [
    {
      id: 1,
      title: "Layout Improvements in a Time of Political Turmoil",
      date: "January 22, 2025",
      description: "The country is bananas right now with the return of Orange Face in office and his fascist cronies causing chaos. But there is good news: I updated the layout of the website by fixing some serious padding and typography errors and restructured the navigation bar. Enjoy!",
      image: "/peace.JPG",
      tag: "NeW Features"
    },
    {
      id: 2,
      title: "Website Launch",
      date: "January 10, 2025",
      description: "The website is finally up. This project has taken a lot of work but it was worth it. Watch this space for updates about my projects, moves, and random adventures.",
      image: "/bioprofile.jpg",
      tag: "New Feature"
    }
  ];

  const [selectedUpdate, setSelectedUpdate] = useState<Update>(updates[0]);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const handleUpdateChange = async (newUpdate: Update) => {
    setIsTransitioning(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    setSelectedUpdate(newUpdate);
    setIsTransitioning(false);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const currentIndex = updates.findIndex(u => u.id === selectedUpdate.id);
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handleUpdateChange(updates[currentIndex - 1]);
      } else if (e.key === 'ArrowRight' && currentIndex < updates.length - 1) {
        handleUpdateChange(updates[currentIndex + 1]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedUpdate]);

  return (
    <div className="w-full mt-24 opacity-0 animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Latest <span className="text-red-500">Updates</span>
        </h2>
      </div>

      {/* Progress Indicators */}
      <div className="flex gap-2 mb-6">
        {updates.map((update, index) => (
          <div 
            key={index}
            className={`h-1 rounded-full transition-all duration-500 cursor-pointer flex-1
              ${index <= updates.findIndex(u => u.id === selectedUpdate.id) 
                ? 'bg-red-500' 
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-red-200 dark:hover:bg-red-800'}`}
            onClick={() => handleUpdateChange(updates[index])}
          />
        ))}
      </div>

      {/* Main Update Card */}
      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative group">
            <div 
              className="aspect-video lg:aspect-square relative overflow-hidden"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <Image 
                src={selectedUpdate.image} 
                alt={selectedUpdate.title}
                fill
                className={`object-cover transition-all duration-300 
                  ${isZoomed ? 'scale-110' : 'scale-100'}
                  ${isTransitioning ? 'blur-sm' : ''}`}
              />
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                className="bg-black/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/40 transform transition-transform hover:scale-110 active:scale-90"
                onClick={() => {
                  const currentIndex = updates.findIndex(u => u.id === selectedUpdate.id);
                  if (currentIndex > 0) handleUpdateChange(updates[currentIndex - 1]);
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                className="bg-black/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/40 transform transition-transform hover:scale-110 active:scale-90"
                onClick={() => {
                  const currentIndex = updates.findIndex(u => u.id === selectedUpdate.id);
                  if (currentIndex < updates.length - 1) handleUpdateChange(updates[currentIndex + 1]);
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 lg:p-8 flex flex-col">
            <div className="mb-4">
              <div className="flex flex-col gap-2 mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedUpdate.title}
                </h3>
                <span className="text-sm text-red-500 font-medium">
                  {selectedUpdate.date}
                </span>
              </div>
              <span className="inline-block text-xs bg-red-500 text-white px-3 py-1 rounded-full">
                {selectedUpdate.tag}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {selectedUpdate.description}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {updates.map((update, index) => (
          <div 
            key={update.id}
            className={`group cursor-pointer relative rounded-xl overflow-hidden 
              transition-all duration-300 
              ${selectedUpdate.id === update.id 
                ? 'ring-2 ring-red-500 scale-95' 
                : 'hover:ring-1 hover:ring-red-500/50'}`}
            onClick={() => handleUpdateChange(update)}
          >
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src={update.image} 
                alt={update.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-white text-sm font-medium truncate">
                {update.title}
              </h3>
              <p className="text-red-200 text-xs mt-1">
                {update.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
