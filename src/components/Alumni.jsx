import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
// import PersonCard from "../cards/PersonCard";
// import { useState, useEffect, useRef } from "react";
// import alumni from "../images/alumni.svg";
import "./alumni.css";
import "./styles.css"
import { Zoom, Autoplay, Pagination, Navigation } from "swiper/modules";
const Carousel = () => {
  const imgs = [
    { sl: 1, name: "Alumni1", designation: "designation1", id: "card-1" },
    { sl: 2, name: "Alumni2", designation: "designation2", id: "card-2" },
    { sl: 3, name: "Alumni3", designation: "designation3", id: "card-3" },
    { sl: 4, name: "Alumni4", designation: "designation4", id: "card-4" },
    { sl: 5, name: "Alumni5", designation: "designation5", id: "card-5" },
    { sl: 6, name: "Alumni6", designation: "designation6", id: "card-6" },
  ];
  // const imgs = [{
  //   img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg',
  //   name: 'Person',
  //   designation: 'designation',
  //   fb: '',
  //   insta: '',
  //   linkedin: ''
  // },
  // {
  //   img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg',
  //   name: 'Person',
  //   designation: 'designation',
  //   fb: '',
  //   insta: '',
  //   linkedin: ''
  // },
  // {
  //   img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg',
  //   name: 'Person',
  //   designation: 'designation',
  //   fb: '',
  //   insta: '',
  //   linkedin: ''
  // },
  // {
  //   img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg',
  //   name: 'Person',
  //   designation: 'designation',
  //   fb: '',
  //   insta: '',
  //   linkedin: ''
  // },
  // {
  //   img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg',
  //   name: 'Person',
  //   designation: 'designation',
  //   fb: '',
  //   insta: '',
  //   linkedin: ''
  // }
  // ];

  return (
    <div
      style={{
        margin: "0 auto",
        height: "fit-content",
      }}
      className="w-[100%] sm:w-[75%] md:w-[75%] overflow-hidden"
    >
      <h1 className="text-[1.9rem]">OUR NOTABLE ALUMNI</h1>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Zoom, Autoplay, Pagination, Navigation]}
        spacebetween={100}
        slidesPerView={3}
        loop={true}
        className="alumniSwiper"
      >
        <div className="slider">
          <div
            className="flex"
            style={{ width: "34rem", whiteSpace: "nowrap" }}
          >
            <div
              style={{
                margin: "0 auto",
                overflow: "hidden",
              }}
            >
              {imgs.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    id={item.id}
                    className="w-100 rounded-[1rem]"
                    key={index}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      top: "0rem",
                      backgroundColor:'transparent'
                    }}
                  >
                    <img
                      style={{
                        zIndex: "2",
                        border:'0px solid transparent',
                        borderRadius:"100%",
                        height:'13rem',
                        width:'13rem',
                        margin:'auto'
                      }}
                      src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg'
                     alt=""/>
                    <div
                      style={{position:'relative',top:'-4rem',lineHeight:'2.5rem', zIndex: "-2",textTranform: 'uppercase', backgroundColor: 'rgba(255, 255, 255, 0.45)', border: '0px solid transparent', borderRadius: '1.5rem'}}
                      className="flex flex-col rounded-[2rem] pt-[2rem] pb-[2rem] pl-[5rem] pr-[5rem]"
                    >
                      <label className="text-[1.5rem] z-0">NAME</label>
                      <label className="text-[1.1rem] z-0">YEAR</label>
                      <label className="text-[1.1rem] z-0">CURRENT DESIGNATION</label>
                      <div className="flex flex-row z-0"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
const Alumni = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default Alumni;
