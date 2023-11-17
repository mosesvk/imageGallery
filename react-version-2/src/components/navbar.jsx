import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className='flex justify-evenly'>
      <Link href="/"> 
        <p>Home</p>
      </Link>
      <Link href="/city">
      <p>City</p>
      </Link>
      <Link href="/country">
      <p>Country</p>
      </Link>
      <Link href="/food">
      <p>Food</p>
      </Link>
      <Link href="/people">
      <p>People</p>
      </Link>
    </nav>
  );
};
export default Navbar;


//   return (
//     <nav className='flex justify-evenly'>
//         <Link href="/">
//             <p className={router.pathname === '/' ? 'active' : ''}>Home</p>
//         </Link>
//         <Link href="/city">
//             <p className={router.pathname === '/city' ? 'active' : ''}>City</p>
//         </Link>
//         <Link href="/country">
//             <p className={router.pathname === '/country' ? 'active' : ''}>Country</p>
//         </Link>
//         <Link href="/food">
//             <p className={router.pathname === '/food' ? 'active' : ''}>Food</p>
//         </Link>
//         <Link href="/people">
//             <p className={router.pathname === '/people' ? 'active' : ''}>People</p>
//         </Link>
//     </nav>
//   );
// };