import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SearchQueryContext } from './searchInputStateContext';
export default function Navbar() {
  const router = useRouter();
  const { setSearchInput } = useContext(SearchQueryContext)
const handleButtonClick = (title) => {
  setSearchInput([]);
  if(!title) {
    router.push(`/`)
  } else {
  router.push(`/${title}`)
}
}
  return (
    <nav className='flex justify-evenly'>
<Button onClick={()=>handleButtonClick()} className={router.pathname === "/" ? 'active-link' : ''}>Home</Button>
      <Button onClick={()=>handleButtonClick('city')} className={router.pathname === "/city" ? 'active-link' : ''}>City</Button>
      <Button onClick={()=>handleButtonClick('country')} className={router.pathname === "/country" ? 'active-link' : ''}>Country</Button>
      <Button onClick={()=>handleButtonClick('food')} className={router.pathname === "/food" ? 'active-link' : ''}>Food</Button>
      <Button onClick={()=>handleButtonClick('people')} className={router.pathname === "/people" ? 'active-link' : ''}>People</Button>
    </nav>
  );
};