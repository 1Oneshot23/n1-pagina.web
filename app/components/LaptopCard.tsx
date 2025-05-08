import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Laptop } from '../types';

interface LaptopCardProps {
  laptop: Laptop;
  index: number;
}

const LaptopCard: React.FC<LaptopCardProps> = ({ laptop, index }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <motion.div
      className="card group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={laptop.imageUrl} 
          alt={laptop.name} 
          className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {laptop.isNew && (
          <div className="absolute top-3 left-3 bg-gaming-red text-white text-xs font-bold uppercase py-1 px-2 rounded">
            New
          </div>
        )}
        {laptop.isFeatured && (
          <div className="absolute top-3 right-3 bg-gaming-dark text-white text-xs font-bold uppercase py-1 px-2 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm text-gray-500 mb-1">{laptop.brand}</p>
            <h3 className="text-lg font-bold">{laptop.name}</h3>
          </div>
          <div className="bg-gaming-dark/5 rounded-full px-3 py-1">
            <p className="text-sm font-medium text-gaming-dark">
              ${laptop.price.toLocaleString()}
            </p>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex">
            {renderStars(laptop.rating)}
          </div>
          <span className="ml-2 text-sm text-gray-500">
            {laptop.rating.toFixed(1)}
          </span>
        </div>
        
        <div className="mb-4 text-sm text-gray-600">
          <p className="line-clamp-2">
            {laptop.specs.processor} • {laptop.specs.gpu} • {laptop.specs.ram}
          </p>
        </div>
        
        <button className="w-full btn-outline group-hover:bg-gaming-red group-hover:text-white group-hover:border-gaming-red transition-colors">
          View Details <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </motion.div>
  );
};

export default LaptopCard;