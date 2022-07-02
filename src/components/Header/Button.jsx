import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom'

const Button = () => {
  return (
    <ScWrap>
        <Link to="/login"><ScBtn>로그인</ScBtn></Link>
        <ScP> | </ScP>
        <Link to="/signup"><ScBtn>회원가입</ScBtn></Link>
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