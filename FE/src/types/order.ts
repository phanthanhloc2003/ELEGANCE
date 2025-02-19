export interface Address {
    id: string;
    userId: string;
    fullName: string;
    phone: string;
    street: string;
    city: string;
    province: string;
    postalCode: string;
    isDefault: boolean;
  }
  
  export interface OrderItem {
    id: string;
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    size: string;
    image: string;
  }
  
  export type OrderStatus = 
    | 'pending'
    | 'confirmed'
    | 'processing'
    | 'shipping'
    | 'delivered'
    | 'cancelled';
  
  export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    status: OrderStatus;
    totalAmount: number;
    shippingAddress: Address;
    paymentMethod: string;
    paymentStatus: 'pending' | 'paid' | 'failed';
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Review {
    id: string;
    orderId: string;
    productId: string;
    userId: string;
    rating: number;
    comment: string;
    images?: string[];
    createdAt: string;
  }