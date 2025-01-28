"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutMe from "@/components/About/AboutMe";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { ArrowRight } from "lucide-react";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <NavBar />

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Bio & Details */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              <span className="block">Researcher &</span>
              <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
                Artist
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Based in Erie, PA
            </p>

            <div className="py-2">
              <AboutMe />
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.a
                href="/Portfolio/projects"
                className="inline-flex items-center rounded-md bg-red-600 px-5 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-200 hover:bg-red-700 hover:scale-105"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </div>

            {/* Subtext */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 lg:justify-start">
              <span>Disordered Person</span>
              <span>•</span>
              <span>Wayward Negro @ Life</span>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative w-full max-w-sm mx-auto lg:max-w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/hero5.jpg" // Change this to your actual profile image
                alt="My Portrait"
                fill
                priority
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Page;
