"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Camera, Pen, Coffee, Library, Globe } from "lucide-react";


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const AboutClientComponent = () => {
  const interests = [
    { icon: Code, text: "Coding & Development", color: "text-blue-600" },
    { icon: Camera, text: "Photography", color: "text-green-600" },
    { icon: Pen, text: "Writing", color: "text-purple-600" },
    { icon: Coffee, text: "Café Culture", color: "text-yellow-600" },
    { icon: Library, text: "Libraries", color: "text-red-600" },
    { icon: Globe, text: "Community Development", color: "text-indigo-600" }
  ];

  return (
    <div
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-16 mb-20"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <motion.div
            className="relative w-64 h-64 md:w-96 md:h-96 group"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero6.jpg"
                alt="Profile Picture"
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 256px, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <a
              href="https://www.instagram.com/lakeeffectlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 text-xs text-white/80 hover:text-white bg-black/50 hover:bg-black/70 px-2 py-1 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
            >
              © @lakeeffectlabs
            </a>
          </motion.div>

          <motion.div
            className="flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-transparent bg-clip-text">
                About Me
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-24 h-1 bg-red-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Artist, developer, and perpetual learner exploring the intersections of art,
              technology, and identity.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {["Politics of Visuality and Race","Photography and Epistomologies of Vision", "Technology, Media, and Society","Post-Industrial Landscapes"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <motion.div
            className="md:col-span-8 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
                My Story
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I write and create experiences that explore the relationships between art, technology, and identity.
                  Much of my time is spent examining Western ways of seeing the body and the built environment in modern society.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a visual artist, I&apos;m particularly interested in how humans use visual narratives&mdash;distinct from oral
                  and written forms&mdash;to explore our perceptual blind spots and challenge the common assumption that seeing
                  equals understanding.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-4 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
                Interests & Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <motion.div
                    key={interest.text}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <interest.icon className={`w-8 h-8 ${interest.color} mb-2`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{interest.text}</span>
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
