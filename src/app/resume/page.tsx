// src/app/resume/page.tsx
import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/resume/HeroSection";
import ContactInfo from "@/components/resume/ContactInfo";
import SkillsSection from "@/components/resume/SkillsSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import EducationSection from "@/components/resume/EducationSection";
import ArtworkSection from "@/components/resume/ArtworkSection";

export const metadata: Metadata = {
  title: "Resume | Ilyas Abukar",
  description: "Professional portfolio of Ilyas Abukar - Artist, Researcher, and Scholar in Media, Culture, and Communications Studies",
};

export default function ResumePage() {
  const artworks = [
    {
      title: "TV Repairman",
      type: "Installation",
      venue: "Feed Media Arts Center",
      location: "Erie, Pennsylvania",
      date: "October - November 2024",
      description: "New media installation exploring technology and technological expertise & repair"
    },
    {
      title: "a.Ilyas Abukar Presents Anisha Baid",
      venue: "Feed Media Arts Center",
      location: "Erie, Pennsylvania",
      date: "2024",
      description: "Multimedia installation presenting Anisha Baid's work on technology and gender (\"2 Clicks\" & \"Tech Support as Self-Portrait.\")"
    }
  ];

  const skillCategories = [
    {
      title: "Research & Analysis",
      skills: [
        "Race and Immigration Studies",
        "Digital Media Studies",
        "Cultural Analysis",
        "Ethnographic Research",
        "American Studies",
        "Media Ecology"
      ]
    },
    {
      title: "Teaching & Leadership",
      skills: [
        "Curriculum Development",
        "Multi-campus Teaching",
        "Research Presentation",
        "Conference Organization",
        "Strategic Planning",
        "Student Engagement"
      ]
    },
    {
      title: "Technical & Creative",
      skills: [
        "Multimedia Installation",
        "Digital Content Creation",
        "Technology-Enhanced Learning",
        "Media Production",
        "Database Management",
        "Contemporary Art Practice"
      ]
    }
  ];

  const experiences = [
    {
      title: "Artist in Residence",
      company: "Feed Media Arts Center",
      location: "Erie, Pennsylvania",
      startDate: "Oct 2024",
      endDate: "Nov 2024",
      achievements: [
        "Produced multimedia installation \"TV Repairman\" exploring themes of technology and repair",
        "Contributed to center's contemporary media arts program",
        "Engaged with local community through artistic practice"
      ]
    },
    {
      title: "Lead Researcher",
      company: "Ohio Immigrant Alliance",
      location: "Cleveland Heights, Ohio",
      startDate: "2022",
      endDate: "2023",
      achievements: [
        "Led ethnographic research examining technology's impact on racial discrimination in immigration courts",
        "Analyzed digital surveillance systems including databases and ankle monitors",
        "Studied how virtual legal processes affect marginalized populations",
        "Developed recommendations for policy reform based on research findings"
      ]
    },
    {
      title: "Research Fellow",
      company: "MIT Department of Anthropology",
      location: "Cambridge, MA",
      startDate: "2016",
      endDate: "2017",
      achievements: [
        "Investigated intersections of race, digital infrastructure, and immigration",
        "Researched digital refugee communities and technology adoption",
        "Analyzed social media's role in maintaining diaspora networks",
        "Presented findings at departmental and institutional levels"
      ]
    },
    {
      title: "Instructor",
      company: "Digital Islamic Studies Curriculum, University of Maryland",
      location: "College Park, MD",
      startDate: "2017",
      endDate: "2017",
      achievements: [
        "Co-developed and taught technology-enhanced course on Muslim American history",
        "Integrated multimedia resources into curriculum design",
        "Facilitated cross-campus learning experiences",
        "Mentored students in digital research methods"
      ]
    }
  ];

  const educationData = [
    {
      degree: "Ph.D. Candidate in American Studies",
      school: "University of Maryland",
      location: "College Park",
      graduationDate: "2022",
      concentration: "Race, Immigration, & Culture",
      honors: [
        "MIT SHASS Pre-dcotoral Dissertation Fellowship",
        "Ann G. Wylie Dissertation Fellowship",
        "Dr. James W. Longest Memorial Award",
        "Summer Research Fellowship"
      ]
    },
    {
      degree: "M.A. in American Studies",
      school: "University of Maryland",
      location: "College Park",
      graduationDate: "2018",
      concentration: "Race, Immigration, & Culture",
      honors: [
        "Ronald E. McNair Graduate Fellowship"
      ]
    },
    {
      degree: "B.A. in Comparative Literature",
      school: "Pennsylvania State University",
      location: "University Park",
      graduationDate: "2010",
      concentration: "Minor in English",
      honors: [
        "Schreyer Honors College Scholar",
        "Ronald E. McNair Scholar"
      ]
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <HeroSection
        name="Ilyas Abukar"
        title="Artist, Researcher, and Scholar"
        subtitle="Media, Culture, and Communications Studies"
      />

      <ContactInfo
        email="iabukar@gmail.com"
        phone="814-232-6103"
        linkedIn="https://www.linkedin.com/in/ilyasabukar/"
        instagram="@smartugly_"
        twitter="@smartuglydesigns"
      />

      <div className="mt-12 space-y-12">
        <ArtworkSection artworks={artworks} />
        <ExperienceSection experiences={experiences} />
        <EducationSection educations={educationData} />
        <SkillsSection categories={skillCategories} />
      </div>
    </main>
  );
}
