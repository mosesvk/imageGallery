import { useRouter } from 'next/router';
import Image from 'next/image';
import { useContext, useEffect } from 'react';

const Photo = () => {
  const router = useRouter();

  // Get the photo ID from the route
  const { id, collection } = router.query;


  console.log(JSON.parse(collection));

  // Find the selected photo from the collection
  const photo = collection.find((item) => item.id === id);


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