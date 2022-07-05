/* eslint-disable array-callback-return */
import React, { useState,useEffect } from 'react'
import Styled from 'styled-components'
import apis from '../../shared/api/main'

const RandomCoffee = () => {

  const [ coffee, setCoffee ] = useState("");

  const coffeeBrand = [
    "스타벅스",
    "이디야",    
    "탐앤탐스",
    "드롭탑",
    "더벤티",
    "엔젤인어스",
    "빽다방",
    "커피빈",
    "컴포즈커피",
    "할리스",
    "카페베네",
    "폴바셋"
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const randomCoffee = (() => {

    const random = Math.floor(Math.random()*coffeeBrand.length);
    setCoffee(coffeeBrand[random]);

  })

  useEffect(()=>{

    randomCoffee();
  },[]);


  return (
    <ScRandomWrap>
      <ScTitle>랜덤 음료</ScTitle>
        <ScBrand>
          {coffeeBrand.map((item,index)=>{
            <ScBrandTitle key={index}>{item.id}</ScBrandTitle>
          })}
                   
        </ScBrand>
      <h2>{coffee}</h2>
      <button onClick={()=>{
        randomCoffee();
      }}>랜덤뽑기</button>
    </ScRandomWrap>
  )
}

const ScRandomWrap = Styled.div`
    border: 2px solid black;
    margin: 20px;
`;

const ScTitle = Styled.h1`  
  color: brown;
`;

const ScBrand = Styled.div`
  display: flex;  
  width: 100%;  
`;

const ScBrandTitle = Styled.p`

`;

export default RandomCoffee