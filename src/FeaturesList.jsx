import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSparkles, faScaleBalanced, faUsersLine, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

export const Features = () => {
  return (
    <section className='flex flex-col lg:w-6/12 w-10/12 mx-auto min-h-dvh gap-36 justify-center items-center pt-64'>
        <h2 className='md:text-7xl text-4xl text-white font-poppins font-thin text-center'>Revolutionize how you make decisions, anticipate trends, and <span className='font-bold'>optimize operations</span></h2>
        <div className='features flex gap-16 flex-wrap justify-center items-center'>
            <article className='bg-[#374357] md:basis-2/3 rounded-3xl flex items-center justify-center shadow-2xl h-48'>
                {/* <Lottie animationData={scale} className='w-[300px]'></Lottie> */}
                <div className='basis-1/3 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faScaleBalanced} className='md:h-16 h-8 text-white bg-lime-400 rounded-md p-4'/>
                </div>
                <div className='flex flex-col justify-between basis-full'>
                    <h3 className='text-white font-poppins font-bold text-2xl mt-4'>Scalability & Performance</h3>
                    <p className='text-white font-poppins mt-2'>
                        Our software is be able to scale horizontally
                        to accommodate growing datasets and increasing computational demands.
                    </p>
                </div>
            </article>

            <article className='bg-[#374357] md:basis-2/3 rounded-3xl flex items-center justify-center shadow-2xl h-48'>
                {/* <Lottie animationData={graph} className='w-[300px]'></Lottie> */}
                <div className='basis-1/3 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className='md:h-16 h-8 text-white bg-cyan-400 rounded-md p-4'/>
                </div>
                <div className='flex flex-col justify-center basis-full'>
                    <h3 className='text-white font-poppins font-bold text-2xl mt-4'>Real-Time Predictions</h3>
                    <p className='text-white font-poppins mt-2'>
                    Allowing users to make predictions on streaming
                    data as it arrives.</p>
                 </div>
            </article>

            <article className='bg-[#374357] md:basis-2/3 rounded-3xl flex items-center justify-center shadow-2xl h-48'>
                {/* <Lottie animationData={data} className='w-[300px]'></Lottie> */}
                <div className='basis-1/3 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faUsersLine} className='md:h-16 h-8 text-white bg-yellow-400 rounded-md p-4'/>
                </div>
                <div className='flex flex-col justify-center basis-full'>
                    <h3 className='text-white font-poppins font-bold text-2xl text-left mt-4'>Data Collection & Integration</h3>
                    <p className='text-white font-poppins mt-2'>
                        Robust predictive analytics that allows the collection, aggregation, and integration of data from various sources.</p>
                 </div>
            </article>

            <article className='bg-[#374357] md:basis-2/3 rounded-3xl flex items-center justify-center shadow-2xl h-48'>
                {/* <Lottie animationData={data} className='w-[300px]'></Lottie> */}
                <div className='basis-1/3 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faHandSparkles} className='md:h-16 h-8 text-white bg-orange-400 rounded-md p-4'/>
                </div>
                <div className='flex flex-col justify-center basis-full'>
                    <h3 className='text-white font-poppins font-bold text-2xl text-left mt-4'>Data Cleaning & Preparation</h3>
                    <p className='text-white font-poppins mt-2'>
                        Tools for cleaning and preprocessing data to ensure its quality and readiness for analysis,.</p>
                 </div>
            </article>
        </div>
    </section>
  )
}
