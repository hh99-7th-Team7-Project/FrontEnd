import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { BoardSearch, CoffeeSearch } from '../../components/search/A-Search';
import Header from '../Header/Header'

const Search = () => {
  const{ keyword }= useParams()
  
  return (
    <>
      <ScMobile>
        <Wrap>      
          <ScDrinkWrap>
            <h2>"{keyword}"에 대한 음료 검색 결과</h2>
            <CoffeeSearch keyword={ keyword }/>
          </ScDrinkWrap>        
          <br/>
          <ScBoardWrap>
            <h2>"{keyword}"에 대한 게시판 검색 결과</h2>
            <BoardSearch keyword={ keyword }/>
          </ScBoardWrap>
        </Wrap>
      </ScMobile>
    </>
  )
}

const ScMobile = styled.div`
  min-width: 1200px;
  width: 80%;
  @media screen and (min-width: 350px){
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const Wrap = styled.div`
  margin: 80px auto;
`;

const ScDrinkWrap = styled.div`
  min-width: 1200px;
  margin: 20px auto;
`;

const ScBoardWrap = styled.div`
  min-width: 1200px;
  margin: 100px auto;
`;

export default Search