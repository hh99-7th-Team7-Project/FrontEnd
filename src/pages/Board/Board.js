import React, { useState } from 'react'
import Styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import { BoardList, PopularBoard,BoardListCategory } from "../../components/board/A-boardindex"
import styled from 'styled-components';
import { boardwrite,BoardLogo } from '../../shared/svg/A-index'



const Board = () => {
  const navigate = useNavigate()
  const [category, setCategory] = useState(0)
  console.log(category)

  return (
    <>
      <div style={{ margin: "auto" }}>
        <Header />
      </div>
      <ScWrap>
        <ScTopCard>
          <img src={BoardLogo} alt="" style={{width:"100%"}}/>
          <ScTopWord style={{ margin: "167px 35% 159px 60%" }}>
            <ScMainTitle>커피를 사랑하는<br/> 
              사람들의 커피 연구소</ScMainTitle>
            <Scwrite onClick={() => { navigate("/board/write") }}><img src={boardwrite} alt=""/><ScBoardWrite>글쓰러 가기</ScBoardWrite></Scwrite>
          </ScTopWord>
         </ScTopCard> 
          <PopularBoard />
          <div style={{display:"flex", flexDirection:"column"}}>
          <ScCategory>
           
          <ScAll onClick={() => { setCategory(0) }}>All</ScAll>
          <ScMyrecipe onClick={() => { setCategory("나만의 비밀 레시피") }}>나만의 레시피</ScMyrecipe>
          <ScRecommend onClick={() => { setCategory("카페 추천합니다") }}>카페 추천 합니다</ScRecommend>
          <ScEtc onClick={() => { setCategory("기타") }}>사담</ScEtc>
        </ScCategory>
       {category===0&& <BoardList />}
       {category!==0&& <BoardListCategory category={category}/>}
        </div>
      </ScWrap>
    </>
  )
}

const ScWrap = Styled.div`
  display: column;
`;

const ScTopCard = styled.div`
   display: flex;
  height: 400px;
  position: relative;
  /* background-color: #ddd; */
`

const ScTopWord = styled.div`
position: absolute;
`
const ScMainTitle = styled.div`
width: 190%;
height: 74px;
font-size: 30px;
line-height: 37px;
margin-bottom: 30px;
font-family: 'SUIT bold';
`

const ScBoardWrite = styled.span`
 
`;

const Scwrite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-weight: 700;
  text-align: center;
  color: white;
  width: 166px;
  height: 49px;
  font-size: 20px;
  border-radius: 10px;
`
const ScCategory = styled.div`
display: flex;
font-size: 14px;
font-weight: 700;
width: 332px;
margin: 0 0 0 18%;
gap: 8px;
`

const ScAll = styled.div`
background: rgba(44, 39, 140, 0.2);
border-radius: 100px;
color: #2C278C;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  cursor: pointer;
`
const ScMyrecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F1E3E8;
  border-radius: 100px;
  color: #D86F96;
  padding: 2px 12px;
  cursor: pointer;
`
const ScRecommend = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  background: #EDE2F2;
border-radius: 100px;
padding: 2px 12px;
color: #A454CA;
cursor: pointer;
`
const ScEtc = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  background: rgba(255, 201, 15, 0.2);
border-radius: 100px;
color: #F6C720;
cursor: pointer;
`

export default Board