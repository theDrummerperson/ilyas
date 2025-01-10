'use client';

import React from 'react';
import CustomCarousel from '@/components/Portfolio/CustomCarousel';

const ProjectsPage = () => {
  return (
    <main className="mt-8 min-h-screen p-4">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 transform text-center text-sm font-extrabold uppercase tracking-widest text-red-600 transition-all duration-300 hover:scale-105 md:text-base">
          Featured Past, Current, and Future Projects
        </p>
        <CustomCarousel />
      </div>
    </main>
  );
};

export default ProjectsPage;
