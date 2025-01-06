"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeClientComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="block text-gray-900 dark:text-white">
                  Artist &
                </span>
                <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-transparent bg-clip-text">
                  Writer
                </span>
              </h1>

              <p className="mt-6 text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Creating at the intersection of art, technology, and identity. Based in Erie, PA.
              </p>

              {/* Quote Section */}
              <motion.div
                className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="text-lg lg:text-xl italic text-gray-800 dark:text-gray-200">
                  &ldquo;Love itself, the subversive gift, is an important public good, and loving is a significant political act, particularly among those stigmatized and marked as unworthy of love and incapable of deep commitment.&rdquo;
                </p>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  - Richard Iton, <em>In Search of the Black Fantastic</em>
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  href="/Portfolio/projects"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-600 dark:text-gray-400">
                <span>Disordered Person</span>
                <span>•</span>
                <span>Wayward Negro @ Life</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex-1 relative w-full max-w-lg aspect-square"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden group">
              <Image
                src="/hero5.svg"
                alt="Hero Image"
                fill
                priority
                className="object-contain transform transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <a
                href="https://www.instagram.com/lakeeffectlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 text-xs text-white/80 hover:text-white bg-black/50 hover:bg-black/70 px-2 py-1 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
              >
                © @lakeeffectlabs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}