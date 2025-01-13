export interface UserLogin {
  fullName?: string;
  phone: string;
  password: string;
}

export interface User {
  id: string;
  fullName: string;
  phone: string;
  avatar: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  user: User;
  token: string;
}
