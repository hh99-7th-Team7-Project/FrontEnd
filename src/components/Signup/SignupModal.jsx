import React from 'react'
import { useRef } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import * as Sentry from "@sentry/react";
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
                  Sentry.captureException(err);
                })
  }

  const resendEmail =async()=>{
   const resend = await apis.verifyEmail({username:email})
              .then((res)=>{
                Swal.fire({
                  title: '인증번호를 재 전송 하였습니다!',
                  icon: 'success',
                  confirmButtonText: '확인'
                })
              }).catch((err)=>{
                alert("인증번호 전송에 실패 했습니다.")
                Sentry.captureException(err);
              })
  }
  return (
    <div>{showModal ? 
      <Background>
      <ModalContainer>
        <ScWrap>
      <div>"{email}"로 <br/>인증번호 전송이 완료되었습니다.</div>
      <ScClose onClick={closeModal}>✖</ScClose>
     <input
     style={{height:"30px",width:'200px',borderRadius:"10px", backgroundColor:"#dddddd65", paddingLeft:"10px",border:"none", marginTop:"20px"}}
     type="text"
     placeholder="인증번호를 입력해주세요"
     ref={verifyRef}
     />
     <div style={{display:"flex", gap:"10px"}}>
      <ScButton onClick={resendEmail}>인증번호 재전송</ScButton>
     <ScButton onClick={sendVerify}>가입완료</ScButton>
     </div>
     </ScWrap>
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
    background-color: rgba(0,0,0,0.60);
    z-index: 1;
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    color: var(--main);
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 20rem;
    height: 50%;
    padding: 1em;
    background: white;
    border-radius: 10px;
    text-align: center;
  
`;

const ScWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 25% auto; */
  height: 99%;
  border-radius: 10px;
  border: 3px solid var(--main);
  div{
    margin-top: 20px;
  }
`

const ScClose =styled.div`
  position: absolute;
  top: 0;
  right: -6%;
`
const ScButton =styled.div`
  height: 40px;
  width: 130px;
  font-size: 0.875em;
  font-weight: 300;
  border: 1px white solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  background-color: var(--main);
  color: white;
`