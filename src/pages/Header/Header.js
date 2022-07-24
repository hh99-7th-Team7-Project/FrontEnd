import React from 'react';
import {
  Button,
  Category,
  HeaderInput,
  Logo,
} from '../../components/Header/A-HeaderIndex';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <ScHeaderBox>
      <Logo />
      <Category />
      { isMobile ? null: <HeaderInput />}
      <Button />
    </ScHeaderBox>
  );
};

const ScHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  /* min-width: 1222px; */
  height: 130px;
`;

// const ScBar = styled.div`
//     display: flex;
//     gap: ;
// `

export default Header;
