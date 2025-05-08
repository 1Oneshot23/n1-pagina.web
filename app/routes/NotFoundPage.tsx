import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gaming-red">404</h1>
        <h2 className="text-3xl font-bold text-gaming-dark mt-6 mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn-primary">
            <Home size={18} className="mr-2" />
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline">
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;