"use client";

import React from "react";
import CustomCarousel from "@/components/Portfolio/CustomCarousel";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen p-4 mt-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-red-600 text-sm md:text-base uppercase font-extrabold tracking-widest mb-4 transform transition-all duration-300 hover:scale-105 text-center">
          Featured Past, Current, and Future Projects
        </p>
        <CustomCarousel />
      </div>
    </main>
  );
};

export default ProjectsPage;