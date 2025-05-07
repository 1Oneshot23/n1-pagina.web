import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovative Solutions for Tomorrow</h1>
        <p className="text-xl mb-8">We help businesses transform with cutting-edge technology</p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </a>
          <a href="/services" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
