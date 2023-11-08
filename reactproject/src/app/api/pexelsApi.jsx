'use client';
import { createClient } from 'pexels';

export default async function FetchPexelsApi() {
    try {
    
const client = createClient('RmnyE1ueR0YTPYy3POfjzBavsu1z1gjUiKdA7N2D7KtRtkDStsSIfl5V');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {...photos});
    }catch(error){
        console.error(error)
    }
   

}
