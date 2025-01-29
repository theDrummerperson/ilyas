'use client';


import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import ActivitySidebar from '@/components/Instagram/InstagramFeed';

export default function RootLayoutClientComponent({ children }: { children: React.ReactNode }) {
  const [isActivityOpen, setIsActivityOpen] = useState<boolean>(false);

  return (
    <>
      <NavBar />
      <main id="main-content" className="min-h-screen flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}