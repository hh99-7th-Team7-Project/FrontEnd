import React, { useState } from 'react'
import styled from 'styled-components'
import { getCookie } from '../../shared/Cookie'



const BoardCategory = ({title, cate}) => {
  const [x, setX] = useState()
  const [click, setClick] = useState(false)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)

  const nickname = getCookie("nickname")

  const clickRadio = (e) =>{
    setX(e.target.value)
    cate(e.target.value)
    console.log(e.target.value)
    setClick(!click)
  } 
   const clickRadio2 = (e) =>{
    setX(e.target.value)
    cate(e.target.value)
    console.log(e.target.value)
    setClick2(!click2)
  }
  const clickRadio3 = (e) =>{
    setX(e.target.value)
    cate(e.target.value)
    console.log(e.target.value)
    setClick3(!click3)
  }

  return (
    <>
    <ScCategory>
      <div style={{width:"130px",textAlign:"right", marginRight:"40px"}}>카테고리 선택</div>
      <ScMyrecipe click={click} >
        <input 
        type="radio" 
        id="카페 추천합니다"
        value="카페 추천합니다" 
        // checked={x ==="카페 추천합니다"}
        onClick={clickRadio}
        />
      <label htmlFor='카페 추천합니다'>카페 추천합니다</label>
      </ScMyrecipe>
      <ScRecommend click={click2}>
        <input 
        type="radio" 
        id="나만의 비밀 레시피" 
        value="나만의 비밀 레시피"
        // checked={x ==="나만의 비밀 레시피"}
        onClick={clickRadio2}/>
        <label htmlFor='나만의 비밀 레시피'>나만의 비밀 레시피</label>
      </ScRecommend>
      <ScEtc click={click3}>
        <input 
        type="radio" 
        id="기타" 
        value="기타"
        // checked={x ==="기타"}
        onClick={clickRadio3}/>
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
    placeholder="제목을 입력해주세요"
    />
    <span style={{marginRight:"20px"}}>{nickname}</span>
     </ScTitle>
    </>
  )
}

export default BoardCategory

const ScCategory = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`
const ScRadioWrap = styled.span`
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 30%;
  input{
    display: none;
  };
`
const ScMyrecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F1E3E8;
  border-radius: 100px;
  color: #D86F96;
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
  background: #EDE2F2;
border-radius: 100px;
padding: 2px 12px;
color: #A454CA;
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
  background: rgba(255, 201, 15, 0.2);
border-radius: 100px;
color: #F6C720;
border: ${(props) => (props.click ? "1px solid #F6C720" : "")};
input{
    display: none;
  };
`
const ScTitle =styled.div`
  display: flex;
  justify-content: space-between;
  input{
   border: none;
   width: 850px;
  };
  margin: 30px auto;
`