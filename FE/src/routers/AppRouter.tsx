import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {Home} from '../pages/Home'
import { Layout } from '../components/layouts/Layout';
import { Auth } from '../pages/Auth';
import ProductDetail from '../pages/ProductDetail';
import Order from '../pages/Order';
import CreateProduct from '../pages/admin/CreateProduct';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout children={<Outlet />} />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/auth', element: <Auth /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '/admin/products/create', element: <CreateProduct /> },
      { path: '/order', element: <Order /> },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;