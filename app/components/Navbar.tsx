import React from 'react';
import { Link, NavLink } from 'react-router';
import { Laptop } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Laptop size={24} className="text-red-500" />
            <span className="text-xl font-bold">GamingTech</span>
          </Link>

          <nav className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? 'text-red-500' : 'text-gray-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? 'text-red-500' : 'text-gray-700'}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? 'text-red-500' : 'text-gray-700'}`
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;