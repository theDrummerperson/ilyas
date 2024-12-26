
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="relative bg-white dark:bg-gray-900 overflow-hidden mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg 
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-gray-900 transform translate-x-1/2"
            fill="currentColor" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-1" />

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
              >
                About Me
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-3 text-base text-gray-700 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0"
              >
              <p className="mb-4">
    I write and create experiences that explore the relationships between art, technology, and identity. Much of my time is spent examining Western ways of seeing the body and the built environment in modern society. As a visual artist, I'm particularly interested in how humans use visual narratives—distinct from oral and written forms—to explore our perceptual blind spots and challenge the common assumption that seeing equals understanding.
  </p>
  <p className="mb-4">
    My current installation, "TV Repairman," exemplifies this intersection of visual culture and technology. The project documents my journey of coding this website from scratch in 30 days, relying solely on found knowledge (books, YouTube, friendly conversations) and artificial intelligence (publicly accessible chatbots). It is currently on display at the <a href="http://www.feed.art" target="_blank" rel="noopener noreferrer">FEED Media Arts Center</a>.
  </p>
  <p>
    Beyond my artistic practice, I take on projects supporting community development where I can contribute my skills and services. You can always find me downtown—capturing photographs, savoring tea and pastries in cafés, and losing myself in the library.
  </p>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <img 
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/public/biopic.jpeg"
          alt="Ilyas"
        />
      </motion.div>
    </motion.div>
  );
}