import * as sheet from '@/components/ui/sheet';

import { cn } from '@/lib/utils';
import { Logo } from '../Logo';
import { links } from '@/data';
import { RiMenu2Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

export const MobileLink = () => {
  const { pathname } = useLocation();

  return (
    <sheet.Sheet>
      <sheet.SheetTrigger className='md:hidden' asChild>
        <RiMenu2Fill size={24} />
      </sheet.SheetTrigger>
      <sheet.SheetContent className='outline-none' side={'left'}>
        <div className='flex items-center justify-between'>
          <Logo />
          <sheet.SheetClose asChild>
            <IoCloseSharp size={24} />
          </sheet.SheetClose>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
          {links.map(({ title, url }) => (
            <Link
              className={cn(
                'rounded-md px-2 py-1 duration-300 hover:bg-neutral-200',
                pathname === url && 'border-primary text-primary',
              )}
              key={url}
              to={url}
            >
              {title}
            </Link>
          ))}
        </div>
      </sheet.SheetContent>
    </sheet.Sheet>
  );
};
