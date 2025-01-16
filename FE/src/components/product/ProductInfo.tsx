import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
  colors: string[];
  sizes: string[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  price,
  description,
  colors,
  sizes,
  selectedSize,
  onSizeSelect
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        <p className="text-2xl text-burgundy-700 mt-2">${price}</p>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900">Color</h3>
        <div className="mt-2 flex space-x-2">
          {colors.map((color) => (
            <button
              key={color}
              className="px-3 py-1 border rounded-md hover:border-burgundy-500"
            >
              {color}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900">Size</h3>
          <button className="text-sm text-burgundy-700 hover:text-burgundy-800">
            Size Guide
          </button>
        </div>
        <div className="mt-2 grid grid-cols-5 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeSelect(size)}
              className={`py-2 text-center rounded-md ${
                selectedSize === size
                  ? 'bg-burgundy-700 text-white'
                  : 'border border-gray-300 text-gray-700 hover:border-burgundy-500'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900">Description</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

      <div className="flex space-x-4">
        <button className="flex-1 bg-burgundy-700 text-white py-3 px-6 rounded-md hover:bg-burgundy-800 flex items-center justify-center space-x-2">
          <ShoppingBag className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
        <button className="p-3 border border-gray-300 rounded-md hover:border-burgundy-500">
          <Heart className="h-5 w-5 text-burgundy-700" />
        </button>
      </div>
    </div>
  );
};