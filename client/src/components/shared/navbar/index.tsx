import { cn } from '@/lib/utils';
import { Logo } from '../Logo';
import { links } from '@/data';
import { Button } from '@/components/ui/button';
import { MobileLink } from './MobileLink';
import { useGlobalContext } from '@/context';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { pathname } = useLocation();
  const { state } = useGlobalContext();

  return (
    <nav className='bg-white py-3'>
      <section className='container mx-auto grid grid-cols-[1fr_auto] items-center gap-6 px-6 md:grid-cols-3'>
        <div className='flex items-center gap-4'>
          <MobileLink />
          <Logo />
        </div>
        <div className='hidden items-center justify-center gap-3 md:flex'>
          {links.map(({ title, url }) => (
            <Link
              className={cn(
                'rounded-md px-3 py-1',
                pathname === url && 'bg-blue-100 font-semibold text-primary',
              )}
              key={url}
              to={url}
            >
              {title}
            </Link>
          ))}
        </div>

        <div className='flex items-center justify-end gap-3'>
          {state.user ? (
            <div className='flex items-center justify-center'></div>
          ) : (
            // no user show login button
            <Link to={'/login'}>
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </section>
    </nav>
  );
};
