import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, MapPin, CreditCard, Calendar, Clock } from 'lucide-react';

const OrderConfirmation = () => {
  // Mock order data
  const order = {
    id: 'ORD-123456',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    total: 259.98,
    paymentMethod: 'Credit Card',
    shippingMethod: 'Express Delivery',
    estimatedDelivery: '3-5 business days',
    address: {
      fullName: 'John Doe',
      street: '123 Main Street',
      city: 'District 1',
      province: 'Ho Chi Minh City',
      postalCode: '70000'
    },
    items: [
      {
        id: '1',
        name: 'Classic Burgundy Dress',
        size: 'M',
        quantity: 1,
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400'
      },
      {
        id: '2',
        name: 'Elegant Evening Gown',
        size: 'S',
        quantity: 1,
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Thank You for Your Order!
            </h1>
            <p className="text-gray-600 mt-2">
              Your order has been confirmed and will be shipped soon.
            </p>
          </div>

          <div className="border-t border-b py-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Package className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Order number</p>
                  <p className="font-medium text-gray-900">{order.id}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Order date</p>
                  <p className="font-medium text-gray-900">{order.date}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Order time</p>
                  <p className="font-medium text-gray-900">{order.time}</p>
                </div>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Payment method</p>
                  <p className="font-medium text-gray-900">{order.paymentMethod}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-400 mt-1" />
              <div className="ml-3">
                <h3 className="font-medium text-gray-900">Shipping Address</h3>
                <p className="text-gray-600 mt-1">
                  {order.address.fullName}<br />
                  {order.address.street}<br />
                  {order.address.city}, {order.address.province}<br />
                  {order.address.postalCode}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4">Order Items</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-gray-500">Size: {item.size}</p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium text-gray-900">
                  ${order.total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium text-gray-900">Free</span>
              </div>
              <div className="flex justify-between text-lg font-medium mt-4 pt-4 border-t">
                <span className="text-gray-900">Total</span>
                <span className="text-burgundy-600">${order.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="bg-burgundy-50 rounded-lg p-4 mt-6">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-burgundy-600" />
                <div className="ml-3">
                  <p className="text-burgundy-600 font-medium">
                    Estimated Delivery Time
                  </p>
                  <p className="text-burgundy-500">
                    {order.estimatedDelivery}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to="/orders"
              className="inline-flex items-center px-6 py-3 border border-burgundy-600 rounded-lg text-burgundy-600 hover:bg-burgundy-50"
            >
              View Orders
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg text-white bg-burgundy-600 hover:bg-burgundy-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;