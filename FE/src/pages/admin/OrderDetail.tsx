import React from "react";
import { ArrowLeft, Package, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderDetail = () => {
//   const { id } = useParams();
  const order = {
    id: "#ORD-001",
    date: "2024-03-20 15:30",
    status: "Processing",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+84 123 456 789",
    },
    shipping: {
      address: "123 Main St",
      city: "Ho Chi Minh City",
      country: "Vietnam",
      method: "Express Delivery",
    },
    payment: {
      method: "Credit Card",
      status: "Paid",
      total: "1,290,000 VND",
    },
    items: [
      {
        id: "1",
        name: "Áo thun nam",
        price: "120,000 VND",
        quantity: 2,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      },
      // Add more items
    ],
  };

  const steps = [
    {
      icon: Package,
      label: "Order Placed",
      date: "2024-03-20 15:30",
      completed: true,
    },
    {
      icon: Truck,
      label: "Processing",
      date: "2024-03-20 16:45",
      completed: true,
    },
    { icon: Truck, label: "Shipped", date: null, completed: false },
    { icon: CheckCircle, label: "Delivered", date: null, completed: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/admin/orders"
            className="text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Order {order.id}</h1>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Cancel Order
          </button>
          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover:bg-burgundy-700">
            Update Status
          </button>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Order Status</h2>
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.completed
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-sm font-medium text-gray-900">
                    {step.label}
                  </div>
                  {step.date && (
                    <div className="text-xs text-gray-500">{step.date}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Customer Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Customer</h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-900">{order.customer.name}</p>
            <p className="text-sm text-gray-500">{order.customer.email}</p>
            <p className="text-sm text-gray-500">{order.customer.phone}</p>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping</h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-900">{order.shipping.method}</p>
            <p className="text-sm text-gray-500">{order.shipping.address}</p>
            <p className="text-sm text-gray-500">
              {order.shipping.city}, {order.shipping.country}
            </p>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Payment</h2>
          <div className="space-y-3">
            <p className="text-sm text-gray-900">{order.payment.method}</p>
            <p className="text-sm text-gray-500">
              Status: {order.payment.status}
            </p>
            <p className="text-sm font-medium text-gray-900">
              Total: {order.payment.total}
            </p>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium text-gray-900">Order Items</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {order.items.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-lg object-cover"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {parseInt(item.price.replace(/[^0-9]/g, "")) *
                      item.quantity}{" "}
                    VND
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
