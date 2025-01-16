// Mock API service
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
  description: string;
  available_sizes: string[];
}

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Classic Burgundy Dress",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800",
    size: "M",
    quantity: 1,
    description: "Elegant burgundy dress perfect for formal occasions",
    available_sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Elegant Evening Gown",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
    size: "S",
    quantity: 1,
    description: "Stunning evening gown for special occasions",
    available_sizes: ["S", "M", "L"],
  },
  {
    id: "3",
    name: "Summer Floral Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
    size: "M",
    quantity: 1,
    description: "Light and breezy summer dress with floral pattern",
    available_sizes: ["XS", "S", "M", "L"],
  },
];

export const fetchCartItems = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return MOCK_PRODUCTS;
};

export const updateCartItem = async (
  productId: string,
  quantity: number
): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // In a real app, this would make an API call to update the cart
};

export const removeCartItem = async (productId: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // In a real app, this would make an API call to remove the item
};
