import React, {useState} from 'react';
import {
  Button,
  Category,
  HeaderInput,
  Logo,
} from '../../components/Header/A-HeaderIndex';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import {Outlet} from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: "(max-width: 1604px)",
  });

  const [ toggleBtn, setToggleBtn ] = useState(false);

  const handleToggleBtn = () => {
    setToggleBtn(true);    
  }


  return (
    <>
        <ScHeaderBox>
          <Logo />
          <Category />
          { isMobile ?  null: <HeaderInput /> }
          <Button />
          <ScToggleBtn href="" onClick={()=>{
            handleToggleBtn();
          }}>
            <FontAwesomeIcon icon={faBars} />
          </ScToggleBtn>
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
    padding: 8px 24px;
    height: 100%;
  }
`;

const ScToggleBtn = styled.a`
  position: absolute;
  right: 2em;
  font-size: 1.5em;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

// const ScBar = styled.div`
//     display: flex;
//     gap: ;
// `

export default Header;
