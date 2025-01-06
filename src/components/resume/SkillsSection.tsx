// src/components/resume/SkillsSection.tsx
import React from "react";

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
      <h2 className="text-2xl font-bold mb-6 border-b-2 pb-2">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div 
            key={category.title} 
            className="group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li 
                  key={`${category.title}-${skillIndex}`}
                  className="text-gray-700 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
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