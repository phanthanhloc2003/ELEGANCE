import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
  return (
    <div className="text-center py-12">
      <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
      <h2 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-8">Looks like you haven't added any items yet.</p>
      <Link
        to="/"
        className="inline-flex items-center bg-burgundy-700 text-white px-6 py-3 rounded-full hover:bg-burgundy-800 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
};