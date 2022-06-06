import { lazy } from 'react';

const HomePage = lazy(() => import('pages/home'));

export const myRoutes = [
  {
    element: <HomePage />,
    path: '/',
  },
];
