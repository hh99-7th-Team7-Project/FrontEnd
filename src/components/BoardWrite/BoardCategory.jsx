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
    // console.log(e.target.value)
    setClick(true)
    setClick2(false)
    setClick3(false)
  } 
   const clickRadio2 = (e) =>{
    setX(e.target.value)
    cate(e.target.value)
    // console.log(e.target.value)
    setClick(false)
    setClick2(true)
    setClick3(false)
  }
  const clickRadio3 = (e) =>{
    setX(e.target.value)
    cate(e.target.value)
    // console.log(e.target.value)
    setClick(false)
    setClick2(false)
    setClick3(true)
  }

  return (
    <>
    <ScCategory>
      <ScMobile style={{width:"130px",textAlign:"right", marginRight:"40px"}}>카테고리 선택</ScMobile>
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
      <ScMobile style={{width:"130px",textAlign:"right"}}>제목</ScMobile>
      <input 
        type="text" 
        onChange={(e)=>{
        title(e.target.value)
        }}
        placeholder="제목을 입력해주세요"
      />
    <ScSpan style={{marginRight:"20px"}}>{nickname}</ScSpan>
     </ScTitle>
    </>
  )
}

export default BoardCategory

const ScCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 70px;
  border-top: 1px solid #2C278C;
  color: #2C278C;  
  @media screen and (max-width: 768px){
    padding: 3;
    width: 100%;
  }
`
const ScMobile = styled.div`
  @media screen and (max-width: 768px){
    display: none; 
  }
`;

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
  @media screen and (max-width: 768px){
    padding: 5;
    font-size: 1.1em;     
  }
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
  @media screen and (max-width: 768px){
    padding: 5;
    font-size: 1.1em;      
  }
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
    @media screen and (max-width: 768px) {
      font-size: 1.0em;
      
    }
  };
  @media screen and (max-width: 768px){
    padding: 5;
    font-size: 1.0em;
  }
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
  @media screen and (max-width: 768px){
    padding: 0;
    font-size: 1.1em;
  }
`

const ScSpan = styled.span`
  @media screen and (max-width: 768px){
    width: 100%;
    font-size: 1.0em;
  }
`;