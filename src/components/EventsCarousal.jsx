import React from 'react'
import "swiper/css";
import "swiper/css/zoom";
import Carousal2 from './Carousal2'
const Events = () => {
  return (
    <div id='events-sec' className='flex flex-col justify-center items-center'>
      <div className='flex text-left w-[50%]'>
        <h1 className='mb-5 text-3xl text-[#ffffff] font-semibold' style={{ margin: '0 auto' }}>EVENTS</h1>
        <p className='w-[37rem] hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis et qui eos aspernatur dolorum in ad corporis possimus quod sunt aperiam iusto sint, perferendis illo suscipit magnam expedita laboriosam voluptatibus minima facere dolor distinctio? Commodi vitae maiores blanditiis nemo!</p>
      </div>
      <Carousal2 />
    </div>
  )
}

export default Events
