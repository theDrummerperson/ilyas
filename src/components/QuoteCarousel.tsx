// src/components/QuoteCarousel.tsx //

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote as QuoteIcon, Pause, Play } from 'lucide-react';

interface Quote {
  text: string;
  author: string;
  source: string;
}

const quotes: Quote[] = [
  {
    text: "Love itself, the subversive gift, is an important public good, and loving is a significant political act, particularly among those stigmatized and marked as unworthy of love and incapable of deep commitment.",
    author: "Richard Iton",
    source: "In Search of the Black Fantastic"
  },
  {
    text: "Because it was set aside, black culture could, by virtue of the very act of discrimination, become culture, insofar as, historically speaking, it was forced to turn its resources of spirit toward negation and critique..",
    author: "Hortense J. Spillers",
    source: "The Idea of Black Culture"
  },
  {
    text: "The archive of slavery rests upon a founding violence. This violence determines, regulates and organizes the kinds of statements that can be made about slavery and as well it creates subjects and objects of power.",
    author: "Saidiya Hartman",
    source: "Venus in Two Acts"
  }
];

const QuoteCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<number>(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    let startTime = Date.now();
    const duration = 5000;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / duration) * 100;
      
      if (newProgress <= 100) {
        setProgress(newProgress);
        requestAnimationFrame(updateProgress);
      }
    };

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      startTime = Date.now();
      setProgress(0);
    }, duration);

    updateProgress();
    return () => {
      clearInterval(timer);
    };
  }, [isAutoPlaying]);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setProgress(0);
  };

  return (
    <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 via-white to-gray-50 p-8 shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-gray-700">
      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />
      
      {/* Quote icon with enhanced styling */}
      <div className="absolute left-6 top-6 rounded-full bg-red-500/10 p-2">
        <QuoteIcon className="h-6 w-6 text-red-500/50" />
      </div>
      
      <div className="relative h-full w-full">
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
            className="absolute inset-0 flex flex-col items-center justify-center px-6"
          >
            <p className="mb-6 text-center text-lg italic leading-relaxed text-gray-800 dark:text-gray-200 lg:text-xl">
              &ldquo;{quotes[currentIndex].text}&rdquo;
            </p>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {quotes[currentIndex].author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <em>{quotes[currentIndex].source}</em>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-200 dark:bg-gray-600">
          <motion.div
            className="h-full bg-red-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      )}

      {/* Navigation dots with enhanced styling */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {quotes.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-red-500'
                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-red-300'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons with enhanced styling */}
      <div className="absolute right-6 top-6 flex space-x-2">
        <motion.button
          onClick={toggleAutoPlay}
          className="rounded-full bg-white/80 p-2 text-gray-800 shadow-lg backdrop-blur-sm transition-colors hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </motion.button>
      </div>

      <motion.button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-800 shadow-lg backdrop-blur-sm transition-colors hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous quote"
      >
        <ChevronLeft className="h-5 w-5" />
      </motion.button>

      <motion.button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-800 shadow-lg backdrop-blur-sm transition-colors hover:bg-white dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
        whileHover={{ scale: 1.1, x: 4 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next quote"
      >
        <ChevronRight className="h-5 w-5" />
      </motion.button>
    </div>
  );
};

export default QuoteCarousel;