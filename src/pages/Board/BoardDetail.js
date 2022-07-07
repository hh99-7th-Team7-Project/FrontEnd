import React from 'react'
import Styled from 'styled-components';
import Header from '../Header/Header';
import BoardMain from '../../components/BoardDetail/BoardMain';
import BoardImage from '../../components/BoardDetail/BoardImage';
import BoardLike from '../../components/BoardDetail/BoardLike';
import BoardComment from '../../components/BoardDetail/BoardComment';

const BoardDetail = () => {
  return (
    <ScWrap>
      <Header/>
      <BoardMain/>
      <BoardImage/>
      <BoardLike/>
      <BoardComment/>
    </ScWrap>
  )
}

const ScWrap = Styled.div`
  margin: 15px auto;
`;

export default BoardDetail