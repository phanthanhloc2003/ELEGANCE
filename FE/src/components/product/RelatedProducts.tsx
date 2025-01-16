import React from 'react';

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-sm font-medium text-burgundy-700">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};