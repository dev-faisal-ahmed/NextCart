import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-3'>
      <h2 className='text-base'>
        Opp&apos;s the page you have requested does not exist
      </h2>
      <h3 className='text-5xl font-semibold'>404</h3>
      <Link to={'/'} className='mt-3'>
        <Button>Go To Home</Button>
      </Link>
    </section>
  );
}
