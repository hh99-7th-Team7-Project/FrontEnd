import React from 'react'
import styled from 'styled-components'
import character from '../../shared/svg/MainCharacter.svg'

const LottoPoint = () => {


  return (
    <ScWrap>
      <ScWordWrap>
    <h3>Lucky Point Game!</h3>
    <ScButton>뽑기</ScButton>
    </ScWordWrap>
    <img src={character} style={{width:"240px"}}/>
    
    </ScWrap>
  )
}

export default LottoPoint

const ScWrap = styled.div`
  display: flex;
  background-image: url('/checker.png');
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40vw;
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
  width: 170px;
  height: 47px;
`