import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosRequestConfig, AxiosError } from "axios";
import apiClient from "../apis/axios";

export const axiosBaseQuery: BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
  },
  unknown,
  unknown
> = async ({ url, method, data, params }) => {
  try {
    const result = await apiClient({
      url,
      method,
      data,
      params,
      withCredentials: true,
    });
    return { data: result.data };
  } catch (axiosError) {
    const error = axiosError as AxiosError;
    return {
      error: {
        status: error.response?.status || 500,
        data: error.response?.data || error.message,
      },
    };
  }
};
