import React from 'react'
import styled from 'styled-components'

const LottoPoint = () => {


  return (
    <ScWrap>
    <h3>행운의 포인트 뽑기</h3>
    <ScSquare/>
    <ScButton>뽑기</ScButton>
    </ScWrap>
  )
}

export default LottoPoint

const ScWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 330px;
  border:1px #bbb solid;
  border-radius: 12px;
  background-color: #989898;
  margin-left: 30px;
`

const ScSquare =styled.img`
  border:  1px #ddd solid;
  height: 164px;
  width: 131px;
  background-color: #d9d9d9;
`

const ScButton =styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px white solid;
  border-radius: 8px;
  background-color: white;
  width: 201px;
  height: 47px;
`