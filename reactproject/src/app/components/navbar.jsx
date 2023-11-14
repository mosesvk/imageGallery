import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    const handleOnClick = (query) => {
        router.push({
            pathname: '/',
            query: { search: query },
        });
    };

  return (
    <nav>
      <Link href="/"> 
        <p onClick={() => handleOnClick('')}>Home</p>
      </Link>
      <Link href="/city">
      <p onClick={() => handleOnClick('City')}>City</p>
      </Link>
      <Link href="/country">
      <p onClick={() => handleOnClick('Country')}>Country</p>
      </Link>
      <Link href="/food">
      <p onClick={() => handleOnClick('Food')}>Food</p>
      </Link>
      <Link href="/people">
      <p onClick={() => handleOnClick('People')}>People</p>
      </Link>
    </nav>
  );
};

export default Navbar;