'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart } from 'lucide-react';

interface VenmoCardProps {
  venmoUsername: string;
  className?: string;
}

const VenmoCard: React.FC<VenmoCardProps> = ({ venmoUsername, className = '' }) => {
  const coffeePrice = 5;
  const multipliers = [1, 2, 3, 5];

  const handleVenmoClick = (coffeeCount: number) => {
    const amount = coffeeCount * coffeePrice;
    const venmoUrl = `https://venmo.com/${venmoUsername}?txn=pay&note=☕️ ${coffeeCount} coffee${coffeeCount > 1 ? 's' : ''} to fuel your creativity! &amount=${amount}`;
    window.open(venmoUrl, '_blank');
  };

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />

      <div className="text-center">
        <div className="mb-4 flex items-center justify-center space-x-2">
          <Coffee className="h-6 w-6 text-blue-500" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Buy me a coffee</h3>
        </div>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
          Support my work by buying me a virtual coffee ☕️
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {multipliers.map((multiplier) => (
            <motion.button
              key={multiplier}
              onClick={() => handleVenmoClick(multiplier)}
              className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-md transition-all hover:shadow-lg dark:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-1">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {multiplier}
                  </span>
                  <Coffee className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  ${coffeePrice * multiplier}
                </span>
              </div>
              
              {/* Hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"
                initial={false}
                whileHover={{ opacity: 1 }}
              />
            </motion.button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
          <Heart className="h-3 w-3" />
          <span>Powered by Venmo</span>
        </div>
      </div>
    </motion.div>
  );
};

export default VenmoCard;