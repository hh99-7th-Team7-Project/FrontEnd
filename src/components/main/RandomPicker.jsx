import React from 'react'
import styled from 'styled-components'
import character from '../../shared/svg/MainCharacter2.svg'
import "./flipcard.css"
import RandomCoffee from './RandomCoffee'

const RandomPicker = () => {


  return (
    <div className='container'>
            <ScWrap className='item front'>
              <ScWordWrap>
            <h1 style={{width:"100px", marginBottom:"20px",lineHeight: "37px"
}}>Today's coffee?</h1>
            <ScButton>골라보기</ScButton>
            </ScWordWrap>
            <img src={character} style={{height:"240px"}}/>
            </ScWrap>
            <ScWrap className='item back'>
              <RandomCoffee/>
              {/* <ScWordWrap>
            <h1 style={{width:"100px", marginBottom:"20px"}}>Today's coffee?</h1>
            <ScButton>골라보기</ScButton>
            </ScWordWrap>
            <img src={character} style={{height:"240px"}}/> */}
            </ScWrap>
    </div>
  )
}

export default RandomPicker

const ScWrap = styled.div`
  display: flex;
  background-image: url('/checker.png');
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* width: 38vw;
  height: 330px; */
  border:1px #bbb solid;
  border-radius: 12px;
  margin-left: 30px;
`
const ScWordWrap =styled.div`
  
`

const ScSquare = styled.img`
  border:  1px #ddd solid;
  height: 164px;
  width: 131px;
  background-color: #d9d9d9;
`

const ScButton = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px navy solid;
  border-radius: 8px;
  background-color: navy;
  color:white;
  width: 150px;
  height: 47px;
`