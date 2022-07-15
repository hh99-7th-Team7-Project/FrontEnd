import React from 'react'
import Styled from 'styled-components';
import {Link} from 'react-router-dom'
import Header from '../Header/Header';
import { BoardList, PopularBoard } from '../../components/board/A-BoardIndex';



const Board = () => {
  return (
    <>
        <div style={{margin:"auto"}}> 
          <Header/>
        </div>
        <ScWrap>        
        <Link to = {"/board/write"}><button>✏️글쓰기</button></Link>
          <PopularBoard />
          <BoardList />
        </ScWrap>
    </>
  )
}

const ScWrap = Styled.div`
  display: column;
`;


export default Board