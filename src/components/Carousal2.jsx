import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Dehleez from "../images/glimpse.png"
// import './styles.css'
import './carousal2.css';

const Carousal2 = () => {
    return (
        <div className='w-full'>
            <Swiper
                autoplay={{ delay: 2000 }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 200,
                    depth: 100,
                    modifier: 2.5,
                }}

                modules={[EffectCoverflow, Autoplay]}

                className="swiper_container">
                <SwiperSlide>
                    <img src={Dehleez} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Dehleez} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Dehleez} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Dehleez} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Dehleez} alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Carousal2