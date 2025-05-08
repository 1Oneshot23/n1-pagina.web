import { Laptop } from '../types';

export const laptops: Laptop[] = [
  {
    id: 1,
    name: "Predator Helios 300",
    brand: "Acer",
    imageUrl: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1199.99,
    specs: {
      processor: "Intel Core i7-11800H",
      gpu: "NVIDIA GeForce RTX 3060 6GB",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      display: "15.6-inch FHD IPS 144Hz"
    },
    features: [
      "RGB Backlit Keyboard",
      "DTS:X Ultra Audio",
      "AeroBlade 3D Fan Technology",
      "PredatorSense Control Panel"
    ],
    rating: 4.7,
    category: "mid-range",
    isFeatured: true
  },
  {
    id: 2,
    name: "ROG Zephyrus G14",
    brand: "ASUS",
    imageUrl: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1499.99,
    specs: {
      processor: "AMD Ryzen 9 5900HS",
      gpu: "NVIDIA GeForce RTX 3070 8GB",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      display: "14-inch QHD 120Hz"
    },
    features: [
      "AniMe Matrix Display",
      "Dolby Atmos Sound",
      "ErgoLift Hinge Design",
      "Intelligent Cooling"
    ],
    rating: 4.9,
    category: "high-end",
    isNew: true,
    isFeatured: true
  },
  {
    id: 3,
    name: "GF63 Thin",
    brand: "MSI",
    imageUrl: "https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 899.99,
    specs: {
      processor: "Intel Core i5-11400H",
      gpu: "NVIDIA GeForce GTX 1650 4GB",
      ram: "8GB DDR4",
      storage: "512GB NVMe SSD",
      display: "15.6-inch FHD IPS 60Hz"
    },
    features: [
      "Ultra-Thin Bezel Design",
      "Cooler Boost 5 Technology",
      "Dragon Center Software",
      "High-Resolution Audio"
    ],
    rating: 4.2,
    category: "budget",
    isFeatured: true
  },
  {
    id: 4,
    name: "Legion 7i",
    brand: "Lenovo",
    imageUrl: "https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1999.99,
    specs: {
      processor: "Intel Core i9-11980HK",
      gpu: "NVIDIA GeForce RTX 3080 16GB",
      ram: "32GB DDR4",
      storage: "2TB NVMe SSD",
      display: "16-inch QHD IPS 165Hz"
    },
    features: [
      "Legion Coldfront 3.0 Cooling",
      "Corsair iCUE RGB Lighting",
      "Legion TrueStrike Keyboard",
      "Nahimic 3D Audio"
    ],
    rating: 4.8,
    category: "professional",
    isFeatured: true
  },
  {
    id: 5,
    name: "Razer Blade 15",
    brand: "Razer",
    imageUrl: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 2299.99,
    specs: {
      processor: "Intel Core i7-11800H",
      gpu: "NVIDIA GeForce RTX 3070 8GB",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      display: "15.6-inch QHD 240Hz"
    },
    features: [
      "CNC Aluminum Unibody",
      "Vapor Chamber Cooling",
      "Chroma RGB Lighting",
      "THX Spatial Audio"
    ],
    rating: 4.6,
    category: "high-end",
    isNew: true
  },
  {
    id: 6,
    name: "Alienware m15 R6",
    brand: "Dell",
    imageUrl: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1799.99,
    specs: {
      processor: "Intel Core i7-11800H",
      gpu: "NVIDIA GeForce RTX 3070 8GB",
      ram: "16GB DDR4",
      storage: "1TB NVMe SSD",
      display: "15.6-inch FHD 360Hz"
    },
    features: [
      "Cryo-Tech Cooling",
      "AlienFX Lighting",
      "Advanced Alienware Command Center",
      "Killer Wi-Fi 6 AX1650"
    ],
    rating: 4.5,
    category: "high-end"
  },
  {
    id: 7,
    name: "Victus 16",
    brand: "HP",
    imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 849.99,
    specs: {
      processor: "AMD Ryzen 5 5600H",
      gpu: "NVIDIA GeForce GTX 1650 4GB",
      ram: "8GB DDR4",
      storage: "512GB NVMe SSD",
      display: "16.1-inch FHD IPS 60Hz"
    },
    features: [
      "OMEN Gaming Hub",
      "Wide Rear Corner Vent Design",
      "B&O Speakers",
      "HP Fast Charge"
    ],
    rating: 4.0,
    category: "budget"
  },
  {
    id: 8,
    name: "Stealth 15M",
    brand: "MSI",
    imageUrl: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1399.99,
    specs: {
      processor: "Intel Core i7-11375H",
      gpu: "NVIDIA GeForce RTX 3060 6GB",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      display: "15.6-inch FHD IPS 144Hz"
    },
    features: [
      "Ultra Lightweight Design",
      "MSI Center Software",
      "Cooler Boost 5",
      "Thunderbolt 4 Support"
    ],
    rating: 4.3,
    category: "mid-range"
  }
];