import React from 'react'
import Logo from '../images/logo.png'
import HamburgerIcon from '../images/hamburger-icon.png'

const Navbar = () => {
  return (
    <div className='flex justify-between pl-7 pr-7 items-center h-20 bg-blue-800'>
      <img src={Logo} alt="" className='h-10 w-24' />
      <img src={HamburgerIcon} alt=""  className='h-5 w-15' />
    </div>
  )
}

export default Navbar
