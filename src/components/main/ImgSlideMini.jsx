import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { MiniBanner } from '../../shared/svg/A-index';

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "../../shared/css/swiper.css";
import styled from "styled-components";

const ImgSlideMini = () => {
  return (
    <>
    <ScMobile>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><a href="https://forms.gle/yGy74NsTZwQJWycVA" target="_blank" rel="noreferrer"><img src={MiniBanner} alt=""/></a></SwiperSlide>
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
    margin: 0 auto 30px;    
  }
`;
export default ImgSlideMini