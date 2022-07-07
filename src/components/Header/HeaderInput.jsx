import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';

const HeaderInput = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const [keyword, setKeyword]=useState()
  console.log(keyword)



  return (
    <ScWrap>
        <ScInput type="search" ref={searchRef}
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
        />
        <button onClick={()=>{
          navigate(`/search/${keyword}`)
          //
        }}>검색</button>
    </ScWrap>
  )
}

const ScWrap = Styled.div`    
    width: 200px;
    margin-top: 30px;
`;

const ScInput = Styled.input`
    border-radius: 3px;
    border: 1px solid black;
    
`;

export default HeaderInput