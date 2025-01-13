export interface UserNoPassword {
  id: number;
  fullName: string;
  phone: string;
  password?: string;
  avatar?: string;
  role?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
