import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <section className="relative min-h-[600px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-gray-900/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect <span className="text-red-500">Gaming Laptop</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the best gaming laptops with our easy-to-follow guides and recommendations.
            </p>
            <Link to="/products" className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors">
              Browse Laptops <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Laptops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={`https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                  alt="Gaming Laptop" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Gaming Laptop {item}</h3>
                  <p className="text-gray-600 mb-4">High-performance gaming laptop with the latest specs.</p>
                  <Link to="/products" className="text-red-500 hover:text-red-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;