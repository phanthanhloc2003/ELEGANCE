import React from 'react';
import { Package, X } from 'lucide-react';

interface OrderNotification {
  id: string;
  orderId: string;
  customerName: string;
  total: number;
  timestamp: string;
  isRead: boolean;
}

interface OrderNotificationProps {
  notifications: OrderNotification[];
  onMarkAsRead: (id: string) => void;
  onConfirmOrder: (orderId: string) => void;
}

export const OrderNotification: React.FC<OrderNotificationProps> = ({
  notifications,
  onMarkAsRead,
  onConfirmOrder
}) => {
  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg py-1 z-50">
      <div className="px-4 py-2 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">New Orders</h3>
          <span className="bg-burgundy-100 text-burgundy-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {notifications.filter(n => !n.isRead).length} new
          </span>
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="px-4 py-6 text-center text-gray-500">
            No new notifications
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`px-4 py-3 hover:bg-gray-50 ${
                !notification.isRead ? 'bg-burgundy-50' : ''
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Package className="h-6 w-6 text-burgundy-600" />
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      New order #{notification.orderId}
                    </p>
                    <button
                      onClick={() => onMarkAsRead(notification.id)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    {notification.customerName}
                  </p>
                  <p className="text-sm text-gray-600">
                    Total: ${notification.total.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>
                  {!notification.isRead && (
                    <button
                      onClick={() => onConfirmOrder(notification.orderId)}
                      className="mt-2 text-sm text-white bg-burgundy-600 px-3 py-1 rounded-md hover:bg-burgundy-700"
                    >
                      Confirm Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};