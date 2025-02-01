'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import config from '@/components/utils/siteConfig'; // Ensure correct path

export default function RootLayoutClientComponent({ children }: { children: React.ReactNode }) {
  

    return (
      <>
        {/* Navigation Bar */}
        <NavBar />
  
        {/* Main Content */}
        <main id="main-content" className="flex-grow container mx-auto p-4">
          {children}
        </main>
  
        {/* Footer */}
        <Footer />
      </>
    );
}
