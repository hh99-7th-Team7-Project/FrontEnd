import React from 'react'
import { useNavigate } from 'react-router-dom';
import svg from './svg/Logo.svg'

const Logo = () => {
  const navigate = useNavigate()
  return (
    <>
  <img src={svg} onClick={()=>{navigate("/")}} alt="" style={{width:"165px"}}/>
  {/* <svg></svg> */}
  </>
  )
}


export default Logo