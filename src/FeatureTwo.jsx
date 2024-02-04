import React from 'react'
import graph from '../assets/graph.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faLineChart, faPieChart } from '@fortawesome/free-solid-svg-icons'
import Lottie from 'lottie-react'

export const FeatureTwo = () => {
  return (
    <section className='min-h-dvh flex items-center justify-center lg:w-6/12 w-10/12 mx-auto pt-32'>
    <div className='font-poppins text-white flex items-center gap-16 lg:flex-row flex-col'>
        <Lottie animationData={graph} className=' bg-white rounded-md p-[1em] shadow-2xl shadow-white/50'></Lottie>        
        <div className='flex flex-col gap-6'>
            <h2 className='text-5xl font-bold leading-tight'>Interactive Visualization</h2>
            <p className='text-lg'> Explore data patterns, trends, and insights, as well as customizable
             reporting features for sharing findings with stakeholders. Choose from different techniques such as:</p>
            <ul className='flex flex-col gap-4'>
                <li className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faChartSimple} size='xl' className='bg-cyan-500 rounded-md p-[.4em] w-5'/>
                    <p> Bar Chart </p>
                </li>
                <li className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faPieChart} size='xl' className='bg-cyan-500 rounded-md p-[.4em] w-5'/>
                    <p> Pie Chart </p>
                </li>
                <li className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faLineChart} size='xl' className='bg-cyan-500 rounded-md p-[.4em] w-5'/>
                    <p>Line Chart</p>
                </li>
            </ul>
        </div>
    </div>
</section>
  )
}
