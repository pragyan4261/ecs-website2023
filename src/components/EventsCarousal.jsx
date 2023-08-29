import React from 'react'
import Dehleez from '../images/dehleez.png'
import Image1 from '../images/Frame 66.png'
import Image2 from '../images/Frame 65.png'

const Events = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex text-left w-[50%]'>
        <h1 className='mb-5 text-3xl font-semibold'>EVENTS</h1>
        <p className='w-[37rem] hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis et qui eos aspernatur dolorum in ad corporis possimus quod sunt aperiam iusto sint, perferendis illo suscipit magnam expedita laboriosam voluptatibus minima facere dolor distinctio? Commodi vitae maiores blanditiis nemo!</p>
      </div>
      <div className='flex'>
        <img src={Image1} alt="" className='h-[14rem] w-[24rem] relative z-0 '/>
        <img src={Dehleez} alt="" className='h-[16rem]  w-[24rem] relative z-10 -top-6'/>
        <img src={Image2} alt=""  className='h-[14rem]  w-[24rem] relative  z-0'/>
      </div>
    </div>
  )
}

export default Events
