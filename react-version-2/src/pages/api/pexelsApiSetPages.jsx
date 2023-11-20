'use client';
import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';
import Link from 'next/link';
import Image from 'next/image';
import { getFabUtilityClass } from '@mui/material';

//4 different randomized searches.
//create a search bar wich changes the query state

let query = 'Loading...'
  
async function FetchPexelsApi() {
  const client = createClient('RmnyE1ueR0YTPYy3POfjzBavsu1z1gjUiKdA7N2D7KtRtkDStsSIfl5V');
  const data = await client.photos.search({ query, per_page: 40 });
  console.log(data);
  return data;
}

// function ImageApiSet({ theme }) {
//   const [collection, setCollection] = useState([]);
//  query = theme;
//   useEffect(() => {
//     FetchPexelsApi().then((data) => {
//       const photos = data.photos;
//       setCollection(photos);
//       console.log(photos);
//     });
//   }, []);

  

//   return (
//     <div className='flex flex-wrap justify-evenly'>
//         {collection && (
//           <>
//             {collection.map((photo) => (
//               <div key={photo.id}>
//                 <Link href="/photos/[id]" as={`/photos/${photo.id}`}>
//                     <Image
//                       src={`${photo.src.tiny}?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280`}
//                       alt={photo.photographer}
//                       width={200}  // Set your desired width here
//                       height={200} // Set your desired height here
//                     />
//                 </Link>
//               </div>
//             ))}
//           </>
//         )}
//     </div>
//   );
// }

// export default ImageApiSet;


// ... (import statements)

function ImageApiSet({ theme }) {
  const [collection, setCollection] = useState([]);
  query = theme;

  useEffect(() => {
    FetchPexelsApi().then((data) => {
      const photos = data.photos;
      setCollection(photos);
    });
  }, []);

  return (
    <div className='columns-6'>
      {collection && (
        <>
          {collection.map((photo) => (
            <div key={photo.id} className='mb-4'>
              {/* <Link href="/photos/[id]" as={`/photos/${photo.id}`}> */}
              {/* <Link href={`/photos/${photo.id}`} passHref> */}
              <Link href="/photos/[id]" as={`/photos/${photo.id}`} passHref>
                  <Image
                    src={`${photo.src.tiny}?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=280&w=200`}
                    alt={photo.photographer}
                    width={200}
                    height={200}
                    // height={photo.height * (200 / photo.width)} // Maintain aspect ratio
                    // layout="responsive"
                    className="max-w-full h-auto"
                  />
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ImageApiSet;



// // example phto
// {
//     "id": 2014422,
//     "width": 3024,
//     "height": 3024,
//     "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
//     "photographer": "Joey Farina",
//     "photographer_url": "https://www.pexels.com/@joey",
//     "photographer_id": 680589,
//     "avg_color": "#978E82",
//     "src": {
//       "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
//       "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//       "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
//       "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
//       "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//       "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//       "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//     },
//     "liked": false,
//     "alt": "Brown Rocks During Golden Hour"
//   }