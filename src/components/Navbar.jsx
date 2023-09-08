import React from 'react'
import Logo from '../images/logo.png'
import HamburgerIcon from '../images/hamburger-menu.png'

const Navbar = () => {
  return (
    <div className='flex justify-between pl-7 pr-7 items-center h-20 bg-transparent'>
      <img src={Logo} alt="" className='h-10 w-24' />
      <img src={HamburgerIcon} alt=""  className='h-7 w-7' />
    </div>
  )
}

export default Navbar
