import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { links } from '@/data';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className='bg-white py-3'>
      <section className='container mx-auto grid grid-cols-3 items-center gap-6'>
        <Logo />
        <div className='flex items-center justify-center gap-3'>
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
      </section>
    </nav>
  );
};
