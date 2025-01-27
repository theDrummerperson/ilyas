'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import QuoteCarousel from '@/components/QuoteCarousel';
import UpdatesSection from '@/components/Updates/UpdatesSection';
import AboutMe from '@/components/About/AboutMe';
import VenmoCard from '@/components/VenmoCard';


export default function HomeClientComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        {/* Mobile Hero Section */}
        {isMobile && (
          <motion.div
            className="relative mb-8 h-80 w-full overflow-hidden rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/hero5.jpg"
              alt="Hero Image"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <motion.div
              className="absolute inset-0 flex flex-col justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-t from-white via-white/95 to-transparent px-6 pb-8 pt-24 dark:from-gray-900 dark:via-gray-900/95">
                <div className="relative z-10 mx-auto max-w-lg">
                  <h2 className="mb-4 text-3xl font-bold">
                    <span className="block font-extrabold text-gray-900 dark:text-white">
                      Artist &
                    </span>
                    <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                      Writer
                    </span>
                  </h2>
                  <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                    Creating at the intersection of art, technology, and identity
                  </p>
                </div>

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
                <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1
                className={`${isMobile ? 'sr-only' : 'text-4xl md:text-5xl lg:text-6xl'} font-extrabold tracking-tight`}
              >
                <span className="block text-gray-900 dark:text-white">Artist &</span>
                <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                  Writer
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 dark:text-gray-300 lg:mx-0 lg:text-xl">
                Based in Erie, PA
              </p>

              {/* AboutMe Component */}
              <div className="py-4">
                <AboutMe />
              </div>

              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <motion.a
                  href="/Portfolio/projects"
                  className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-5 py-2 text-base font-medium text-white shadow-sm transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 lg:justify-start">
                <span>Disordered Person</span>
                <span>•</span>
                <span>Wayward Negro @ Life</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Hero Image */}
          {!isMobile && (
            <motion.div
              className="relative aspect-square w-full max-w-md flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/hero5.jpg"
                  alt="Hero Image"
                  fill
                  priority
                  className="transform object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <a
                  href="https://www.instagram.com/lakeeffectlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 z-10 rounded-full bg-black/50 px-2 py-1 text-xs text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-black/70 hover:text-white"
                >
                  © @lakeeffectlabs
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Updates Section */}
        <UpdatesSection />


{/* Support Section with VenmoCard */}
<motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-24"
        >
          <div className="mb-8 text-center">
            <motion.h2 
              className="text-2xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Support My <span className="text-red-500">Work</span>
            </motion.h2>
            <motion.p 
              className="mt-2 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Help fuel my creative journey ✨
            </motion.p>
          </div>

          {/* VenmoCard with max-width for better visual balance */}
          <div className="mx-auto max-w-2xl">
            <VenmoCard 
              venmoUsername="your-venmo-username"
              className="transform transition-all hover:scale-[1.02] hover:shadow-2xl"
            />
          </div>
        </motion.div>




        {/* QuoteCarousel moved to bottom */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Fuel for <span className="text-red-500">Thought!</span>
          </h2>
          <QuoteCarousel />
        </div>
      </div>
    </div>
  );
}