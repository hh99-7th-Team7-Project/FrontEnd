import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Styled from 'styled-components';

// components
import  {BrandCard, ImgSlide, RandomCoffee, LottoPoint, RandomPicker, CategoryCard}from '../components/main/A-mainIndex'
import Header from './Header/Header';


const Main = () => {
const [category, setCategory] = useState(true)

  return (
    <>
    <div style={{margin:"auto"}}>
      <Header />
    </div>
    <ImgSlide/>
    <div style={{maxWidth:"1230px",width:"84vw", margin:"auto"}}>
          <ScMapRandomWrap>
            <RandomPicker />
            <LottoPoint/>
          </ScMapRandomWrap>
          <ScNavbarWrap>
          <h1 style={{marginBottom:"46px"}}>데일리 커피 Menu</h1>
          <ScButtonWrap>
      <div onClick={()=>{setCategory(true)}}>브랜드</div>
      <p>|</p>
      <div onClick={()=>{setCategory(false)}}>음료</div>
         </ScButtonWrap>
       </ScNavbarWrap>
      {category?<BrandCard/>:<CategoryCard/>}
        

    </div>
    </>
  )
}


const ScMapRandomWrap = styled.div`
  display: flex; 
  flex-direction : row;
  justify-content: space-between;
  align-items: center;
  margin: 84px auto 79px;
`;

const ScButtonWrap = styled.div`
display: flex;
gap: 28px;
font-size: 14pt;
`

const ScNavbarWrap =styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`


export default Main