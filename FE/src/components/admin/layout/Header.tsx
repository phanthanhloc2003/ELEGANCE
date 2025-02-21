import React, { useState } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { OrderNotification } from '../OrderNotification';

export const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      orderId: 'ORD-123',
      customerName: 'John Doe',
      total: 129.99,
      timestamp: new Date().toISOString(),
      isRead: false
    },
    {
      id: '2',
      orderId: 'ORD-124',
      customerName: 'Jane Smith',
      total: 199.99,
      timestamp: new Date().toISOString(),
      isRead: false
    }
  ]);

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id
        ? { ...notification, isRead: true }
        : notification
    ));
  };

  const handleConfirmOrder = (orderId: string) => {
    // Here you would typically make an API call to confirm the order
    console.log('Confirming order:', orderId);
    // Update the notification status
    handleMarkAsRead(orderId);
    // You could also show a success message or update the order status
  };

  return (
    <header className="h-16 bg-white border-b fixed top-0 right-0 left-64 z-10">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-96 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full"
            >
              <Bell className="h-6 w-6" />
              {notifications.some(n => !n.isRead) && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  {notifications.filter(n => !n.isRead).length}
                </span>
              )}
            </button>

            {showNotifications && (
              <OrderNotification
                notifications={notifications}
                onMarkAsRead={handleMarkAsRead}
                onConfirmOrder={handleConfirmOrder}
              />
            )}
          </div>
          
          <div className="flex items-center space-x-3 border-l pl-4">
            <div className="w-8 h-8 bg-burgundy-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-burgundy-700" />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-700">Admin User</p>
              <p className="text-gray-500">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};