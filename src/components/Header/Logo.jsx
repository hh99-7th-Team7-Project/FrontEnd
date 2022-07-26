import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import svg from './svg/Logo.svg'

const Logo = () => {
  const navigate = useNavigate()
  return (
    <>
      <ScLogo src={svg} onClick={()=>{navigate("/")}} alt="" style={{width:"165px"}}/>
      {/* <svg></svg> */}
    </>
  )
}

const ScLogo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;


export default Logo