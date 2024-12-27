'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Quote {
  text: string;
  author: string;
}

export default function Home() {
  const quotes: Quote[] = [
    {
      text: "Love itself, the subversive gift, is an important public good, and loving is a significant political act.",
      author: "- Richard Iton",
    },
    {
      text: "...respect black noise—the shrieks, the moans, the nonsense, and the opacity, which are always in excess of legibility and of the law.",
      author: "- Saidiya Hartman",
    },
    {
      text: "I'm like Carrie Bradshaw with a back brace on.",
      author: "- Doechii",
    },
  ];

  const [[currentQuoteIndex, direction], setCurrentQuote] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const intervalId = setInterval(() => {
      setCurrentQuote(prev => [(prev[0] + 1) % quotes.length, 1]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [quotes.length, isAutoPlaying]);

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setCurrentQuote(prev => {
      const nextIndex = prev[0] + newDirection;
      if (nextIndex < 0) return [quotes.length - 1, newDirection];
      if (nextIndex >= quotes.length) return [0, newDirection];
      return [nextIndex, newDirection];
    });
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.90)), url("/azores.jpeg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="h-screen flex items-center justify-center px-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentQuoteIndex}
            custom={direction}
            variants={{
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
            }}
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
            className="absolute w-full px-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto">
              <motion.p 
                className="text-xl sm:text-2xl text-white mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {quotes[currentQuoteIndex].text}
              </motion.p>
              <motion.p 
                className="text-red-500 text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {quotes[currentQuoteIndex].author}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3">
          {quotes.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentQuoteIndex === index ? 'bg-red-500 w-4' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}














