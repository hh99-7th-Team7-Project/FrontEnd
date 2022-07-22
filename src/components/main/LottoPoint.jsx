import React from 'react'
import styled from 'styled-components'
import character from '../../shared/svg/MainCharacter.svg'
import "./flipcard.css"


const LottoPoint = () => {


  return (
    <div className='container'>
              <ScWrap className='item front'>
                <ScWordWrap>
              <h1
              style={{width:"100px", marginBottom:"20px",lineHeight: "37px"}}
              >Lucky Point Game!</h1>
              <ScButton>뽑기</ScButton>
              </ScWordWrap>
              <img src={character} style={{height:"240px"}} alt=""/>
              </ScWrap>
              
              <ScWrap className='item back'>
              <ScWordWrap>
              <h1
              style={{width:"100px", marginBottom:"20px",lineHeight: "37px"}}
              >Lucky Point Game!</h1>
              <ScButton>뽑기</ScButton>
              </ScWordWrap>
              <img src={character} style={{height:"240px"}} alt=""/>
              </ScWrap>
    </div>
  )
}

export default LottoPoint

const ScWrap = styled.div`
  display: flex;
  background-image: url('/checker.png');
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 38vw;
  height: 330px;
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