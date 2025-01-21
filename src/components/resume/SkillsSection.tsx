'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Library,
  Globe,
  BookMarked,
  Users,
  Share2,
  GraduationCap,
  Pen,
  PresentationIcon,
  Target,
  Heart,
  Laptop,
  LayoutIcon,
  Film,
  Monitor,
  Video,
  Database,
  Palette,
  ChevronRight
} from 'lucide-react';

interface Skill {
  text: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.FC<{ className?: string }>;
  description: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  variant?: 'resume' | 'about';
  className?: string;

  categories: {

    title: string;

    skills: string[];

  }[];


}

export default function SkillsSection({ variant = 'resume', className = '' }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('research');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      title: 'Research & Analysis',
      icon: Search,
      description: 'Academic research and analytical expertise',
      skills: [
        {
          text: 'Race and Immigration Studies',
          description: 'Critical analysis of contemporary migration patterns and racial dynamics',
          icon: Library,
          color: 'text-indigo-600'
        },
        {
          text: 'Digital Media Studies',
          description: 'Exploring intersections of technology, media, and society',
          icon: Globe,
          color: 'text-blue-600'
        },
        {
          text: 'Cultural Analysis',
          description: 'Understanding cultural phenomena and social dynamics',
          icon: BookMarked,
          color: 'text-purple-600'
        },
        {
          text: 'Ethnographic Research',
          description: 'Field observation and qualitative research methodologies',
          icon: Users,
          color: 'text-green-600'
        },
        {
          text: 'American Studies',
          description: 'Interdisciplinary analysis of American society and culture',
          icon: Library,
          color: 'text-red-600'
        },
        {
          text: 'Media Ecology',
          description: 'Analysis of media environments and their societal impacts',
          icon: Share2,
          color: 'text-yellow-600'
        }
      ]
    },
    {
      title: 'Teaching & Leadership',
      icon: GraduationCap,
      description: 'Educational and organizational leadership',
      skills: [
        {
          text: 'Curriculum Development',
          description: 'Design and implementation of innovative course materials',
          icon: Pen,
          color: 'text-blue-600'
        },
        {
          text: 'Multi-campus Teaching',
          description: 'Experience teaching across multiple institutions',
          icon: Globe,
          color: 'text-green-600'
        },
        {
          text: 'Research Presentation',
          description: 'Effective communication of complex research findings',
          icon: PresentationIcon,
          color: 'text-purple-600'
        },
        {
          text: 'Conference Organization',
          description: 'Planning and execution of academic events',
          icon: Users,
          color: 'text-red-600'
        },
        {
          text: 'Strategic Planning',
          description: 'Development of educational strategies and initiatives',
          icon: Target,
          color: 'text-indigo-600'
        },
        {
          text: 'Student Engagement',
          description: 'Creating interactive learning environments',
          icon: Heart,
          color: 'text-pink-600'
        }
      ]
    },
    {
      title: 'Technical & Creative',
      icon: Laptop,
      description: 'Digital and artistic capabilities',
      skills: [
        {
          text: 'Multimedia Installation',
          description: 'Creation of interactive art experiences',
          icon: LayoutIcon,
          color: 'text-cyan-600'
        },
        {
          text: 'Digital Content Creation',
          description: 'Development of engaging digital media',
          icon: Film,
          color: 'text-amber-600'
        },
        {
          text: 'Technology-Enhanced Learning',
          description: 'Integration of digital tools in education',
          icon: Monitor,
          color: 'text-emerald-600'
        },
        {
          text: 'Media Production',
          description: 'Creation of digital media content',
          icon: Video,
          color: 'text-fuchsia-600'
        },
        {
          text: 'Database Management',
          description: 'Organization of research data',
          icon: Database,
          color: 'text-sky-600'
        },
        {
          text: 'Contemporary Art Practice',
          description: 'Creation and curation of modern art',
          icon: Palette,
          color: 'text-rose-600'
        }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  if (variant === 'resume') {
    // Simple list view for resume
    return (
      <section className={`mb-12 ${className}`}>
        <h2 className="mb-6 border-b-2 pb-2 text-2xl font-bold">Skills & Expertise</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-lg p-4 transition-colors duration-200 hover:bg-gray-50"
            >
              <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-blue-600">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={`${category.title}-${skillIndex}`}
                    className="flex items-center text-gray-700"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    {skill.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Interactive version for about page
  return (
    <section className={`relative overflow-hidden rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800 ${className}`}>
      {/* Decorative Elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
        Areas of Expertise
      </h2>

      <div className="grid gap-8 lg:grid-cols-[250px,1fr]">
        {/* Category Navigation */}
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`group flex w-full items-center rounded-lg p-4 text-left transition-all ${
                activeCategory === category.title
                  ? 'bg-red-50 dark:bg-red-900/20'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon
                className={`mr-3 h-5 w-5 ${
                  activeCategory === category.title
                    ? 'text-red-500'
                    : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                }`}
              />
              <div className="flex-1">
                <h3 className={`font-medium ${
                  activeCategory === category.title
                    ? 'text-red-700 dark:text-red-300'
                    : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
              <ChevronRight
                className={`h-5 w-5 transform transition-transform ${
                  activeCategory === category.title
                    ? 'text-red-500 rotate-90'
                    : 'text-gray-400'
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="relative min-h-[400px] rounded-xl bg-gray-50 p-6 dark:bg-gray-700/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-4"
            >
              {categories.find(cat => cat.title === activeCategory)?.skills.map((skill) => (
                <motion.div
                  key={skill.text}
                  variants={skillVariants}
                  className="group relative rounded-lg bg-white p-4 shadow-sm transition-all 
                         duration-300 hover:shadow-md dark:bg-gray-800"
                  onMouseEnter={() => setHoveredSkill(skill.text)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-start space-x-4">
                    <skill.icon className={`${skill.color} h-6 w-6 flex-shrink-0`} />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">
                        {skill.text}
                      </p>
                      <p className={`mt-1 text-sm text-gray-500 dark:text-gray-400 
                                 transition-opacity duration-300 ${
                                   hoveredSkill === skill.text ? 'opacity-100' : 'opacity-0'
                                 }`}>
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-lg ring-2 ring-transparent"
                    animate={{
                      borderColor: hoveredSkill === skill.text ? 'rgba(239, 68, 68, 0.2)' : 'transparent'
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}









