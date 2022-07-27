import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import { BrandCard, CategoryCard } from '../components/main/A-mainIndex';
import { Flower } from '../components/main/Flower';
import { Link } from 'react-scroll';

const MenuCategory = () => {
  const [category, setCategory] = useState(true);
  const [color, setColor] = useState('var(--main)');
  const [color2, setColor2] = useState('rgba(44, 39, 140, 0.4)');

  const changeColor = ()=>{
    if(color2 === 'var(--main)'){
     setColor2('rgba(44, 39, 140, 0.4)') 
     setColor('var(--main)')}
   }
   
   const changeColor2 = ()=>{
     if(color === 'var(--main)'){
      setColor('rgba(44, 39, 140, 0.4)') 
      setColor2('var(--main)')}
    }

  return (
    <>
      {/* <Flower /> */}
      <ScMaxWrap id="Top">
        <ScNavbarWrap>
          <ScButtonWrap>
            <ScCategory
              color={color}
              onClick={() => {
                setCategory(true);
                changeColor();
              }}
            >
              브랜드
            </ScCategory>
            <p>|</p>
            <ScCategory2
              color={color2}
              onClick={() => {
                setCategory();
                changeColor2();
              }}
            >
              음료
            </ScCategory2>
          </ScButtonWrap>
        </ScNavbarWrap>
        {category ? <BrandCard /> : <CategoryCard />}
      </ScMaxWrap>
        <ScTopBtnWrap>
            <Link to="Top" spy={true} smooth={true}>
            <ScTopBtn>Top</ScTopBtn>
          </Link>
        </ScTopBtnWrap>
    </>
  );
};

const ScMaxWrap = styled.div`
max-width:1230px;
width:100%;
 margin:auto;
 @media screen and (max-width: 768px) {
  max-width:100%;
  /* border: 1px red solid; */
  }
`

const ScButtonWrap = styled.div`
  margin: 20px auto;
  display: flex;
  gap: 28px;
  font-size: 14pt;
  &:hover {
    cursor: pointer;
  }
`;

const ScNavbarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:768px) {      
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: 20px auto;                
  }
`;

const ScCategory = styled.div`
color: ${props => props.color};
  &:hover {
    cursor: pointer;
  }
`;

const ScCategory2 = styled.div`
color: ${props => props.color};
  &:hover {
    cursor: pointer;
  }
`;

const ScTopBtnWrap = styled.div`
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ScTopBtn = styled.div`
  background-color: #2c278c;
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

export default MenuCategory;
