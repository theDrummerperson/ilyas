// src/components/resume/SkillsSection.tsx
import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export default function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section className="mb-12">
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
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
