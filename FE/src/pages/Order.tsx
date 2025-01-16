import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { CartItem } from '../components/order/CartItem';
import { OrderSummary } from '../components/order/OrderSummary';
import { EmptyCart } from '../components/order/EmptyCart';
import { fetchCartItems, updateCartItem, removeCartItem, Product } from '../feacApi';

const Order = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const items = await fetchCartItems();
      setCartItems(items);
    } catch (error) {
      console.error('Failed to load cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateQuantity = async (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setUpdating(id);
    try {
      await updateCartItem(id, newQuantity);
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error('Failed to update quantity:', error);
    } finally {
      setUpdating(null);
    }
  };

  const handleRemoveItem = async (id: string) => {
    setUpdating(id);
    try {
      await removeCartItem(id);
      setCartItems(items => items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Failed to remove item:', error);
    } finally {
      setUpdating(null);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-burgundy-700" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updating={updating}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                />
              ))}
            </div>

            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;