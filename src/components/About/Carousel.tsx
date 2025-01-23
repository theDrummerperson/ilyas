"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin, ArrowRight } from 'lucide-react';

export interface Conference {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  event: string;
  author: string;
  daysAgo: string;
  image: string;
}

interface CarouselProps {
  items: Conference[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Enhanced slide variants with more sophisticated animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = items.length - 1;
      if (newIndex >= items.length) newIndex = 0;
      return newIndex;
    });
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="aspect-[16/9] relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0"
          >
            <div className="h-full bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="w-full md:w-1/2 flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-6">
                  <motion.div 
                    className="relative w-full h-auto aspect-square max-w-[256px] min-h-[200px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                  </motion.div>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium w-fit">
                    {currentItem.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {currentItem.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {currentItem.event}
                  </p>
                  
                  <div className="flex flex-col gap-3 text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{currentItem.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{currentItem.date}</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group w-fit"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Navigation Buttons */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 border border-gray-700/50 backdrop-blur-sm shadow-lg hover:bg-gray-800 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 border border-gray-700/50 backdrop-blur-sm shadow-lg hover:bg-gray-800 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>

        {/* Enhanced Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-x-100'
                  : 'bg-gray-600 scale-x-75 hover:scale-x-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;