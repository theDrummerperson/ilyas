'use client';


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface VenmoCardProps {
  venmoUsername: string;
  className?: string;
}

const VenmoCard: React.FC<VenmoCardProps> = ({ venmoUsername, className = '' }) => {
  const [selectedMultiplier, setSelectedMultiplier] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const coffeePrice = 5;
  const multipliers = [1, 2, 3, 5];

  const handleVenmoClick = (coffeeCount: number) => {
    const amount = coffeeCount * coffeePrice;
    const note = encodeURIComponent(`☕️ ${coffeeCount} coffee${coffeeCount > 1 ? 's' : ''} to fuel your creativity!`);
    const venmoUrl = `https://venmo.com/pay?recipients=${venmoUsername}&txn=pay&amount=${amount}&note=${note}`;
    
    setShowConfirmation(true);
    setTimeout(() => {
      window.open(venmoUrl, '_blank');
      setTimeout(() => setShowConfirmation(false), 2000);
    }, 300);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute -top-16 left-0 right-0 z-50"
          >
            <div className="flex items-center space-x-2 rounded-lg border border-green-200 bg-green-50 p-4 text-sm dark:border-green-800 dark:bg-green-900/20">
              <Sparkles className="h-4 w-4 text-green-500" />
              <span className="text-green-800 dark:text-green-200">
                Opening Venmo... Thank you for your support!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-500 via-purple-500 to-blue-500 p-8 shadow-2xl ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-rose-500/30 via-purple-500/30 to-blue-500/30"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/20"
              animate={{
                y: [-20, -100],
                x: Math.sin(i) * 20,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative text-center">
          <motion.div 
            className="mb-6 inline-flex items-center justify-center space-x-3 rounded-2xl bg-white/10 px-4 py-2 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
          >
            <Coffee className="h-5 w-5 text-white" />
            <h3 className="text-xl font-bold text-white">
              Support My Work
            </h3>
          </motion.div>
          
          <p className="mb-8 text-sm text-white/90">
            Your support helps me create more amazing content ✨
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {multipliers.map((multiplier) => (
              <motion.button
                key={multiplier}
                onClick={() => {
                  setSelectedMultiplier(multiplier);
                  handleVenmoClick(multiplier);
                }}
                className="group relative overflow-hidden rounded-2xl bg-white/10 p-4 backdrop-blur-md transition-all hover:bg-white/20"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-white">
                      {multiplier}
                    </span>
                    <Coffee className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/90">
                    ${coffeePrice * multiplier}
                  </span>
                  
                  <motion.div 
                    className="absolute bottom-1 right-2 opacity-0 transition-opacity group-hover:opacity-100"
                    initial={false}
                    animate={selectedMultiplier === multiplier ? { scale: [1, 1.2, 1] } : {}}
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </motion.div>
                </div>

                {/* Enhanced hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5"
                  initial={false}
                  whileHover={{ 
                    opacity: [0, 1],
                    scale: [1, 1.2],
                    rotate: [0, 5],
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          <motion.div 
            className="mt-8 flex items-center justify-center space-x-2 text-xs text-white/70"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="h-3 w-3" />
            <span>Secured by Venmo</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default VenmoCard;