'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ProjectOverview from '@/components/Portfolio/ProjectOverview';

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
        <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
        <p className="mb-4 line-clamp-2 text-gray-600">{project.description}</p>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span>{project.duration}</span>
            <span className="mx-2">•</span>
            <span>{project.location}</span>
          </div>

          <Link
            href={`/Portfolio/projects/${project.id}`}
            className="group inline-flex items-center gap-2 text-red-600 transition-colors hover:text-red-700"
          >
            View Project
            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
