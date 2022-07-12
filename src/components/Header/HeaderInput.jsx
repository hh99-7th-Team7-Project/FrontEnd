import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

const ScWrap = styled.div`    
    width: 483px;
    display: flex;
`;

const ScInput = styled.input`
    border: 1px solid #bbb;
    height: 29px;
    width: 483px;
    border-radius: 20px;
  `

export default HeaderInput