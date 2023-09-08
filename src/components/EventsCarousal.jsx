import React from 'react'
import Dehleez from '../images/dehleez.png'
import Image1 from '../images/Frame 66.png'
import Image2 from '../images/Frame 65.png'

const Events = () => {
  return (
    <div className='flex flex-col  w-full justify-center items-center md:flex-row'>
      <div className='flex flex-col mb-20 md:text-left'>
        <h1 className='text-3xl font-semibold md:pl-20 md:mb-5 md:mt-5'>EVENTS</h1>
        <p className='w-full h-0 invisible md:visible md:pl-20 md:w-[80%] text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis et qui eos aspernatur dolorum in ad corporis possimus quod sunt aperiam iusto sint, perferendis illo suscipit magnam expedita laboriosam voluptatibus minima facere dolor distinctio? Commodi vitae maiores blanditiis nemo!</p>
      </div>
      <div className='flex w-full justify-center items-center -mt-16 pl-28 md:pl-20 md:mt-0 md:pr-20 '>
        <img src={Image1} alt="" className='h-[14rem] w-[13rem] sm:h-[15rem] sm:w-[14rem] md:h-[20rem] md:w-[19rem] relative z-0 left-[4.3rem]'/>
        <img src={Dehleez} alt="" className='h-[16rem]  w-[13rem] sm:h-[17rem] sm:w-[14rem] md:h-[22rem] md:w-[19rem] relative z-10 -left-[3.7rem]'/>
        <img src={Image2} alt=""  className='h-[14rem]  w-[13rem] sm:h-[15rem] sm:w-[14rem] md:h-[20rem] md:w-[19rem] relative  z-0 right-[12rem]'/>
      </div>
    </div>
  )
}

export default Events
