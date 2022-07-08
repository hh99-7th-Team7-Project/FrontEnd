import React,{ useEffect, useRef, useState } from 'react'
import axios from "axios"
import Styled from 'styled-components';
import Header from '../Header/Header';
import BoardMain from '../../components/BoardDetail/BoardMain';
import BoardImage from '../../components/BoardDetail/BoardImage';
import BoardLike from '../../components/BoardDetail/BoardLike';
import BoardComment from '../../components/BoardDetail/BoardComment';
import { useDispatch,useSelector } from 'react-redux';
import { loadBoard } from '../../redux/modules/board'

const BoardDetail = () => {
  const dispatch = useDispatch()
  // const boardReducer = useSelector((state)=>state.board.board)
  // console.log(boardReducer)

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState();
  
    useEffect(() => {  
      setLoading(true)
        const getMark = async () => {
            await axios.get("http://localhost:4000/Review")
          .then((res)=>{
            setContent(res?.data[2])
            console.log(res?.data[2])
            })
          }
        getMark()
      }, [loading])

  return (
    <ScWrap>
      <Header/>
      <BoardMain/>
      <BoardImage data={content}/>
      <BoardLike/>
      <BoardComment/>
    </ScWrap>
  )
}

const ScWrap = Styled.div`
  margin: 15px auto;
`;

export default BoardDetail