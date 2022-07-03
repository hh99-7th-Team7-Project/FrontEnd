import React, { useEffect, useState } from 'react'
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
import { Navigation } from "swiper";
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import apis from '../../shared/api/main';

const BrandCard = () => {
     const [color, setColor] = useState('#ddd') 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const coffeeReducer = useSelector((state) => state.coffee.list);
   console.log(coffeeReducer)

  const brandlist = ["스타벅스", "빽다방", "커피빈","이디야","컴포즈커피","드롭탑", "탐앤탐스","더벤티","할리스","폴바셋","카페베네","엔젤인어스"]

// useEffect(()=>{
//   apis.getCoffees()
// },[])

  return (
    <>
     <Swiper
        slidesPerView={7}
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
            slidesPerView : 6,
          },
          1600:{
            slidesPerView : 7,
          }
        }}
        className="mySwiper"
      >
        {brandlist.map((item, index) => {                    
                    return (<SwiperSlide key={index} onClick={async()=>{
                      color === '#ddd'? setColor("tomato"):setColor("#ddd");
                      const star =await axios.get(process.env.REACT_APP_URL+`/coffee/${item}`)
                      dispatch(loadCoffee(star.data))
                  }} color={color}>
                    <ScSlide >{item}</ScSlide>
                    </SwiperSlide>)
                })}  
      </Swiper>
        <div>
            <SCcardWrap>
                {coffeeReducer&&coffeeReducer.map((item, index) => {                    
                    return (<CoffeeCard key={index} item={item}/>)
                })}        
            </SCcardWrap>
        </div>
    </>
  )
}

const animation = keyframes`
  50% {
    transform: scale(1.0);
  }
`;

const ScSlide = styled.div`
  text-align: center;
  font-size: 18px;
  width: 120px;
  height: 120px;
  transform: scale(0.9);
  background: #fff;
  border-radius: 70px;
  border: 1px #ddd solid;
  background-color: ${props => props.color};

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
  /* &:active{
    scale: 1.1;
    border: 1px #b46f6f solid;
  }  */
`
const SCcardWrap = Styled.div`
    margin: 30px 0;
    /* width: 80%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid black;
    height: 600px;

`;

export default BrandCard