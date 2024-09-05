import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <main>
      {/* navbar */}

      <Outlet />
    </main>
  );
};
