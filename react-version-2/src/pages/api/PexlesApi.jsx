'use client';
import React, { useContext, useEffect, useState } from 'react';
import { createClient } from 'pexels';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchQueryContext } from '@/components/searchInputStateContext';





// ... (imports and context)

const PexelsApi = function ({ theme }) {
  const { searchInput } = useSearchQueryContext() || [];
  const [collection, setCollection] = useState([]);
if(theme ==! []){theme = searchInput} 
  const fetchData = async () => {
    try {
      let data;
      let curated = false;
      if (theme === undefined) {
        const client = createClient('RmnyE1ueR0YTPYy3POfjzBavsu1z1gjUiKdA7N2D7KtRtkDStsSIfl5V');
        data = await client.photos.curated({ per_page: 200 }); 
        curated = true;
      } else {
        const client = createClient('RmnyE1ueR0YTPYy3POfjzBavsu1z1gjUiKdA7N2D7KtRtkDStsSIfl5V');
        data = await client.photos.search({ query: searchInput, per_page: 40 });
      }

      const photos = data?.photos || [];

      if (curated) {
        const selectedImages = getRandomImages(photos, 40);
        setCollection(selectedImages);
      } else {
        setCollection(photos);
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchInput, theme]);  

  const getRandomImages = (arr, n) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  // Render the component
  return (
    <div className='columns-6'>
      {collection.map((photo) => (
        <div key={photo.id} className='mb-4'>
          <Link href="/photos/[id]" as={`/photos/${photo.id}`} passHref>
            <Image
              src={`${photo.src.large || photo.src.original}?auto=format&fit=crop`}
              alt={photo.photographer}
              width={photo.width}
              height={photo.height}
              className="max-w-full h-auto"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PexelsApi;
