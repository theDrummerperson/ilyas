import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2024 a.Ilyas Abukar. All rights reserved.</p>
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
  );
};

export default Footer;
