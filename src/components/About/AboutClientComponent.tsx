

"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Code, Camera, Pen, Coffee, Library, Globe, 
  ChevronDown, Share2, BookMarked, ExternalLink,
  Briefcase, GraduationCap, Award
} from 'lucide-react';
import type { Conference } from './Carousel';
import Carousel from './Carousel';

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

const AboutClientComponent = () => {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 100]);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<CategoryKey>('research');

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
    {
      id: 2,
      title: "For the Betterment of a Dependent People: Somalia and African American Self-Making.",
      category: "Symposium",
      date: "November 10, 2018",
      location: "Bates College (African American and American Cultural Studies)",
      event: "Blackness: Citizenship, and Emancipatory Struggle",
      author: "Bkates Africana",
      daysAgo: "4 years ago",
      image: "/bates.jpg",
    },
    {
      id: 3,
      title: "Phillis Wheatley and the Frail Black Body.",
      category: "Emerging Scholars Workshop",
      date: "March 31 - April 1, 2017",
      location: "Pennsylvania State University",
      event: "Historicizing Blackness: Sports, Performance, and Politics",
      author: "George and Ann Richards Civil War Era Center",
      daysAgo: "6 years ago",
      image: "/psu.jpeg",
    },

    {
      id: 4,
      title: "Toward A Black Refugeeism",
      category: "Conference Presentation",
      date: "April 14 - April 15, 2017",
      location: "Northwestern University, Evanston, Illinois",
      event: "RE Africa: Archives Knowledges Approaches",
      author: "Northwestern University Department",
      daysAgo: "6 years ago",
      image: "/nu.jpeg",
    },


    {
      id: 5,
      title: "The Place of Somalia in Black Geographies",
      category: "Conference Presentation",
      date: "October 11-13, 2017",
      location: "UC Berkeley, Berkeley, California",
      event: "Black Geographies: Insurgent Knowledge, Spatial Poetics, and the Politics of Blackness",
      author: "Berkeley Geography Department",
      daysAgo: "6 years ago",
      image: "/berk.png",
    },

    {
      id: 6,
      title: "Beyond Ayaan Hiirsi Ali: On Being Black, Muslim, and from East Africa in Liberal North American Societies",
      category: "Session Organizer & Panelist",
      date: "October 8-11, 2015",
      location: "Toronto, Canada",
      event: "American Studies Association: The (Re)production of Misery and the Ways of Resistance",
      author: "American Studies Asssociation",
      daysAgo: "8 years ago",
      image: "/asa.png",
    },

    {
      id: 7,
      title: "Decolonizing Somali Studies",
      category: "Roundtable Discussion",
      date: "May 2, 2015",
      location: "York University, Canada",
      event: "Critical Ethnic Studies Association: Sovereignties and Colonialisms: Resisting Racism, Extraction, and Dispossession",
      author: "Critical Ethnic Studies Association",
      daysAgo: "8 years ago",
      image: "/cesa.png",
    },



    {
      id: 8,
      title: "The Studies in Our Work",
      category: "Brown Bag Presentation",
      date: "April 30, 2015",
      location: "University of Maryland, College Park",
      event: "American Studies Department Brown Bag",
      author: "American Studies @UMD",
      daysAgo: "8 years ago",
      image: "/UMD.jpeg",
    }
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

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with Enhanced Parallax */}
      <motion.section 
        className="relative h-[90vh] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 z-0" 
          style={{ y: heroImageY }}
        >
          <div className="relative h-full w-full">
            <img 
              src="/hero6.jpg" 
              alt="Background" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
          </div>
        </motion.div>

        {/* Enhanced Hero Content */}
        <div className="relative z-10 flex h-full items-center px-6">
          <motion.div 
            className="mx-auto max-w-4xl rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/10"
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

            <h1 className="text-6xl font-bold text-white">
              About Me
            </h1>
            <motion.div 
              className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
            
            <p className="mt-6 text-xl leading-relaxed text-white/90">
              Artist, developer, and perpetual learner exploring the intersections of art,
              technology, and identity.
            </p>

            {/* Enhanced Interactive Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Race, Media, Technology', 'Epistomologies of Vision', 'Language and Systems of Knowledge'].map((tag, i) => (
                <div key={tag} className="relative">
                  <motion.button
                    className="rounded-full bg-white/20 px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-white/30 border border-white/10"
                    onMouseEnter={() => setActiveTag(tag)}
                    onMouseLeave={() => setActiveTag(null)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.button>
                  <AnimatePresence>
                    {activeTag === tag && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 w-48 rounded-lg bg-white p-3 shadow-xl dark:bg-gray-800 backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Explore my work in {tag.toLowerCase()}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
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
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-sm">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 text-white" />
          </div>
        </motion.div>
      </motion.section>

      {/* Enhanced Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Story Section */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-gray-400" />
                <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  My Story
                </h2>
              </div>
              <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  I write and create experiences that explore the relationships between art,
                  technology, and identity. Much of my time is spent examining Western ways of
                  seeing the body and the built environment in modern society.
                </p>
                <p className="leading-relaxed">
                  As a visual artist, I'm particularly interested in how humans use visual
                  narratives—distinct from oral and written forms—to explore our
                  perceptual blind spots and challenge the common assumption that seeing equals
                  understanding.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Skills Section */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Professional Skills</h3>
              
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(Object.entries(categories) as [CategoryKey, Category][]).map(([key, category]) => (
                  <motion.button
                    key={key}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === key
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
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
                      className="group relative rounded-lg bg-gray-50 p-4 transition-all duration-300 hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start space-x-3">
                        <skill.icon className={`${skill.color} h-6 w-6 flex-shrink-0`} />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{skill.text}</p>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">{skill.description}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-lg ring-2 ring-transparent transition-all duration-300 group-hover:ring-blue-500/50" />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Conference Section */}
      <motion.div
        className="mt-16 px-6 pb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Conference Presentations
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Recent academic presentations and workshops
            </p>
          </div>
          
          {conferences && conferences.length > 0 && (
            <Carousel items={conferences} />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutClientComponent;