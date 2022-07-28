import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { BoardSearch, CoffeeSearch } from '../../components/search/A-Search';
import Header from '../Header/Header'

const Search = () => {
  const{ keyword }= useParams()
  
  return (
    <>
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
  max-width: 1200px;
  width: 90%;
  margin: 80px auto;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: 20px auto;
  }
`;

const ScDrinkWrap = styled.div`  
  margin: 20px auto;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 30px auto;   
    justify-content: center;
    align-items: center;
  }
`;

const ScBoardWrap = styled.div`  
  margin: 100px auto;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    flex-wrap: wrap;
    margin: 30px auto;
    align-items: center;
  }
`;

export default Search