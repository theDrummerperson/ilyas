// src/components/Portfolio/ProjectOverview.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectOverviewProps {
  overview: string;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ overview }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Card className="relative overflow-hidden backdrop-blur-sm bg-background/50 dark:bg-background/50">
        {/* Modern gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 opacity-50" />
        
        <CardContent className="relative p-6 sm:p-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="space-y-8 md:space-y-10">
              {overview.split('\n\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="
                      relative
                      pl-6
                      text-base md:text-lg lg:text-xl
                      leading-relaxed md:leading-loose
                      text-foreground/80 dark:text-foreground/80
                      tracking-wide
                      font-normal
                      transition-all duration-300
                      transform-gpu
                      hover:translate-x-1
                      group
                      rounded-r-lg
                      hover:bg-foreground/5
                      dark:hover:bg-foreground/10
                    "
                  >
                    {/* Hover indicator */}
                    <span className="
                      absolute left-0 top-0 h-full w-1.5
                      rounded-full
                      bg-gradient-to-b from-red-500/40 via-red-500/80 to-red-500/40
                      opacity-0 group-hover:opacity-100
                      transition-all duration-300
                      scale-y-0 group-hover:scale-y-100
                      origin-top
                    " />
                    
                    {paragraph.trim()}
                  </motion.p>
                )
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced background effects */}
      <div className="
        absolute -inset-1 blur-3xl
        bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20
        opacity-20 dark:opacity-30
        -z-10
        animate-pulse
        duration-[4000ms]
      " />
      
      {/* Additional decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
    </motion.div>
  );
};

export default ProjectOverview;