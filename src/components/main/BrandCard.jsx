import React, { useEffect } from 'react'
import Styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Navigate, useNavigate } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { __loadCoffee,loadCoffee } from '../../redux/modules/coffee';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../../shared/css/slide.css"
import axios from 'axios';

const BrandCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const coffeeReducer = useSelector((state) => state.coffee.list);
   console.log(coffeeReducer)

  const brandlist = ["스타벅스", "빽다방", "커피빈","이디야","컴포즈 커피","드롭탑", "탐앤탐스","더벤티","할리스","폴바셋","카페베네","엔젤인어스"]

  return (
    <>
     <Swiper
        slidesPerView={5}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {brandlist.map((item, index) => {                    
                    return (<SwiperSlide key={index} onClick={async()=>{
                      const star =await axios.get(process.env.REACT_APP_URL+`/coffee/${item}`)
                      dispatch(loadCoffee(star.data))
                  }}>{item}</SwiperSlide>)
                })}  
      </Swiper>
        <div>
            <SCcardWrap>
                {coffeeReducer.map((item, index) => {                    
                    return (<CoffeeCard key={index} item={item}/>)
                })}        
            </SCcardWrap>
        </div>
    </>
  )
}


const SCcardWrap = Styled.div`
    margin: auto;
    /* width: 80%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid black;
`;

export default BrandCard