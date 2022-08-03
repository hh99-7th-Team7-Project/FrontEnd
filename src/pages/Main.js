import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
//css
import RandomBg from '../components/main/svg/RandomBtnBg.svg';
import styled from 'styled-components';
import "../shared/css/flow.css"

// components
import { BrandCard, ImgSlide2, Modal2, ImgSlideMini, RandomPicker, CategoryCard, Modal } from '../components/main/A-mainIndex'
import { Flower } from '../components/main/Flower';

import { getCookie } from '../shared/Cookie';
import { useMediaQuery } from "react-responsive";



const Main = () => {
  const [category, setCategory] = useState(true)
  const [showModal, setShowModal] = useState(true);
  const [color, setColor] = useState('var(--main)');
  const [color2, setColor2] = useState('rgba(44, 39, 140, 0.4)');
  const [randomOpenModal, setRandomOpenModal] = useState(false);

  const notModal = getCookie("not seen a day")

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  //하루 동안 보지않기 체크
  useEffect(() => {
    if (notModal) {
      setShowModal(false)
    }
  }, [])

  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  //랜덤커피 모달 
  const randomOpen = () => {
    setRandomOpenModal(true);
  }
  const randomClose = () => {
    setRandomOpenModal(false);
  }

  //클릭 후 색 변하게
  const changeColor = () => {
    if (color2 === 'var(--main)') {
      setColor2('rgba(44, 39, 140, 0.4)')
      setColor('var(--main)')
    }
  }
  const changeColor2 = () => {
    if (color === 'var(--main)') {
      setColor('rgba(44, 39, 140, 0.4)')
      setColor2('var(--main)')
    }
  }

  return (
    <>
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>

        <ImgSlideMini />
        <ImgSlide2 />

        <ScMaxWrap style={{ maxWidth: "1230px", width: "100%", margin: "auto" }}>
          <ScRandomWrap>
            <ScRandomBtn src={RandomBg} alt="" onClick={() => { randomOpen(); }} />
          </ScRandomWrap>
          <ScNavbarWrap>
            <ScTitle id="Top">Menu</ScTitle>
            <ScButtonWrap>
              <ScCategory color={color}
                onClick={() => {
                  setCategory(true)
                  changeColor()
                }}>브랜드
              </ScCategory>
              <p>|</p>
              <ScCategory2
                color2={color2}
                onClick={() => {
                  setCategory(false)
                  changeColor2()
                }}>음료
              </ScCategory2>
            </ScButtonWrap>
          </ScNavbarWrap>
          {category ? <BrandCard /> : <CategoryCard />}
        </ScMaxWrap>
        <ScTopBtnWrap>
          <Link to="Top" spy={true} smooth={true}>
            <ScTopBtn>&#129137;</ScTopBtn>
          </Link>
        </ScTopBtnWrap>
        {isMobile ? <Modal2 showModal={showModal} closeModal={closeModal} /> : <Modal showModal={showModal} closeModal={closeModal} />}
        {randomOpenModal ? <RandomPicker closeModal={randomClose} /> : null}
        <Flower />
      </div>
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

const ScRandomWrap = styled.div`
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
    left: 0;
    bottom: 10%;
  }
`;


const ScRandomBtn = styled.img`
  position: fixed;
  left: -65px;
  width: 210px;
  height: 215px;
  bottom: 100px;
  z-index: 1000;
  &:hover {
    cursor: pointer;
    left: -35px;
  }
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
    bottom: 10%;
    left: -35px;
    &:hover {
    cursor: pointer;
    left: -20px;
  }
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

const ScNavbarWrap = styled.div`
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