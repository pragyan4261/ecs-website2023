import React from 'react'
import { useState } from 'react';
import Logo from '../images/logo.png'
import HamburgerIcon from '../images/hamburger-menu.png'
import { Link as LinkRoute } from 'react-router-dom'
import { Link } from "react-router-dom"
const NavLink = (props) => {
  return (
    <LinkRoute to={props.dest} class='uppercase font-sans text-[1rem] font-[700] tracking-[0.1rem] text-center text-white'>{props.text}</LinkRoute>
  );
}
const Navbar = (props) => {
  const navs_left = [{ text: 'events', type: 'route', dest: props.events === 'active' ? '#' : '/events' }, { text: 'feed', type: 'route', dest: props.feed === 'active' ? '#' : '/feed' }, { text: 'about us', type: 'route', dest: props.about === 'active' ? '#' : '/about' }];
  const navs_right = [{ text: 'members', type: 'route', dest: props.members === 'active' ? '#' : '/members' }, { text: 'developers', type: 'route', dest: props.developers === 'active' ? '#' : '/developers' }, { text: 'faq', type: 'route', dest: props.about === 'active' ? '#' : '/about' }];
  const [mobileMenu, setMenu] = useState('200%');
  return (
    <div className='bg-transparent'>
      <div className='flex visible justify-between pl-[1rem] pr-[1rem] h-[5rem] items-center md:invisible md:h-0'>
        <img src={Logo} alt="" className='h-10 w-24' />
        <img src={HamburgerIcon} alt="" className='h-7 w-7' onClick={() => mobileMenu === '200%' ? setMenu('90%') : setMenu('200%')} />
      </div>
      <div className='flex flex-col bg-[#000055dd] justify-between items-center p-[1rem] w-[50%] md:invisible md:h-0' style={{ zIndex: '5', backdropFilter: 'blur(2px)', position: 'absolute', transform: `translateX(${mobileMenu})`, transition: '500ms ease' }}>
        {navs_left.map((item) => <NavLink text={item.text} type={item.type} dest={item.dest} />)}
        {navs_right.map((item) => <NavLink text={item.text} type={item.type} dest={item.dest} />)}
      </div>
      <div className='invisible flex justify-around pl-7 pr-7 items-center h-0 md:visible md:h-[5rem]'>
        <div className='flex justify-between items-center w-[80%] z-4'>
          {navs_left.map((item) => <NavLink text={item.text} type={item.type} dest={item.dest} />)}
          <Link to="/"><img src={Logo} alt="" className='h-0 w-0 md:h-10 md:w-24' /></Link>
          {navs_right.map((item) => <NavLink text={item.text} type={item.type} dest={item.dest} />)}
        </div>
      </div>
    </div>
  )
}

export default Navbar