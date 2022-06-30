import React from 'react'
import Styled from 'styled-components';
import logo from '../../Image/Logo/logo.png'

const Logo = () => {
  return (
    <ScWrap>
        <ScImg src={logo}/>
        <p>이건 예시입니다.</p>       
    </ScWrap>
  )
}

const ScWrap = Styled.div`
  margin-left: 40px;      
  display: column;
`;

const ScImg = Styled.img`
  width: 100px;
  padding-top: 3px;
  border-radius: 20px;
`;


export default Logo