import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Navigate, useNavigate } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import {
  __loadCoffee,
  loadCoffee,
  loadBrand,
  __loadCoffees,
  __loadCoffeeCategory,
} from '../../redux/modules/coffee';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styled, { css, keyframes } from 'styled-components';

const CategoryCard = (props) => {
  // const{coffeeReducer} = props
  const [color, setColor] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const coffee = 'coffee';
  useEffect(() => {
    dispatch(__loadCoffeeCategory('ADE'));
  }, [dispatch]);

  const coffeeReducer = useSelector((state) => state.coffee.list);

  const categoryList = [
    { brand: 'COFFEE', id: 0, logo: '/category/커피.png' },
    { brand: 'NONCOFFEE', id: 1, logo: '/category/논커피.png' },
    { brand: 'SMOOTHIE', id: 2, logo: '/category/스무디.png' },
    { brand: 'ADE', id: 3, logo: '/category/에이드.png' },
    { brand: 'TEA', id: 4, logo: '/category/티.png' },
  ];


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
        {categoryList.map((item, index) => {
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
                    dispatch(__loadCoffeeCategory(item?.brand));
                  }}
                  style={{ backgroundImage: `url(${item?.logo})` }}
                ></ScSlide>
              <div style={{ textAlign: 'center' }}>{item?.brand}</div>
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
  /* text-align: center; */
  /* font-size: 1.125em; */
  width: 120px;
  height: 120px;
  transform: scale(0.9);
  background: no-repeat center;
  border: 1px solid var(--main);
  background-size: cover;

  border-radius: 60px;

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

  /* div:nth-child(){
    border-bottom: 2px solid var(--aquaD);
  } */

  /* &:active{
    scale: 1.1;
    border: 1px #b46f6f solid;
    background: pink!important;
    ::after {
      background-color: #e73653!important;
    }
  }  */
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

export default CategoryCard;
