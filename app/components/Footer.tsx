import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";



const Footer = () => {
    return (
        <>
        <div className='mt-20 md:flex hidden md-flex-row  justify-center gap-20 mb-40'>
            <main className='flex flex-col gap-4 font-medium text-gray-500'>
                <h1 className='text-xl pb-2 font-bold text-black'>lobe</h1>
                <span>A product by Microsoft.</span>
                <span>All rights reserved.</span>
                <span>© Microsoft 2021</span>
            </main>

            <main className='flex flex-col gap-4 font-medium text-gray-500'>
                <h1 className='text-xl pb-2 font-semibold text-black'>About</h1>
                <span>Download</span>
                <span>Overview</span>
                <span>Examples</span>
                <span>Blog</span>
            </main>

            <main className='flex flex-col gap-4 font-medium text-gray-500'>
                <h1 className='text-xl pb-2 font-semibold text-black'>General</h1>
                <span>Notice</span>
                <span>License</span>
                <span>Press Inquery</span>
                <span>Press Image</span>
            </main>

            <main className='flex flex-col gap-4 font-medium text-gray-500'>
                <h1 className='text-xl pb-2 font-semibold text-black'>Resources</h1>
                <span>Help</span>
                <span>Tour</span>
                <span>Contact</span>
                <span>Privacy</span>
            </main>

            <main className='flex flex-col gap-4'>
                <ul className='flex gap-3'>
                    <li className='bg-custom-green text-lg rounded-full p-3  text-white'><BiMessageRounded /></li>
                    <li className='bg-custom-green text-lg rounded-full p-3 text-white'><CiTwitter /></li>
                    <li className='bg-custom-green text-lg rounded-full p-3 text-white'><CiYoutube /></li>
                </ul>
            </main>
        </div>

        {/*  */}


{/*  */}
        <div className='mt-20 md:hidden grid grid-cols-2 w-full px-20 gap-20 mb-40'>
           
            <main className='flex flex-col gap-4  font-medium text-gray-500'>
                <h1 className='text-xl pb-2 font-semibold text-black'>About</h1>
                <span>Download</span>
                <span>Overview</span>
                <span>Examples</span>
                <span>Blog</span>
            </main>

            <main className='flex flex-col gap-4 font-medium text-gray-500'>
                <h1 className='text-xl pb-2 font-semibold text-black'>General</h1>
                <span>Notice</span>
                <span>License</span>
                <span>Press Inquery</span>
                <span>Press Image</span>
            </main>

            <main className='flex flex-col gap-4 font-medium text-gray-500'>
                <h1 className='text-xl pb-2 font-semibold text-black'>Resources</h1>
                <span>Help</span>
                <span>Tour</span>
                <span>Contact</span>
                <span>Privacy</span>
            </main>

            <main className='flex gap-4'>
                <ul className='flex flex-col gap-5 pt-5'>
                    <li className='bg-custom-green text-lg rounded-full p-3  text-white'><BiMessageRounded /></li>
                    <li className='bg-custom-green text-lg rounded-full p-3 text-white'><CiTwitter /></li>
                    <li className='bg-custom-green text-lg rounded-full p-3 text-white'><CiYoutube /></li>
                </ul>
            </main>

            <main className='flex flex-col gap-4  w-full font-medium text-gray-500'>
                <h1 className='text-xl pb-2 font-bold text-black'>lobe</h1>
                <span className='w-full flex'>A product by Microsoft.</span>
                <span>All rights reserved.</span>
                <span>© Microsoft 2021</span>
            </main>

        </div>
        </>
    )
}

export default Footer