import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MainCard1 } from '../../shared/svg/A-index';
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "../../shared/css/swiper.css";

const ImgSlideModal2 = () => {
  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide><img src="/mainmodal/1.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="/mainmodal/2.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="/mainmodal/3.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="/mainmodal/4.jpg" alt=""/></SwiperSlide>
    </Swiper>
  </>
  )
}

export default ImgSlideModal2