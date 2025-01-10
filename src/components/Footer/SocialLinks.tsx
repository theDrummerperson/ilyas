'use client';

import React from 'react';
import { Instagram, Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  icon: typeof Instagram;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/smartugly_',
    label: 'Instagram',
  },
  {
    icon: Github,
    href: 'https://github.com/theDrummerperson',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ilyasabukar',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:iabukar@ilyasabukar.com',
    label: 'Email',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4" role="list">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 text-gray-400 transition-all
            duration-200 hover:bg-gray-800 hover:text-red-600
            focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          aria-label={label}
          role="listitem"
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
