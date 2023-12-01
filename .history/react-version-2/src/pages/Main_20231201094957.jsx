// Main.jsx
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { SearchQueryContext } from '@/context/mainContext';

const Main = () => {
  const router = useRouter();
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

  const handleImageClick = (photo) => {
    // Navigate to the [id].js page with the specific photo ID
    router.push(`/photos/${photo.id}?theme=${theme}`);
  };

  return (
    <div className='columns-6'>
      {collection.map((photo) => (
        <div key={photo.id} className='mb-4' onClick={() => handleImageClick(photo)}>
          <Image
            src={`${photo.src.large || photo.src.original}?auto=format&fit=crop`}
            alt={photo.photographer}
            width={photo.width}
            height={photo.height}
            className='max-w-full h-auto'
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Main;
