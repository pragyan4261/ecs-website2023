import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
// import { useState, useEffect, useRef } from "react";
import alumni from "../images/alumni.svg";
import "./alumni.css";
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

  return (
    <div
      style={{
        margin: "0 auto",
        height: "fit-content",
      }}
      className="w-[100%] sm:w-[75%] md:w-[75%] overflow-hidden"
    >
      <h1 className="text-[1.9rem] text-[#ffffff]">OUR NOTABLE ALUMNI</h1>
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
                    className="h-200 w-100 rounded-md"
                    key={index}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      top: "0rem",
                      scale: '0.5'
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        top: "2rem",
                        zIndex: "2",
                        height: '30vw',
                        width: '30vw',
                        border: '0 solid transparent',
                        borderRadius: '100%'
                      }}
                      src={alumni}
                      alt="" />
                    <div
                      style={{ zIndex: "-2" }}
                      className="flex flex-col rounded-[1rem] p-3"
                    >
                      <label className="text-base z-0">NAME</label>
                      <label className="text-xs z-0">YEAR</label>
                      <label className="text-sm z-0">CURRENT DESIGNATION</label>
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
