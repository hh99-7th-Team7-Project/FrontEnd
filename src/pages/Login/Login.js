import React, { useRef, useState } from 'react'
//router
import { Link, useNavigate } from 'react-router-dom'
//cookie
import { setCookie } from '../../shared/Cookie'
//apis
import apis from '../../shared/api/main'
//swal
import Swal from 'sweetalert2';

//소셜로그인
import KaKaoLogin from './KaKaoLogin'
import GoogleLogin from './GoogleLogin'
import NaverLogin from './NaverLogin'
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL, NAVER_AUTH_URL } from '../../shared/SocialOAuth'

import styled from 'styled-components'
import character from '../../shared/svg/MainCharacter2.svg'
import { motion, AnimatePresence } from "framer-motion"
import Modal from '../../components/main/Modal'

const Login = (props) => {

  const navigate = useNavigate()
  //ref
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

const [showModal, setShowModal] = useState(false);

const openModal = () => {
  setShowModal(true);
}
const closeModal = () => {
  setShowModal(false);
}
  //로그인 onclick
  const loginClick = async () => {
    try {
      const response = await apis.postLogin(
        {
          username: emailRef.current.value,
          password: passwordRef.current.value
        }
      )

      console.log(response)
      console.log(response.headers)

      //쿠키설정
      setCookie("token", response.headers.authorization.split(" ")[1])
      setCookie("nickname", response?.data.nickname)
      setCookie("islogin", true)
      setCookie("profileImg", response?.data?.profileImage)
      setCookie("userId",response?.data?.userId)
      Swal.fire({
        title: '환영합니다.!',
        icon: 'success',
        confirmButtonText: '확인'
      })
      navigate("/")
    }
    catch (err) {
      Swal.fire({
        title: '이메일과 비밀번호를 확인해주세요',
        icon: 'error',
        confirmButtonText: '확인'
      })
    }
  }
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
    <ScWrap>
      <ScLogin>
      <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
       <ScHeadWrap>
        <ScLogo src={character} onClick={()=>{navigate('/')}}/>        
        </ScHeadWrap>
    </motion.div>
       
        <ScInputWrap>
          <input
            type="email"
            placeholder="Email"
            ref={emailRef} />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef} />
        </ScInputWrap>
        <ScButtonWrap>
          <button
            onClick={loginClick}
            style={{ backgroundColor: "black", color: "white" }}>로그인</button>
          <button
            onClick={() => { navigate("/signup") }}
            style={{ backgroundColor: "grey", color: "white" }}>회원가입</button>
        </ScButtonWrap>
        <ScText><hr />소셜 로그인<hr /></ScText>
        <ScSocialWrap>
          <a href={GOOGLE_AUTH_URL}><ScImg src="/구굴.jpg" /></a>
          {/* <a href={NAVER_AUTH_URL}> */}
          <ScImg src="/네이버.png" onClick={()=>{
            Swal.fire({
              title: '준비중입니다.',
              icon: 'info',
              confirmButtonText: '확인',
            })
          }} />
          {/* </a> */}
          <a href={KAKAO_AUTH_URL}><ScImg src="/카카오.jpg" /></a>
        </ScSocialWrap>
      </ScLogin>
    </ScWrap>
    </motion.div>
  )
}

export default Login

const ScWrap = styled.div`
display: flex;
width: 100%;
`

const ScLogo = styled.img`
 width: 300px;
 margin-top: 50px;
 padding-right: 60px;
`


const ScHeadWrap = styled.div`
/* background-color: yellow; */
margin-bottom: 48px;
text-align: center;
`
const ScLogin = styled.div`

display: flex;
flex: 6;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ScImageBox = styled.div`
flex:4;
height: 100vh;
/* position: absolute; */
background: url('https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/d818028e-d92a-4077-b35e-41f3c945e4a9.jpeg') center center no-repeat;
background-size:cover;
`

const ScInputWrap = styled.div`
display: flex;
flex-direction: column;
input{
  padding-left: 20px ;
  width: 462px;
  height: 60px;
  border-radius: 10px;
  margin: 10px 0;
  border: 1px #ddd solid;
  background-color: rgb(233, 230, 230);
} input::placeholder{
    color: black;
  }
`
const ScText = styled.h3`
display: flex;
flex-direction: row;
margin: 30px 0;
font-weight: bolder;
hr{
  width: 190px;
  border: none;
  border-bottom: 1px #bbb solid;
}
`
const ScButtonWrap = styled.div`
display: flex;
flex-direction: column;
margin-top: 50px;
button{
width: 482px;
height: 60px;
border-radius: 10px;
text-align: center;
cursor: pointer;
margin: 5px 0;
border: none;
}
`

const ScSocialWrap = styled.div`
display: flex;
justify-content: center;
width: 300px;
/* border: 1px solid black; */
padding: 0 90px;
a{
  display: flex;
  margin: 5px 20px;
}
`
const ScImg = styled.img`
width: 50px;
height: 50px;
border-radius: 5px;
`