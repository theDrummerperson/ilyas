"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Update {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tag: string;
}

const UpdatesPage = () => {
  const updates: Update[] = [

    {
      id: 1,
      title: "Layout Improvements in a Time of Political Turmoil",
      date: "January 22, 2025",
      description: "The country is bananas right now with the return of  Orange Face in  office and his fascist cronies causing chaos. But there is good news: I updated the layout of the website by fixing some serious padding and typography errors and restructured the navigation bar. Enjoy! .",
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
    },

  

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Latest <span className="text-red-500">Updates</span>
          </h1>
          <p className="text-muted-foreground">Hello, world!</p>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-2 mb-6">
          {updates.map((update, index) => (
            <div 
              key={index}
              className={`h-1 rounded-full transition-all duration-500 cursor-pointer
                ${index <= updates.findIndex(u => u.id === selectedUpdate.id) 
                  ? 'bg-red-500' 
                  : 'bg-muted flex-grow-0 hover:flex-grow hover:bg-red-200'}`}
              onClick={() => handleUpdateChange(updates[index])}
            />
          ))}
        </div>

        {/* Main content area */}
        <div className="rounded-[var(--radius)] bg-card border shadow-lg mb-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="relative group">
              <div 
                className={`aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9] relative overflow-hidden
                  transition-transform duration-500 ${isZoomed ? 'scale-105' : 'scale-100'}`}
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <img 
                  src={selectedUpdate.image} 
                  alt={selectedUpdate.title}
                  className={`w-full h-full object-cover transition-transform duration-300 
                    ${isTransitioning ? 'blur-sm' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
              </div>

              {/* Navigation arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  className="transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 
                    bg-red-500/10 backdrop-blur p-3 rounded-full hover:bg-red-500/20 focus:ring-2 focus:ring-red-500"
                  onClick={() => {
                    const currentIndex = updates.findIndex(u => u.id === selectedUpdate.id);
                    if (currentIndex > 0) handleUpdateChange(updates[currentIndex - 1]);
                  }}
                  aria-label="Previous update"
                >
                  <ChevronLeft className="w-6 h-6 text-red-500" />
                </button>
                <button 
                  className="transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 
                    bg-red-500/10 backdrop-blur p-3 rounded-full hover:bg-red-500/20 focus:ring-2 focus:ring-red-500"
                  onClick={() => {
                    const currentIndex = updates.findIndex(u => u.id === selectedUpdate.id);
                    if (currentIndex < updates.length - 1) handleUpdateChange(updates[currentIndex + 1]);
                  }}
                  aria-label="Next update"
                >
                  <ChevronRight className="w-6 h-6 text-red-500" />
                </button>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="p-8 flex flex-col border-l-4 border-red-500">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-3xl font-bold text-card-foreground">{selectedUpdate.title}</h2>
                  <span className="text-sm bg-red-500/10 text-red-500 px-4 py-1 rounded-full font-medium">
                    {selectedUpdate.date}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full font-medium">
                    {selectedUpdate.tag}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {selectedUpdate.description}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {updates.map((update, index) => (
            <div 
              key={update.id}
              className={`group cursor-pointer relative rounded-[var(--radius)] overflow-hidden 
                transition-all duration-300 animate-fadeIn
                ${selectedUpdate.id === update.id 
                  ? 'ring-2 ring-red-500 scale-[0.98] shadow-lg shadow-red-500/20' 
                  : 'hover:ring-1 hover:ring-red-500/50 hover:scale-[0.99]'
                }
                transform hover:-translate-y-1`}
              onClick={() => handleUpdateChange(update)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={update.image} 
                  alt={update.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 
                group-hover:translate-y-0 transition-transform"
              >
                <h3 className="text-white font-medium truncate mb-1">
                  {update.title}
                </h3>
                <p className="text-red-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {update.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;