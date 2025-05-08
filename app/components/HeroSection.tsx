import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gray-900">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-gaming-dark/90 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gaming-red/20 text-gaming-red border border-gaming-red/30">
              The Ultimate Gaming Hub
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Level Up Your <br />
              <span className="text-gaming-red">Gaming Experience</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Find the perfect gaming laptop with our comprehensive guides, 
              detailed comparisons, and expert reviews.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Browse Laptops <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/comparison" className="btn-outline border-white text-white hover:bg-white hover:text-gaming-dark">
                Compare Models
              </Link>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-gray-400 mt-1">Laptops</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
              <p className="text-gray-400 mt-1">Brands</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">2K+</p>
              <p className="text-gray-400 mt-1">Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">24/7</p>
              <p className="text-gray-400 mt-1">Support</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a 
          href="#featured"
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut" 
              }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;