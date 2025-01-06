// src/components/resume/ContactInfo.tsx
import React from "react";
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";

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
  twitter 
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {/* Email */}
        <a 
          href={`mailto:${email}`}
          className="group flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 
            hover:border-red-500 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full 
            group-hover:bg-red-50 transition-colors duration-300">
            <Mail className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
          </div>
          <span className="ml-3 text-gray-700 group-hover:text-red-500 transition-colors duration-300">
            {email}
          </span>
        </a>
        
        {/* Phone */}
        <a 
          href={`tel:${phone}`}
          className="group flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 
            hover:border-red-500 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full 
            group-hover:bg-red-50 transition-colors duration-300">
            <Phone className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
          </div>
          <span className="ml-3 text-gray-700 group-hover:text-red-500 transition-colors duration-300">
            {phone}
          </span>
        </a>

        {/* LinkedIn */}
        {linkedIn && (
          <a 
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 
              hover:border-red-500 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full 
              group-hover:bg-red-50 transition-colors duration-300">
              <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
            </div>
            <span className="ml-3 text-gray-700 group-hover:text-red-500 transition-colors duration-300">
              LinkedIn
            </span>
          </a>
        )}

        {/* Instagram */}
        {instagram && (
          <a 
            href={`https://instagram.com/${instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 
              hover:border-red-500 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full 
              group-hover:bg-red-50 transition-colors duration-300">
              <Instagram className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
            </div>
            <span className="ml-3 text-gray-700 group-hover:text-red-500 transition-colors duration-300">
              {instagram}
            </span>
          </a>
        )}

        {/* Twitter */}
        {twitter && (
          <a 
            href={`https://twitter.com/${twitter.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 
              hover:border-red-500 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full 
              group-hover:bg-red-50 transition-colors duration-300">
              <Twitter className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
            </div>
            <span className="ml-3 text-gray-700 group-hover:text-red-500 transition-colors duration-300">
              {twitter}
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;