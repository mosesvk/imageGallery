// Main.js
import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchQueryContext } from '@/context/mainContext';

const Main = React.memo(() => {
  const {
    collection,
    theme,
    setTheme,
    themes,
    setSearchInput,
    fetchDataAndSetCollection,
  } = useContext(SearchQueryContext);

  useEffect(() => {
    // Fetch data only on the initial mount
    if (collection.length === 0) {
      // Set a random theme
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      setTheme(randomTheme);

      // Fetch data with an empty search input to get a random set
      setSearchInput('');
      fetchDataAndSetCollection();
    }
  }, []); // Empty dependency array to fetch data only on mount

  return (
    <div className='columns-6'>
      {collection.map((photo) => (
        <div key={photo.id} className='mb-4'>
          <Link href={`/photos/${photo.id}`} passHref>
            <Image
              src={`${photo.src.large || photo.src.original}?auto=format&fit=crop`}
              alt={photo.photographer}
              width={photo.width}
              height={photo.height}
              className='max-w-full h-auto'
              priority
            />
          </Link>
        </div>
      ))}
    </div>
  );
}, (prevProps, nextProps) => {
  // Memoize the component to prevent unnecessary rerenders
  return true;
});

export default Main;
