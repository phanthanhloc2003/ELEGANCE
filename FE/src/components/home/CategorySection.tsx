import React from 'react';

interface Category {
  name: string;
  image: string;
  count: string;
}

const categories: Category[] = [
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

export const CategorySection = () => {
  return (
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
  );
};