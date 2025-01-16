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

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex >= items.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = items.length - 1;
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl"> {/* Removed fixed h-96 */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -10000) paginate(1);
            else if (swipe > 10000) paginate(-1);
          }}
          className="absolute w-full" // Removed fixed h-full
        >
          <div className="relative w-full"> {/* Removed fixed h-full */}
            <img
              src={items[currentIndex].image}
              alt={items[currentIndex].title}
              className="w-full object-contain" // Key: object-contain, w-full
              style={{ maxHeight: '600px', margin: '0 auto', display: 'block'}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              {/* ... text content */}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons and dots (unchanged) */}
    </div>
  );
};

export default Carousel;
