// import React from 'react';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./circle.css";
import Fotter from "./Footer";
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div
            style={{
              position: "relative",
              textAlign: "center",
            }}
          >
            <img
              src="images/home.webp"
              alt=""
              className="img-fluid"
              style={{
                float: "right", // Shift the image to the right
                maxWidth: "70%", // Set a maximum width to maintain the original size
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fc6b03", // Fix the color code

                padding: "20px", // Add padding for better appearance
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  position: "relative",
                  top: "13rem",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fc6b03", // Fix the color code
                  padding: "20px",
                  width: "17rem", // Add padding for better appearance
                }}
              >
                Stay that are
              </h1>
              <span
                style={{
                  position: "relative",
                  top: "17rem",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fc6b03", // Fix the color code
                  padding: "20px",
                  width: "6rem", // Add padding for better appearance
                }}
              >
                For You
              </span>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
      {/* <Fotter /> */}
    </div>
  );
}
