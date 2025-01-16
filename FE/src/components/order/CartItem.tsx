import React from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { Product } from '../../feacApi';

interface CartItemProps {
  item: Product;
  updating: string | null;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  updating,
  onUpdateQuantity,
  onRemoveItem
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 animate-slideIn hover:shadow-md transition-shadow">
      <div className="flex items-center gap-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
          <p className="text-gray-600 mt-1">Size: {item.size}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={updating === item.id}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                disabled={updating === item.id}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-4">
              {updating === item.id ? (
                <Loader2 className="h-5 w-5 animate-spin text-burgundy-700" />
              ) : (
                <>
                  <span className="text-burgundy-700 font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};