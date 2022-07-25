import React from 'react';
import {
    MobileButton,
  MobileCategory,
  HeaderInput,
  Logo,
} from '../../components/Header/A-HeaderIndex';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";

const MobileHeader = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: "(max-width: 1604px)",
  });


  return (

      <ScMobile>
        <ScHeaderBox>
          <Logo />          
          <ScCateBtnBox>
            <MobileCategory />
            { isMobile ?  null: <HeaderInput /> }
            <MobileButton />
          </ScCateBtnBox>
        </ScHeaderBox>
      </ScMobile>

  );
};


const ScMobile = styled.div`
  @media screen and (min-width: 350px){
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: space-around;
    width: 100%;
  }
`;

const ScHeaderBox = styled.div`  
display: flex;
flex-direction: column;
  align-items: center;
  /* min-width: 1222px; */
  height: 130px; 
  width: 100%;

`;

const ScCateBtnBox = styled.div`
    display: flex;    
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;    
`;

// const ScBar = styled.div`
//     display: flex;
//     gap: ;
// `

export default MobileHeader;
