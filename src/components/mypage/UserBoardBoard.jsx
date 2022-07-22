import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import apis from '../../shared/api/main'
import { getCookie } from '../../shared/Cookie'
import BoardMap from '../board/BoardMap'

const UserBoardBoard = () => {
  const [content, setContent] = useState()
  const userId = getCookie("userId")


  //내가쓴글
  useEffect(()=>{
    apis.getMyBoardBookmark(userId)
        .then((res)=>{
        console.log(res.data)
        setContent(res.data)
    })
  },[])

  return (
    <ScWrap>
    <ScBoard>
        <ScTable>
            {content&&content.map((item,idx)=>{
                return(<BoardMap
               content={item}
               key={idx}
            />)
            })}
           
        </ScTable>
    </ScBoard>
</ScWrap>
  )
}

export default UserBoardBoard

const ScWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;

`
const ScBoard = styled.div`    
    width: 100%;
    height: 100%;
`;

const ScTable = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    margin: 30px auto;
`;