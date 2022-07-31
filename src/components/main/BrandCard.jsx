import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import { __loadCoffee, __loadCoffeesnBrand } from '../../redux/modules/coffee';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import styled, { css, keyframes } from 'styled-components';
import apis from '../../shared/api/main';

const BrandCard = (props) => {
  // const{coffeeReducer} = props
  const [color, setColor] = useState(false);
  const [ selectCategoryValue , setSelectCategoryValue ] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ediya = '스타벅스';

  useEffect(() => {
    dispatch(__loadCoffee(ediya));
    setSelectCategoryValue()
  }, [dispatch]);

  const coffeeReducer = useSelector((state) => state.coffee.list);

  console.log(coffeeReducer[0]?.brand)
  const handleCategoryChange = async(e) => {
    setSelectCategoryValue(e.target.value);
    dispatch(__loadCoffeesnBrand({
      brand: coffeeReducer[0]?.brand,
      cate:e.target.value
      }))
  }

  const brandList = [
    { brand: '스타벅스', id: 0, logo: '/brandlogo/스타벅스.png' },
    { brand: '빽다방', id: 1, logo: `/brandlogo/빽다방.png` },
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

  console.log(selectCategoryValue);

  return (

    <ScMobile>

        <div style={{position:'relative'}}>
      <ScPrev className="prev" style={{fontSize:'1.66em'}}>&lt;</ScPrev>  
      <ScNext className="next" style={{fontSize:'1.66em'}}>&gt;</ScNext>
              <Swiper
                slidesPerView={8}
                spaceBetween={10}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: '.prev',
                    nextEl: '.next', }}
                modules={[Navigation]}
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
                slideToClickedSlide={true}
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
                            // slide()
                            setColor(!color);
                            dispatch(__loadCoffee(item?.brand));
                          }}
                          style={{ backgroundImage: `url(${item?.logo})` }}
                          className="middle"
                        >

                        </ScSlide>
                        
                        <ScBrand className='middle2' style={{ textAlign: 'center' }}> {item?.brand}</ScBrand>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
          </div>
          <ScCategory>
            <SCCate1>
               <input 
                  type="radio" 
                  id="COFFEE" 
                  value="COFFEE"
                  checked={selectCategoryValue === "COFFEE"}                   
                  onChange={handleCategoryChange}
                  />
                <label htmlFor="COFFEE">COFFEE</label>
            </SCCate1>
            <SCCate1>
               <input 
                  type="radio" 
                  id="NONCOFFEE" 
                  value="NONCOFFEE"
                  checked={selectCategoryValue === "NONCOFFEE"}                   
                  onChange={handleCategoryChange}
                  />
                <label htmlFor="NONCOFFEE">NONCOFFEE</label>
            </SCCate1>
            <SCCate1>
               <input 
                  type="radio" 
                  id="SMOOTHIE" 
                  value="SMOOTHIE"
                  checked={selectCategoryValue === "SMOOTHIE"}                   
                  onChange={handleCategoryChange}
                  />
                <label htmlFor="SMOOTHIE">SMOOTHIE</label>
            </SCCate1>
            <SCCate1>
               <input 
                  type="radio" 
                  id="ADE" 
                  value="ADE"
                  checked={selectCategoryValue === "ADE"}                   
                  onChange={handleCategoryChange}
                  />
                <label htmlFor="ADE">ADE</label>
            </SCCate1>
            <SCCate1>
               <input 
                  type="radio" 
                  id="TEA" 
                  value="TEA"
                  checked={selectCategoryValue === "TEA"}                   
                  onChange={handleCategoryChange}
                  />
                <label htmlFor="TEA">TEA</label>
            </SCCate1>
          </ScCategory>
          <SCcardWrap>
          {coffeeReducer &&
            coffeeReducer.map((item, index) => {
              return <CoffeeCard key={index} item={item} />;
            })}
          </SCcardWrap>

          </ScMobile>
  );
};

const ScBrand =styled.div`
  font-size: 0.8em;
`

const ScCate = styled.div`
  display: flex;
`
            
const SCCate1 =styled.div`
    display: flex;
  flex-direction: flex-start;
  border: 1px solid #2c278c;
  background-color: white;
  color: #2c278c;
  border-radius: 23px;
  width: 14%;
  height: 30px;
  align-items: center;
  margin: 5px;
  justify-content: center;
  font-size: 0.815em; 
  cursor: pointer; 
  input{
    display: none;
  }
  label{
    width: 100%;
    text-align: center;
  }
  input:checked + label {
    border: 1px solid #2c278c;
    background-color: #2c278c;
    color: white;
    border-radius: 23px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;     
  label {
    &:hover {
    cursor: pointer;
  } 
  }  
  }
  @media screen and (max-width:768px){    
    flex-direction: column;    
    align-items: center;
    width: 100%;    
  }
`

const ScCategory = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  width: 60%;
  margin: auto;
  /* border: 1px solid var(--main); */
  justify-content: space-between;
  @media screen and (max-width:768px){    
  
    align-items: center;
    width: 80%;    
  }
`

const ScMobile = styled.div`
  @media screen and (max-width:768px){    
    flex-direction: column;    
    align-items: center;
    width: 100%;    
  }
`;

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

const ScNext = styled.div`
     @media screen and (max-width:768px){      
      right: 3%;           
  }
`

const ScSlide = styled.div`
  width: 120px;
  height: 120px;
  transform: scale(0.8);
  border-radius: 60px;

  /* border: 1px #ddd solid; */
  background-color: white;
  background: no-repeat center;
  background-size: 100%;
  /* border: 1px solid var(--main); */
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
    margin: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width:768px){      
      margin: 20px 10px;               
  }

`;

export default BrandCard;
