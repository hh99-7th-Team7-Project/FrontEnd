import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { __loadCoffee } from '../../redux/modules/coffee';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styled, { css, keyframes } from 'styled-components';

const BrandCard = (props) => {
  // const{coffeeReducer} = props
  const [color, setColor] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ediya = '스타벅스';
  useEffect(() => {
    dispatch(__loadCoffee(ediya));
  }, [dispatch]);

  const coffeeReducer = useSelector((state) => state.coffee.list);

  const brandList = [
    { brand: '스타벅스', id: 0, logo: '/brandlogo/스타벅스.png' },
    { brand: '빽다방', id: 1, logo: '/brandlogo/빽다방.png' },
    { brand: '커피빈', id: 2, logo: '/brandlogo/커피빈.png' },
    { brand: '이디야', id: 3, logo: '/brandlogo/이디야.png' },
    { brand: '컴포즈', id: 4, logo: '/brandlogo/컴포즈.png' },
    { brand: '드롭탑', id: 5, logo: '/brandlogo/드롭탑.png' },
    { brand: '탐앤탐스', id: 6, logo: '/brandlogo/탐앤탐스.jpg' },
    { brand: '더벤티', id: 7, logo: '/brandlogo/더벤티.png' },
    { brand: '할리스', id: 8, logo: '/brandlogo/할리스.jpg' },
    { brand: '폴바셋', id: 9, logo: '/brandlogo/폴바셋.png' },
    { brand: '카페베네', id: 10, logo: '/brandlogo/카페베네.png' },
    { brand: '엔제리너스', id: 11, logo: '/brandlogo/엔제리너스.png' },
    { brand: '메가커피', id: 12, logo: '/brandlogo/메가커피.png' },
  ];

  // const coffeeLoad =(e)=>{
  //   <add className ="active" here>
  // }

  return (

    <div >
        <div style={{position:'relative'}}>
      <div className="prev" style={{fontSize:"30px"}}>&lt;</div>  
      <div className="next" style={{fontSize:"30px"}}>&gt;</div>
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        // loopFillGroupWithBlank={false}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
           prevEl: '.prev',
            nextEl: '.next', }}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 4,
          },
          890: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 7,
          },
          1600: {
            slidesPerView: 9,
          },
        }}
        className="mySwiper2"
      >
   
        {brandList.map((item, index) => {
          return (
            <SwiperSlide key={index} className="slide">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <ScSlide
                  onClick={(e) => {
                    // e.target.style.background
                    // console.log(item.id);
                    setColor(!color);
                    dispatch(__loadCoffee(item?.brand));
                  }}
                  style={{ backgroundImage: `url(${item?.logo})` }}
                ></ScSlide>
                
                <div style={{ textAlign: 'center' }}> {item?.brand}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
          </div>

      <div>
        <SCcardWrap>
          <div>{coffeeReducer?.brand}</div>
          {coffeeReducer &&
            coffeeReducer.map((item, index) => {
              return <CoffeeCard key={index} item={item} />;
            })}
          </SCcardWrap>
        </div>
      </div>
  );
};



const animation = keyframes`
  50% {
    transform: scale(1.0);
  }
`;

const ScSlide = styled.div`
  width: 120px;
  height: 120px;
  transform: scale(0.9);
  border-radius: 60px;

  /* border: 1px #ddd solid; */
  background-color: white;
  background: no-repeat center;
  background-size: 100%;

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
    animation: ${animation} 0.5s;
    cursor: pointer;
  }
`;
const SCcardWrap = Styled.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* border: 1px solid black; */
    /* height: 600px; */

`;

export default BrandCard;
