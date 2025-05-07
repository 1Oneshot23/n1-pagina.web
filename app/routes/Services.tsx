import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom web applications built with the latest technologies to meet your specific business needs.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Responsive design</li>
              <li>E-commerce solutions</li>
              <li>Content management systems</li>
              <li>Progressive web apps</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
            <p className="text-gray-600 mb-4">
              Native and cross-platform mobile applications for iOS and Android devices.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>React Native development</li>
              <li>Flutter applications</li>
              <li>App Store optimization</li>
              <li>Maintenance and support</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive cloud solutions from migration to management and optimization.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>AWS and Azure expertise</li>
              <li>Cloud migration</li>
              <li>Serverless architecture</li>
              <li>DevOps implementation</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
            <p className="text-gray-600 mb-4">
              Transform your data into actionable insights with our analytics solutions.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Business intelligence</li>
              <li>Data visualization</li>
              <li>Predictive analytics</li>
              <li>Big data processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
