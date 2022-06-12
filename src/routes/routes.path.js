import { lazy } from 'react';

const HomePage = lazy(() => import('pages/home'));
const ProffessorsPage = lazy(() => import('pages/proffessors'));

export const myRoutes = [
  {
    element: <HomePage />,
    path: '/',
  },
  {
    element: <ProffessorsPage />,
    path: '/professors',
  },
];
