import React from 'react';
import { useNavigate } from 'react-router-dom';
//라우터에서 특정페이지에서만 헤더나오게 설정
import {Outlet} from "react-router"
//css
import {
  Button,
  Category,
  HeaderInput,
  Logo,
} from '../../components/Header/A-HeaderIndex';

import styled from 'styled-components';





const Header = () => {

  return (
        <>
          <ScHeaderBox>
            <Logo />
            <Category />
            <HeaderInput />
            <Button/>
          </ScHeaderBox>
          <Outlet />
        </>
  );
};



const ScHeaderBox = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* min-width: 1222px; */
  height: 130px;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 8px 12px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    height: 100%;
  }
`;

const ScToggleBtn = styled.div`
  position: absolute;
  right: 2em;
  font-size: 1.5em;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
`;

// const ScBar = styled.div`
//     display: flex;
//     gap: ;
// `

export default Header;
