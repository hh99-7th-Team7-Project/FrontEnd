import React from 'react'
import Styled from 'styled-components';
// components
import  {BrandCard,Logo,ImgSlide,Map,RandomCoffee,Sadari}from '../components/main/mainIndex'


const Main = () => {


  return (
    <>  
      <Container>
        <Logo/>
        <HR/>
        <ImgSlide/>
        <MRSContainer>
          <MapRandomWrap>
            <Map/>
            <RandomCoffee />
          </MapRandomWrap>
          <Sadari/>
        </MRSContainer>
        <BrandCard/>
      </Container>
    </>
    
  )
}

const Container = Styled.div`
  display: column;  
`;

const HR = Styled.hr`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const MapRandomWrap = Styled.div`
  display: column;  
  width: 50%;
`;

const MRSContainer = Styled.div`
  display: flex;
`;


export default Main