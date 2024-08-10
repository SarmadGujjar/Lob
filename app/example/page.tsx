import React from 'react'
import Last from '../components/Last'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <main className='flex flex-col gap-5 pt-36 py-20  items-center text-center'>
        <h1 className='text-6xl font-bold'> Lobe <span className='text-custom-green'>Example</span></h1>
        <span className='text-2xl w-[580px] flex'>One tool, endless possibilities. Discover all the machine learning models you can train with Lobe.</span>

      </main>
      <div className='grid grid-cols-2 justify-center gap-16'>

        <main className='flex flex-col items-end gap-3 '>
          <video width="360" height="260" className='' loop autoPlay>
            <source src="Plants.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col bg-white p-4'>
            <h1 className='text-3xl font-semibold'>Plant Species</h1>
            <p className='text-gray-500 w-[350px]'>Train your app to distinguish between different species of plants to help people identify poisonous vegetation.</p>
          </div>
        </main>

        <main className='flex flex-col gap-3'>
          <video width="360" height="260" className='' loop autoPlay>
            <source src="Plants.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col bg-white p-4'>
            <h1 className='text-3xl font-semibold'>Plant Species</h1>
            <p className='text-gray-500 w-[350px]'>Train your app to distinguish between different species of plants to help people identify poisonous vegetation.</p>
          </div>
        </main>

        <main className='flex flex-col items-end gap-3'>
          <video width="360" height="260" className='' loop autoPlay>
            <source src="Plants.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col bg-white p-4'>
            <h1 className='text-3xl font-semibold'>Plant Species</h1>
            <p className='text-gray-500 w-[350px]'>Train your app to distinguish between different species of plants to help people identify poisonous vegetation.</p>
          </div>
        </main>

        <main className='flex flex-col gap-3'>
          <video width="360" height="260" className='' loop autoPlay>
            <source src="Plants.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col bg-white p-4'>
            <h1 className='text-3xl font-semibold'>Plant Species</h1>
            <p className='text-gray-500 w-[350px]'>Train your app to distinguish between different species of plants to help people identify poisonous vegetation.</p>
          </div>
        </main>

        <main className='flex flex-col items-end gap-3'>
          <video width="360" height="260" className='' loop autoPlay>
            <source src="Plants.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col bg-white p-4'>
            <h1 className='text-3xl font-semibold'>Plant Species</h1>
            <p className='text-gray-500 w-[350px]'>Train your app to distinguish between different species of plants to help people identify poisonous vegetation.</p>
          </div>
        </main>

        <main className='flex flex-col gap-3'>
          <video width="360" height="260" className='' loop autoPlay>
            <source src="Plants.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col bg-white p-4'>
            <h1 className='text-3xl font-semibold'>Plant Species</h1>
            <p className='text-gray-500 w-[350px]'>Train your app to distinguish between different species of plants to help people identify poisonous vegetation.</p>
          </div>
        </main>

      </div>
      <div className='my-20'></div>
      <Last />
      <div className='my-20'></div>
      <Footer />
    </div>
  )
}

export default page