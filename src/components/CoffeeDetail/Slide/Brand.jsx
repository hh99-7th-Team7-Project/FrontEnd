import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {css, keyframes} from 'styled-components';

const Brand = () => {

    const [color, setColor] = useState(false) 
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const brandList =[{brand:"스타벅스", id:0, logo:"/brandlogo/스타벅스.png"},{brand:"빽다방", id:1, logo:"/brandlogo/빽다방.png"},
    {brand:"커피빈", id:2, logo:"/brandlogo/커피빈.png"},{brand:"이디야", id:3, logo:"/brandlogo/이디야.png"},{brand:"컴포즈", id:4, logo:"/brandlogo/컴포즈.png"},{brand:"드롭탑", id:5, logo:"/brandlogo/드롭탑.png"}, {brand:"탐앤탐스", id:6, logo:"/brandlogo/탐앤탐스.png"},{brand:"더벤티", id:7, logo:"/brandlogo/더벤티.png"},{brand:"할리스", id:8, logo:"/brandlogo/할리스.png"},{brand:"폴바셋", id:9, logo:"/brandlogo/폴바셋.png"},{brand:"카페베네", id:10, logo:"/brandlogo/카페베네.png"},{brand:"엔제리너스", id:11, logo:"/brandlogo/엔제리너스.png"}]

    

  return (
        <>
        <Swiper
        slidesPerView={8}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        // loopFillGroupWithBlank={false}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Navigation]}

        breakpoints={{
            0:{
            slidesPerView :2,
            },
            600:{
            slidesPerView : 3,
            },
            700:{
            slidesPerView : 4,
            },
            890:{
            slidesPerView : 5,
            },
            1200:{
            slidesPerView : 7,
            },
            1600:{
            slidesPerView : 9,
            }
        }}
        className="mySwiper"
        >
        {brandList.map((item, index) => {                    
                    return (
                    <SwiperSlide key={index}
                        className="slide" 
                    >
                    <ScSlide  
                        onClick={(e)=>{
                        // e.target.style.background
                        console.log(item.id)
                        setColor(!color);
                        navigate('/menucategory');
                    }}
                    style={{ backgroundImage:`url(${item?.logo})`}}
                    >
                        <img src={item?.logo} alt={item?.brand} style={{width:"125px"}}/>
                        </ScSlide>
                    <div style={{textAlign:"center"}}>  {item?.brand}</div>
                    </SwiperSlide>
                    
                    )
                })}  
        </Swiper>
        </>
        )
}

const animation = keyframes`
  50% {
    transform: scale(1.0);
  }
`;


const ScSlide = styled.div`
  width: 120px;
  height: 120px;
  transform: scale(0.9);
  background: #fff;
  border-radius: 60px;
  border: 1px #ddd solid;
  background: no-repeat center;
  background-size: cover ;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
 &:hover {
  border: 1px #242222 solid;

  animation: ${animation} 0.5s ;
  }

  /* div:nth-child(){
    border-bottom: 2px solid var(--aquaD);
  } */

  &:active{
    scale: 1.1;
    border: 1px #b46f6f solid;
    background: pink!important;
    ::after {
      background-color: #e73653!important;
    }
  } 
`;

export default Brand