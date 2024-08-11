import React from 'react'
import { VscLightbulb } from "react-icons/vsc";
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { SiWindowsxp } from "react-icons/si";
import Image from 'next/image';
import exportm from '@/app/asset/exportm.jpg'




const Second = () => {
    return (
        <div className='bg-gray-100 w-full'>
            <main className='flex flex-col gap-5 py-10 mx-5 md:mx-72'>
                <h1 className='font-bold md:text-6xl text-4xl flex pt-8 w-full md:w-[630px]'>Machine learning
                    made easy</h1>
                <span className='md:text-2xl text-lg w-full md:w-[660px] text-gray-600'>Lobe has everything you need to bring your machine learning ideas to life. Just show it examples of what
                    you want it to learn, and it automatically trains a custom machine learning model that can be shipped in your app.</span>
            </main>

            <main className='flex justify-center px-5 md:px-32'>
                <Image className='w-full h-full' alt='img' width={900} height={900} src={exportm} />
            </main>
            
            <main className='md:flex md:flex-row flex-col justify-center gap-16 md:gap-32 my-20 mx-5 md:mx-20'>
                <div className='flex  gap-3 md:flex-col flex-row items-start py-5'>
                    <span className='text-white bg-custom-green text-3xl p-2 md:p-4 rounded-2xl'><VscLightbulb /></span>
                    <div className='flex flex-col gap-3 items-start md:flex-col'>
                        <h1 className='text-2xl font-bold'>Easy to Use</h1>
                        <span className='w-[220px] text-gray-600 font-semibold'>
                            Designed to be easy enough for anyone to use. No code or experience required.      </span>
                    </div>
                </div>
                <div className='flex md:flex-col flex-row gap-3 py-5 items-start'>
                    <span className='text-white bg-custom-green text-3xl md:p-4 p-2 rounded-2xl'><RiGitRepositoryPrivateLine /></span>
                    <div className='flex flex-col gap-3 items-start md:flex-col'>

                        <h1 className='text-2xl font-bold'>Free and Private</h1>
                        <span className='w-[220px] text-gray-600 font-semibold'>
                            Train for free on your own computer without uploading your data to the cloud.        </span>
                    </div>

                </div>
                <div className='flex md:flex-col flex-row py-5 gap-3 items-start'>
                    <span className='text-white bg-custom-green text-3xl md:p-4 p-2 rounded-2xl'><SiWindowsxp /></span>
                    <div className='flex flex-col gap-3 items-start md:flex-col'>

                        <h1 className='text-2xl font-bold'>Export Anywhere</h1>
                        <span className='w-[220px] text-gray-600 font-semibold'>
                            Available for Mac and Windows. Export your model and ship it on any platform you choose.        </span>
                    </div>

                </div>
            </main>

            <main>
                <div className='flex flex-col md:mx-72 mx-5 w-full gap-5'>
                    <h1 className='md:text-5xl text-4xl font-semibold'><span className='text-custom-green'>Project</span> Templates</h1>
                    <span className='md:text-2xl text-lg md:w-[600px] w-full text-gray-600'>Lobe will automatically select the right
                        machine learning architecture for your project.Image classification
                        is available now, with more templates coming soon.</span>
                </div>
                <div className='md:grid md:grid-cols-3 flex flex-col gap-10 justify-center py-20 mx-5 md:mx-72'>
                    <main className='bg-white shadow-xl flex flex-col items-center px-3 py-5 rounded-3xl'>
                        <div className='flex my-5 gap-3'>
                            <span className='flex bg-gray-200 rounded-lg flex-col gap-2  pt-4'>
                                <i className='text-xl px-4'><FaCircle /></i>
                                <i className='pb-2 pl-2 text-green-400'><IoRemoveOutline />                </i>
                            </span>
                            <span className='flex flex-col  pt-4 rounded-lg gap-2 bg-gray-200'>
                                <i className='text-xl px-4'><IoTriangle /></i>
                                <i className='pb-2 pl-2 text-green-400'> <IoRemoveOutline />                </i>
                            </span>
                        </  div>
                        <h2 className='text-2xl my-2 font-semibold'>Image Classification</h2>
                        <span className='text-xl'>Label an image based <br />
                            on its content.</span>
                        <button className='text-white text-sm font-bold bg-custom-green rounded-full px-3 py-1 my-8'>AVAILABLE NOW</button>
                    </main>

                    <main className='bg-white shadow-xl flex flex-col items-center px-3 rounded-3xl py-5'>
                        <div className='flex my-4 gap-3'>
                            <span className='flex flex-col pt-5'>
                                <i className='bg-gray-200 p-3 text-xl rounded-xl'><FaCircle /></i>
                                <i className='pl-4'><IoRemoveOutline />               </i>
                            </span>
                            <span className='flex flex-col'>
                                <i className='bg-gray-200 rounded-lg p-3 text-xl' text-xl><IoTriangle /></i>
                                <i className='pl-4'> <IoRemoveOutline />                </i>
                            </span>
                        </  div>
                        <h2 className='text-2xl my-2 font-semibold'>Image Classification</h2>
                        <span className='text-xl'>Label an image based <br />
                            on its content.</span>
                        <button className='text-white text-sm font-bold my-8 bg-gray-300 rounded-full px-3 py-1'>COMING SOON</button>
                    </main>

                    <main className='bg-white shadow-xl flex flex-col items-center rounded-3xl px-3 py-5'>
                        <div className='flex  my-5 gap-3'>
                            <span className='flex flex-col bg-gray-200 p-3 rounded-lg'>
                                <i><IoRemoveOutline />                </i>
                                <i><IoRemoveOutline />                </i>
                                <i><IoRemoveOutline />                </i>
                            </span>
                            <span className='flex flex-col bg-gray-200 p-3 rounded-lg'>
                                <i> <IoRemoveOutline />                </i>
                                <i> <IoRemoveOutline />                </i>
                                <i> <IoRemoveOutline />                </i>
                            </span>
                        </  div>
                        <h2 className='text-2xl my-2 font-semibold'>Image Classification</h2>
                        <span className='text-xl'>Label an image based <br />
                            on its content.</span>
                        <button className='text-white text-sm font-bold my-8 bg-gray-300 rounded-full px-3 py-1'>COMING SOON</button>
                    </main>
                </div>
            </main>
        </div>
    )
}

export default Second