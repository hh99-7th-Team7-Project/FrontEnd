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
    (boardReducer?.length!==0?
      (<div style={{display:"flex", flexDirection:"column"}}>
          <ScCoffeeWrap>
              <ScCardContainer>
                {sliceBoard&&sliceBoard.map((item,idx)=>{
                  return(
                    <BoardMap key={idx} content={item}/>
                    )
                  })} 
              </ScCardContainer>
          </ScCoffeeWrap>
          <ScBtnWrap>
              <ScBtn 
                onClick={()=>{navigate(`/search/board/${keyword}`)}}>
              <ScBtnTitle>+더보기</ScBtnTitle>
              </ScBtn>
          </ScBtnWrap>
        </div>):
        (<ScNothing>검색 결과가 없습니다</ScNothing>) 
     )
     
 
   )
}

const ScCoffeeWrap = styled.div`
  /* margin: auto;  */
`;

const ScCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScBtnWrap = styled.div`
  margin: auto;
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
  font-size: 23px;
  line-height: 30px;
  letter-spacing: 0.1em;
  
`;

const ScNothing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`

export default BoardSearch