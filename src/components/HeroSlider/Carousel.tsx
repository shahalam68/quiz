"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, Pagination } from "swiper/modules"; // Import Autoplay and Pagination
import { ServiceData } from "../../constants/constants"; // Replace with your actual data
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1, // Always show 3 slides
            spaceBetween: 15,
          },
          340: {
            slidesPerView: 1, // Always show 3 slides
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 1, // Always show 3 slides
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, // Always show 3 slides
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        autoplay={{
          delay: 5000, // 5 seconds delay
          disableOnInteraction: false, // Ensures autoplay continues even after user interaction
        }}
        loop={true} // Enables continuous loop
        modules={[Autoplay, Pagination]} // Enable Autoplay and Pagination
        className="max-w-[100%] mb-10"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={item.backgroundImage}>
            <div className="flex flex-col text-white  py-8 h-[380px] w-[100px] cursor-pointer">
              <div className="absolute  overflow-hidden">
                <img
                  className="transition duration-300 ease-in-out  rounded-md "
                  src={item.backgroundImage}
                  alt=""
                />
                <h2 className="text-[11px] text-white bg-[#dc3545] font-semibold mt-2 inline-block p-1">{item.title}</h2>
                <h2 className="text-base text-black font-semibold">{item.description}</h2>
              </div>
              <div className=" text-center text-white"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
