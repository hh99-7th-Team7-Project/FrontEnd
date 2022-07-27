import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import { BrandCard, CategoryCard } from '../components/main/A-mainIndex';
import { Flower } from '../components/main/Flower';

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
      <div style={{ maxWidth: '1230px', width: '84vw', margin: 'auto' }}>
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
      </div>
    </>
  );
};

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

export default MenuCategory;
