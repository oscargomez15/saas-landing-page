import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='font-poppins text-white bg-[#252525] py-8'>
        <div className='w-10/12 mx-auto flex sm:flex-row flex-col items-start sm:justify-between justify-center border-b-[1px] pb-8'>
            <div className='flex self-center gap-2'>
                <FontAwesomeIcon icon={faSquarePollVertical} size='xl' className='text-lime-400'/>
                <h2 className='text-2xl font-bold'> Pattern Finder </h2>
            </div>

            <div>
                <h2 className='font-bold'>Site Map</h2>
                <p> <a href="#home" className='hover:underline'>Home</a> </p>
                <p> <a href="#features" className='hover:underline'>Features</a> </p>
                <p> <a href="#" className='hover:underline'>Log in</a> </p>
            </div>

            <div>
                <h2 className='font-bold'>Other Projects</h2>
                <p><a target='_blank' href="https://oscargomez15.github.io/personal-portfolio/" className='hover:underline'>Portfolio</a> </p>
                <p><a target='_blank' href="https://oscargomez15.github.io/pixelworldecommerce/" className='hover:underline'>Videogames Ecommerce</a> </p>
                <p><a target='_blank' href="https://oscargomez15.github.io/hangman/" className='hover:underline'>Hangman</a> </p>
            </div>

            <div>
                <h2 className='font-bold'>Socials</h2>
                <p><a target="_blank" href="https://www.instagram.com/oscarglopez98/" className='hover:underline'>Instagram</a> </p>
                <p><a target="_blank" href="https://www.linkedin.com/in/oscargomez1998/" className='hover:underline'>LinkedIn</a> </p>
                <p><a target="_blank" href="https://github.com/oscargomez15" className='hover:underline'>Github</a> </p>
            </div>
        </div>

        <p className='text-white text-center pt-8'> Copyright. All Rights Reserved. Website has been developed by Oscar Gomez.</p>
    </footer>
  )
}
