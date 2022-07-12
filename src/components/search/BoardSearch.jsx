import React, { useEffect, useState } from 'react'
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
        <div style={{display:"flex"}}>
       {sliceBoard&&sliceBoard.map((item,idx)=>{
         return(<BoardMap key={idx} content={item}/>)
       })} </div>
       <button style={{marginLeft:"600px"}}
       onClick={()=>{navigate(`/search/board/${keyword}`)}}>더 보기</button></>):
        ( <div>검색 결과가 없습니다</div>) 
     )
     
 
   )
}

export default BoardSearch