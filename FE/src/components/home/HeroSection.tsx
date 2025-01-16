import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-burgundy-900/40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Elegance in Every Stitch
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-100">
            Discover our new collection of timeless pieces crafted for the modern woman
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-burgundy-700 hover:bg-burgundy-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-colors text-sm sm:text-base"
          >
            Shop Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};