import React, { useState } from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom'
import {deleteCookie, getCookie} from "../../shared/Cookie"

const Button = () => {
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
      <ScP> | </ScP>
      <Link to="/mypage"><ScBtn>마이 프로필</ScBtn></Link>
      </>):
      (<>
      <Link to="/login"><ScBtn>로그인</ScBtn></Link>
        <ScP> | </ScP>
        <Link to="/signup"><ScBtn>회원가입</ScBtn></Link>
        </> )}
    </ScWrap>
  )
}

const ScWrap = Styled.div`
    display: flex; 
`;

const ScBtn = Styled.div`
    margin: 30px;
`;

const ScP = Styled.p`
    margin: 30px auto;
`;

export default Button