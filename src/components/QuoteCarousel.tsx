'use client';



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds per quote
    let startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / duration) * 100;
      
      if (newProgress <= 100) {
        setProgress(newProgress);
        requestAnimationFrame(updateProgress);
      }
    };

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
      startTime = Date.now();
      setProgress(0);
    }, duration);

    updateProgress();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-8 w-full overflow-hidden rounded-2xl bg-white/50 p-8 shadow-sm dark:bg-gray-900/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="space-y-6">
            <p className="text-center text-base leading-relaxed tracking-wide text-gray-800 dark:text-gray-200">
              "{quotes[currentIndex].text}"
            </p>
            <div className="text-center">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {quotes[currentIndex].author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {quotes[currentIndex].source}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="mt-6 flex justify-center space-x-2">
        {quotes.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-red-500' 
                : 'w-1.5 bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-100 dark:bg-gray-800">
        <motion.div
          className="h-full bg-red-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default QuoteCarousel;