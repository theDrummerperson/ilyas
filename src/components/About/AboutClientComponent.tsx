
'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Library,
  Globe,
  ChevronDown,
  GraduationCap,
  Award,
} from 'lucide-react';
import Carousel from './Carousel'; // Import Carousel component
import VenmoCard from '@/components/VenmoCard';
import SkillsSection from '@/components/resume/SkillsSection';

interface Tag {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
}

interface Conference {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  event: string;
  author: string;
  daysAgo: string;
  image: string;
  length: number; // Added the missing property 'length'
}

const AboutClientComponent = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 100]);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tags: Tag[] = [
    {
      title: 'Culture, Media, Technology',
      description: 'Exploring intersections of race, media representation, and technological impact',
      icon: Camera,
    },
    {
      title: 'Epistemologies of Vision',
      description: 'Understanding how visual perception shapes knowledge and understanding',
      icon: Globe,
    },
    {
      title: 'Language and Systems of Knowledge',
      description: 'Analyzing how language structures our understanding of reality',
      icon: Library,
    },
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
      length: 0
    },

    {
      id: 2,
      title: "For the Betterment of a Dependent People: Somalia and African American Self-Making.",
      category: "Symposium",
      date: "November 10, 2018",
      location: "Bates College (African American and American Cultural Studies)",
      event: "Blackness: Citizenship, and Emancipatory Struggle",
      author: "Bates Africana",
      daysAgo: "4 years ago",
      image: "/bates.jpg",
      length: 0
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
      length: 0
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
      length: 0
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
      length: 0
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
      length: 0
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
      length: 0
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
      length: 0
    }


  ];

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-black to-black">
      {/* Progress Bar */}
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
        <div 
          className="absolute inset-0 bg-black/20 z-[1]" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M0 0h20L0 20z"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Background Image */}
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
            className="mx-auto max-w-2xl rounded-2xl bg-white/10 p-8 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-300"
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
             I am an educator, researcher, and theorist deeply curious about the intersections of aesthetics, politics, technology, and culture. This space is where I explore representation, mediation, and negation. Intrigued? Stay a while.
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
                        className="absolute top-full mt-2 w-64 rounded-lg bg-gray-900/90 
                                 p-4 shadow-xl backdrop-blur-sm z-10 border border-gray-700"
                      >
                        <p className="text-sm text-gray-300">
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

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Story and Conference */}
          <div className="lg:col-span-8 space-y-12">
           

            {/* Conference Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl bg-gray-900/80 
                           backdrop-blur-sm border border-gray-700 
                           p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative z-10">
                  <h2 className="text-3xl font-semibold bg-clip-text text-transparent 
                              bg-gradient-to-r from-white to-gray-400 mb-6">
                    Conference Presentations
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Academic presentations and workshops
                  </p>
                  <div className="mt-6">
                    <Carousel items={conferences} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Support */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 lg:self-start space-y-6">
            {/* Support Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <VenmoCard 
                venmoUsername="IlyasOAbukar"
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