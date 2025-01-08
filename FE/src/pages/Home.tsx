
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const featuredProducts = [
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

const categories = [
  {
    name: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    count: '150+ Products'
  },
  {
    name: 'Tops',
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800',
    count: '200+ Products'
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800',
    count: '100+ Products'
  }
];

export function Home() {
  return (
     <div className="min-h-screen bg-gray-50">
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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                <p className="text-sm text-gray-200 mt-1">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
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

      {/* Newsletter */}
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
    </div>
  );
};
