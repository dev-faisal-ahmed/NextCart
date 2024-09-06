import { Navbar } from '@/components/shared/Navbar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
