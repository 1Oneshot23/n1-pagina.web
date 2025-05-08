import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import LaptopCard from './LaptopCard';
import { laptops } from '../data/laptops';

const FeaturedLaptops = () => {
  const featuredLaptops = laptops.filter(laptop => laptop.isFeatured).slice(0, 4);
  
  return (
    <section id="featured" className="section bg-gray-50 py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Gaming Laptops</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our top-rated gaming laptops with powerful specs, stunning displays, and advanced cooling for optimal gaming performance.
            </p>
          </div>
          <Link 
            to="/products"
            className="btn-outline flex items-center"
          >
            View All <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredLaptops.map((laptop, index) => (
            <LaptopCard key={laptop.id} laptop={laptop} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLaptops;