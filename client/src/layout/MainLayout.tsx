import { Navbar } from '@/components/shared/navbar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
