import React from 'react';
import Styled from 'styled-components';
import Logo from '../../components/Header/Logo';
import Category from '../../components/Header/Category';
import HeaderInput from '../../components/Header/HeaderInput';
import Button from '../../components/Header/Button';

const Header = () => {
  return (
    <ScHeaderBox>
        <Logo/>
        <Category/>
        <HeaderInput/>
        <Button/>
    </ScHeaderBox>
  )
}

const ScHeaderBox = Styled.header`    
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-item: center;
`;

export default Header