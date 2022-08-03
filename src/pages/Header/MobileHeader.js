import React, { useState } from 'react';
//라우터에서 특정페이지에서만 헤더나오게 설정
import { Outlet } from "react-router";
//css
import styled from 'styled-components';
/** component */
import {
  Button,
  Category,
  HeaderInput,
  Logo,
} from '../../components/Header/A-HeaderIndex';
/** svg 이미지 import */
import zoom from '../../components/Header/svg/Zoom.svg';
/** fontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Header = () => {



  const [ categoryVisible , setCategoryVisible ] = useState(false);
  const [ buttonVisible , setButtonVisible ] = useState(false);
  const [ inputVisible , setInputVisible ] = useState(false);
  const [ toggleBtn, setToggleBtn ] = useState(false);



  return (
      <>
        <ScHeaderBox> 
          <Logo/> 
          <ScGap>        
            {categoryVisible ? <Category  /> : null }
            { inputVisible ?  <HeaderInput /> : null }          
            {buttonVisible ? <Button /> : null }
          </ScGap>
        </ScHeaderBox>
          <ScZoom  
            onClick={()=>{
            setInputVisible(!inputVisible);
            if(categoryVisible&&buttonVisible){
                  setCategoryVisible(false);
                  setButtonVisible(false);
                }
              }}
              src={zoom} alt=""style={{cursor:"pointer"}}/>
            <ScToggleBtn onClick={()=>{                      
              setToggleBtn(!toggleBtn);           
              setCategoryVisible(!categoryVisible);
              setButtonVisible(!buttonVisible);
              if(inputVisible){
                setInputVisible(false);
              }
            }}>
            <FontAwesomeIcon style={{color:"#2c278c"}} icon={faBars} />
          </ScToggleBtn>
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
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    height: 10%;
  }
`;

const ScZoom = styled.img`
  width: 5%;
  position: absolute;
  left: 25px;
  top: 23.0px;
`

const ScToggleBtn = styled.div`
  position: absolute;
  right: 2em;
  font-size: 1.5em;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ScGap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  margin: auto;
  
`

// const ScBar = styled.div`
//     display: flex;
//     gap: ;
// `

export default Header;
