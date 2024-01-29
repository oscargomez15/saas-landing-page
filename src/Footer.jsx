import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='font-poppins text-white bg-[#252525] py-8'>
        <div className='w-10/12 mx-auto flex items-center justify-between border-b-[1px] pb-8'>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faSquarePollVertical} size='xl' className='text-lime-400'/>
                <h2 className='text-2xl font-bold'> Pattern Finder </h2>
            </div>
            <div>
                <h2 className='font-bold'>Site Map</h2>
                <p> <a href="" className='hover:underline'>Home</a> </p>
                <p> <a href="" className='hover:underline'>Features</a> </p>
                <p> <a href="" className='hover:underline'>Log in</a> </p>
            </div>

            <div>
                <h2 className='font-bold'>Other Projects</h2>
                <p><a href="" className='hover:underline'>Portfolio</a> </p>
                <p><a href="" className='hover:underline'>Videogames Ecommerce</a> </p>
                <p><a href="" className='hover:underline'>Hangman</a> </p>
                <p><a href="" className='hover:underline'>Saas Dashboard</a> </p>
            </div>


            <div>
                <h2 className='font-bold'>Socials</h2>
                <p><a href="" className='hover:underline'>Facebook</a> </p>
                <p><a href="" className='hover:underline'>Instagram</a> </p>
                <p><a href="" className='hover:underline'>LinkedIn</a> </p>
                <p><a href="" className='hover:underline'>Github</a> </p>
            </div>
        </div>

        <p className='text-white text-center pt-8'> Copyright. All Rights Reserved. Website has been developed by Oscar Gomez.</p>
    </footer>
  )
}
