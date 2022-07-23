import React from 'react'
import styled from 'styled-components';
import { setCookie } from '../../shared/Cookie';
import ImgSlideModal from './ImgSlideModal';

const Modal = ({showModal,closeModal}) => {
  const notSeenADay = ()=>{
    setCookie("not seen a day",true)
    closeModal()
  }


  return (
    <div>{showModal ? 
      <Background>
      <ModalContainer>
      <ImgSlideModal/>
      <ScX onClick={closeModal}>✖</ScX>
      <ScBtn onClick={notSeenADay}>오늘 하루 보지 않기</ScBtn>
     </ModalContainer>
     </Background> : null}</div>
  )
}

export default Modal

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.30);
    z-index: 1;
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    /* color: #2c278c; */
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 50.2%;
    height: 65%;
    /* padding: 20px; */

    border-radius: 10px;
    text-align: center;
    font-size: 16px;
`;
const ScX =styled.div`
  position: absolute;
  top:0px;
  right: -30px;
`

const ScBtn = styled.button`
  background-color: #2c278c;
  border: none;
  color: white;
  width: 130px;
  height: 50px;
  border-radius: 10px;
  position: absolute;
  bottom: 130px;
  right: 20px;
`;