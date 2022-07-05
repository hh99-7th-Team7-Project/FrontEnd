import React from 'react'
import { useParams } from 'react-router-dom'
import BoardSearch from '../../components/search/BoardSearch'
import CoffeeSearch from '../../components/search/CoffeeSearch'
import Header from '../Header/Header'

const Search = () => {
  const{keyword}= useParams()

  return (
    <div>
      <Header/>
      <div>"{keyword}"에 대한 음료 검색 결과</div>
      <CoffeeSearch/>
      <br/>
      <div>"{keyword}"에 대한 게시판 검색 결과</div>
      <BoardSearch/>
    </div>
  )
}

export default Search