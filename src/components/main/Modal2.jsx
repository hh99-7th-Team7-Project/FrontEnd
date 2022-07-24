import React from 'react'
import styled from 'styled-components';
import { setCookie } from '../../shared/Cookie';
import ImgSlideModal from './ImgSlideModal';
import ImgSlideModal2 from './ImgSlideModal2';

const Modal2 = ({showModal,closeModal}) => {
  const notSeenADay = ()=>{
    setCookie("not seen a day",true)
    closeModal()
  }


  return (
    <div>{showModal ? 
      <Background>
      <ModalContainer>
      {/* <ImgSlideModal/> */}
      <ImgSlideModal/>
      <ScX onClick={closeModal}>✖</ScX>
      <ScBtn onClick={notSeenADay}>오늘 하루 보지 않기</ScBtn>
     </ModalContainer>
     </Background> : null}</div>
  )
}

export default Modal2

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.30);
    z-index: 1;
    img{
      width: 100%;
    }
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    /* color: #2c278c; */
    transform: translate(-50%, -50%);
    /* max-height: 80%; */
    max-width: 300px;
    width: 80%;
    /* height: 65%; */
    /* padding: 20px; */

    border-radius: 10px;
    text-align: center;
    font-size: 1em;
`;
const ScX =styled.div`
  position: absolute;
  top:0px;
  right: -30px;
`

const ScBtn = styled.div`
  /* background-color: #2c278c; */
  border: none;
  color: #000000;
  width: 130px;
  height: 50px;
  font-weight: 100;
  border-radius: 10px;
  position: absolute;
  /* bottom: 130px; */
  right: 25px;
  z-index: 99;
`;