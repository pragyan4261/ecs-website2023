import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../components/EventsCarousal'
import Messages from '../components/Messages'
import Gallery from '../components/Gallery'
import Alumni from '../components/Alumni'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import './spectrumCont.css'
const Home = () => {
  return (
    <div className='flex flex-col' style={{ rowGap: '5rem' }}>
      <Navbar home='active' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
      <Hero />
      <div>
        <Link to='/cos'><img  className='w-[40%] h-[30rem] m-auto -mt-20' src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428403/ecs/b0a3db62-abe8-490b-8d35-3c6697aba161_drup1r.jpg" alt="" /></Link>
      </div>
      <div className='cardHome p-[1rem] bg-[#ffffff11]'>
        <Link to='/Spectrum'>Checkout our official Spectrum 10.0 page</Link>
      </div>
      <Events />
      <Messages />
      <Gallery />
      <Alumni />
      <Footer />
    </div>
  )
}

export default Home
