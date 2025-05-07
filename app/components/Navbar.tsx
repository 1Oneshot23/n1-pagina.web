import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">TechSolutions</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-200 transition">About</Link>
            <Link to="/services" className="hover:text-blue-200 transition">Services</Link>
            <Link to="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;