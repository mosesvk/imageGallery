import Navbar from '@/components/navbar'
import ImageApiCurrated from './api/pexelsApiCurrated'
import Tags from '@/components/searchBar'
export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageApiCurrated /> 
{/* <Tags></Tags> */}
    </main>
  )
}
