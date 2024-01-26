import { ReactNode } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import Registration from '../pages/Registration';
import App from '../App';

interface IRoutes {
  path: string;
  element: ReactNode;
}

const routes: IRoutes[] = [
  {
    path: '/',
    element: <App />,
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
