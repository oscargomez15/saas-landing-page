import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Pricing = () => {
  return (
    <section id="pricing" className='flex flex-col font-poppins gap-12 items-center justify-center min-h-dvh md:w-4/5 w-10/12 mx-auto py-24'>
        <div className='title__box text-white flex items-center justify-center flex-col'>
        <h2 className='text-4xl md:text-7xl font-bold text-white'> Choose your plan </h2>
        <p className='mt-4 text-lg'> Start making informed decisions today </p>
        </div>
        <div className='flex w-full gap-16 justify-around flex-col md:flex-row'>
            <article className='text-white bg-[#374357] p-[2em] rounded-lg hover:scale-110 transition-all basis-full flex flex-col items-start justify-between gap-4'>
                <h4 className='text-xl font-bold bg-lime-700 text-lime-300 py-[.25em] px-[1em] rounded-md inline-block'>Personal Plan</h4>
                <h2 className='text-4xl font-bold'>$9.99 <span className='text-lg'>/ month</span></h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-lime-300'/>
                        1 User
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-lime-300'/>
                        Import CSV Files</li>
                    <li>
                        <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-lime-300'/>
                        50 GenAI Tokens
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-lime-300'/>
                        24/7 Support
                    </li>
                </ul>
                <button className='w-full px-8 py-2 font-bold text-white rounded-sm border-2 border-white hover:bg-white hover:text-black transition-all'>Select</button>
            </article>

            <article className='text-white bg-[#374357] p-[2em] rounded-lg hover:scale-110 transition-all basis-full flex flex-col items-start justify-between gap-4'>
                <h4 className='text-xl font-bold bg-cyan-700 text-cyan-300 py-[.25em] px-[1em] rounded-md inline-block'>Small Business Plan</h4>
                <h2 className='text-4xl font-bold'>$19.99 <span className='text-lg'>/ month</span></h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-cyan-300'/>
                        5 Users
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-cyan-300'/>
                        Import CSV Files</li>
                    <li>
                        <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-cyan-300'/>
                        250 GenAI Tokens
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-cyan-300'/>
                        24/7 Support
                    </li>
                </ul>
                <button className='w-full px-8 py-2 font-bold text-white rounded-sm border-2 border-white hover:bg-white hover:text-black transition-all'>Select</button>
            </article>

            <article className='text-white bg-[#374357] p-[2em] rounded-lg hover:scale-110 transition-all basis-full flex flex-col items-start justify-between gap-4'>
                <h4 className='text-xl font-bold bg-yellow-700 text-yellow-300 py-[.25em] px-[1em] rounded-md inline-block'>Enterprise Plan</h4>
                <h2 className='text-4xl font-bold'>$29.99 <span className='text-lg'>/ month</span></h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-yellow-300'/>
                        10 Users
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-yellow-300'/>
                        Import CSV Files</li>
                    <li>
                        <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-yellow-300'/>
                        Unlimited GenAI Tokens
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faAsterisk} className='mr-2 text-yellow-300'/>
                        24/7 Support with a Professional Analyst
                    </li>
                </ul>
                <button className='w-full px-8 py-2 font-bold text-white rounded-sm border-2 border-white hover:bg-white hover:text-black transition-all'>Select</button>
            </article>
        </div>
    </section>
  )
}
