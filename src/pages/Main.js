import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import "../shared/css/flow.css"
import { Link } from 'react-scroll';
import RandomBg from '../components/main/svg/RandomBtnBg.svg';


// components
import  {BrandCard, ImgSlide, RandomCoffee, LottoPoint, RandomPicker, CategoryCard}from '../components/main/A-mainIndex'
import Header from './Header/Header';
import {flow, flower, MainCard1} from "../shared/svg/A-index"
import { Flower } from '../components/main/Flower';
import { Footer } from '../components/Footer';
import { Flow } from '../components/main/Flow';
import Modal from '../components/main/Modal';
import { getCookie } from '../shared/Cookie';
import { useMediaQuery } from "react-responsive";
import ImgSlide2 from '../components/main/ImgSlide2';
import Modal2 from '../components/main/Modal2';
import ImgSlideMini from '../components/main/ImgSlideMini';



const Main = () => {
const [category, setCategory] = useState(true)
const [showModal, setShowModal] = useState(true);
const [color, setColor] = useState('var(--main)');
const [color2, setColor2] = useState('rgba(44, 39, 140, 0.4)');
const [ randomOpenModal , setRandomOpenModal ] = useState(false);

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

const randomOpen = () => {
  setRandomOpenModal(true);
}

const randomClose = () => {
  setRandomOpenModal(false);
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
      <div style={{position:"relative", width:"100%",overflow:"hidden"}}>
        
        <ImgSlideMini/>
        <ImgSlide2/>
        
        <ScMaxWrap style={{maxWidth:"1230px",width:"100%", margin:"auto"}}>            
            {/* <ScMapRandomWrap>
              <RandomPicker />              
            </ScMapRandomWrap> */}
            <ScRandomBtn src={RandomBg} alt="" onClick={()=>{randomOpen();}}/>
            <ScNavbarWrap>
              <ScTitle id="Top">Menu</ScTitle>
              <ScButtonWrap>
                <ScCategory color={color}
                  onClick={()=>{
                  setCategory(true)
                  changeColor()
                  }}>브랜드
                </ScCategory>
                <p>|</p>
                <ScCategory2
                  color2={color2}
                  onClick={()=>{setCategory(false)
                  changeColor2()
                  }}>음료
                </ScCategory2>
              </ScButtonWrap>
            </ScNavbarWrap>            
             {category?<BrandCard/>:<CategoryCard/>}    
        </ScMaxWrap>
        <ScTopBtnWrap>
            <Link to="Top" spy={true} smooth={true}>
              <ScTopBtn>Top</ScTopBtn>
            </Link>
        </ScTopBtnWrap>
        { isMobile ? <Modal2 showModal={showModal} closeModal={closeModal}/> : <Modal showModal={showModal} closeModal={closeModal}/>}
        { randomOpenModal ? <RandomCoffee closeModal={randomClose} /> : null }
          {/* <Flow/> */}
      <Flower/>
      </div>    
      {/* <Footer/> */}

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


const ScRandomBtn = styled.img`
  background-color: #2c278c;
  position: fixed;
  left: -35px;
  width: 210px;
  height: 215px;
  border-bottom-right-radius: 20%;
  border-top-right-radius: 20%;
  &:hover {
    cursor: pointer;
    left: 0px;
  }
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
    left: 0;
    bottom: 10%;
  }
`;

const ScMaxWrap = styled.div`
max-width:1230px;
width:100%;
 margin:auto;
 @media screen and (max-width: 768px) {
  max-width:100%;
  /* border: 1px red solid; */
  }
`

const ScTitle = styled.div`
  /* margin-bottom: 46px;  */
  font-size:35px;
  color: var(--main); 
  font-family: SUIT ExtraBold;
  @media screen and (max-width: 768px) {
    margin-bottom:0;
  }
`;

const ScNavbarWrap =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 50px auto;
@media screen and (max-width:768px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px 30px 10px;
    /* border: 1px solid red; */
  }
`;

const ScButtonWrap = styled.div`
display: flex;
gap: 28px;
font-size: 1.13em;
@media screen and (max-width:768px){
    /* justify-content: center; */ 
    /* border: 1px solid red;    */
  }
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
  position: fixed;
  bottom: 3%;
  right: 2%;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    right: 3%;
    bottom: 2%;
  }
`;


export default Main