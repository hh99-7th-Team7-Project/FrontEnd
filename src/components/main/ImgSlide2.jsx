import React, { useRef, useState } from "react";
import styled from "styled-components";
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
    <ScMobile>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><a href="https://forms.gle/yGy74NsTZwQJWycVA" target="_blank"><img src={MainCard1} alt=""/></a></SwiperSlide>
        <SwiperSlide><img src="/MainBanner.png"/></SwiperSlide>
      </Swiper>
    </ScMobile>
  </>
  )
}

const ScMobile = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 8px 24px;
    margin: 30px auto;    
  }
`;
export default ImgSlide2