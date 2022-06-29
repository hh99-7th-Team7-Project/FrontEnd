import React, { useRef } from 'react'
//router
import { Link, useNavigate } from 'react-router-dom'
//cookie
import { setCookie } from '../../shared/Cookie'
//apis
import apis from '../../shared/api/main'

//소셜로그인
import KaKaoLogin from './KaKaoLogin'
import GoogleLogin from './GoogleLogin'
import NaverLogin from './NaverLogin'

import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL, NAVER_AUTH_URL } from '../../shared/SocialOAuth'

const Login = () => {

  const navigate = useNavigate()
  //ref
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

      alert("환영합니다")
      navigate("/main")
    }
    catch (err) {
      alert("아이디와 비밀번호를 확인해주세요")
    }
  }
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        ref={emailRef}/>
      <input
          type="password"
          placeholder="Password"
          ref={passwordRef}/>
      <button onClick={loginClick}>로그인</button>
      <a href={KAKAO_AUTH_URL}> <img src="/kakao_login_medium_narrow.png" /></a>
      <a href={GOOGLE_AUTH_URL}> 구굴구굴</a>
      <a href={NAVER_AUTH_URL}>네이버네이버</a>
    </div>
  )
}

export default Login