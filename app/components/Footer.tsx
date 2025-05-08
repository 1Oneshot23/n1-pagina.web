import React from 'react';
import { Laptop } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Laptop size={24} className="text-red-500 mr-2" />
          <span className="text-xl font-bold">GamingTech</span>
        </div>
        <p className="text-center text-gray-400">
          Your guide to finding the perfect gaming laptop
        </p>
        <p className="text-center text-gray-400 text-sm mt-4">
          © {new Date().getFullYear()} GamingTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;