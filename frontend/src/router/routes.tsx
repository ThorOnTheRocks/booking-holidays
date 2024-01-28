import { createBrowserRouter, Navigate } from 'react-router-dom';
import Registration from '../pages/Registration';
import App from '../App';
import HomePage from '../pages/Home';
import type { RoutesProps } from './routes.types';

const routes: RoutesProps[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '*',
        element: <Navigate to={'/'} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
