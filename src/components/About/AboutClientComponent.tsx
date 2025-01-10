'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code, Camera, Pen, Coffee, Library, Globe } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const AboutClientComponent = () => {
  const interests = [
    { icon: Code, text: 'Coding & Development', color: 'text-blue-600' },
    { icon: Camera, text: 'Photography', color: 'text-green-600' },
    { icon: Pen, text: 'Writing', color: 'text-purple-600' },
    { icon: Coffee, text: 'Café Culture', color: 'text-yellow-600' },
    { icon: Library, text: 'Libraries', color: 'text-red-600' },
    { icon: Globe, text: 'Community Development', color: 'text-indigo-600' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 py-24 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-20 flex flex-col items-center gap-16 md:flex-row"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.div
            className="group relative h-64 w-64 md:h-96 md:w-96"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/hero6.jpg"
                alt="Profile Picture"
                fill
                className="transform object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 256px, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <a
              href="https://www.instagram.com/lakeeffectlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 z-10 rounded-full bg-black/50 px-2 py-1 text-xs text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/70 hover:text-white"
            >
              © @lakeeffectlabs
            </a>
          </motion.div>

          <motion.div
            className="flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="relative mb-4 text-6xl font-bold">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                About Me
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-24 rounded-full bg-red-500"
                initial={{ width: 0 }}
                animate={{ width: '6rem' }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </h1>

            <motion.p
              className="max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Artist, developer, and perpetual learner exploring the intersections of art,
              technology, and identity.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                'Politics of Visuality and Race',
                'Photography and Epistomologies of Vision',
                'Technology, Media, and Society',
                'Post-Industrial Landscapes',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <motion.div
            className="space-y-8 md:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-semibold text-transparent dark:from-white dark:to-gray-300">
                My Story
              </h2>
              <div className="space-y-6">
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  I write and create experiences that explore the relationships between art,
                  technology, and identity. Much of my time is spent examining Western ways of
                  seeing the body and the built environment in modern society.
                </p>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  As a visual artist, I&apos;m particularly interested in how humans use visual
                  narratives&mdash;distinct from oral and written forms&mdash;to explore our
                  perceptual blind spots and challenge the common assumption that seeing equals
                  understanding.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8 md:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <h3 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-semibold text-transparent dark:from-white dark:to-gray-300">
                Interests & Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <motion.div
                    key={interest.text}
                    className="flex flex-col items-center rounded-xl bg-gray-50 p-4 text-center transition-colors duration-300 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <interest.icon className={`h-8 w-8 ${interest.color} mb-2`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {interest.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutClientComponent;
