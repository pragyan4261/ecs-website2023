import React from 'react'
import Logo from '../images/logo.png'
import InstagramLogo from '../images/instagram-logo.png'
import FacebookLogo from '../images/facebook-logo.png'
import LinkedInLogo from '../images/linkedin-logo.png'

const Footer = () => {
  return (
    <div className='mt-72 bg-gradient-to-b from-blue-800 to-blue-950 h-96 flex flex-col justify-center items-center space-y-5 text-white'>
      <img src={Logo} alt="" className='w-36 h-16'/>
      <div>
        <h1 className='font-bold text-lg'>Email us:</h1>
        <p>ecs.nitsilchar2024@gmail.com</p>
      </div>
      <div>
        <h1 className='font-bold text-lg mb-2'>Follow us on:</h1>
        <div className='flex space-x-5'>
          <img src={InstagramLogo} alt="" className='h-10 w-10 hover:bg-blue-600' />
          <img src={FacebookLogo} alt=""  className='h-10 w-10 hover:bg-blue-600' />
          <img src={LinkedInLogo} alt=""  className='h-10 w-10' />
        </div>
      </div>
      <div className='h-1 w-[80%] bg-slate-400 rounded-full'></div>
      <div className='flex justify-center items-center'>
        <h1 className='text-center w-[80%]'>© Copyright 2023 All rights reserved ECS NIT Silchar</h1>
      </div>
      
    </div>
  )
}

export default Footer
