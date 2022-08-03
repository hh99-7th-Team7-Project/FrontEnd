import React, { useRef, useState } from 'react';
/** CSS */
import styled from 'styled-components';
/** react-router-dom */
import { useNavigate } from 'react-router-dom';
/** svg 이미지 import */
import zoom from './svg/Zoom.svg';
/** Swal alert */
import Swal from 'sweetalert2';

const HeaderInput = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const [keyword, setKeyword]=useState()

  const onClick1 =()=>{
    if (searchRef?.current.value === "") {
      Swal.fire({
        title: '검색어를 입력해주세요!',
        text: '빈칸입니다',
        icon: 'warning',
        confirmButtonText: '확인',
      });      
    }else{
     navigate(`/search/${keyword}`) 
    }
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
    width: 40%;
    height: 38px;
    display: flex;
    border: 1px solid var(--main);
    border-radius: 20px;
    padding: 0 5px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
      width: 140%;
      margin: 30px 0 30px 0;
      display: flex;
      border-radius: 10px;
      padding: 0 5px;
      justify-content: center;
      align-items: center;
    
    }
`;

const ScInput = styled.input`
    border: none;
    height: 32px;
    width: 80%;
    padding: 0 8px;
    font-size: 12pt;
    &::placeholder{
      color: #ddd;
    }
    &:focus{
      outline: none;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.875em;
      border: none;
      width: 100%;
      &::placeholder{
      color: #ddd;
    }
    &:focus{
      outline: none;
    }
    }
  `

export default HeaderInput