'use client';

import React from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, ArrowRight } from 'lucide-react';
import LightboxGallery from '@/components/LightboxGallery';
import { projectsData } from '@/data/projects';

const ProjectDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const projectId = params?.projectId as string;

  const project = projectsData[projectId as keyof typeof projectsData];

  React.useEffect(() => {
    setIsLoading(true);
    if (!project) {
      router.push('/Portfolio/projects');
    }
    setIsLoading(false);
  }, [project, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-red-600"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  const formatParagraph = (paragraph: string) => {
    const parts = paragraph.split(/(".*?")/g);
    return (
      <span>
        {parts.map((part, i) => {
          if (part.startsWith('"') && part.endsWith('"')) {
            const quote = part.slice(1, -1);
            return (
              <span key={i} className="font-semibold text-gray-800">
                &ldquo;{quote}&rdquo;
              </span>
            );
          }
          return part;
        })}
      </span>
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={project.headerImage}
          alt={project.title}
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl p-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </motion.button>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 text-white/90"
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-base">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="text-base">{project.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-xl text-gray-600">{project.description}</p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-4xl font-bold text-gray-900">Overview</h2>
          <div className="prose prose-lg max-w-none">
            {project.overview.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="mb-6 text-lg leading-relaxed text-gray-600"
              >
                {formatParagraph(paragraph)}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="mb-8 text-4xl font-bold text-gray-900">Project Objectives</h2>
          <div className="grid gap-4">
            {project.objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-600">
                  {index + 1}
                </span>
                <span className="text-lg text-gray-700">{objective}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-4xl font-bold text-gray-900">Project Gallery</h2>
            <LightboxGallery images={project.gallery} />
          </motion.div>
        )}

        {/* Key Highlights (if available) */}
        {project.keyHighlights && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-4xl font-bold text-gray-900">Key Highlights</h2>
            <div className="grid gap-6">
              {project.keyHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-6"
                >
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-between border-t border-gray-200 pt-8"
        >
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </button>
          <Link
            href="/Portfolio/projects"
            className="group flex items-center gap-2 text-red-600 transition-colors hover:text-red-700"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProjectDetailPage;
