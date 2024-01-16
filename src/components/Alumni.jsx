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
    { sl: 1, name: "Nandan Paul", designation: "Delivery Manager", company: "Nokia Solutions & Networks", id: "card-1", year: "1997 Batch", img: "https://res.cloudinary.com/dhry5xscm/image/upload/v1702417025/ecs-website/nandan_paul_hiu1tz.jpg" },
    { sl: 2, name: "G Ramkumar", designation: "Senior Consultant", company: "Tata Consultancy Services", id: "card-2", year: "1997 Batch", img: "https://res.cloudinary.com/dhry5xscm/image/upload/v1702417019/ecs-website/g_ramkumar-removebg-preview_fqnuik.png" },
    { sl: 3, name: "Arup Das", designation: "General Manager (Employee Services), HR", company: "Indian Oil Corporation Limited", id: "card-3", year: "1997 Batch", img: "https://res.cloudinary.com/dhry5xscm/image/upload/v1702417028/ecs-website/arup_das_hsjm9l.jpg" },
    { sl: 4, name: "Gaurav Nigam", designation: "Head at IT Infra Management Services", company: "Incedo Inc", id: "card-4", year: "1997 Batch", img: "https://res.cloudinary.com/dhry5xscm/image/upload/v1702417022/ecs-website/gaurav_nigam-removebg-preview_ugbxqv.png" },
    { sl: 5, name: "Himangshu Agarwala", designation: "VP & Head, Embedded Software", company: "MIRAFRA Technologies", id: "card-5", year: "1997 Batch", img: "https://res.cloudinary.com/dhry5xscm/image/upload/v1702417032/ecs-website/himanshu_agarwala_lkioo3.jpg" },
    { sl: 6, name: "Arup Das", designation: "General Manager (Employee Services), HR", company: "Indian Oil Corporation Limited", id: "card-3", year: "1997 Batch", img: "https://res.cloudinary.com/dhry5xscm/image/upload/v1702417028/ecs-website/arup_das_hsjm9l.jpg" }
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
                        top: "1.2rem",
                        zIndex: "2",
                        height: '25vw',
                        width: '25vw',
                        border: '0 solid transparent',
                        borderRadius: '100%'
                      }}
                      src={item.img}
                      alt="" />
                    <div
                      style={{ zIndex: "-2" }}
                      className="flex flex-col rounded-[1rem] p-[2rem] space-y-3"
                    >
                      <label className="text-[1.2rem] z-0 md:text-[2rem]">{item.name}</label>
                      <label className="text-xs z-0 md:text-[1.3rem]">{item.year}</label>
                      <label className="text-sm z-0 md:text-[1.3rem]">{item.designation}</label>
                      <label className="text-[0.8rem] z-0 md:text-[1.3rem]">{item.company}</label>
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
