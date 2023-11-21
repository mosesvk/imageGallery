import Navbar from '@/components/navbar'
import ImageApiCurrated from './api/pexelsApiCurrated'
import SearchBar from '@/components/SearchBarLayout.js'
export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageApiCurrated /> 
<SearchBar></SearchBar>
    </main>
  )
}
