import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/layouts/Layout";
import { Auth } from "../pages/Auth";
import ProductDetail from "../pages/ProductDetail";
import Order from "../pages/Order";
import CreateProduct from "../pages/admin/CreateProduct";
import { AdminLayout } from "../components/admin/layout/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ProductList from "../pages/admin/ProductList";
import UserList from "../pages/admin/UserList";
import OrderList from "../pages/admin/OrderList";
import OrderDetail from "../pages/admin/OrderDetail";
import Checkout from "../pages/Checkout";
import OrderConfirmation from "../pages/OrderConfirmation";
import AddAddress from "../pages/AddAddress";
import UserProfile from "../pages/UserProfile";
import UserAddresses from "../pages/UserAddresses";
import UserOrders from "../pages/UserOrders";
import Search from "../pages/Search";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "auth", element: <Auth /> }, 
      { path: "search", element: <Search /> }, 
      { path: "product/:id", element: <ProductDetail /> },
      { path: "order", element: <Order /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-confirmation", element: <OrderConfirmation /> },
      { path: "addresses", element: <UserAddresses /> },
      { path: "add-address", element: <AddAddress /> },
      { path: "profile", element: <UserProfile /> },
      { path: "orders", element: <UserOrders /> },

    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "products/create", element: <CreateProduct /> },
      { path: "products", element: <ProductList /> },
      { path: "users", element: <UserList /> },
      { path: "orders", element: <OrderList /> },
      { path: "orders/:id", element: <OrderDetail /> },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
