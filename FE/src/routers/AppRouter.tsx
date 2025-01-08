import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Home} from '../pages/Home'
import { Layout } from '../components/layouts/Layout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;