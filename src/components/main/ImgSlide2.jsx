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

const ImgSlide2 = () => {
  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide><a href="https://forms.gle/yGy74NsTZwQJWycVA" target="_blank"><img src={MainCard1} alt=""/></a></SwiperSlide>
      <SwiperSlide><img src="/MainBanner.png"/></SwiperSlide>
    </Swiper>
  </>
  )
}

export default ImgSlide2