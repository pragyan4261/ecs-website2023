import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import './styles.css'
import 'swiper/css/autoplay'

const Messages = () => {
  return (
    <>
      <Swiper pagination={{ dynamicBullets: true, clickable: true}} modules={[Pagination, Autoplay]}  autoplay={{delay: 2000}} loop="true" className="mySwiper  bg-gradient-to-b from-blue-800 to-blue-950"> 
          <SwiperSlide  data-swiper-autoplay="2000">
          <div className='w-full flex flex-col justify-center items-center pl-20 pr-20 space-y-7 bg-gradient-to-b from-blue-800 to-blue-950 text-white pt-5 pb-5'>
      <h1 className='text-3xl sm:text-5xl font-semibold'>Messages</h1>
      <div className='w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-blue-500'></div>
      <p className='text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore ad, animi minus consequatur quisquam non libero molestias officia dolorem dignissimos? Sunt, cum, tempore architecto maiores asperiores eius consequatur necessitatibus atque ipsam blanditiis, iste quidem amet reiciendis rerum dicta expedita? Laboriosam consectetur saepe aliquam sequi unde magni alias laudantium id! Laudantium, odit. Velit neque officiis praesentium ab non illum repellat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolor, possimus fuga ducimus exercitationem doloribus neque ipsam totam eos optio.</p>
      <div>
        <h1 className='text-2xl font-semibold'>Dr. Wasim Arif</h1>
        <p className='text-lg mb-5'>Faculty Advisor</p>
      </div>
    </div>
            </SwiperSlide>  
          <SwiperSlide  data-swiper-autoplay="2000">
          <div className='w-full flex flex-col justify-center items-center pl-20 pr-20 space-y-7 bg-gradient-to-b from-blue-800 to-blue-950 text-white pt-5 pb-5'>
      <h1 className='text-3xl sm:text-5xl font-semibold'>Messages</h1>
      <div className='w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-blue-500'></div>
      <p className='text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore ad, animi minus consequatur quisquam non libero molestias officia dolorem dignissimos? Sunt, cum, tempore architecto maiores asperiores eius consequatur necessitatibus atque ipsam blanditiis, iste quidem amet reiciendis rerum dicta expedita? Laboriosam consectetur saepe aliquam sequi unde magni alias laudantium id! Laudantium, odit. Velit neque officiis praesentium ab non illum repellat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolor, possimus fuga ducimus exercitationem doloribus neque ipsam totam eos optio.</p>
      <div>
        <h1 className='text-2xl font-semibold'>Dr. Wasim Arif</h1>
        <p className='text-lg mb-5'>Faculty Advisor</p>
      </div>
    </div>
            </SwiperSlide>  
          <SwiperSlide  data-swiper-autoplay="2000">
          <div className='w-full flex flex-col justify-center items-center pl-20 pr-20 space-y-7 bg-gradient-to-b from-blue-800 to-blue-950 text-white pt-5 pb-5'>
      <h1 className='text-3xl sm:text-5xl font-semibold'>Messages</h1>
      <div className='w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-blue-500'></div>
      <p className='text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore ad, animi minus consequatur quisquam non libero molestias officia dolorem dignissimos? Sunt, cum, tempore architecto maiores asperiores eius consequatur necessitatibus atque ipsam blanditiis, iste quidem amet reiciendis rerum dicta expedita? Laboriosam consectetur saepe aliquam sequi unde magni alias laudantium id! Laudantium, odit. Velit neque officiis praesentium ab non illum repellat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolor, possimus fuga ducimus exercitationem doloribus neque ipsam totam eos optio.</p>
      <div>
        <h1 className='text-2xl font-semibold'>Dr. Wasim Arif</h1>
        <p className='text-lg mb-5'>Faculty Advisor</p>
      </div>
    </div>
            </SwiperSlide>  
           
            
          
           
        
      </Swiper>    
    </>
  )
}

export default Messages
