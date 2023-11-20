// import { useRouter } from 'next/router';
// import Image from 'next/image';

// const Photo = () => {
//     const router = useRouter();
//     const { id } = router.query;
//     const [photo, setPhoto] = useState(null);
  
//     useEffect(() => {
//       const fetchPhotoById = async () => {
//         if (id) {
//           // Modify this function to fetch a single photo by ID
//           const data = await fetchPhotoById(id);
//           setPhoto(data);
//         }
//       };
  
//       fetchPhotoById();
//     }, [id]);
  
//     // ...
  
//     return (
//       <div>
//         <h1>Photo Detail</h1>
//         {photo && (
//           <Image
//             src={`${photo.src.original}?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=800&w=600`}
//             alt="Photo"
//             width={800}
//             height={600}
//           />
//         )}
//       </div>
//     );
//   };
  
//   export default Photo;
  
// pages/photos/[id].js
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const Photo = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [photo, setPhoto] = useState(null);

//   useEffect(() => {
//     const fetchPhotoById = async () => {
//       try {
//         if (id) {
//           // Fetch the specific photo data based on the id from the Pexels API
//           const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
//             headers: {
//               Authorization: 'RmnyE1ueR0YTPYy3POfjzBavsu1z1gjUiKdA7N2D7KtRtkDStsSIfl5V', // Replace with your actual Pexels API key
//             },
//           });
//           const data = await response.json();

//           // Set the photo state with the fetched data
//           setPhoto(data);
//         }
//       } catch (error) {
//         console.error('Error fetching photo:', error);
//       }
//     };

//     fetchPhotoById();
//   }, [id]);

//   return (
//     <div>
//       <h1>Photo Detail</h1>
//       {photo && (
//         <Image
//           src={photo.src.original}
//           alt="Photo"
//           width={800}
//           height={600}
//         />
//       )}
//     </div>
//   );
// };

// export default Photo;


// pages/photos/[id].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Photo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotoById = async () => {
      try {
        if (id) {
          // Fetch the specific photo data based on the id from the Pexels API
          const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
            headers: {
              Authorization: 'RmnyE1ueR0YTPYy3POfjzBavsu1z1gjUiKdA7N2D7KtRtkDStsSIfl5V', // Replace with your actual Pexels API key
            },
          });

          if (response.ok) {
            const data = await response.json();
            // Set the photo state with the fetched data
            setPhoto(data);
          } else {
            console.error('Error fetching photo:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    fetchPhotoById();
  }, [id]);

  return (
    <div>
      <h1>Photo Detail</h1>
      {photo && (
        <Image
          src={photo.src.original}
          alt="Photo"
          width={800}
          height={600}
          priority // Add the priority property
        />
      )}
    </div>
  );
};

export default Photo;
