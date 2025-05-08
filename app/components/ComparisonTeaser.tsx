import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, BarChart, CheckCircle2 } from 'lucide-react';

const ComparisonTeaser = () => {
  return (
    <section className="section py-24 bg-gaming-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gaming-red font-medium">Powerful Comparison Tool</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Compare Gaming Laptops Side-by-Side
            </h2>
            <p className="text-gray-300 mb-8">
              Our detailed comparison tool makes it easy to compare specifications, 
              performance, and value across different gaming laptops. 
              Make an informed decision based on what matters most to you.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Compare up to 3 laptops at once',
                'Detailed spec-by-spec comparison',
                'Performance benchmarks across popular games',
                'Price and value analysis'
              ].map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <CheckCircle2 className="text-gaming-red mr-3 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <Link 
              to="/comparison"
              className="btn-primary"
            >
              Try Comparison Tool <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="absolute -top-6 -right-6">
                <BarChart size={80} className="text-gaming-red opacity-20" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">Performance Comparison</h3>
                
                {['FPS in AAA Games', 'Thermal Performance', 'Battery Life'].map((category, i) => (
                  <div key={i} className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">{category}</span>
                    </div>
                    <div className="flex space-x-1 mb-1">
                      {Array.from({ length: 3 }).map((_, laptopIndex) => (
                        <div key={laptopIndex} className="flex-1">
                          <div className="h-8 rounded bg-gray-800 flex items-center justify-center">
                            <span className="text-xs text-white">Laptop {laptopIndex + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div 
                        className="h-4 bg-gaming-blue rounded overflow-hidden"
                        style={{ width: `${65 + Math.random() * 35}%` }}
                      ></div>
                      <div 
                        className="h-4 bg-gaming-purple rounded overflow-hidden"
                        style={{ width: `${65 + Math.random() * 35}%` }}
                      ></div>
                      <div 
                        className="h-4 bg-gaming-red rounded overflow-hidden"
                        style={{ width: `${65 + Math.random() * 35}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="border border-white/10 rounded p-3">
                      <p className="text-xs text-white mb-1">Laptop {i + 1}</p>
                      <div className="flex space-x-1">
                        {Array.from({ length: Math.floor(Math.random() * 2) + 3 }).map((_, j) => (
                          <Star key={j} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gaming-cyan/20 w-24 h-24 rounded-lg blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Star = () => (
  <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
);

export default ComparisonTeaser;