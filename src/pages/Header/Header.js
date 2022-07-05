import React from 'react';
import Styled from 'styled-components';
import Logo from '../../components/Header/Logo';
import Category from '../../components/Header/Category';
import HeaderInput from '../../components/Header/HeaderInput';
import Button from '../../components/Header/Button';
import { useNavigate } from 'react-router-dom';

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

const ScHeaderBox = Styled.header`    
    display: flex;
    align-item: center;
    max-width:1200px;
    width:100%;
    border: 1px red solid;
`;

export default Header