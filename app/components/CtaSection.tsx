import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gaming-gradient opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Expert Advice
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Still confused about which gaming laptop is right for you? Get personalized recommendations from our team of gaming experts.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gaming-red focus:border-transparent" 
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gaming-red focus:border-transparent" 
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">What are you looking for?</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gaming-red focus:border-transparent" 
                    placeholder="Tell us about your gaming requirements, budget, and preferences..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Get Recommendations <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
            
            <div 
              className="hidden lg:block bg-cover bg-center" 
              style={{ 
                backgroundImage: "url('https://images.pexels.com/photos/7915457/pexels-photo-7915457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" 
              }}
            ></div>
          </div>
          
          <div className="bg-gaming-dark px-8 py-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <Mail size={20} className="mr-2 text-gaming-red" />
                <span>Subscribe to our newsletter for the latest gaming laptop news and deals</span>
              </div>
              
              <form className="flex w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full md:w-auto rounded-l-md focus:outline-none bg-gray-800 text-white border-y border-l border-gray-700"
                  required
                />
                <button type="submit" className="btn-primary !py-2 !px-4 rounded-l-none">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;