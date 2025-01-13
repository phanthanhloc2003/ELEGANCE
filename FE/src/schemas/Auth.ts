import { z } from "zod";

export const authSchema = z.object({
  fullName: z.string().min(1, "Full name is required").optional(), 
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Invalid phone number") 
    .min(10, "Phone number must be 10 digits"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters") 
    .trim(), 
});