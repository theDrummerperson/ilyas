'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin, ArrowRight } from 'lucide-react';

export interface Conference {
  length: number;
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
      x: direction > 0 ? '100vw' : '-100vw',
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: 'easeInOut' },
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100vw' : '-100vw',
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: 'easeInOut' },
    }),
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

  const currentItem = items[currentIndex] as Conference;

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
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 px-8 py-12 rounded-2xl flex items-center justify-center"
          >
            <div className="flex flex-col md:flex-row gap-8 max-w-full max-h-full">
              <div className="w-full md:w-1/2 relative flex items-center justify-center">
                <motion.div
                  className="w-auto h-auto max-w-[256px] max-h-[200px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="object-contain max-w-full max-h-full"
                  />
                </motion.div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-white">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium w-fit">
                  {currentItem.category}
                </span>
                <h3 className="text-2xl font-bold tracking-tight">
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
          </motion.div>
        </AnimatePresence>
        {/* Enhanced Navigation Buttons */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 border border-gray-700/50 backdrop-blur-sm shadow-lg hover:bg-gray-800 transition-colors"
          aria-label="Previous Slide" // Added aria-label
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 border border-gray-700/50 backdrop-blur-sm shadow-lg hover:bg-gray-800 transition-colors"
          aria-label="Next Slide" // Added aria-label
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>

        {/* Enhanced Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {items.map((_: Conference, index: number) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to slide ${index + 1}`} // Added aria-label
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;