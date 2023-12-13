import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import InstagramLogo from '../images/instagram-logo.png'
import FacebookLogo from '../images/facebook-logo.png'
import LinkedInLogo from '../images/linkedin-logo.png'

const Footer = () => {
  return (
    <div style={{ color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
      <div className='w-[100%] flex flex-col md:flex-row justify-around space-y-[2rem] items-center md:items-start'>
        <div className='flex flex-col justify-around items-center'>
          <img src={Logo} alt="" className='w-36 h-16' />
          <div>
            <h1>Email us:</h1>
            <p>ecs.nitsilchar2024@gmail.com</p>
          </div>

          <div>
            <h1>Follow us on:</h1>
            <div className='flex flex-row justify-around items-center space-x-[1rem]'>
              <img src={InstagramLogo} alt="" className='h-[2rem] w-[2rem]' />
              <img src={FacebookLogo} alt="" className='h-[2rem] w-[2rem]' />
              <img src={LinkedInLogo} alt="" className='h-[2rem] w-[2rem]' />
            </div>
          </div>

        </div>
        <div className='flex flex-col justify-around items-center'>
          <Link to='/'>Home</Link>
          <Link to='/resourcehub'>Resource Hub</Link>
          <Link to=''>Events</Link>
          <Link to=''>Gallery</Link>
        </div>
        <div className='flex flex-col justify-around items-center'>
          <Link to='/members'>Members</Link>
          <Link to='/developers'>Developers</Link>
          <Link to='/about'>About Us</Link>
          <Link to=''>FAQ</Link>
        </div>
      </div>
      <div>
        <div className='mt-[4rem]'>
          <div className='w-[90vw] h-[2px] bg-[#ffffff]'></div>
          <h1>© Copyright 2023 All rights reserved ECS NIT Silchar</h1>
        </div>
      </div>

    </div>
  )
}

export default Footer 
