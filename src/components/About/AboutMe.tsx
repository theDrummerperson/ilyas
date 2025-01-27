'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code, Brain, Palette, Book } from 'lucide-react';

interface Tag {
  title: string;
  icon: React.ElementType;
  description: string;
}

const AboutMe: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags: Tag[] = [
    {
      title: "Technology",
      icon: Code,
      description: "Exploring the intersection of code, creativity, and human experience through web development and digital art."
    },
    {
      title: "Research",
      icon: Brain,
      description: "Investigating the complexities of modern identity, digital culture, and social transformation."
    },
    {
      title: "Art",
      icon: Palette,
      description: "Creating visual narratives that challenge perspectives and bridge cultural divides."
    },
    {
      title: "Writing",
      icon: Book,
      description: "Crafting stories and essays that explore the nuances of contemporary existence and identity."
    }
  ];

  return (
    <motion.div 
      className="w-full rounded-2xl bg-gradient-to-br from-gray-900/5 to-gray-800/5 dark:from-white/5 dark:to-white/10 p-6 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 mb-4"
      >
        <Award className="h-6 w-6 text-red-500" />
        <span className="text-gray-600 dark:text-gray-300 font-medium">Scholar & Researcher</span>
      </motion.div>

      <motion.p 
        className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        I am an educator, researcher, and theorist deeply curious about the intersections of aesthetics, politics, technology, and culture. This space is where I explore representation, mediation, and negation.
      </motion.p>

      <motion.div 
        className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <div key={tag.title} className="relative group">
            <motion.button
              className="rounded-full bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm
                       border border-gray-200 dark:border-gray-700
                       text-gray-700 dark:text-gray-300
                       transition-all duration-300 
                       hover:bg-red-50 dark:hover:bg-red-900/20
                       hover:border-red-200 dark:hover:border-red-700
                       flex items-center gap-2"
              onMouseEnter={() => setActiveTag(tag.title)}
              onMouseLeave={() => setActiveTag(null)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <tag.icon className="h-4 w-4 text-red-500" />
              {tag.title}
            </motion.button>
            <AnimatePresence>
              {activeTag === tag.title && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-2 w-64 rounded-xl 
                           bg-white dark:bg-gray-800 
                           p-4 shadow-xl border border-gray-100 dark:border-gray-700
                           backdrop-blur-sm z-10"
                >
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tag.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutMe;