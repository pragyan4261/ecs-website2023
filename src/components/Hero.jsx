import React from 'react'
import { useState, useEffect } from 'react';
import './Hero.css'

const Hero = () => {
  var typingText = 'NIT SILCHAR';
  const [currText, setcurrText] = useState("");
  var typed = false;
  function delay(millisec) {
    return new Promise(resolve => {
      setTimeout(() => { resolve('') }, millisec);
    })
  }
  async function typing() {
    var i = 0;
    while (i <= typingText.length && typed == false) {
      if (i >= typingText.length) {
        typed = true;
      }
      document.querySelector('.typingText').innerHTML = typingText.substring(0, i);
      await delay(200);
      i++;
    }
  }
  useEffect(
    () => {
      typing();
    }
    , []);
  return (
    <div className='h-[28rem] sm:h-[36rem] lg:h-[40rem]'>
      <div className="flex justify-center items-center flex-col">
        <div className='h-[15rem] sm:h-[16rem]'>
          <div className="h-40 lg:h-80 w-50 flex flex-col  justify-center items-center font-semibold text-xl md:text-2xl lg:text-4xl text-white">
            <div className="text-center mt-36 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">ELECTRONICS & COMMUNICATION <span className="font-bold text-yellow-200">  SOCIETY</span></div>
            <div id="hero" className="text-yellow-200 mt-3 sm:mt-7 text-xl sm:text-3xl lg:text-4xl xl:text-5xl">
              <span className='typingText'></span><span className='blinker'>|</span>
            </div>
          </div>
        </div>

        <div className="w-[80%]">
          <h1 className="text-white mb-3 sm:mt-10 flex justify-center text-xl font-bold sm:text-3xl sm:mb-6 md:mb-10 lg:mt-36 lg:text-4xl">Welcome!</h1>

          <p className=" text-center text-white font-light text-md sm:text-xl md:text-2xl">
            The official website of Electronics and Communication Society, NIT Silchar
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
