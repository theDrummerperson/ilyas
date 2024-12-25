'use client';
import './globals.css';
import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* Font Awesome can be added in a Script component or in your _app.js */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        />
        
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
      </body>
    </html>
  );
}
