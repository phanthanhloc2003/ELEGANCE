import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from '../pages/Home'
import { Layout } from '../components/layouts/Layout';
import { Auth } from '../pages/Auth';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/auth', element: <Auth /> },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;