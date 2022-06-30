import React from 'react';
import Styled from 'styled-components';

const Button = () => {
  return (
    <ScWrap>
        <ScBtn>로그인</ScBtn>
        <ScP> | </ScP>
        <ScBtn>회원가입</ScBtn>
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