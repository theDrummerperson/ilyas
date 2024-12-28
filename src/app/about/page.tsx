'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
 return (
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
     id="about"
     className="relative bg-white dark:bg-gray-900 min-h-screen"
   >
     <div className="max-w-7xl mx-auto">
       {/* Mobile image section */}
       <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.6, duration: 0.5 }}
         className="w-full lg:hidden"
       >
         <div className="relative w-full h-[50vh]">
           <img 
             className="w-full h-full object-cover"
             src="https://www.ilyasabukar.com/biopic.jpeg"
             alt="Ilyas"
           />
           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center text-sm font-light italic">
             Photo by Brandon Lawrence (TheBrand Media Productions) 2025
           </div>
         </div>
       </motion.div>

       <div className="relative z-10 p-4 sm:p-6 lg:p-8 lg:max-w-[50%]">
         <main className="mx-auto">
           <div className="lg:text-left">
             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2, duration: 0.5 }}
               className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
             >
               About Me
             </motion.h2>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.5 }}
               className="text-base text-gray-700 dark:text-gray-300 sm:text-lg space-y-4"
             >
               <p>
                 I write and create experiences that explore the relationships between art, technology, and identity. Much of my time is spent examining Western ways of seeing the body and the built environment in modern society. As a visual artist, I'm particularly interested in how humans use visual narratives—distinct from oral and written forms—to explore our perceptual blind spots and challenge the common assumption that seeing equals understanding.
               </p>
               <p>
                 My current installation, "TV Repairman," exemplifies this intersection of visual culture and technology. The project documents my journey of coding this website from scratch in 30 days, relying solely on found knowledge (books, YouTube, friendly conversations) and artificial intelligence (publicly accessible chatbots). It is currently on display at the <a href="http://www.feed.art" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">FEED Media Arts Center</a>.
               </p>
               <p>
                 Beyond my artistic practice, I take on projects supporting community development where I can contribute my skills and services. You can always find me downtown—capturing photographs, savoring tea and pastries in cafés, and losing myself in the library.
               </p>
             </motion.div>
           </div>
         </main>
       </div>
     </div>
     
     {/* Desktop image section */}
     <motion.div 
       initial={{ opacity: 0, scale: 0.95 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ delay: 0.6, duration: 0.5 }}
       className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
     >
       <div className="relative h-full">
         <img 
           className="absolute inset-0 w-full h-full object-cover"
           src="https://www.ilyasabukar.com/biopic.jpeg"
           alt="Ilyas"
         />
         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center text-sm font-light italic">
           Photo by Brandon Lawrence (TheBrand Media Productions) 2025
         </div>
       </div>
     </motion.div>
   </motion.div>
 );
}
