import React, { useRef, useState } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MainCard1, MiniBanner } from '../../shared/svg/A-index';
import { Pagination } from "swiper";


// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "../../shared/css/swiper.css";

const ImgSlideMini = () => {
  return (
    <>
    <ScMobile>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><a href="https://forms.gle/yGy74NsTZwQJWycVA" target="_blank"><img src={MiniBanner} alt=""/></a></SwiperSlide>
      </Swiper>
    </ScMobile>
  </>
  )
}

const ScMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    flex-direction: column;
    align-items: center;
    margin: 30px auto;    
  }
`;
export default ImgSlideMini