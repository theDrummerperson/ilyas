
"use client";


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
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
       <div className="aspect-[4/3] md:aspect-[16/9] relative">
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
              opacity: { duration: 0.2 }
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
            <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 h-full">
                <div className="w-full md:w-1/2 flex items-center justify-center bg-white rounded-lg p-4">
                  <div className="relative w-full h-auto aspect-square max-w-[256px] min-h-[200px]">
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3 py-2">
                  <span className="text-sm font-medium text-blue-500">
                    {currentItem.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {currentItem.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {currentItem.event}
                  </p>
                  <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <p className="line-clamp-1">{currentItem.location}</p>
                    <p>{currentItem.date}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 h-full">
  <div className="w-full md:w-1/2 flex items-center justify-center bg-white rounded-lg p-4">
    {/* Replace the fixed size container with a responsive one */}
    <div className="relative w-full h-auto aspect-square max-w-[256px] min-h-[200px]">
      <img
        src={currentItem.image}
        alt={currentItem.title}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
                
  <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3 py-2">
    <span className="text-sm font-medium text-blue-500">
      {currentItem.category}
    </span>
    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
      {currentItem.title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
      {currentItem.event}
    </p>
    <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
      <p className="line-clamp-1">{currentItem.location}</p>
      <p>{currentItem.date}</p>
    </div>
  </div>
</div>






          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>

        {/* Progress Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-blue-500'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;







