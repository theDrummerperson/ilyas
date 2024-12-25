'use client';

import React from 'react';
import type { ReactNode } from 'react';
import NavBar from '../NavBar';

type MainLayoutProps = {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="page-container">
      <NavBar />
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2024 a.Ilyas Abukar. All rights reserved.
          </p>
          <a
            href="https://www.instagram.com/smartugly_"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Follow on Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
