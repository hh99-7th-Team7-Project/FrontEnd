import React, { useState } from 'react'
import styled from 'styled-components'
import { getCookie } from '../../shared/Cookie'



const BoardCategoryUpdate = ({title, cate, head}) => {

  const [x, setX] = useState()
  const [click, setClick] = useState(false)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)

  const nickname = getCookie("nickname")

  const clickRadio = (e) =>{
    setX(e.target.value)
    cate(e.target.value)
    setClick(true)
    setClick2(false)
    setClick3(false)
  }
  const clickRadio2 = (e) =>{
    setX(e.target.value)
    cate(e.target.value)
    setClick(false)
    setClick2(true)
    setClick3(false)
  }
  const clickRadio3 = (e) =>{
    setX(e.target.value)
    cate(e.target.value)
    setClick(false)
    setClick2(false)
    setClick3(true)
  }


  return (
    <>
    <ScCategory>
    <div style={{width:"130px",textAlign:"right", marginRight:"40px"}}>카테고리 선택</div>
    <ScMyrecipe click={click}>
      <input 
      type="radio" 
      id="카페 추천합니다"
      value="카페 추천합니다" 
   
      onChange={clickRadio}
      />
 <label htmlFor='카페 추천합니다'>카페 추천합니다</label>
    </ScMyrecipe>
    <ScRecommend click={click2}>
      <input 
      type="radio" 
      id="나만의 비밀 레시피" 
      value="나만의 비밀 레시피"

      onChange={clickRadio2}/>
       <label htmlFor='나만의 비밀 레시피'>나만의 비밀 레시피</label>
    </ScRecommend>
    <ScEtc click={click3}>
      <input 
      type="radio" 
      id="기타" 
      value="기타"

      onChange={clickRadio3}/>
 <label htmlFor='기타'>기타</label>
    </ScEtc>
    </ScCategory>
    <ScTitle>
    <div style={{width:"130px",textAlign:"right"}}>제목</div>
    <input 
    type="text" 
    onChange={(e)=>{
      title(e.target.value)
    }}
    defaultValue={head?.title}
    />
   
    <span style={{marginRight:"20px"}}>{nickname}</span> 
    </ScTitle>
    </>
  )
}

export default BoardCategoryUpdate

const ScCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 70px;
  border-top: 1px solid #2C278C;
  color: #2C278C;
`

const ScMyrecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.click ? "#F1E3E8" : "#ddd")};
  border-radius: 100px;
  color: ${(props) => (props.click ? "#D86F96" : "#7e7c7c")};
  border: ${(props) => (props.click ? "1px solid #D86F96" : "")};
  padding: 2px 12px;
  input{
    display: none;
  };
`
const ScRecommend = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.click ? "#EDE2F2" : "#ddd")};
border-radius: 100px;
padding: 2px 12px;
color: ${(props) => (props.click ? "#A454CA" : "#7e7c7c")};
border: ${(props) => (props.click ? "1px solid #A454CA" : "")};
input{
    display: none;
  };
`
const ScEtc = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  background: ${(props) => (props.click ? "rgba(255, 201, 15, 0.2)" : "#ddd")};
border-radius: 100px;
color: ${(props) => (props.click ? "#F6C720" : "#7e7c7c")};
border: ${(props) => (props.click ? "1px solid #F6C720" : "")};
input{
    display: none;
  };
`
const ScTitle =styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  color: #2C278C;
  justify-content: space-between;
  border-top: 1px solid #2C278C;
  border-bottom: 1px solid #2C278C;
  margin-bottom: 40px;
  input{
   border: none;
   width: 850px;
  };

`