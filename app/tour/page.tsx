import React from 'react'
import Image from 'next/image';
import Last from '../components/Last'
import Footer from '../components/Footer'
import exportm from '@/app/asset/exportm.jpg'

const page = () => {
    return (
        <div>
            <main className='flex flex-col gap-5 pt-36 py-20  items-center text-center'>
                <h1 className='text-6xl font-bold'> Lobe <span className='text-custom-green'>Tour</span></h1>
                <span className='text-2xl w-[570px] flex'>Build your first machine learning model in ten minutes. No code or experience required.</span>
            </main>

            <main className='flex justify-center px-5 md:px-32'>
                <Image className='w-full h-full shadow-2xl' alt='img' width={900} height={900} src={exportm} />
            </main>

            <div className='my-20'></div>
            <Last />
            <div className='my-20'></div>
            <Footer />
        </div>
    )
}

export default page