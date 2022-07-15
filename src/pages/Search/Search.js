import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { BoardSearch, CoffeeSearch } from '../../components/search/A-Search';
import Header from '../Header/Header'

const Search = () => {
  const{ keyword }= useParams()
  
  return (
      <>
      <div style={{margin:"auto"}}> 
        <Header/>
      </div>
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
    </>
  )
}

const Wrap = styled.div`
  margin: 20px auto;
`;

const ScDrinkWrap = styled.div`
  
`;

const ScBoardWrap = styled.div`

`;

export default Search