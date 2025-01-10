'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface FooterLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

interface FooterLinksProps {
  links: FooterLink[];
  showIcons: boolean;
}

const FooterLinks = ({ links, showIcons }: FooterLinksProps) => {
  return (
    <div className="space-y-3" role="list">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="group flex items-center rounded-md p-1 text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          role="listitem"
        >
          {showIcons && link.icon && (
            <link.icon
              className="mr-2 h-4 w-4 transition-colors duration-200 group-hover:text-red-600"
              aria-hidden="true"
            />
          )}
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
