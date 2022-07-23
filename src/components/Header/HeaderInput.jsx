import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import zoom from './svg/Zoom.svg'

const HeaderInput = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const [keyword, setKeyword]=useState()
  console.log(keyword)

  const onClick1 =()=>{
    navigate(`/search/${keyword}`)
  }

  const onKeyPress1=(e)=>{
    if(e.key==="Enter"){
      onClick1()
    }
  }

  return (
    <ScWrap>
        <img onClick={onClick1} src={zoom} alt=""style={{cursor:"pointer"}}/>
        <ScInput type="search"
         ref={searchRef}
         placeholder="궁금하신 내용을 검색해보세요!"
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
        onKeyPress={onKeyPress1}
        />
        
    </ScWrap>
  )
}

const ScWrap = styled.div`    
    width: 483px;
    height: 38px;
    display: flex;
    border: 1px solid #bbb;
    border-radius: 20px;
    padding: 0 5px;
    justify-content: center;
    align-items: center;
`;

const ScInput = styled.input`
    border: none;
    height: 32px;
    width: 443px;
    padding: 0 8px;
    font-size: 12pt;
    &::placeholder{
      color: #ddd;
    }
    &:focus{
      outline: none;
    }
  `

export default HeaderInput