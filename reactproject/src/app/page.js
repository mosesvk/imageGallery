// import Image from 'next/image'
import './styles/globals.css'
// import ImageApiSet from './api/pexelsApiSetPages.jsx'
import ImageApiCurrated from './api/pexelsApiCurrated.jsx'
export default function Home() {
  return (
    <div className='bg-black'>
    <h1 className='text-white'>Hello</h1>
    <div>
      {/* <ImageApiSet /> */}
      <ImageApiCurrated />
    </div>
    </div>
  )
}
