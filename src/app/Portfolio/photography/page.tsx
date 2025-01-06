"use client";

import React, { useState } from "react";
import PhotographyCard from "../../../components/Portfolio/PhotographyCard";


const PhotographyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const photographyCollection = [
    {
      src: "/LJ.jpeg",
      alt: "Lindsay Joy Portrait",
      location: "Greenbelt, MD",
      dateTaken: "2018",
      camera: "Canon EOS R5",
      story: "A portrait capturing disconnection.",
      category: "Faces"
    },
    {
      src: "/AA.jpeg",
      alt: "Summertime Portrait",
      location: "Washington, DC/Colada Shop on U Street",
      dateTaken: "2018",
      camera: "Canon EOS R5",
      story: "Exploring guerrilla-style urban portraiture.",
      category: "Faces"
    },
    {
      src: "/azores.jpeg",
      alt: "Landscape of St. Miguel",
      location: "Azores, Portugal",
      dateTaken: "2019",
      camera: "Canon EOS R5",
      story: "Capturing the natural beauty of the Azores islands.",
      category: "Places"
    },
    {
      src: "/Berlin.jpeg",
      alt: "Berlin Street Scene",
      location: "Berlin, Germany",
      dateTaken: "2019",
      camera: "Canon EOS R5",
      story: "Street photography capturing the unique urban culture of Berlin.",
      category: "Places"
    },
    {
      src: "/BK.jpeg",
      alt: "Modern Cambodian Woman",
      location: "Cambridge, MA",
      dateTaken: "2016",
      camera: "Canon EOS R5",
      story: "Transient friendships.",
      category: "Faces"
    },
    {
      src: "/Boston.jpeg",
      alt: "Dorchester, Boston",
      location: "Boston, MA",
      dateTaken: "2017",
      camera: "Canon EOS R5",
      story: "Summer afternoon.",
      category: "Places"
    },
    {
      src: "/boston2.jpeg",
      alt: "Depression as Self-Portrait",
      location: "Cambridge, MA",
      dateTaken: "2016",
      camera: "Canon EOS R5",
      story: "Capturing the energy of depression.",
      category: "Faces"
    },
    {
      src: "/brooklyn.jpeg",
      alt: "Brooklyn AfroPUNK",
      location: "Brooklyn, NY",
      dateTaken: "2015",
      camera: "Canon EOS R5",
      story: "A moment captured at AfroPUNK.",
      category: "Places"
    },
    {
      src: "/EH.jpeg",
      alt: "Portrait of Love Lost",
      location: "Greenbelt, MD",
      dateTaken: "2018",
      camera: "Canon EOS R5",
      story: "Documenting the spirit of self-destruction.",
      category: "Faces"
    },
    {
      src: "/EH2.jpeg",
      alt: "Portrait of Love Lost",
      location: "Washington, DC/Studio",
      dateTaken: "2018",
      camera: "Canon EOS R5",
      story: "The vibrant street life of Tolerance.",
      category: "Faces"
    },
    {
      src: "/HyattsvilleMD.jpeg",
      alt: "",
      location: "Hyattsville, MD",
      dateTaken: "2023",
      camera: "Canon EOS R5",
      story: "Broke in the suburbs.",
      category: "Places"
    },
    {
      src: "/Maryland.jpeg",
      alt: "Maryland Landscape",
      location: "Laurel, Maryland",
      dateTaken: "2014",
      camera: "Canon EOS R5",
      story: "The natural beauty of Maryland's landscapes.",
      category: "Places"
    },
    {
      src: "/MM.jpeg",
      alt: "Studio Portrait in my shared MIT Dorm Living Room",
      location: "Studio",
      dateTaken: "2017",
      camera: "Canon EOS R5",
      story: "Studio portraiture.",
      category: "Faces"
    },
    {
      src: "/Paris.jpeg",
      alt: "Paris Street Scene",
      location: "Paris, France/Gare Du Nord",
      dateTaken: "2019",
      camera: "Canon EOS R5",
      story: "The timeless charm of Parisian streets.",
      category: "Places"
    },
    {
      src: "/Paris2.jpeg",
      alt: "Paris Architecture",
      location: "Paris, France",
      dateTaken: "2018",
      camera: "Canon EOS R5",
      story: "Classical Parisian architecture and urban design.",
      category: "Places"
    },
    {
      src: "/self.jpeg",
      alt: "Self Portrait in Berlin",
      location: "Studio",
      dateTaken: "2024",
      camera: "Canon EOS R5",
      story: "Self-experimentation in Germany.",
      category: "Faces"
    },
    {
      src: "/SS.jpeg",
      alt: "I Love You",
      location: "Laurel, Maryland",
      dateTaken: "2014",
      camera: "Canon EOS R5",
      story: "Someone I love.",
      category: "Faces"
    },
    {
      src: "/Studio.jpeg",
      alt: "Studio Portrait Session",
      location: "Studio",
      dateTaken: "2016",
      camera: "Canon EOS R5",
      story: "Random shot captured in MIT's Photography Club Studio.",
      category: "Faces"
    }
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "Places", label: "Places" },
    { id: "Faces", label: "Faces" },
  ];

  const filteredImages = photographyCollection.filter(img =>
    selectedCategory === "all" || img.category === selectedCategory
  );

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Visual Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Through my lens, I capture moments that tell stories of culture, identity, and urban life.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex gap-4 p-2 bg-gray-100 dark:bg-gray-800 shadow-sm rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <PhotographyCard
              key={index}
              image={image}
              priority={index < 6}
              lightTheme={true}  // Pass this prop to PhotographyCard
            />
          ))}
        </div>

        {/* Copyright Notice */}
        <div className="mt-16 text-center text-gray-600 dark:text-gray-300 text-sm">
          © {new Date().getFullYear()} Ilyas O. Abukar. All photographs are protected by copyright.
          <br />
          No images may be reproduced without express written permission.
        </div>
      </div>
    </section>
  );
};

export default PhotographyPage;