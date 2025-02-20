import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, Star } from 'lucide-react';
import { Order, OrderStatus } from '../types/order';
import { ReviewForm } from '../components/order/ReviewForm';

const UserOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Mock orders data
  const orders: Order[] = [
    {
      id: 'ORD-123456',
      userId: '1',
      items: [
        {
          id: '1',
          productId: '1',
          productName: 'Classic Burgundy Dress',
          quantity: 1,
          price: 129.99,
          size: 'M',
          image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400'
        }
      ],
      status: 'delivered',
      totalAmount: 129.99,
      shippingAddress: {
        id: '1',
        userId: '1',
        fullName: 'John Doe',
        phone: '+84 123 456 789',
        street: '123 Main Street',
        city: 'District 1',
        province: 'Ho Chi Minh City',
        postalCode: '70000',
        isDefault: true
      },
      paymentMethod: 'card',
      paymentStatus: 'paid',
      createdAt: '2024-03-20T10:00:00Z',
      updatedAt: '2024-03-20T10:00:00Z'
    }
  ];

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return Package;
      case 'shipping':
        return Truck;
      case 'delivered':
        return CheckCircle;
      default:
        return Package;
    }
  };

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'confirmed':
        return 'text-blue-600 bg-blue-100';
      case 'processing':
        return 'text-purple-600 bg-purple-100';
      case 'shipping':
        return 'text-indigo-600 bg-indigo-100';
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const handleReviewSubmit = (data: { rating: number; comment: string; images: string[] }) => {
    console.log('Submitting review:', {
      orderId: selectedOrder,
      productId: selectedProduct,
      ...data
    });
    setShowReviewForm(false);
    setSelectedOrder(null);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => {
            const StatusIcon = getStatusIcon(order.status);
            const statusColor = getStatusColor(order.status);

            return (
              <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Order #{order.id}</p>
                    <p className="text-sm text-gray-500">
                      Placed on {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full ${statusColor}`}>
                    <StatusIcon className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium capitalize">
                      {order.status}
                    </span>
                  </div>
                </div>

                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center py-4 border-t">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.productName}
                      </h3>
                      <p className="text-gray-500">Size: {item.size}</p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-burgundy-600 font-medium">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {order.status === 'delivered' && (
                      <button
                        onClick={() => {
                          setSelectedOrder(order.id);
                          setSelectedProduct(item.productId);
                          setShowReviewForm(true);
                        }}
                        className="ml-4 inline-flex items-center px-4 py-2 border border-burgundy-600 rounded-lg text-burgundy-600 hover:bg-burgundy-50"
                      >
                        <Star className="h-4 w-4 mr-2" />
                        Write Review
                      </button>
                    )}
                  </div>
                ))}

                <div className="mt-6 flex items-center justify-between pt-6 border-t">
                  <div className="text-gray-500">
                    Total Amount: <span className="font-medium text-gray-900">
                      ${order.totalAmount.toFixed(2)}
                    </span>
                  </div>
                  <Link
                    to={`/orders/${order.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-white bg-burgundy-600 hover:bg-burgundy-700"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showReviewForm && (
        <ReviewForm
          orderId={selectedOrder!}
          productId={selectedProduct!}
          onSubmit={handleReviewSubmit}
          onClose={() => {
            setShowReviewForm(false);
            setSelectedOrder(null);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
};

export default UserOrders;