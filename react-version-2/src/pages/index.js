import Navbar from '@/components/navbar';
import ImageApiCurrated from './api/pexelsApiCurrated.jsx';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageApiCurrated />
    </main>
  )
}
