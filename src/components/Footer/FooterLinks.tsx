"use client";

import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

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
          className="flex items-center group text-gray-400 hover:text-red-600 transition-all duration-200 hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 rounded-md p-1"
          role="listitem"
        >
          {showIcons && link.icon && (
            <link.icon className="w-4 h-4 mr-2 transition-colors duration-200 group-hover:text-red-600" aria-hidden="true" />
          )}
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;