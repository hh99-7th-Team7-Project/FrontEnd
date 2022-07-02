import React, { useEffect } from 'react'
import Styled from 'styled-components'
import apis from '../../shared/api/main'

const RandomCoffee = () => {

  // useEffect(()=>{
  //   apis.getRandomCoffee()
  // },[])



  return (
    <ScRandomWrap>여기에 랜덤 커피가 들어갑니다.</ScRandomWrap>
  )
}

const ScRandomWrap = Styled.div`
    border: 2px solid black;
    margin: 20px;
`;

export default RandomCoffee