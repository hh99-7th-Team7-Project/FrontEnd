import React from 'react';
import Styled from 'styled-components';
import Logo from '../../components/Header/Logo';
import Category from '../../components/Header/Category';
import HeaderInput from '../../components/Header/HeaderInput';
import Button from '../../components/Header/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate()

  return (
    <ScHeaderBox>

        <Logo />
        <Category/>
        <HeaderInput/>

        <Button/>
    </ScHeaderBox>
  )
}

const ScHeaderBox = styled.div`    
    display: flex;
    flex-direction: row ;
    justify-content: space-between;
    align-items: center;
    min-width:1222px;
    height: 130px;
`;

// const ScBar = styled.div`
//     display: flex;
//     gap: ;
// `

export default Header