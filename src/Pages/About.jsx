import React from 'react'
import FAQ from "../components/FAQ"
import Carousal2 from "../components/Carousal2";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const About = () => {
  return (
    <div className='bg-gradient-to-b from-blue-900 via-blue-600 to-blue-300'>
      <div>
        <Navbar />
        <h1 className='mt-[9rem] mb-10 text-4xl font-semibold text-white'>KNOW <span className=''>ABOUT US</span></h1>
        <div><Carousal2 /></div>
        <p className='mt-20 flex m-auto w-[90%] text-lg leading-8 mb-[9rem] text-white'>The Electronics & Communication Society is the branch society which represents the department of ECE. The prime purpose of this society is to make the students familiar with the branch. Besides that, a number of exciting events take place under ECS. Starting from the branch Orientation, several events take place including Utkrishtha, the Freshers', the Spectrum that is the annual flagship event, Spectrum Fit for different indoor and outdoor activities and lastly, Dehleez, the farewell.</p>
      </div>
      <div className='mb-[25rem]'>
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default About