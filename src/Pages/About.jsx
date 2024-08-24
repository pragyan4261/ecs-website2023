import React, { useState } from 'react'
import FAQ from "../components/FAQ"
import Carousal2 from "../components/Carousal2";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const About = () => {

  return (
    <div className='container'>
      <div>
        <Navbar />
        <h1 className='pt-[2rem] text-4xl font-semibold text-white'>KNOW <span className='text-yellow-400 font-extrabold'>ABOUT US</span></h1>
        <div className='flex justify-center align-centre'><Carousal2 /></div>
        <p className='pt-[3rem] flex m-auto w-[90%] text-lg leading-8 mb-[9rem] text-white'>The Electronics & Communication Society is the branch society which represents the department of ECE. The prime purpose of this society is to make the students familiar with the branch. Besides that, a number of exciting events take place under ECS. Starting from the branch Orientation, several events take place including Utkrishtha, the Freshers', the Spectrum that is the annual flagship event, Spectrum Fit for different indoor and outdoor activities and lastly, Dehleez, the farewell.</p>
      </div>
      <div className=''>
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default About