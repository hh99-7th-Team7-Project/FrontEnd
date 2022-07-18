import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import BoardMap from '../../components/board/BoardMap'
import apis from '../../shared/api/main'

const BoardSearch = (props) => {
  const {keyword} = props
  const navigate = useNavigate()
  const [boardReducer, setBoardReducer] = useState()

  const sliceBoard = boardReducer?.slice(0,5)

  useEffect(()=>{
    const search = async()=>{
      apis.searchBoard(keyword)
          .then((res)=>{
            console.log(res)
            setBoardReducer(res?.data)
          })
    }
    search()
  },[keyword])

  return (
    (boardReducer?
      ( <>
          <ScCoffeeWrap>
          <ScCardContainer>
            {sliceBoard&&sliceBoard.map((item,idx)=>{
              return(
                <BoardMap key={idx} content={item}/>
                )
              })}
              <ScBox style={{width:"1200px", position:"absolute", height: "500px",marginTop:"450px"}}></ScBox>
          </ScCardContainer>
          </ScCoffeeWrap>
        <ScBtnWrap>
          <ScBtn style={{marginLeft:"600px"}}
            onClick={()=>{navigate(`/search/board/${keyword}`)}}>
          <ScBtnTitle>+더보기</ScBtnTitle></ScBtn>
        </ScBtnWrap>
        </>):
        ( <div>검색 결과가 없습니다</div>) 
     )
     
 
   )
}

const ScCoffeeWrap = styled.div`
  margin: auto; 
`;

const ScCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScBox = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFF 82.29%);
`;

const ScBtnWrap = styled.div`
  margin: auto;
  position: absolute;
`;

const ScBtn = styled.button`
  width: 136px;
  height: 46px;
  background: #2c278c;
  border-radius: 100px;
  border: none;
  
`;

const ScBtnTitle = styled.span`
  width: 96px;
  height: 30px;
  color: white;
  font-style: normal;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.1em;
`;

export default BoardSearch