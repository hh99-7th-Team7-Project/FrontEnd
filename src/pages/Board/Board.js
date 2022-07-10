import React from 'react'
import Styled from 'styled-components';
import {Link} from 'react-router-dom'
import Header from '../Header/Header';
import PopularBoard from '../../components/board/PopularBoard';
import BoardList from '../../components/board/BoardList';


const Board = () => {
  return (
    <>
      <ScWrap>
        <Header/>
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