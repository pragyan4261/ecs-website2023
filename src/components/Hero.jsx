import React from 'react'
import './animation.css'

const Hero = () => {
  return (
    <div className='h-[28rem] sm:h-[36rem] lg:h-[40rem]'>
      <div className="flex justify-center items-center flex-col">
        <div className='h-[15rem] sm:h-[16rem]'>
          <div className="h-40 lg:h-80 w-50 flex flex-col  justify-center items-center font-semibold text-xl md:text-2xl lg:text-4xl text-white">
            <div className="text-center mt-36 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">ELECTRONICS & COMMUNICATION <span className="font-bold text-yellow-200">  SOCIETY</span></div>
            <div id="hero" className="text-yellow-200 mt-3 sm:mt-7 text-xl sm:text-3xl lg:text-4xl xl:text-5xl">
              NIT SILCHAR
            </div>
          </div>
        </div>

        <div className="w-[80%]">
          <h1 className="text-white mb-3 sm:mt-10 flex justify-center text-xl font-bold sm:text-3xl sm:mb-6 md:mb-10 lg:mt-36 lg:text-4xl">Welcome!</h1>

          <p className=" text-center text-white font-light text-md sm:text-xl md:text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ex dolores ipsam consectetur laborum dolor ipsa atque omnis, esse maxime molestias, sapiente rerum temporibus at, nobis quaerat voluptates dolorum quae.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
