import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/layouts/Layout";
import { Auth } from "../pages/Auth";
import ProductDetail from "../pages/ProductDetail";
import Order from "../pages/Order";
import CreateProduct from "../pages/admin/CreateProduct";
import { AdminLayout } from "../components/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "auth", element: <Auth /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "order", element: <Order /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "products/create", element: <CreateProduct /> },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;