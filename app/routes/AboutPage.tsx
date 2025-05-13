import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-6">
            Welcome to GamingTech, your trusted source for gaming laptop information. 
            We help students and gamers find the perfect gaming laptop that fits their 
            needs and budget.
          </p>
          <p className="text-gray-600">
            Our team of gaming enthusiasts carefully reviews and compares different 
            gaming laptops to provide you with accurate and helpful recommendations.
          </p>
          <p className="text-gray-600 mt-4">
          Founded in 2025, our mission is to simplify the laptop selection process 
          for gamers of all levels - from casual players to professional esports competitors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;