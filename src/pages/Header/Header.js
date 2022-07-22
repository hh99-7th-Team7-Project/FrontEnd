import React from 'react';
import {
  Button,
  Category,
  HeaderInput,
  Logo,
} from '../../components/Header/A-HeaderIndex';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  return (
    <ScHeaderBox>
      <Logo />
      <Category />
      <HeaderInput />

      <Button />
    </ScHeaderBox>
  );
};

const ScHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 1222px;
  height: 130px;
`;

// const ScBar = styled.div`
//     display: flex;
//     gap: ;
// `

export default Header;
