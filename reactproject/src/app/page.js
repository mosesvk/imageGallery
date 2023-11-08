// import Image from 'next/image'
import './styles/globals.css'
import ImageApi from './api/pexelsApi.jsx'
export default function Home() {
  return (
    <div className='bg-black'>
    <h1 className='text-white'>Hello</h1>
    <div>
      <ImageApi />
    </div>
    </div>
  )
}
