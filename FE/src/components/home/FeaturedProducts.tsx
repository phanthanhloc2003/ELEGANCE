import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: '1',
    name: 'Classic Burgundy Dress',
    price: 129.99,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800'
  },
  {
    id: '2',
    name: 'Elegant Evening Gown',
    price: 199.99,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800'
  },
  {
    id: '3',
    name: 'Summer Floral Dress',
    price: 89.99,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800'
  },
  {
    id: '4',
    name: 'Cocktail Party Dress',
    price: 149.99,
    rating: 4.8,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800'
  }
];

export const FeaturedProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Collection</h2>
        <Link to="/products" className="text-burgundy-700 hover:text-burgundy-800 font-medium flex items-center">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {featuredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-burgundy-700">
                {product.name}
              </h3>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              <p className="mt-1 text-lg font-medium text-burgundy-700">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};