"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  duration: string;
  location: string;
  headerImage: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.headerImage}
          alt={project.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span>{project.duration}</span>
            <span className="mx-2">•</span>
            <span>{project.location}</span>
          </div>
          
          <Link 
            href={`/Portfolio/projects/${project.id}`}
            className="group inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
          >
            View Project
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;