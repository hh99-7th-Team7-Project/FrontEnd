import React, { useState } from 'react'
import styled from 'styled-components'
import { getCookie } from '../../shared/Cookie'



const BoardCategoryUpdate = ({title, cate, head}) => {
  const [x, setX] = useState()

  const nickname = getCookie("nickname")

  const clickRadio = (e) =>{
    setX(e.target.value)
    cate(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
    <ScCategory>
    <ScRadioWrap>
      <input 
      type="radio" 
      id="카페 추천합니다"
      value="카페 추천합니다" 
      checked={x ==="카페 추천합니다"}
      onChange={clickRadio}
    
      />
     <span>카페 추천합니다</span>
    </ScRadioWrap>
    <ScRadioWrap>
      <input 
      type="radio" 
      id="나만의 비밀 레시피" 
      value="나만의 비밀 레시피"
      checked={x ==="나만의 비밀 레시피"}
      onChange={clickRadio}/>
      <span>나만의 비밀 레시피</span>
    </ScRadioWrap>
    <ScRadioWrap>
      <input 
      type="radio" 
      id="기타" 
      value="기타"
      checked={x ==="기타"}
      onChange={clickRadio}/>
     <span>기타</span>
    </ScRadioWrap>
    </ScCategory>
    <div>
      <span>제목</span>
    <input 
    type="text" 
    onChange={(e)=>{
      title(e.target.value)
    }}
    defaultValue={head?.title}
    />
    </div>
    <span>{nickname}</span>
    </>
  )
}

export default BoardCategoryUpdate

const ScCategory = styled.div`
  margin: 10px 0;
`
const ScRadioWrap = styled.span`
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 30%;
  /* input{
    visibility: hidden;
  }; */
  
`