import React from 'react'
/** CSS */
import styled from 'styled-components';
/** react-router-dom */
import { useNavigate } from 'react-router-dom';
/** svg 이미지 import */
import svg from './svg/Logo.svg'

const Logo = () => {
  const navigate = useNavigate()
  return (
    <>
      <ScLogoBox>
        <ScLogo src={svg} onClick={()=>{navigate("/")}} alt="" style={{width:"165px"}}/>
        {/* <svg></svg> */}
      </ScLogoBox>
    </>
  )
}


const ScLogoBox = styled.div`
  @media screen and (max-width:768px){
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;  
    margin : 30px 0 20px 20px;
    width: 90%;
  }
`;

const ScLogo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;


export default Logo