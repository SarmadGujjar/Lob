import React from 'react'

const Label = () => {
  return (
    <div className='flex flex-col my-20'>
      <main className='flex flex-col md:mx-72 mx-5 gap-3'>
        <h1 className='md:text-6xl text-4xl font-bold'>Label, Train, <span className='text-custom-green'>Use</span> </h1>
        <span className='md:text-2xl text-lg w-full md:w-[630px] text-gray-500'>Lobe simplifies the process of machine learning into three easy steps.
          Collect and label your images. Train your model and understand your results.
          Then play, improve, and export your model.</span>
      </main>
      {/*  */}
      <video width="320" height="240" className='w-full' loop autoPlay>
        <source src="Label.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className='flex flex-col md:mx-72 mx-5 gap-3'>
        <h1 className='md:text-5xl text-4xl font-bold'><span className='text-custom-green'>Label</span> your images</h1>
        <span className='md:text-2xl text-lg w-full md:w-[630px] text-gray-500'>Collect bursts using your webcam, or drag in a folder of images from your computer.
          Then quickly label your images to create a machine learning dataset.</span>
      </main>
      {/*  */}
      <video width="320" height="240" className='w-full' loop autoPlay>
        <source src="Train.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className='flex flex-col md:pl-[360px] md:mx-72 mx-5 gap-3'>
        <h1 className='md:text-5xl text-4xl font-bold'><span className='text-custom-green'>Train</span> automatically</h1>
        <span className='md:text-2xl text-lg w-full md:w-[630px] text-gray-500'>Automatically train on your own computer without any setup or configuration. Understand
          the strengths and weaknesses of your model with live visual results.</span>
      </main>
      {/*  */}
      <video width="320" height="240" className='w-full' loop autoPlay>
        <source src="Label.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main className='flex flex-col md:mx-72 mx-5 gap-3'>
        <h1 className='md:text-5xl text-4xl font-bold'><span className='text-custom-green'>Use </span>your model</h1>
        <span className='md:text-2xl text-lg w-full md:w-[630px] text-gray-500'>Use your model with your webcam or images from your computer. Improve your results by
          giving your model feedback on its predictions, then finally export it to your app.</span>
      </main>
    </div>
  )
}

export default Label