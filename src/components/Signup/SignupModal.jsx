import React from 'react'
import { useRef } from 'react';
import styled from 'styled-components';

import apis from '../../shared/api/main';

const SignupModal = ({showModal,closeModal,signupAfter,email}) => {
  const verifyRef = useRef()
  const sendVerify =async()=>{
     const veri = await apis.verifyDone({username:email,code: verifyRef.current.value})
                .then((res)=>{
                  signupAfter()

                })
                .catch((err)=>{
                  alert("인증에 실패하였습니다 다시 시도해 주세요.")
                })
  }

  const resendEmail =async()=>{
   const resend = await apis.verifyEmail({username:email})
              .then((res)=>{
                alert("인증번호를 재전송 했습니다")
              }).catch((err)=>{
                alert("인증번호 전송에 실패 했습니다.")
              })
  }
  return (
    <div>{showModal ? 
      <Background>
      <ModalContainer>
      <span>{email}로 인증번호 전송이 완료되었습니다.</span>
      <span onClick={closeModal}>X</span>
     <input
     type="text"
     placeholder="인증번호를 입력해주세요"
     ref={verifyRef}
     />
     <button onClick={sendVerify}>제출하고 가입완료하기</button>
     <button>인증번호 재전송하기</button>
     </ModalContainer>
     </Background> : null}</div>
  )
}

export default SignupModal

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