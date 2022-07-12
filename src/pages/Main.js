import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';
import CategoryCard from '../components/main/CategoryCard';
// components
import  {BrandCard, ImgSlide, Map, RandomCoffee, Sadari}from '../components/main/mainIndex'
import PickCoffee from '../components/main/PickCoffee';
import Header from './Header/Header';


const Main = () => {
const [category, setCategory] = useState(true)

  return (
    <div style={{maxWidth:"1200px",width:"75%"}}>
      <Header/>
      <ScContainer>   
        <ImgSlide/>
        <ScMRSContainer>
          <ScMapRandomWrap>
            <Map/>
            <RandomCoffee />
          </ScMapRandomWrap>
          <PickCoffee/>
        </ScMRSContainer>
      <button onClick={()=>{setCategory(true)}}>브랜드별</button>
      <button onClick={()=>{setCategory(false)}}>커피별</button>
      {category?<BrandCard/>:<CategoryCard/>}
        
      </ScContainer>
    </div>
    
  )
}

const ScContainer = Styled.div`
  display: column;  
`;
const ScMapRandomWrap = Styled.div`
  display: column;  
  width: 50%;
`;

const ScMRSContainer = Styled.div`
  display: flex;
`;


export default Main