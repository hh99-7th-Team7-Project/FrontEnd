import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//component
import { BoardList, PopularBoard, BoardListCategory,PopularBoardMobile } from "../../components/board/A-boardindex"
// css
import styled from 'styled-components';
import { boardwrite, BoardLogo, BoardMini1 } from '../../shared/svg/A-index'
import { useMediaQuery } from 'react-responsive';


const Board = () => {
  const navigate = useNavigate()
  const [category, setCategory] = useState(0)


  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (

    <>
        <ScWrap>
          <ScTopCard>
            <ScLogo1 src={BoardLogo} alt="" style={{ width: "100%" }} />
            <ScLogo2 src={BoardMini1} alt="" style={{ width: "100%" }} />
            <ScTopWord>
              <ScMainTitle>커피를 사랑하는<br /> 사람들의 커피 연구소</ScMainTitle>
              <Scwrite onClick={() => { navigate("/board/write") }}>
                <img src={boardwrite} alt="" />
                <ScBoardWrite>글쓰러 가기</ScBoardWrite>
              </Scwrite>
            </ScTopWord>
          </ScTopCard>
          {isMobile?<PopularBoardMobile/> :<PopularBoard />}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ScCategory>
              <ScAll onClick={() => { setCategory(0) }}>All</ScAll>
              <ScMyrecipe onClick={() => { setCategory("나만의 비밀 레시피") }}>나만의 비밀 레시피</ScMyrecipe>
              <ScRecommend onClick={() => { setCategory("카페 추천합니다") }}>카페 추천 합니다</ScRecommend>
              <ScEtc onClick={() => { setCategory("기타") }}>기타</ScEtc>
            </ScCategory>
            {category === 0 && <BoardList />}
            {category !== 0 && <BoardListCategory category={category} />}
          </div>
        </ScWrap>
    </>
  )
}

const ScWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1200px;
  width: 90%;
  margin: auto;
  @media screen and (max-width: 768px){
    margin: auto;
    width: 100%;
  }
`;

const ScLogo1 = styled.img`
@media screen and (max-width: 768px) {
  display: none;
}
`
const ScLogo2 = styled.img`
display: none;
@media screen and (max-width: 768px) {
  display: block;
  }
`

const ScTopCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  /* background-color: #FFE4E0; */
  @media screen and (max-width: 768px){
    width: 100%;
    margin: 20px auto;
  }
`

const ScTopWord = styled.div`
  position: absolute;
  margin: 70px 60% 50px 60%;
  @media screen and (max-width: 768px){
    width: 90%;
    margin: 60px 60%;
  }
`
const ScMainTitle = styled.div`
width: 190%;
height: 74px;
font-weight: 700;
font-size: 2.125em;
line-height: 43px;
margin-bottom: 30px;
font-family: "SUIT ExtraBold";
@media screen and (max-width: 1200px) {
   font-size: 28px;
   right: 20%;
   /* display: none; */
  }
@media screen and (max-width: 768px){
    display: none;
  }
`

const ScBoardWrite = styled.span`
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px){
    width: 50%;
    top: 19%;
  }
  
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
  font-size: 1.25em;
  border-radius: 10px;
  @media screen and (max-width: 768px){
    /* width: 30%; */
    /* margin: -50px 1%; */
    width: 140px;
    font-size: 13px;
  }
`
const ScCategory = styled.div`
  display: flex;
  font-size: 0.875em;
  font-weight: 700;
  width: 100%;
  margin: 0 0 0 18%;
  gap: 8px;
  @media screen and (max-width: 768px){
      margin: 0px 15px auto;
      padding: 0px 0px 0px 0px;      
    }
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