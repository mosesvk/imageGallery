import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import ImageApiCurrated from './api/pexelsApiCurrated'
const inter = Inter({ subsets: ['latin'] })
import Tags from '@/components/searchBar'
export default function Home() {
  return (
    <main>
{/* <Navbar />
<ImageApiCurrated /> */}
<Tags></Tags>
    </main>
  )
}
