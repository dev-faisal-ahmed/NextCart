import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { lazy, Suspense } from 'react';
import { Loader } from './components/shared/Loader';

const HomePage = lazy(() => import('@/pages/home'));
const RegisterPage = lazy(() => import('@/pages/register'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  { path: '/register', element: <RegisterPage /> },
]);

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className='flex h-screen w-full items-center justify-center'>
          <Loader />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};
