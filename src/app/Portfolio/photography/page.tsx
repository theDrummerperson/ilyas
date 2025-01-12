'use client';

import React, { useState } from 'react';
import PhotographyCard from '../../../components/Portfolio/PhotographyCard';
import { Metadata } from 'next';
import { siteMetadata } from '@/app/metadata';

const PhotographyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const photographyCollection = [
    {
      src: '/LJ.jpeg',
      alt: 'Lindsay Joy Portrait',
      location: 'Greenbelt, MD',
      dateTaken: '2018',
      camera: 'Canon EOS R5',
      story: 'A portrait capturing disconnection.',
      category: 'Faces',
    },


    {
      src: '/protest.jpg',
      alt: 'Protest in Bosotn, MA',
      location: 'Boston/Cambridge, MA',
      dateTaken: '2017',
      camera: 'Sony A7',
      story: 'Queer and Trans protest against Trump.',
      category: 'Places',
    },

    {
      src: '/syn.jpeg',
      alt: 'Synthia Issah Portrait',
      location: 'Boston, MA',
      dateTaken: '2017',
      camera: 'Canon EOS R5',
      story: 'A portrait capturing possibility.',
      category: 'Faces',
    },


    {
      src: '/turin2.JPG',
      alt: 'Italian street fashion',
      location: 'Turin, Italy',
      dateTaken: '2018',
      camera: 'Sony A7',
      story: 'An Italin couple out on a walk.',
      category: 'Places',
    },


    {
      src: '/sunray.jpg',
      alt: 'Portrait of Lia, an artist',
      location: 'Cambridge, MA',
      dateTaken: '2017',
      camera: 'Sony A7',
      story: 'Lia Coleman taming the sun.',
      category: 'Faces',
    },

    {
      src: '/AA.jpeg',
      alt: 'Summertime Portrait',
      location: 'Washington, DC/Colada Shop on U Street',
      dateTaken: '2018',
      camera: 'Canon EOS R5',
      story: 'Exploring guerrilla-style urban portraiture.',
      category: 'Faces',
    },


    {
      src: '/holland2.JPG',
      alt: 'A Potrait of a Friend in Holland',
      location: 'Rotterdam, Holland',
      dateTaken: '2018',
      camera: 'Sony A7',
      story: 'A Portrait of a Woman By the Window.',
      category: 'Places',
    },


    {
      src: '/zores5.jpeg',
      alt: 'Portuguese Landscape',
      location: 'Portugal/St. Miguel Island',
      dateTaken: '2018',
      camera: 'Sony A7',
      story: 'Exploring guerrilla-style landscape photography.',
      category: 'Places',
    },


    {
      src: '/artist.jpg',
      alt: 'Graffitti Artist',
      location: 'Wsahington, DC',
      dateTaken: '2018',
      camera: 'Sony A7',
      story: 'Graffitti artist .',
      category: 'Faces',
    },



    {
      src: '/salaff.JPG',
      alt: 'a smile in France',
      location: 'Bordeaux, France',
      dateTaken: '2018',
      camera: 'Sony A7',
      story: 'Capturing the natural beauty of a smile.',
      category: 'Places',
    },



    {
      src: '/Berlin.jpeg',
      alt: 'Berlin Street Scene',
      location: 'Berlin, Germany',
      dateTaken: '2019',
      camera: 'Canon EOS R5',
      story: 'Street photography capturing the unique urban culture of Berlin.',
      category: 'Places',
    },
    {
      src: '/BK.jpeg',
      alt: 'Modern Gambian Woman',
      location: 'Cambridge, MA',
      dateTaken: '2016',
      camera: 'Canon EOS R5',
      story: 'Transient friendships.',
      category: 'Faces',
    },


    {
      src: '/streethead3.JPG',
      alt: 'Wholesome night in Brussels',
      location: 'Brussels, Belgium',
      dateTaken: '2018',
      camera: 'Canon EOS R5',
      story: 'Love and passion.',
      category: 'Place',
    },






    {
      src: '/Boston.jpeg',
      alt: 'Dorchester, Boston',
      location: 'Boston, MA',
      dateTaken: '2017',
      camera: 'Canon EOS R5',
      story: 'Summer afternoon.',
      category: 'Places',
    },
    {
      src: '/boston2.jpeg',
      alt: 'Depression as Self-Portrait',
      location: 'Cambridge, MA',
      dateTaken: '2016',
      camera: 'Canon EOS R5',
      story: 'Capturing the energy of depression.',
      category: 'Faces',
    },
    {
      src: '/brooklyn.jpeg',
      alt: 'Brooklyn AfroPUNK',
      location: 'Brooklyn, NY',
      dateTaken: '2015',
      camera: 'Canon EOS R5',
      story: 'A moment captured at AfroPUNK.',
      category: 'Places',
    },
    {
      src: '/EH2.jpeg',
      alt: 'Portrait of Love Lost',
      location: 'Greenbelt, MD',
      dateTaken: '2018',
      camera: 'Canon EOS R5',
      story: 'Documenting the spirit of self-destruction.',
      category: 'Faces',
    },


    {
      src: '/ladan.jpg',
      alt: 'Portrait of Diasporic Connections',
      location: 'Laurel, MD',
      dateTaken: '2015',
      camera: 'Canon EOS R5',
      story: 'Documenting the spirit of joy.',
      category: 'Faces',
    },

    {
      src: '/boston.JPG',
      alt: 'Portrait of Men on Stilts',
      location: 'Boston, MA',
      dateTaken: '2018',
      camera: 'Canon EOS R5',
      story: 'The vibrant street life of art.',
      category: 'Places',
    },

    {
      src: '/erieboat.jpg',
      alt: 'People on  boat',
      location: 'Erie, Pa',
      dateTaken: '2024',
      camera: 'IPhone 11',
      story: 'Nightime on the water in Erie PA.',
      category: 'Places',
    },



    {
      src: '/pedrocarina91.JPG',
      alt: 'Portrait of Love Gained',
      location: 'Portugal/St. Miguel Island',
      dateTaken: '2018',
      camera: 'Sony A7',
      story: 'Carina and Pedro kiss.',
      category: 'Places',
    },


    {
      src: '/HyattsvilleMD.jpeg',
      alt: '',
      location: 'Hyattsville, MD',
      dateTaken: '2023',
      camera: 'Canon EOS R5',
      story: 'Broke in the suburbs.',
      category: 'Places',
    },
    {
      src: '/Maryland.jpeg',
      alt: 'Maryland Landscape',
      location: 'Laurel, Maryland',
      dateTaken: '2014',
      camera: 'Canon EOS R5',
      story: "The natural beauty of Maryland's landscapes.",
      category: 'Places',
    },
    {
      src: '/MM.jpeg',
      alt: 'Studio Portrait in my shared MIT Dorm Living Room',
      location: 'Studio',
      dateTaken: '2017',
      camera: 'Canon EOS R5',
      story: 'Studio portraiture.',
      category: 'Faces',
    },
    {
      src: '/Paris.jpeg',
      alt: 'Paris Street Scene',
      location: 'Paris, France/Gare Du Nord',
      dateTaken: '2019',
      camera: 'Canon EOS R5',
      story: 'The timeless charm of Parisian streets.',
      category: 'Places',
    },
    {
      src: '/Paris2.jpeg',
      alt: 'Paris Architecture',
      location: 'Paris, France',
      dateTaken: '2018',
      camera: 'Canon EOS R5',
      story: 'Classical Parisian architecture and urban design.',
      category: 'Places',
    },


    {
      src: '/BK2.jpeg',
      alt: 'A portrait of a friend',
      location: 'Cambridge, MA',
      dateTaken: '2018',
      camera: 'Canon EOS R5',
      story: 'A Gambian woman.',
      category: 'Faces',
    },



    
    {
      src: '/self.jpeg',
      alt: 'Self Portrait in Berlin',
      location: 'Studio',
      dateTaken: '2024',
      camera: 'Canon EOS R5',
      story: 'Self-experimentation in Germany.',
      category: 'Faces',
    },
    {
      src: '/SS.jpeg',
      alt: 'I Love You',
      location: 'Laurel, Maryland',
      dateTaken: '2014',
      camera: 'Canon EOS R5',
      story: 'Someone I love.',
      category: 'Faces',
    },
    {
      src: '/Studio.jpeg',
      alt: 'Studio Portrait Session',
      location: 'Studio',
      dateTaken: '2016',
      camera: 'Canon EOS R5',
      story: "Random shot captured in MIT's Photography Club Studio.",
      category: 'Faces',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'Places', label: 'Places' },
    { id: 'Faces', label: 'Faces' },
  ];

  const filteredImages = photographyCollection.filter(
    (img) => selectedCategory === 'all' || img.category === selectedCategory
  );

  return (
    <section className="min-h-screen bg-white py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Visual Stories
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Through my lens, I capture moments that tell stories of culture, identity, and urban
            life.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex justify-center overflow-x-auto pb-4">
          <div className="flex gap-4 rounded-full bg-gray-100 p-2 shadow-sm dark:bg-gray-800">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <PhotographyCard
              key={index}
              image={image}
              priority={index < 6}
              lightTheme={true} // Pass this prop to PhotographyCard
            />
          ))}
        </div>

        {/* Copyright Notice */}
        <div className="mt-16 text-center text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Ilyas O. Abukar. All photographs are protected by copyright.
          <br />
          No images may be reproduced without express written permission.
        </div>
      </div>
    </section>
  );
};

export default PhotographyPage;
