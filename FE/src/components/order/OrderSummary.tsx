import React from "react";
import { CreditCard, Truck } from "lucide-react";
import { Link } from "react-router-dom";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shipping,
  total,
}) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4 animate-slideInRight">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Order Summary
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link to="/checkout">
          <button className="w-full bg-burgundy-700 text-white py-3 rounded-full hover:bg-burgundy-800 transition-colors flex items-center justify-center gap-2 group">         
              <CreditCard className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
              Proceed to Checkout
          </button>
          </Link>
          <div className="flex items-center justify-center text-sm text-gray-500 mt-4 gap-2">
            <Truck className="h-4 w-4" />
            Free shipping on orders over $200
          </div>
        </div>
      </div>
    </div>
  );
};
