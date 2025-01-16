import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),
  sku: z.string().min(3, "SKU must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  base_price: z.number().positive("Base price must be positive"),
  currency: z.enum(["VND", "USD"]),
  stock: z.number().int().nonnegative("Stock must be non-negative"),
  status: z.number().int().min(0).max(1),
  images: z.array(z.string()).min(1, "At least one image is required"),
  attributes: z.array(
    z.object({
      name: z.string().min(1),
      values: z.array(z.string()),
    })
  ),
  variants: z.array(
    z.object({
      price: z.number().positive("Variant price must be positive"),
      stock: z.number().int().nonnegative("Variant stock must be non-negative"),
      attributes: z.record(z.string()),
    })
  ),
});
