import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Dehleez from "../images/glimpse.png"
// import './styles.css'
import './carousal2.css';

const Carousal2 = () => {
    const events_data = [
        { 'name': 'ORIENTATION', 'image': 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701964299/ecs-website/img-orientation_n6p25q.jpg' },
        { 'name': 'FRESHERS', 'image': 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701964299/ecs-website/img-spectrum_jpf9tn.jpg' },
        { 'name': 'DEHLEEZ', 'image': 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701964294/ecs-website/img-dehleez_xfpidm.jpg' },
        { 'name': 'SPECTARE', 'image': 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701964294/ecs-website/img-spectre_iblbgs.jpg' },
    ];
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
                {events_data.map((item) =>
                    <SwiperSlide>
                        <img src={item.image} alt="Loading image..." />
                    </SwiperSlide>)
                }
                {/* <SwiperSlide>
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
                </SwiperSlide> */}

            </Swiper>
        </div>
    )
}

export default Carousal2