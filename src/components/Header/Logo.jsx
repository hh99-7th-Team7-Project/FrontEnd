import React from 'react'
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';
import logo from '../../Image/Logo/logo.png'

const Logo = () => {
  const navigate = useNavigate()
  return (
    <ScWrap>
        <ScImg src={logo} onClick={()=>{navigate("/")}}/>
        <p>이건 예시입니다.</p>       
    </ScWrap>
  )
}

const ScWrap = Styled.div`     
  display: column;
`;

const ScImg = Styled.img`
  width: 100px;
  padding-top: 3px;
  border-radius: 20px;
`;


export default Logo