import React from 'react'
import Styled from 'styled-components';
import Header from '../Header/Header';
import PopularBoard from '../../components/board/PopularBoard';
import BoardList from '../../components/board/BoardList';


const Board = () => {
  return (
    <>
      <ScWrap>
        <Header/>
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