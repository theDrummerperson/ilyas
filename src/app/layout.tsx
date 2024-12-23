'use client';
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="brand">a.Ilyas Abukar</div>
          <button className="hamburger">&#9776;</button>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Writing</a></li>
            <li><a href="#photography">Photography</a></li>
          </ul>
          <button className="contact-button">Contact</button>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">© 2024 a.Ilyas Abukar. All rights reserved.</p>
            <a
              href="https://www.instagram.com/smartugly_"
              target="_blank"
              className="footer-icon"
              aria-label="Follow on Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}