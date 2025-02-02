// Main.jsx
import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchQueryContext } from '@/context/mainContext';

const Main = () => {
  const {
    collection,
    theme,
    setTheme,
    themes,
    setSearchInput
  } = useContext(SearchQueryContext);

  useEffect(() => {
    // Check if collection is empty, then fetch data
    if (collection.length === 0) {
      // Set a random theme
      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      setTheme(randomTheme);

      // Fetch data with an empty search input to get a random set
      setSearchInput('');
    }
  }, [collection, themes, setTheme, setSearchInput]);

  return (
    <div className='columns-6'>
      {collection.map((photo) => (
        <Link
          key={photo.id}
          href={`/photos/${photo.id}?theme=${theme}`}
          passHref
        >
          <a>
            <div className='mb-4'>
              <Image
                src={`${photo.src.large || photo.src.original}?auto=format&fit=crop`}
                alt={photo.photographer}
                width={photo.width}
                height={photo.height}
                className='max-w-full h-auto'
                priority
              />
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Main;
