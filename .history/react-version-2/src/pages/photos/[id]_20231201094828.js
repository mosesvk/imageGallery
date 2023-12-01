// [id].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { SearchQueryContext } from '@/context/mainContext';

const Photo = () => {
  const router = useRouter();
  const { collection } = useContext(SearchQueryContext);

  // Get the photo ID from the route
  const { id } = router.query;

  // Find the selected photo from the collection
  const photo = collection.find((item) => item.id === id);

  useEffect(() => {
    // If the photo is not in the collection, you might want to handle it (e.g., redirect to the main page)
    if (!photo) {
      // Handle the case where the photo is not found
      router.push('/');
    }
  }, [photo, router]);

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {photo && (
        <Image
          src={photo.src.original}
          alt="Photo"
          width={600}
          height={400}
          priority
        />
      )}
    </div>
  );
};

export default Photo;
