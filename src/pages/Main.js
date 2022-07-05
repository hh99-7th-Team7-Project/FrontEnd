import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components';
// components
import  {BrandCard, ImgSlide, Map, RandomCoffee, Sadari}from '../components/main/mainIndex'
import { __loadCoffee, __loadCoffees } from '../redux/modules/coffee';
import Header from './Header/Header';


const Main = () => {
  // const dispatch = useDispatch()
  // const [coffee, setCoffee] = useState()
  // const coffeeReducer = useSelector((state) => state.coffee.list);
  // console.log(coffeeReducer)

  // useEffect(()=>{
  //   dispatch(__loadCoffees())  
  // },[dispatch])


  return (
    <div style={{maxWidth:"1200px",width:"75%"}}>
      <Header/>
      <ScContainer>   
        <ScHR/>
        <ImgSlide/>
        <ScMRSContainer>
          <ScMapRandomWrap>
            <Map/>
            <RandomCoffee />
          </ScMapRandomWrap>
          <Sadari/>
        </ScMRSContainer>
        <BrandCard/>
      </ScContainer>
    </div>
    
  )
}

const ScContainer = Styled.div`
  display: column;  
`;

const ScHR = Styled.hr`
  margin-top: 50px;
  margin-bottom: 50px;
`;


const ScMapRandomWrap = Styled.div`
  display: column;  
  width: 50%;
`;

const ScMRSContainer = Styled.div`
  display: flex;
`;


export default Main