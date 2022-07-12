import React from 'react'
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';
import logo from '../../Image/Logo/logo.png'
import svg from './Logo.svg'

const Logo = () => {
  const navigate = useNavigate()
  return (
 <img src={svg} onClick={()=>{navigate("/")}}/>
  )
}


export default Logo