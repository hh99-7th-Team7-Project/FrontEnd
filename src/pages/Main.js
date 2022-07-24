import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import "../shared/css/flow.css"

// components
import  {BrandCard, ImgSlide, RandomCoffee, LottoPoint, RandomPicker, CategoryCard}from '../components/main/A-mainIndex'
import Header from './Header/Header';
import {flow, flower,MainCard1} from "../shared/svg/A-index"
import { Flower } from '../components/main/Flower';
import { Footer } from '../components/Footer';
import { Flow } from '../components/main/Flow';
import Modal from '../components/main/Modal';
import { getCookie } from '../shared/Cookie';
import { useMediaQuery } from "react-responsive";
import ImgSlide2 from '../components/main/ImgSlide2';
import Modal2 from '../components/main/Modal2';



const Main = () => {
const [category, setCategory] = useState(true)
const [showModal, setShowModal] = useState(true);
const [color, setColor] = useState('var(--main)');
const [color2, setColor2] = useState('rgba(44, 39, 140, 0.4)');

const notModal = getCookie("not seen a day")

const isMobile = useMediaQuery({
  query: "(max-width: 768px)",
});

useEffect(()=>{
  if(notModal){
    setShowModal(false)
  }
},[])

const openModal = () => {
  setShowModal(true);
}
const closeModal = () => {
  setShowModal(false);
}

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
      <div style={{margin:"auto", width:"62%"}}>
        <Header />
      </div>
      <div style={{position:"relative"}}>
      <ImgSlide2/>
  
        <div style={{maxWidth:"1230px",width:"84vw", margin:"auto"}}>
            {/* <ScMapRandomWrap>
              <RandomPicker />
              <LottoPoint/>
            </ScMapRandomWrap> */}
            <ScNavbarWrap>
            <ScMobile style={{marginBottom:"46px", fontSize:"35px", color:"var(--main)", fontFamily:"SUIT ExtraBold"}}>데일리 커피 Menu</ScMobile>
              <ScButtonWrap>
                <ScCategory color={color}
                  onClick={()=>{
                  setCategory(true)
                  changeColor()
                  }}>브랜드</ScCategory>
                <p>|</p>
                <ScCategory2
                  color2={color2}
                  onClick={()=>{setCategory(false)
                  changeColor2()
                  }}>음료</ScCategory2>
              </ScButtonWrap>
            </ScNavbarWrap>
            {category?<BrandCard/>:<CategoryCard/>}
        </div>
        { isMobile ? <Modal2 showModal={showModal} closeModal={closeModal}/> : <Modal showModal={showModal} closeModal={closeModal}/>}
          {/* <Flow/> */}
      <Flower/>
      </div>    
      <Footer/>

    </>
  )
}


const ScMapRandomWrap = styled.div`
  display: flex; 
  flex-direction : row;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  margin: 84px auto 79px;
`;

const ScButtonWrap = styled.div`
display: flex;
gap: 28px;
font-size: 14pt;
`;

const ScNavbarWrap =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 60px;
`;

const ScCategory = styled.div`
color: ${props => props.color};
  &:hover {
    cursor: pointer;
  }
`;

const ScCategory2 = styled.div`
color: ${props => props.color2};
  &:hover {
    cursor: pointer;
  }
`;

const ScMobile = styled.div`
  @media screen and (max-width: 768px) {
    max-width: 1230px;
    width: 90%;
  }
`;

export default Main