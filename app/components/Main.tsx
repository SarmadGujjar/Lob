import React from 'react'
import { MdSlowMotionVideo } from "react-icons/md";


const Main = () => {
  return (
    <div className='flex pt-40 justify-center flex-col md:flex-row items-center mx-5 pb-10 gap-10 '>
      <main className='flex flex-col gap-3 text-center md:text-start'>
        <h1 className='md:text-6xl text-4xl font-bold'>Train apps to</h1>
        <h1 className='md:text-6xl text-4xl font-bold'>count reps</h1>
        <span className='md:text-2xl text-lg w-full md:w-[480px] text-gray-500'>Lobe helps you train machine learning  models with a free, easy to use tool.</span>
        <div className='flex mt-3 text-center'>
          <button className='bg-custom-green md:px-6 px-4 text-xl font-semibold py-2 rounded-full text-white'>Download</button>
          <span className='text-xl md:px-6 px-4 pt-1 flex font-semibold text-custom-green'>Watch Tour
            <i className='pt-2 ml-3 text-xl text-custom-green'><MdSlowMotionVideo /></i>
          </span>
        </div>
      </main>
      <main>
        <video width="360" height="500" className='' loop autoPlay>
          <source src="Plants.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </div>
  )
}

export default Main