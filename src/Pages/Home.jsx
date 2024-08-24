import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Events from '../components/EventsCarousal'
import Messages from '../components/Messages'
import Gallery from '../components/Gallery'
import Alumni from '../components/Alumni'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import './spectrumCont.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import bgVid from "../images/BackgroundVideo1.mp4"
import bgimg from "../images/digi.png"
const Home = () => {
  const [mobileView,setmobileView]=useState(true)
  // console.log(mobileView)
  return (
    <Parallax pages={2.8}  >
        <ParallaxLayer speed={0.5} offset={0} className='z-10'>
        <div className="gradient z-20"></div>
        <video id='background-video' src={bgVid} autoPlay loop muted={true} className='w-screen z-10 m-auto bg-contain '/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} className='flex flex-col justify-center z-10'> 
         <Navbar home='active' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' className="bg-transparent " />
            <Hero />
            <div className='cardHome p-[1rem] bg-[#ffffff11]'>
              <Link to='/Spectrum' className='z-50'>Checkout our official Spectrum 10.0 page</Link>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.6}  factor={3} className=' pt-48' id='bgImg' style={{ backgroundImage:`  linear-gradient(#060027, #0600276d,#000000),url(${bgimg})`,backgroundSize:"cover",top:"10px",backgroundPosition:"center"}} >
          <ParallaxLayer offset={0.5} speed={0.6} 
          style={{inset:`${mobileView?'30vh 0':'0vh 0'}` }}
          >
              <Events />
          </ParallaxLayer>
        <ParallaxLayer offset={1.01} speed={0.65} >
          <ParallaxLayer offset={0.5} speed={0.6}>
            <Messages />
          </ParallaxLayer>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={3.9}><Gallery /></ParallaxLayer> */}
        <ParallaxLayer offset={1.99} speed={1}><Alumni />
        
        <ParallaxLayer offset={0.79} speed={0} ><Footer /></ParallaxLayer>
        </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
  )
}

export default Home
