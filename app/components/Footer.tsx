import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">TechSolutions</h2>
            <p className="text-gray-300">Innovative solutions for modern challenges</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition">About</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white transition">Services</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">123 Tech Street</li>
                <li className="text-gray-300">Silicon Valley, CA</li>
                <li className="text-gray-300">info@techsolutions.com</li>
                <li className="text-gray-300">(123) 456-7890</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>© 2025 TechSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;