import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, Plus } from 'lucide-react';
import { Address } from '../types/order';

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [showNewAddress, setShowNewAddress] = useState(false);

  // Mock data
  const addresses: Address[] = [
    {
      id: '1',
      userId: '1',
      fullName: 'John Doe',
      phone: '+84 123 456 789',
      street: '123 Main Street',
      city: 'District 1',
      province: 'Ho Chi Minh City',
      postalCode: '70000',
      isDefault: true
    }
  ];

  const cartSummary = {
    subtotal: 259.98,
    shipping: 0,
    total: 259.98
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Shipping Address
                </h2>
                <button
                  onClick={() => setShowNewAddress(true)}
                  className="inline-flex items-center text-burgundy-600 hover:text-burgundy-700"
                >
                  <Plus className="h-5 w-5 mr-1" />
                  Add New Address
                </button>
              </div>

              <div className="space-y-4">
                {addresses.map((address) => (
                  <label
                    key={address.id}
                    className={`block relative border rounded-lg p-4 cursor-pointer ${
                      selectedAddress === address.id
                        ? 'border-burgundy-500 bg-burgundy-50'
                        : 'border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      checked={selectedAddress === address.id}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{address.fullName}</p>
                        <p className="text-gray-600">{address.phone}</p>
                        <p className="text-gray-600">
                          {address.street}, {address.city}
                        </p>
                        <p className="text-gray-600">
                          {address.province}, {address.postalCode}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">
                <label
                  className={`block relative border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-burgundy-500 bg-burgundy-50'
                      : 'border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <span className="ml-3 font-medium text-gray-900">
                      Credit/Debit Card
                    </span>
                  </div>
                </label>

                <label
                  className={`block relative border rounded-lg p-4 cursor-pointer ${
                    paymentMethod === 'cod'
                      ? 'border-burgundy-500 bg-burgundy-50'
                      : 'border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-gray-400" />
                    <span className="ml-3 font-medium text-gray-900">
                      Cash on Delivery
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {cartSummary.shipping === 0 ? 'Free' : `$${cartSummary.shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${cartSummary.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/order-confirmation')}
                className="w-full mt-6 bg-burgundy-600 text-white py-3 rounded-lg hover:bg-burgundy-700 transition-colors"
              >
                Place Order
              </button>

              <p className="mt-4 text-sm text-gray-500 text-center">
                By placing your order, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;