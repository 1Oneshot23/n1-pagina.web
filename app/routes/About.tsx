import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            TechSolutions was founded in 2018 with a mission to help businesses leverage technology 
            for growth and innovation. Our team of experts brings decades of combined experience 
            in software development, cloud computing, and digital transformation.
          </p>
          <p className="text-lg mb-6">
            We believe in creating solutions that are not just technically sound, but also 
            user-friendly and business-focused. Our client-first approach ensures that we 
            deliver value that aligns with your strategic goals.
          </p>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">John Smith</h3>
                <p className="text-gray-600">CTO</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;