import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className='flex justify-evenly'>
      <Link href="/"> 
        <p className={router.pathname === '/' ? 'active-link' : ''}>Home</p>
      </Link>
      <Link href="/city">
      <p className={router.pathname === '/city' ? 'active-link' : ''}>City</p>
      </Link>
      <Link href="/country">
      <p className={router.pathname === '/country' ? 'active-link' : ''}>Country</p>
      </Link>
      <Link href="/food">
      <p className={router.pathname === '/food' ? 'active-link' : ''}>Food</p>
      </Link>
      <Link href="/people">
      <p className={router.pathname === '/people' ? 'active-link' : ''}>People</p>
      </Link>
    </nav>
  );
};