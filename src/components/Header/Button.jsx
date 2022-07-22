import React, { useState } from 'react';
import Styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom'
import {deleteCookie, getCookie} from "../../shared/Cookie"
import styled from 'styled-components';

const Button = () => {
  const navigate = useNavigate()
const isLogin = getCookie("islogin")
  const[onair, setonair] = useState(false)

  React.useEffect(() => {
    if (isLogin !== undefined) {
      return setonair(true);
    }
  }, []);

  const logOut = (e) =>{
    deleteCookie("token");
    deleteCookie("profileImg");
    deleteCookie("nickname")
    deleteCookie("islogin")
    deleteCookie("userId")
    alert("로그아웃 완료!")
    setonair(false)
  }


  return (
    <ScWrap>
      {onair?
      (<>
      <ScBtn onClick={logOut}>로그아웃</ScBtn>
      <p> | </p>
      <ScBtn onClick={()=>{navigate("/mypage")}}>마이페이지</ScBtn>
      </>):
      (<>
      <ScBtn onClick={()=>{navigate("/login")}}>로그인</ScBtn>
        <p> | </p>
        <ScBtn onClick={()=>{navigate("/signup")}}>회원가입</ScBtn>
        </> )}
    </ScWrap>
  )
}

const ScWrap = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    color: #2C278C;
`;

const ScBtn = styled.div`
    margin: 20px;
    font-size: 13pt;
    color: #2C278C;
    &:hover {
    cursor: pointer;
  }
`;



export default Button