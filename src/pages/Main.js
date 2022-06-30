import React from 'react'
import Styled from 'styled-components';
// components
import  {BrandCard,ImgSlide,Map,RandomCoffee,Sadari}from '../components/main/mainIndex'
import Header from './Header/Header';


const Main = () => {


  return (
    <>
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
    </>
    
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
`;

const ScMRSContainer = Styled.div`
  display: flex;
`;


export default Main