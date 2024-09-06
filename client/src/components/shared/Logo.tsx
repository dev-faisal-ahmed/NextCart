import { RiSofaFill } from 'react-icons/ri';

export const Logo = () => {
  return (
    <div className='font-title flex items-center gap-2 text-3xl'>
      <span className='rounded-full bg-primary p-2 text-white'>
        <RiSofaFill size={40} />
      </span>
      <span>Next</span>
      <span className='text-primary'>Cart</span>
    </div>
  );
};
