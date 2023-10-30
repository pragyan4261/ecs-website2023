import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../components/EventsCarousal'
import Messages from '../components/Messages'
import Gallery from '../components/Gallery'
import Alumni from '../components/Alumni'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col' style={{ rowGap: '5rem' }}>
      <Navbar home='active' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
      <Hero />
      <Events />
      <Messages />
      <Gallery />
      <Alumni />
      <Footer />
    </div>
  )
}

export default Home
