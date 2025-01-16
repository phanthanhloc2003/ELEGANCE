import React from 'react';

export const Newsletter = () => {
  return (
    <div className="bg-burgundy-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest collections, exclusive offers, and fashion tips.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-6 py-3 border-gray-300 focus:ring-burgundy-500 focus:border-burgundy-500"
            />
            <button
              type="submit"
              className="bg-burgundy-700 text-white px-6 py-3 rounded-full hover:bg-burgundy-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};