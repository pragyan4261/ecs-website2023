import React from 'react'
import  Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../components/EventsCarousal'
import Messages from '../components/Messages'
import Gallery from '../components/Gallery'
import Alumni from '../components/Alumni'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Hero/>
      <Events/>
      <Messages/>
      <Gallery/>
      <Alumni/>
      <Footer/>
    </div>
  )
}

export default Home
