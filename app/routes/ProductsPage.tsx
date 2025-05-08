import React from 'react';
import { ArrowRight } from 'lucide-react';

const laptops = [
  {
    id: 1,
    name: "Gaming Laptop Pro",
    price: "$1,299",
    specs: "Intel i7, RTX 3060, 16GB RAM",
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Ultimate Gaming",
    price: "$1,799",
    specs: "AMD Ryzen 9, RTX 3070, 32GB RAM",
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Budget Gamer",
    price: "$899",
    specs: "Intel i5, RTX 3050, 8GB RAM",
    image: "https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const ProductsPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Gaming Laptops</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={laptop.image} 
                alt={laptop.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{laptop.name}</h2>
                <p className="text-red-500 font-bold mb-2">{laptop.price}</p>
                <p className="text-gray-600 mb-4">{laptop.specs}</p>
                <button className="inline-flex items-center text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors">
                  View Details <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;