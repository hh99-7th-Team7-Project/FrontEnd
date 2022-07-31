import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import {
  __loadCoffeeCategory,
} from '../../redux/modules/coffee';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import styled, {keyframes } from 'styled-components';

const CategoryCard = (props) => {
  // const{coffeeReducer} = props
  const [color, setColor] = useState(false);
  const [brandName, setBrandName] = useState("ADE")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const coffee = 'coffee';
  useEffect(() => {
    dispatch(__loadCoffeeCategory('ADE'));
  }, [dispatch]);
console.log(brandName)
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
      <ScPrev className="prev" style={{fontSize:'1.66em'}}>&lt;</ScPrev>  
      <ScNext className="next" style={{fontSize:'1.66em'}}>&gt;</ScNext>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        centeredSlides={true}
        // pagination={true}
        loop={true}
        slideToClickedSlide={true}
        navigation={{
          prevEl: '.prev',
           nextEl: '.next', }}
        modules={[Navigation,Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
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
            <>
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
                    setColor(!color);
                    dispatch(__loadCoffeeCategory(item?.brand));
                    setBrandName(item?.brand)
                  }}
                  style={{ backgroundImage: `url(${item?.logo})` }}
                  className="middle"
                ></ScSlide>
              <ScBrand2 className='middle2' style={{ textAlign: 'center' }}>{item?.brand}</ScBrand2>
              </div>
            </SwiperSlide>
                </>
          );
        })}
      </Swiper>
      </div>
     
      <div>
        {/* <ScBrand>{brandName}</ScBrand> */}
        <SCcardWrap>
          {coffeeReducer &&
            coffeeReducer.map((item, index) => {
              return <CoffeeCard key={index} item={item} />;
            })}
        </SCcardWrap>
      </div>
    </div>
  );
};


const ScBrand2 =styled.div`
  font-size: 0.8em;
`
const animation = keyframes`
  50% {
    transform: scale(1.0);
  }
`;

const ScPrev = styled.div`
     @media screen and (max-width:768px){      
      left: 3%;      
  }
`

const ScBrand = styled.div`
/* border: 1px red solid; */
font-size: 22px;
margin-top: 20px;
     @media screen and (max-width:768px){      
      /* left: 3%;       */
      display: none;
  }
`

const ScNext = styled.div`
     @media screen and (max-width:768px){      
      right: 3%;           
  }
`

const ScSlide = styled.div`
  /* text-align: center; */
  /* font-size: 1.125em; */
  width: 120px;
  height: 120px;
  transform: scale(0.8);
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
  @media screen and (max-width:768px){      
    width: 100px;
    height: 100px;
    margin: 0;     
  }
`;
const SCcardWrap = Styled.div`
    margin: 0px ;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* border: 1px solid black; */
    /* height: 600px; */
    @media screen and (max-width:768px){      
      display: flex;
      flex-direction: row;
  }

`;

export default CategoryCard;
