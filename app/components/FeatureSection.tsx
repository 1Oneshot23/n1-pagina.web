import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, Cpu } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Cpu size={24} />,
      title: 'Advanced Specifications',
      description: 'Detailed breakdown of all technical specifications with benchmarks and performance metrics.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Testing',
      description: 'Real-world gaming tests with FPS data across popular titles at various settings.'
    },
    {
      icon: <Award size={24} />,
      title: 'Expert Reviews',
      description: 'In-depth analysis from gaming professionals who understand what matters in a gaming laptop.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Trusted Comparisons',
      description: 'Side-by-side comparisons of gaming laptops to help you make an informed choice.'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section className="section bg-white py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GamingTech</h2>
          <p className="text-gray-600">
            We provide comprehensive information and tools to help you find the perfect gaming laptop for your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div className="w-12 h-12 bg-gaming-red/10 text-gaming-red rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;