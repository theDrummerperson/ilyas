"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, ArrowRight } from "lucide-react";
import LightboxGallery from "@/components/LightboxGallery";
import { projectsData } from "@/data/projects";

const ProjectDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const projectId = params?.projectId as string;

  const project = projectsData[projectId as keyof typeof projectsData];

  React.useEffect(() => {
    setIsLoading(true);
    if (!project) {
      router.push("/Portfolio/projects");
    }
    setIsLoading(false);
  }, [project, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
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
          if (part.startsWith("\"") && part.endsWith("\"")) {
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
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm mb-8 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </motion.button>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
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
              <Calendar className="w-5 h-5" />
              <span className="text-base">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-base">{project.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Overview</h2>
          <div className="prose prose-lg max-w-none">
            {project.overview.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="mb-6 text-gray-600 leading-relaxed text-lg"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Project Objectives</h2>
          <div className="grid gap-4">
            {project.objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100"
              >
                <span className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </span>
                <span className="text-gray-700 text-lg">{objective}</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Project Gallery</h2>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Highlights</h2>
            <div className="grid gap-6">
              {project.keyHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
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
          className="flex justify-between items-center pt-8 border-t border-gray-200"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>
          <Link
            href="/Portfolio/projects"
            className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProjectDetailPage;