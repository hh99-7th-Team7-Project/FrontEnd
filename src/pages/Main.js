import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import "../shared/css/flow.css"

// components
import  {BrandCard, ImgSlide, RandomCoffee, LottoPoint, RandomPicker, CategoryCard}from '../components/main/A-mainIndex'
import Header from './Header/Header';
import {flow, flower} from "../shared/svg/A-index"
import { Flower } from '../components/main/Flower';
import { Footer } from '../components/Footer';
import { Flow } from '../components/main/Flow';
import Modal from '../components/main/Modal';
import { getCookie } from '../shared/Cookie';


const Main = () => {
const [category, setCategory] = useState(true)
const [showModal, setShowModal] = useState(true);

const notModal = getCookie("not seen a day")

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

  return (
    <>
    <div style={{margin:"auto"}}>
      <Header />
    </div>
<div style={{position:"relative"}}>
    <ImgSlide/>
    <Flow/>
    <div style={{maxWidth:"1230px",width:"84vw", margin:"auto"}}>
          <ScMapRandomWrap>
            <RandomPicker />
            <LottoPoint/>
          </ScMapRandomWrap>
          <ScNavbarWrap>
          <h1 style={{marginBottom:"46px"}}>데일리 커피 Menu</h1>
          <ScButtonWrap>
      <ScCategory onClick={()=>{setCategory(true)}}>브랜드</ScCategory>
      <p>|</p>
      <ScCategory onClick={()=>{setCategory(false)}}>음료</ScCategory>
         </ScButtonWrap>
       </ScNavbarWrap>
      {category?<BrandCard/>:<CategoryCard/>}
    </div>
    <Modal showModal={showModal} closeModal={closeModal}/>
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
`;

const ScCategory = styled.div`
  &:hover {
    cursor: pointer;
  }
`;


export default Main