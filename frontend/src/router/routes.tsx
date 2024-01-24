import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layouts/Layout';
import { ReactNode } from 'react';

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
    path: '*',
    element: <Navigate to={'/'} />,
  },
];

export const router = createBrowserRouter(routes);
