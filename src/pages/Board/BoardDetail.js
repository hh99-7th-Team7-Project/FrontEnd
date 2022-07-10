import React,{ useEffect, useRef, useState } from 'react'
import axios from "axios"
import Styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import BoardMain from '../../components/BoardDetail/BoardMain';
import BoardImage from '../../components/BoardDetail/BoardImage';
import BoardLike from '../../components/BoardDetail/BoardLike';
import BoardComment from '../../components/BoardDetail/BoardComment';
import BoardContent from '../../components/BoardDetail/BoardImage';

const BoardDetail = () => {
  const {boardId} = useParams()
  console.log(boardId)
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState();
  const [head, setHead]= useState();
  
    useEffect(() => {  
      setLoading(true)
        const getMark = async () => {
            await axios.get(`http://localhost:4000/Review/${boardId}`)
          .then((res)=>{
            console.log(res)
            setContent(res?.data?.content)
            setHead(res?.data)
            console.log(res?.data)
            })
          }
        getMark()
      }, [loading])

  return (
    <ScWrap>
      <Header/>
      <BoardMain head ={head} boardId={boardId}/>
      <BoardContent data={content}/>
      <BoardLike/>
      <BoardComment/>
    </ScWrap>
  )
}

const ScWrap = Styled.div`
  margin: 15px auto;
`;

export default BoardDetail