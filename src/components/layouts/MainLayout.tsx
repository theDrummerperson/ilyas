'use client';

import React from 'react';
import type { ReactNode } from 'react';
import './globals.css'; // Import global styles
import NavBar from '../NavBar';
import Footer from '../Footer'; // Modular footer component

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      {/* Add Font Awesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      {/* Page structure */}
      <div className="page-container">
        <NavBar />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
