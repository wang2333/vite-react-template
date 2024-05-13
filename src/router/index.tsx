import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Layout from '@/layouts';

import AuthGuard from './components/AuthGuard';

const LoginRoute: RouteObject = {
  path: '/login',
  Component: lazy(() => import('@/pages/Login')),
};
const PAGE_NOT_FOUND_ROUTE: RouteObject = {
  path: '*',
  element: <Navigate to="/404" replace />,
};

export default function Router() {
  const asyncRoutes: RouteObject = {
    path: '/',
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Navigate to={'/home'} replace /> },
      {
        path: 'home',
        Component: lazy(() => import('@/pages/Home')),
      },
      {
        path: 'about',
        Component: lazy(() => import('@/pages/About')),
      },
      {
        path: 'game',
        Component: lazy(() => import('@/pages/Game')),
      },
    ],
  };

  const routes = [LoginRoute, asyncRoutes, PAGE_NOT_FOUND_ROUTE];

  const router = createBrowserRouter(routes as unknown as RouteObject[]);

  return <RouterProvider router={router} />;
}
