export interface ProductAttribute {
    name: string;
    values: string[];
  }
  
  export interface ProductVariant {
    price: number;
    stock: number;
    attributes: Record<string, string>;
  }
  
  export interface ProductFormData {
    name: string;
    sku: string;
    description: string;
    base_price: number;
    currency: 'VND' | 'USD';
    stock: number;
    status: number;
    images: string[];
    attributes: ProductAttribute[];
    variants: ProductVariant[];
  }