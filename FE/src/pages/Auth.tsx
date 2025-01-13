import { useEffect, useState } from "react";
import { z } from "zod";
import { authSchema } from "../schemas/Auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spin, message } from "antd"; // Import Spin từ Ant Design
import { useNavigate } from "react-router-dom";
import {
  useLoginMutation,
  useRegistersMutation,
} from "../apis/services/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../reduxs/features/auth/authSlice";
import { UserResponse } from "../types/userType";

type AuthFormData = z.infer<typeof authSchema>;

export function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const [login] = useLoginMutation();
  const [registers] = useRegistersMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  useEffect(() => {
    reset();
  }, [isLogin, reset]);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const onSubmit = async (data: AuthFormData) => {
    setLoading(true);
    try {
      if (isLogin) {
        const result:UserResponse = await login({
          phone: data.phone,
          password: data.password,
        }).unwrap();
        dispatch(
          setCredentials({
            user: result.user,
            token: result.token,
          })
        );
        navigate("/");
      } else {
        await registers(data).unwrap();
        message.success("Registration successful!");
        setIsLogin(true);
        reset();
      }
    } catch (error: unknown) {
      const err = error as { status?: number };
      if (err?.status === 409) {
        message.error("This phone number is already registered!");
      } else {
        message.error("Incorrect account or password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            {isLogin ? "Sign in to your account" : "Create new account"}
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                {...register("fullName")}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600 font-medium">
                  {errors.fullName.message}
                </p>
              )}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-burgundy-500 focus:ring-burgundy-500"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600 font-medium">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading} // Vô hiệu hóa nút khi đang loading
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-burgundy-700 hover:bg-burgundy-800"
            }`}
          >
            {loading ? <Spin /> : isLogin ? "Sign in" : "Sign up"}
          </button>
        </form>

        <div className="text-center">
          <button
            onClick={toggleAuthMode}
            className="text-sm text-burgundy-700 hover:text-burgundy-800"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
