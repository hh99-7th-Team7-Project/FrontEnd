import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import BoardMap from '../../components/board/BoardMap'
import apis from '../../shared/api/main'
import Header from '../Header/Header'

const SearchBoard = () => {
  const {keyword} = useParams()
  const navigate = useNavigate()
  const [boardReducer, setBoardReducer] = useState()

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
        <ScWrap>
          <div style={{margin:"auto"}}> 
            <Header/>
          </div>
          <ScBoardWrap>
            {boardReducer&&boardReducer.map((item,idx)=>{
              return(<BoardMap key={idx} content={item}/>)
            })} 
          </ScBoardWrap>
       </ScWrap>
   )
  
}

const ScWrap = styled.div`
  margin: auto;
`;

const ScBoardWrap = styled.div`
  margin: 50px auto;
`;

export default SearchBoard