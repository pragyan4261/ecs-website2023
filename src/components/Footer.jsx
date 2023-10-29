import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import InstagramLogo from '../images/instagram-logo.png'
import FacebookLogo from '../images/facebook-logo.png'
import LinkedInLogo from '../images/linkedin-logo.png'

const Footer = () => {
  return (
    <div className='pt-5 mt-72 h-[25rem] flex flex-col justify-center items-center space-y-5 text-white sm:space-y-3 sm:pt-0 sm:h-[22rem]'>
      <div className='flex flex-col justify-center items-center space-y-5 sm:flex-row sm:justify-between sm:items-center sm:space-x-3 sm:h-44  sm:w-[90vw] sm:pl-20 sm:pr-20  sm:text-left'>
        <div className='flex flex-col justify-center items-center space-y-5 sm:items-start'>
          <img src={Logo} alt="" className='w-36 h-16' />
          <div>
            <h1 className='font-bold text-lg'>Email us:</h1>
            <p>ecs.nitsilchar2024@gmail.com</p>
          </div>

          <div className='-mb-5'>
            <h1 className='font-bold text-lg mb-2'>Follow us on:</h1>
            <div className='flex space-x-5'>
              <img src={InstagramLogo} alt="" className='h-8 w-8 hover:bg-blue-600 hover:scale-110' />
              <img src={FacebookLogo} alt="" className='h-8 w-8 hover:bg-blue-600' />
              <img src={LinkedInLogo} alt="" className='h-8 w-8' />
            </div>
          </div>
        </div>
        <div className='invisible h-0 flex flex-col sm:visible sm:h-full sm:space-y-5 sm:relative sm:-top-10 sm:text-xl'>
          <Link to='/'>Home</Link>
          <Link to='/resourcehub'>Resource Hub</Link>
          <Link to=''>Events</Link>
          <Link to=''>Gallery</Link>
        </div>
        <div className='invisible h-0 flex flex-col sm:visible sm:h-full sm:space-y-5 sm:relative sm:-top-10 sm:text-xl'>
          <Link to='/members'>Members</Link>
          <Link to='/developers'>Developers</Link>
          <Link to='/about'>About Us</Link>
          <Link to=''>FAQ</Link>
        </div>
      </div>
      <div className='flex flex-col space-y-5 justify-center items-center sm:w-[80%]'>
        <div className='relative h-1 w-[90vw] bg-slate-400 rounded-full -top-10 sm:top-10'></div>
        <div className='relative flex justify-center items-center -top-10 sm:top-10'>
          <h1 className='text-center w-[80vw]'>© Copyright 2023 All rights reserved ECS NIT Silchar</h1>
        </div>
      </div>

    </div>
  )
}

export default Footer 
