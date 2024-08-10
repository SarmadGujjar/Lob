import Image from 'next/image';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import ex1 from '@/app/asset/ex1.jpg'
import ex2 from '@/app/asset/ex2.jpg'
import fig1 from '@/app/asset/fig1.png'
import fig2 from '@/app/asset/fig2.png'
import fig3 from '@/app/asset/fig3.png'
import azure from '@/app/asset/azure.png'
import framer from '@/app/asset/framer.png'
import gogle from '@/app/asset/gogle.png'
import ml from '@/app/asset/ml.jpeg'
import tensor from '@/app/asset/tensor.jpeg'
import onnx from '@/app/asset/onnx.png'
import python from '@/app/asset/python.jpeg'
import arduino from '@/app/asset/arduino.png'

const Export = () => {
  return (
    <div className='flex flex-col bg-gray-100 relative w-full'>
      <main className='flex flex-col md:mx-72 mx-5 gap-3 py-20'>
        <h1 className='md:text-6xl text-4xl font-bold'><span className='text-custom-green'>Export</span> Anywhere</h1>
        <span className='text-2xl w-full md:w-[670px]'>When you are done, you can export your model to a variety of industry
          standard formats and ship it on any platform you choose.</span>
        <div className='flex gap-3 mt-2'>
          <a className='text-xl font-semibold text-custom-green' href='#'>Learn More</a>
          <i className='pt-2 text-custom-green'><IoIosArrowForward /></i>
        </div>
      </main>
      <main className=''>
        <div className='absolute left-10 top-40'>
          <figure className='bg-orange-400 p-3 rounded-xl'><Image className='' alt='aws' width={100} height={100} src={fig1} />
          </figure>
        </div>

        <div className='absolute right-20 top-40'>
        <figure><Image className='rounded-[30px]' alt='window' width={100} height={100} src={fig3} />
          </figure>
        </div>

        <div className='absolute right-[750px] top-[330px]'>
          <figure><Image className='rounded-[30px]' alt='azure' width={100} height={100} src={azure} />
          </figure>
        </div>

        <div className='absolute right-64 top-[500px]'>
        <figure><Image className='rounded-[30px]'alt='tensor' width={100} height={100} src={tensor} />
          </figure>
        </div>

        <div className='absolute right-[130px] top-[650px]'>
        <figure><Image className='rounded-[30px]' alt='python' width={100} height={100} src={python} />
          </figure>
        </div>

        <div className='absolute right-[450px] top-[300px]'>
        <figure><Image className='rounded-[30px]' alt='framer' width={100} height={100} src={framer} />
          </figure>
        </div>

        <div className='absolute right-[450px] top-[650px]'>
        <figure><Image className='rounded-[30px]' alt='onnx' width={100} height={100} src={onnx} />
          </figure>
        </div>

        <div className='absolute right-[670px] top-[550px]'>
          <figure><Image className='rounded-[30px]' alt='gogle' width={100} height={100} src={gogle} />
          </figure>
        </div>

        <div className='absolute right-[750px] top-[700px]'>
        <figure><Image className='rounded-[30px]' alt='tensor' width={100} height={100} src={tensor} />
          </figure>
        </div>

        <div className='absolute left-[70px] top-[400px]'>
        <figure><Image className='rounded-[30px]' alt='ml' width={100} height={100} src={ml} />
          </figure>
        </div>

        <div className='absolute left-[400px] top-[500px]'>
        <figure><Image className='rounded-[30px]' alt='arduino' width={100} height={100} src={arduino} />
          </figure>
        </div>

        <div className='absolute left-[200px] top-[700px]'>
        <figure><Image className='rounded-[30px]' alt='fig2' width={100} height={100} src={fig2} />
          </figure>
        </div>
      </main>
      <main className='flex md:flex-row flex-col justify-center px-5 gap-10 mt-80 pt-80 mb-40'>
          <a className='bg-white rounded-[40px] shadow-xl' href='#'>
        <div className='px-10 pt-10 pb-3 flex flex-col'>
            <Image className='rounded-full h-20 w-20' src={ex1} alt='img' height={200} width={200} />
            <p className='w-64 py-5'>As soon as I used Lobe I was completely blown away.
              I do not have to spend days trying to learn machine learning. Simply label some images and boom, it really just works.</p>
            <span className='font-semibold text-lg pt-6 pb-1'>Chris Cachor</span>
            <span className='font-semibold text-gray-500 text-lg'>Software Engineer</span>
        </div>
          </a>
        <a className='bg-white  rounded-[40px] shadow-xl' href='#'>
        <div className='px-10 py-10 flex flex-col'>
        <Image className='rounded-full h-20 w-20' src={ex2} alt='img' height={200} width={200} />
        <p className='w-64 py-5'>We have been using Lobe to quickly process previously untapped sources of data so that we can improve our models
            of nature-dependent tourism to promote better decision-making in our oceans.</p>
          <span className='font-semibold text-lg pt-1 pb-1'>Kate Longley-Wood</span>
          <span className='font-semibold text-gray-500 text-lg'>Ocean Mapper</span>
        </div>
        </a>

        <a className='bg-white  flex rounded-[40px] shadow-xl' href='#'>
        <div className='px-10 py-10 flex flex-col'>
        <Image className='rounded-full h-20 w-20' src={ex1} alt='img' height={200} width={200} />
        <p className='w-64 py-5'>Lobe is so easy and takes so much of the complicated stuff out of machine learning. 
          Even my kid was begging me to sit in front of the computer and categorize my bees for me.</p>
          <span className='font-semibold text-lg pt-6 pb-1'>Sean Cusack</span>
          <span className='font-semibold text-gray-500 text-lg'>Beekeeper</span>
        </div>
        </a>

      </main>

      <main className='flex flex-col md:mx-72 mx-5 gap-3 mb-20'>
            <h1 className='md:text-6xl text-4xl font-bold'>Lobe <span className='text-custom-green'>Examples</span></h1>
            <span className='md:text-2xl text-lg w-full md:w-[650px] text-gray-500'>One tool, endless possibilities. Discover all the things you can train your app to do with Lobe.</span>
        </main>
    </div>
  )
}

export default Export