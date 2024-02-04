import React from 'react'
import { faArrowRightLong, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLine, faMeta, faSalesforce, faSquareXTwitter, faYahoo } from '@fortawesome/free-brands-svg-icons'

export const Hero = () => {
  return (
    <main className="wrapper flex flex-col md:w-4/5 mx-auto min-h-dvh">
    <nav className="flex justify-between pt-4 mx-auto md:mx-0">
      <header className="flex items-center justify-center text-4xl  ">
        <FontAwesomeIcon icon={faSquarePollVertical} className="text-lime-400"></FontAwesomeIcon>
        <h2 className="font-poppins font-bold ml-2 text-white">Pattern Finder</h2>
      </header>

      <ul className="list-none font-poppins font-bold text-white text-lg hidden md:inline-block">
        <li className="inline-block mr-12 hover:text-slate-400"><a href="#features">Features</a></li>
        <li className="inline-block mr-12 hover:text-slate-400"><a href="#pricing">Pricing</a></li>
        <li className="inline-block mr-12 hover:text-slate-400">
            <a href="#">Log In</a>
        </li>
        <li className="rounded-sm text-white py-[.2em] px-[.5em] inline-block border-2
        hover:cursor-pointer hover:bg-white hover:text-[#0F1C2E]">
            <a href="#">Get Trial</a>
            <FontAwesomeIcon icon={faArrowRightLong} className='ml-2'/>
        </li>
      </ul>
    </nav>

    <div className="hero__content flex flex-col flex-1 justify-center items-center lg:w-6/12 mx-auto min-h-full">
      <h1 className="hero__title font-poppins text-gray-50 text-4xl 2xl:text-7xl font-bold text-center">
      <span className='text-lime-400'>Know your future</span>, make better decisions with predictive analytics. </h1>
      <p className="hero__paragraph text-white font-poppins size mt-4 text-center"> Empowering
        businesses to forecast trends, optimize decision-making, and enhance
        performance. Utilizing advanced algorithms and machine learning techniques,
        our platform extracts insights from data to drive strategic planning and
        operational efficiency. Gain a competitive edge with precise predictions
        tailored to your needs.</p>
        <div className="flex text-base gap-[1em] mt-4">
          <button className="bg-[#4d648d] rounded-full font-poppins px-[1em] py-[.5em] text-white hover:bg-[#7a99cc]">Get Started</button>
          <button className="bg-[#374357] rounded-full font-poppins px-[1em] py-[.5em] text-white hover:bg-[#5b626d]">Learn More</button>
        </div>
    </div>
    <div className='logos__list flex flex-col md:w-6/12 w-10/12 mx-auto pb-16'>
          <h4 className='text-white text-2xl font-poppins font-bold'> Trusted by</h4>
          <div className='flex items-center justify-between mt-4'>
              <FontAwesomeIcon icon={faSalesforce} className='md:h-16 h-8 text-white'/>
              <FontAwesomeIcon icon={faMeta} className='md:h-16 h-8 text-white'/>
              <FontAwesomeIcon icon={faYahoo} className='md:h-16 h-8 text-white'/>
              <FontAwesomeIcon icon={faLine} className='md:h-16 h-8 text-white'/>
              <FontAwesomeIcon icon={faSquareXTwitter} className='md:h-16 h-8 text-white'/>
          </div>
      </div>

  </main>
  )
}
