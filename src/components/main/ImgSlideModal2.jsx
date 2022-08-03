import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination ,Autoplay} from "swiper";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../shared/css/swiper.css";

const ImgSlideModal2 = () => {
  return (
    <>
    <Swiper 
     autoplay={{
      delay: 4500,
      disableOnInteraction: false,
    }}
    
      pagination={{
        clickable: true,
      }}
     modules={[Pagination,Autoplay]}
      className="mySwiper">
      <SwiperSlide><img src="/mainmodal/1.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img src="/mainmodal/2.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img src="/mainmodal/3.webp" alt=""/></SwiperSlide>
      <SwiperSlide><img src="/mainmodal/4.webp" alt=""/></SwiperSlide>
    </Swiper>
  </>
  )
}

export default ImgSlideModal2