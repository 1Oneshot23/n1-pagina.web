export interface Laptop {
  id: number;
  name: string;
  brand: string;
  imageUrl: string;
  price: number;
  specs: {
    processor: string;
    gpu: string;
    ram: string;
    storage: string;
    display: string;
  };
  features: string[];
  rating: number;
  category: 'budget' | 'mid-range' | 'high-end' | 'professional';
  isNew?: boolean;
  isFeatured?: boolean;
}