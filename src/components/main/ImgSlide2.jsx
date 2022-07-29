import React, { useRef, useState } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MainCard1, MiniBanner,MainBanner2 } from '../../shared/svg/A-index';
import { Pagination, Navigation, Autoplay } from "swiper";


// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../shared/css/swiper.css";

const ImgSlide2 = () => {
  return (
    <>
    <ScMobile>
      <Swiper 
       pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
        loop={true}
        // navigation={true}
       modules={[Autoplay,Pagination,Navigation]} 
       className="mySwiper">
        <SwiperSlide><a style={{ width: "inherit"}} href="https://forms.gle/yGy74NsTZwQJWycVA" target="_blank"><img src={MainCard1} alt=""/></a></SwiperSlide>
        <SwiperSlide><img src={MainBanner2} alt=""/></SwiperSlide>
      </Swiper>
    </ScMobile>
  </>
  )
}

const ScMobile = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default ImgSlide2