'use client';

import React from 'react';
import type { ReactNode } from 'react';
import NavBar from '../NavBar';

type MainLayoutProps = {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return React.createElement('div', { className: "page-container" },
    React.createElement(NavBar, {}),
    React.createElement('main', { className: "content" }, children),
    React.createElement('footer', { className: "footer" },
      React.createElement('div', { className: "footer-content" },
        React.createElement('p', { className: "footer-text" }, '© 2024 a.Ilyas Abukar. All rights reserved.'),
        React.createElement('a', {
          href: "https://www.instagram.com/smartugly_",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "footer-icon",
          'aria-label': "Follow on Instagram"
        }, React.createElement('i', { className: "fab fa-instagram" }))
      )
    )
  );
};

export default MainLayout;