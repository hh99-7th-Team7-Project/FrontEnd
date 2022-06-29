import React from 'react'
import Styled from 'styled-components';

const Logo = () => {
  return (
    <Wrap>
        <h1>여기에 로고가 들어갑니다.</h1>
    </Wrap>
  )
}

const Wrap = Styled.div`
    margin: 20px auto;
    text-align: center;    
    width: 500px;
    height: 200px;

`;

export default Logo