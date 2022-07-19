import React from 'react'
import styled from 'styled-components';

const Modal = ({showModal,closeModal}) => {
  return (
    <div>{showModal ? 
      <Background>
      
      <ModalContainer>
      <ScX onClick={closeModal}>X</ScX>
      <p>Coffind에 오신걸 환영합니다!</p>    
     <div>Coffind를 100% 즐기기 위한 방법을 설명합니다!</div>
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
    color: white;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 20rem;
    height: 50%;
    padding: 16px;
    background: rgb(25, 31, 44);
    border-radius: 10px;
    text-align: center;
`;

const ScX = styled.span`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: flex-end;
`;