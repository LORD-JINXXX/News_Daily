import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Science from './pages/Science';
import Business from './pages/Business';
import Health from './pages/Health';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import Entertainment from './pages/Entertainment';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: 'science',
          element: <Science />,
        },
        {
          path: 'business',
          element: <Business />,
        },
        {
          path: 'health',
          element: <Health />,
        },
        {
          path: 'sports',
          element: <Sports />,
        },
        {
          path: 'technology',
          element: <Technology />,
        },
        {
          path: 'entertainment',
          element: <Entertainment />,
        },
      ],
    },
  ]);

export default router;