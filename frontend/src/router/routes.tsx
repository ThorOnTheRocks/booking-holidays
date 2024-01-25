import { ReactNode } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import HomePage from '../pages/Home';
import Registration from '../pages/Registration';

interface IRoutes {
  path: string;
  element: ReactNode;
}

const routes: IRoutes[] = [
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/search',
    element: (
      <Layout>
        <>Search Page</>
      </Layout>
    ),
  },
  {
    path: '/registration',
    element: (
      <Layout>
        <Registration />
      </Layout>
    ),
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
];

export const router = createBrowserRouter(routes);
