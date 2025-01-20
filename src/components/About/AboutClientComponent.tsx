'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Code, Camera, Pen, Coffee, Library, Globe, 
  ChevronDown, Share2, BookMarked, ExternalLink,
  Briefcase, GraduationCap, Award
} from 'lucide-react';
import type { Conference } from './Carousel';
import Carousel from './Carousel';
import VenmoCard from '@/components/VenmoCard';

interface Skill {
  icon: React.ForwardRefExoticComponent<any>;
  text: string;
  color: string;
  description: string;
}

interface Category {
  icon: React.ForwardRefExoticComponent<any>;
  title: string;
  skills: Skill[];
}

type Categories = {
  [key in 'research' | 'management' | 'communication' | 'technical']: Category;
};

type CategoryKey = keyof Categories;

interface Tag {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
}

const AboutClientComponent = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 100]);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<CategoryKey>('research');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tags: Tag[] = [
    {
      title: 'Culture, Media, Technology',
      description: 'Exploring intersections of race, media representation, and technological impact',
      icon: Camera
    },
    {
      title: 'Epistemologies of Vision',
      description: 'Understanding how visual perception shapes knowledge and understanding',
      icon: Globe
    },
    {
      title: 'Language and Systems of Knowledge',
      description: 'Analyzing how language structures our understanding of reality',
      icon: Library
    }
  ];

  const conferences: Conference[] = [
    {
      id: 1,
      title: "Blackness, Immigration, and Islam.",
      category: "Invited Talk",
      date: "February 07, 2022",
      location: "UC Santa Barbara",
      event: "Anti-Blackness and the War on Terror",
      author: "UC Santa Barbara Department of Black Studies",
      daysAgo: "Less than a year ago",
      image: "/usclogo.jpeg",
    },
    // ... rest of your conferences array
  ];

  const categories: Categories = {
    research: {
      icon: Library,
      title: 'Research',
      skills: [
        { 
          icon: Library,
          text: 'Research Methodologies',
          color: 'text-blue-600',
          description: 'Qualitative research expertise'
        },
        { 
          icon: Code,
          text: 'Data Analysis',
          color: 'text-green-600',
          description: 'Analysis and visualization'
        },
        { 
          icon: Code,
          text: 'Database Management',
          color: 'text-cyan-600',
          description: 'Data organization systems'
        }
      ]
    },
    management: {
      icon: Briefcase,
      title: 'Management',
      skills: [
        { 
          icon: BookMarked,
          text: 'Project Management',
          color: 'text-purple-600',
          description: 'Project planning and execution'
        },
        { 
          icon: Share2,
          text: 'Cross-functional Collaboration',
          color: 'text-yellow-600',
          description: 'Team coordination'
        }
      ]
    },
    communication: {
      icon: Pen,
      title: 'Communication',
      skills: [
        { 
          icon: Pen,
          text: 'Communication',
          color: 'text-indigo-600',
          description: 'Presentation and writing'
        },
        {
          icon: Globe,
          text: 'Cultural Sensitivity',
          color: 'text-red-600',
          description: 'Empathy and awareness'
        },
        {
          icon: ExternalLink,
          text: 'Policy Advocacy',
          color: 'text-orange-600',
          description: 'Policy development'
        }
      ]
    },
    technical: {
      icon: Camera,
      title: 'Technical',
      skills: [
        {
          icon: Camera,
          text: 'Technology Proficiency',
          color: 'text-violet-600',
          description: 'Modern platforms expertise'
        }
      ]
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <motion.section 
        className="relative h-[80vh] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-black/20 z-[1]" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat'
          }}
        />

        <motion.div 
          className="absolute inset-0 z-0" 
          style={{ y: heroImageY }}
        >
          <div className="relative h-full w-full">
            <img 
              src="/port-header.jpg" 
              alt="Background" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center px-6">
          <motion.div 
            className="mx-auto max-w-4xl rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/10
                       hover:bg-white/15 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <Award className="h-8 w-8 text-red-500" />
              <span className="text-white/80 font-medium">Scholar & Researcher</span>
            </motion.div>

            <motion.h1 
              className="text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              About Me
            </motion.h1>

            <motion.div 
              className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
            
            <motion.p 
              className="mt-6 text-xl leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Artist, developer, and perpetual learner exploring the intersections of art,
              technology, and identity.
            </motion.p>

            {/* Interactive Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag, i) => (
                <div key={tag.title} className="relative group">
                  <motion.button
                    className="rounded-full bg-white/20 px-4 py-2 text-sm text-white 
                             transition-all duration-300 hover:bg-white/30 border border-white/10 
                             group-hover:ring-2 ring-white/30 flex items-center gap-2"
                    onMouseEnter={() => setActiveTag(tag.title)}
                    onMouseLeave={() => setActiveTag(null)}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <tag.icon className="h-4 w-4" />
                    {tag.title}
                  </motion.button>
                  <AnimatePresence>
                    {activeTag === tag.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 w-64 rounded-lg bg-white/90 
                                 dark:bg-gray-800/90 p-4 shadow-xl backdrop-blur-sm z-10"
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {tag.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="flex flex-col items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 text-white animate-bounce" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main Content with Updated Layout */}
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Story and Conference */}
          <div className="lg:col-span-8 space-y-12">
            {/* Story Section */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-lg 
                           dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 
                           dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 
                             rounded-full -translate-y-16 translate-x-16 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 
                             rounded-full translate-y-16 -translate-x-16 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="h-6 w-6 text-gray-400" />
                    <h2 className="text-3xl font-semibold bg-clip-text text-transparent 
                                 bg-gradient-to-r from-gray-900 to-gray-600 
                                 dark:from-white dark:to-gray-400">
                      My Story
                    </h2>
                  </div>
                  <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
                    <p className="leading-relaxed">
                      Deeply curious about the intersections of aesthetics, politics, technology, and culture. 
                      This space is where I explore representation, mediation, and negation. Intrigued? Stay a while.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Conference Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 
                           backdrop-blur-sm border border-gray-200 dark:border-gray-700 
                           p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 
                             rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 
                             rounded-full translate-x-16 translate-y-16 blur-3xl" />

<div className="relative z-10">
                  <h2 className="text-3xl font-semibold bg-clip-text text-transparent 
                              bg-gradient-to-r from-gray-900 to-gray-600 
                              dark:from-white dark:to-gray-400 mb-6">
                    Conference Presentations
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Academic presentations and workshops
                  </p>
                  <div className="mt-6">
                    <Carousel items={conferences} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills and Support */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 lg:self-start space-y-6">
            {/* Professional Skills Section */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800/80 
                         backdrop-blur-sm border border-gray-200 dark:border-gray-700 
                         hover:shadow-2xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Professional Skills
                </h3>
                
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-6 p-1 bg-gray-100 
                           dark:bg-gray-700/50 rounded-lg">
                  {(Object.entries(categories) as [CategoryKey, Category][]).map(([key, category]) => (
                    <motion.button
                      key={key}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm 
                             font-medium transition-all duration-300 ${
                        activeSection === key
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                          : 'hover:bg-white dark:hover:bg-gray-600'
                      }`}
                      onClick={() => setActiveSection(key)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <category.icon className="h-4 w-4" />
                      {category.title}
                    </motion.button>
                  ))}
                </div>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid grid-cols-1 gap-3"
                  >
                    {categories[activeSection].skills.map((skill, i) => (
                      <motion.div
                        key={skill.text}
                        className="group relative rounded-lg bg-gray-50 p-4 transition-all 
                               duration-300 hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start space-x-3">
                          <skill.icon className={`${skill.color} h-6 w-6 flex-shrink-0`} />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {skill.text}
                            </p>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 
                                      opacity-0 transition-opacity duration-300 
                                      group-hover:opacity-100">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-lg ring-2 ring-transparent 
                                    transition-all duration-300 group-hover:ring-blue-500/50" />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Support Section with VenmoCard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <VenmoCard 
                venmoUsername="YourVenmoUsername"
                className="rounded-2xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClientComponent;