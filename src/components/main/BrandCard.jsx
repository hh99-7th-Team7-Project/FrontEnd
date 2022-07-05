import React, { useEffect, useState } from 'react'
import Styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Navigate, useNavigate } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { __loadCoffee,loadCoffee, loadBrand, __loadCoffees } from '../../redux/modules/coffee';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react'


// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled, {css, keyframes} from 'styled-components';


const BrandCard = (props) => {
    // const{coffeeReducer} = props
    const [color, setColor] = useState(false) 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ediya = "이디야"
    useEffect(()=>{
  dispatch(__loadCoffee(ediya))  
},[dispatch])

    const coffeeReducer = useSelector((state) => state.coffee.list);
   console.log(coffeeReducer)


   const brandList =[{brand:"스타벅스", id:0},{brand:"빽다방", id:1},
   {brand:"커피빈", id:2},{brand:"이디야", id:3},{brand:"컴포즈커피", id:4},{brand:"드롭탑", id:5}, {brand:"탐앤탐스", id:6},{brand:"더벤티", id:7},{brand:"할리스", id:8},{brand:"폴바셋", id:9},{brand:"카페베네", id:10},{brand:"엔젤인어스", id:11}]



// const coffeeLoad =(e)=>{
//   <add className ="active" here>
// }

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
                      dispatch(__loadCoffee(item?.brand))  
                  }}
                    >{item?.brand}</ScSlide>
                    </SwiperSlide>
                    
                    )
                })}  
      </Swiper>
      
        <div>
            <SCcardWrap>
             <div>{coffeeReducer?.brand}</div>
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
  border-radius: 60px;
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