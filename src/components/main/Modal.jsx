import React from 'react'
import styled from 'styled-components';
import { setCookie } from '../../shared/Cookie';
import ImgSlideModal2 from './ImgSlideModal2';

const Modal = ({showModal,closeModal}) => {

  //오늘 하루 보지 않기 구현
  const notSeenADay = ()=>{
    setCookie("not seen a day",true)
    closeModal()
  }


  return (
    <div>{showModal ? 
      <Background>
      <ModalContainer>
      <ImgSlideModal2/>
      <ScX onClick={closeModal}>✖</ScX>
      <ScBtn onClick={notSeenADay}>오늘 더 보지 않기</ScBtn>
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
    img{
      width: 100%;
    }
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 960px;
    width: 80%;
    border-radius: 10px;
    text-align: center;
    font-size: 1em;
`;
const ScX =styled.div`
  position: absolute;
  font-size: 26px;
  top:0px;
  right: -30px;
  color: white;
  &:hover{
    cursor: pointer;
  }
`

const ScBtn = styled.div`
  border: none;
  color: #000000;
  width: 120px;
  font-weight: 100;
  border-radius: 10px;
  position: absolute;
  z-index: 99;
  right: 35px;
  bottom:30px;
  border: 1px solid black;
  &:hover{
    cursor: pointer;
  }

`;