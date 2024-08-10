import Image from 'next/image'
import React from 'react'
import blog1 from '@/app/asset/blog1.png'
import blog3 from '@/app/asset/blog3.jpg'
import blog4 from '@/app/asset/blog4.jpg'
import blog5 from '@/app/asset/blog5.jpg'
import Last from '../components/Last'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div>
            <main className='flex flex-col gap-5 pt-36 py-20  items-center text-center'>
                <h1 className='text-6xl font-bold'> Lobe <span className='text-custom-green'>Blog</span></h1>
                <span className='text-2xl w-[650px] flex'>Read about our newest releases,
                    and get tips on how to create custom machine learning models with Lobe.</span>

            </main>
            <main className='grid grid-cols-2 items-center gap-10 mx-72'>
                <div className='flex flex-col shadow-xl'>
                    <Image alt='img' width={500} height={500} src={blog1} />
                    <main className='flex flex-col bg-white px-4 py-5 gap-3'>
                        <h2 className='text-xl font-bold'>Use your model in Power Platform</h2>
                        <span className='text-lg w-[370px]'>We are excited to annouce a new integration with Microsoft Power Plant</span>
                        <span className='text-gray-400'>Release 15 November 2022</span>
                    </main>
                </div>

                <div className='flex flex-col shadow-xl'>
                    <Image alt='img' width={500} height={500} src={blog1} />
                    <main className='flex flex-col bg-white px-4 py-5 gap-3'>
                        <h2 className='text-xl font-bold'>Use your model in Power Platform</h2>
                        <span className='text-lg w-[370px]'>We are excited to annouce a new integration with Microsoft Power Plant</span>
                        <span className='text-gray-400'>Release 15 November 2022</span>
                    </main>
                </div>

                <div className='flex flex-col shadow-xl'>
                    <Image className='rounded-t-2xl' alt='img' width={500} height={500} src={blog3} />
                    <a href='#' className='flex flex-col bg-white px-4 py-5 gap-3 rounded-b-2xl'>
                        <h2 className='text-xl font-bold'>Use your model in Power Platform</h2>
                        <span className='text-lg w-[370px]'>We are excited to annouce a new integration with Microsoft Power Plant</span>
                        <span className='text-gray-400'>Release 15 November 2022</span>
                    </a>
                </div>

                <div className='flex flex-col shadow-xl'>
                    <Image alt='img' width={500} height={500} src={blog4} />
                    <main className='flex flex-col bg-white px-4 py-5 gap-3'>
                        <h2 className='text-xl font-bold'>Use your model in Power Platform</h2>
                        <span className='text-lg w-[370px]'>We are excited to annouce a new integration with Microsoft Power Plant</span>
                        <span className='text-gray-400'>Release 15 November 2022</span>
                    </main>
                </div>

                <div className='flex flex-col shadow-xl'>
                    <Image alt='img' width={500} height={500} src={blog5} />
                    <main className='flex flex-col bg-white px-4 py-5 gap-3'>
                        <h2 className='text-xl font-bold'>Use your model in Power Platform</h2>
                        <span className='text-lg w-[370px]'>We are excited to annouce a new integration with Microsoft Power Plant</span>
                        <span className='text-gray-400'>Release 15 November 2022</span>
                    </main>
                </div>

                <div className='flex flex-col shadow-xl'>
                    <Image alt='img' width={500} height={500} src={blog1} />
                    <main className='flex flex-col bg-white px-4 py-5 gap-3'>
                        <h2 className='text-xl font-bold'>Use your model in Power Platform</h2>
                        <span className='text-lg w-[370px]'>We are excited to annouce a new integration with Microsoft Power Plant</span>
                        <span className='text-gray-400'>Release 15 November 2022</span>
                    </main>
                </div>

                <div className='flex flex-col shadow-xl'>
                    <Image alt='img' width={500} height={500} src={blog1} />
                    <main className='flex flex-col bg-white px-4 py-5 gap-3'>
                        <h2 className='text-xl font-bold'>Use your model in Power Platform</h2>
                        <span className='text-lg w-[370px]'>We are excited to annouce a new integration with Microsoft Power Plant</span>
                        <span className='text-gray-400'>Release 15 November 2022</span>
                    </main>
                </div>
            </main>
<div className='my-20'></div>
            <Last />
<div className='my-20'></div>
            <Footer />
        </div>
    )
}

export default page