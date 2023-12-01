// Photo.js
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect } from 'react';

const Photo = () => {
  const router = useRouter();

  // Get the photo ID from the route
  const { id } = router.query;

  useEffect(() => {
    // If the photo ID is not present, you might want to handle it (e.g., redirect to the main page)
    if (!id) {
      // Handle the case where the photo ID is not found
      router.push('/');
    }
  }, [id, router]);

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {id && (
        <Image
          src={`/path/to/your/images/${id}.jpg`} // Replace with the actual path to your images
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
