import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Cpu, MemoryStick as Memory, HardDrive, Monitor, Gamepad2, Battery } from 'lucide-react';
import { laptops } from '../data/laptops';
import { Laptop } from '../types';

const ComparisonPage = () => {
  const [selectedLaptops, setSelectedLaptops] = useState<Laptop[]>([]);
  
  const handleSelectLaptop = (laptop: Laptop) => {
    if (selectedLaptops.find(l => l.id === laptop.id)) {
      setSelectedLaptops(selectedLaptops.filter(l => l.id !== laptop.id));
    } else if (selectedLaptops.length < 3) {
      setSelectedLaptops([...selectedLaptops, laptop]);
    }
  };
  
  const removeLaptop = (id: number) => {
    setSelectedLaptops(selectedLaptops.filter(laptop => laptop.id !== id));
  };
  
  return (
    <div className="pt-20">
      <div className="bg-gaming-dark text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Compare Gaming Laptops</h1>
          <p className="text-gray-300 max-w-2xl mb-8">
            Select up to three laptops to compare their specifications, features, and performance side by side.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        {/* Selection area */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Select Laptops to Compare</h2>
          <p className="text-gray-600 mb-6">
            Choose up to 3 laptops from our catalog for a detailed comparison.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {laptops.map(laptop => (
              <div 
                key={laptop.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedLaptops.find(l => l.id === laptop.id)
                    ? 'border-gaming-red bg-gaming-red/5 shadow-md'
                    : 'border-gray-200 hover:border-gaming-red hover:shadow-md'
                }`}
                onClick={() => handleSelectLaptop(laptop)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{laptop.name}</h3>
                  <div 
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      selectedLaptops.find(l => l.id === laptop.id)
                        ? 'bg-gaming-red text-white'
                        : 'border border-gray-300'
                    }`}
                  >
                    {selectedLaptops.find(l => l.id === laptop.id) && <Check size={12} />}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-1">{laptop.brand}</p>
                <p className="text-sm text-gray-600">${laptop.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Comparison table */}
        {selectedLaptops.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gaming-dark text-white p-6">
              <h2 className="text-xl font-bold mb-2">Comparison Results</h2>
              <p className="text-gray-300">
                Detailed side-by-side comparison of your selected gaming laptops.
              </p>
            </div>
            
            {/* Selected laptops display */}
            <div className="grid grid-cols-4 border-b">
              <div className="p-4 font-bold border-r"></div>
              {selectedLaptops.map(laptop => (
                <div key={laptop.id} className="p-4 text-center relative">
                  <button 
                    onClick={() => removeLaptop(laptop.id)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                  <img 
                    src={laptop.imageUrl} 
                    alt={laptop.name} 
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-bold">{laptop.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{laptop.brand}</p>
                  <p className="font-medium text-gaming-red">${laptop.price.toLocaleString()}</p>
                </div>
              ))}
              {Array.from({ length: 3 - selectedLaptops.length }).map((_, i) => (
                <div key={i} className="p-4 text-center bg-gray-50 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Select another laptop to compare</p>
                </div>
              ))}
            </div>
            
            {/* Basic specs */}
            <ComparisonSection 
              title="Basic Specifications"
              icon={<Cpu size={18} />}
              rows={[
                { 
                  name: 'Processor', 
                  values: selectedLaptops.map(laptop => laptop.specs.processor) 
                },
                { 
                  name: 'Graphics', 
                  values: selectedLaptops.map(laptop => laptop.specs.gpu) 
                },
                { 
                  name: 'RAM', 
                  values: selectedLaptops.map(laptop => laptop.specs.ram) 
                },
                { 
                  name: 'Storage', 
                  values: selectedLaptops.map(laptop => laptop.specs.storage) 
                },
                { 
                  name: 'Display', 
                  values: selectedLaptops.map(laptop => laptop.specs.display) 
                }
              ]}
            />
            
            {/* Features */}
            <ComparisonSection 
              title="Key Features"
              icon={<Gamepad2 size={18} />}
              rows={selectedLaptops[0]?.features.map((_, featureIndex) => ({
                name: `Feature ${featureIndex + 1}`,
                values: selectedLaptops.map(laptop => 
                  laptop.features[featureIndex] || 'N/A'
                )
              })) || []}
            />
            
            {/* Performance */}
            <ComparisonSection 
              title="Performance"
              icon={<Memory size={18} />}
              rows={[
                {
                  name: 'Gaming Performance',
                  values: selectedLaptops.map(laptop => {
                    const performanceMap: Record<string, string> = {
                      'budget': 'Good for 1080p gaming at medium settings',
                      'mid-range': 'Excellent for 1080p gaming at high settings',
                      'high-end': 'Great for 1440p gaming at high settings',
                      'professional': 'Capable of 4K gaming at high settings'
                    };
                    return performanceMap[laptop.category] || 'N/A';
                  })
                },
                {
                  name: 'Cooling Efficiency',
                  values: selectedLaptops.map(laptop => {
                    const coolingMap: Record<string, string> = {
                      'budget': 'Basic cooling system',
                      'mid-range': 'Enhanced thermal design',
                      'high-end': 'Advanced cooling with multiple heat pipes',
                      'professional': 'Premium thermal solution with liquid metal'
                    };
                    return coolingMap[laptop.category] || 'N/A';
                  })
                }
              ]}
            />
            
            {/* Value */}
            <div className="grid grid-cols-4 border-t">
              <div className="p-4 font-bold border-r bg-gray-50 flex items-center">
                Final Verdict
              </div>
              {selectedLaptops.map(laptop => {
                const verdictMap: Record<string, string> = {
                  'budget': 'Great value for casual gamers',
                  'mid-range': 'Excellent balance of performance and price',
                  'high-end': 'Premium experience for serious gamers',
                  'professional': 'Ultimate performance for professionals and enthusiasts'
                };
                
                return (
                  <div key={laptop.id} className="p-4">
                    <p className="font-medium mb-2">{verdictMap[laptop.category]}</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gaming-red h-2.5 rounded-full" 
                          style={{ 
                            width: `${laptop.rating * 20}%` 
                          }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">{laptop.rating}/5</span>
                    </div>
                  </div>
                );
              })}
              {Array.from({ length: 3 - selectedLaptops.length }).map((_, i) => (
                <div key={i} className="p-4 text-center bg-gray-50"></div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="mb-4 text-gray-400">
              <Gamepad2 size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold mb-2">No Laptops Selected</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Select at least one laptop from the list above to see detailed specifications and comparisons.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

interface ComparisonSectionProps {
  title: string;
  icon: React.ReactNode;
  rows: {
    name: string;
    values: string[];
  }[];
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ title, icon, rows }) => {
  return (
    <div>
      <div className="grid grid-cols-4 border-t border-b bg-gray-50">
        <div className="p-4 font-bold border-r flex items-center">
          <span className="mr-2">{icon}</span>
          {title}
        </div>
        <div className="col-span-3"></div>
      </div>
      
      {rows.map((row, i) => (
        <div key={i} className={`grid grid-cols-4 ${i !== rows.length - 1 ? 'border-b' : ''}`}>
          <div className="p-4 border-r bg-gray-50 font-medium">{row.name}</div>
          {row.values.map((value, j) => (
            <div key={j} className="p-4 text-sm">
              {value}
            </div>
          ))}
          {Array.from({ length: 3 - row.values.length }).map((_, j) => (
            <div key={j} className="p-4 bg-gray-50"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ComparisonPage;