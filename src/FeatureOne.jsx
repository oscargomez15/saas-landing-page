import React from 'react'
import dashboard from '../assets/saas-dashboard-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush, faGear, faGrip } from '@fortawesome/free-solid-svg-icons'

export const FeatureOne = () => {
  return (
    <section className='min-h-dvh flex items-center justify-center lg:w-6/12 w-10/12 mx-auto pt-32' id='features'>
        <div className='font-poppins text-white flex items-center gap-16 lg:flex-row flex-col'>
            <img src={dashboard} className='lg:w-1/2 rounded-2xl shadow-2xl shadow-white/50'/>
            <div className='flex flex-col gap-6'>
                <h2 className='text-5xl font-bold leading-tight'>Fully Customizable Dashboard</h2>
                <p className='text-lg'> Pattern Finder has been designed meticoulosly to
                be highly personalized by allowing the users to:</p>
                <ul className='flex flex-col gap-4'>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faGrip} size='xl' className='bg-lime-500 rounded-md p-[.4em] w-5'/>
                        <p> Change the Dashboard Layout</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faBrush} size='xl' className='bg-lime-500 rounded-md p-[.4em] w-5'/>
                        <p> Add your branding by changing colors and adding your logo</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FontAwesomeIcon icon={faGear} size='xl' className='bg-lime-500 rounded-md p-[.4em] w-5'/>
                        <p>Add custom widgets designed in-house or from our curated catalog</p>
                    </li>
                    <li></li>
                </ul>
            </div>
        </div>
    </section>
  )
}
