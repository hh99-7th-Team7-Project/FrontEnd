import React from 'react'
import Styled from 'styled-components'

const RandomCoffee = () => {




  return (
    <RandomWrap>여기에 랜덤 커피가 들어갑니다.</RandomWrap>
  )
}

const RandomWrap = Styled.div`
    border: 2px solid black;
    margin: 20px;
`;

export default RandomCoffee