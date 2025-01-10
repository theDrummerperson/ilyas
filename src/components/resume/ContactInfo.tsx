// src/components/resume/ContactInfo.tsx
import React from 'react';
import { Mail, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';

interface ContactInfoProps {
  email: string;
  phone: string;
  linkedIn?: string;
  instagram?: string;
  twitter?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  phone,
  linkedIn,
  instagram,
  twitter,
}) => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="group flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 
            transition-all duration-300 ease-in-out hover:border-red-500 hover:shadow-lg"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 
            transition-colors duration-300 group-hover:bg-red-50"
          >
            <Mail className="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-red-500" />
          </div>
          <span className="ml-3 text-gray-700 transition-colors duration-300 group-hover:text-red-500">
            {email}
          </span>
        </a>

        {/* Phone */}
        <a
          href={`tel:${phone}`}
          className="group flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 
            transition-all duration-300 ease-in-out hover:border-red-500 hover:shadow-lg"
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 
            transition-colors duration-300 group-hover:bg-red-50"
          >
            <Phone className="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-red-500" />
          </div>
          <span className="ml-3 text-gray-700 transition-colors duration-300 group-hover:text-red-500">
            {phone}
          </span>
        </a>

        {/* LinkedIn */}
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 
              transition-all duration-300 ease-in-out hover:border-red-500 hover:shadow-lg"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 
              transition-colors duration-300 group-hover:bg-red-50"
            >
              <Linkedin className="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-red-500" />
            </div>
            <span className="ml-3 text-gray-700 transition-colors duration-300 group-hover:text-red-500">
              LinkedIn
            </span>
          </a>
        )}

        {/* Instagram */}
        {instagram && (
          <a
            href={`https://instagram.com/${instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 
              transition-all duration-300 ease-in-out hover:border-red-500 hover:shadow-lg"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 
              transition-colors duration-300 group-hover:bg-red-50"
            >
              <Instagram className="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-red-500" />
            </div>
            <span className="ml-3 text-gray-700 transition-colors duration-300 group-hover:text-red-500">
              {instagram}
            </span>
          </a>
        )}

        {/* Twitter */}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 
              transition-all duration-300 ease-in-out hover:border-red-500 hover:shadow-lg"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 
              transition-colors duration-300 group-hover:bg-red-50"
            >
              <Twitter className="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-red-500" />
            </div>
            <span className="ml-3 text-gray-700 transition-colors duration-300 group-hover:text-red-500">
              {twitter}
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
