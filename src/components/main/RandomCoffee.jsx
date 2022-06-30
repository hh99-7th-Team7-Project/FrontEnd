import React from 'react'
import Styled from 'styled-components'

const RandomCoffee = () => {




  return (
    <ScRandomWrap>여기에 랜덤 커피가 들어갑니다.</ScRandomWrap>
  )
}

const ScRandomWrap = Styled.div`
    border: 2px solid black;
    width: 50vw;    
    margin: 20px;
`;

export default RandomCoffee