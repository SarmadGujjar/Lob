import React from 'react'
import Last from '../components/Last'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div>
            <main className='flex flex-col gap-5 pt-36 py-20  items-center text-center'>
                <h1 className='text-6xl font-bold'> Lobe <span className='text-custom-green'>Tour</span></h1>
                <span className='text-2xl w-[570px] flex'>Build your first machine learning model in ten minutes. No code or experience required.</span>
            </main>
            <div className='my-20'></div>
            <Last />
            <div className='my-20'></div>
            <Footer />
        </div>
    )
}

export default page