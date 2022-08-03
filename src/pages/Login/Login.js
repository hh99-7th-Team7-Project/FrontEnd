import React, { useRef } from 'react'
//router
import { useNavigate } from 'react-router-dom'
//cookie
import { setCookie } from '../../shared/Cookie'
//apis
import apis from '../../shared/api/main'
//swal
import Swal from 'sweetalert2';

//소셜로그인
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL} from '../../shared/SocialOAuth'
//css
import styled from 'styled-components'
import character from '../../shared/svg/MainCharacter2.svg'
//애니메이션등장
import { motion } from "framer-motion"

const Login = (props) => {

  const navigate = useNavigate()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  //로그인 onclick
  const loginClick = async () => {
    try {
      const response = await apis.postLogin(
        {
          username: emailRef.current.value,
          password: passwordRef.current.value
        }
      )

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
          <div>
          <a href={GOOGLE_AUTH_URL}><ScImg src="/구굴.jpg" /></a></div>
          <div><a href={KAKAO_AUTH_URL}><ScImg src="/카카오.jpg" /></a></div>
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
@media screen and (max-width: 768px){
    margin: auto;
  }
`

const ScLogo = styled.img`
 width: 300px;
 margin-top: 50px;
 padding-right: 60px;
 @media screen and (max-width: 768px){
    /* margin: auto; */
    width: 40%;
    padding-right:0;
    
  }
`


const ScHeadWrap = styled.div`
margin-bottom: 48px;
text-align: center;

`
const ScLogin = styled.div`

display: flex;
flex: 6;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px){
    width: 40%;
    padding-right:0;
    
  }
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
  @media screen and (max-width: 768px){
    width: 100%;
    input{
  padding-left: 20px ;
  width: 80%;
  height: 60px;
  border-radius: 10px;
  margin: 10px auto;
  
  background-color: rgb(233, 230, 230);
}
    
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
@media screen and (max-width: 768px){
  hr{
  width: 90px;
  border: none;
  border-bottom: 1px #bbb solid;
}
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
@media screen and (max-width: 768px){
    width: 90%;
    padding-right:0;
    button{
      width: 100%;
    }
  }
`

const ScSocialWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
gap:40px;
padding: 0 90px;
@media screen and (max-width: 768px){
    /* margin: auto; */
    width: 100%;
    padding-right:0;
    padding: 0;
  }
`
const ScImg = styled.img`
width: 50px;
height: 50px;
border-radius: 5px;
`