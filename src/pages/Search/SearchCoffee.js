import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CoffeeCard from '../../components/main/CoffeeCard';
import { __loadCoffees } from '../../redux/modules/coffee';
import apis from '../../shared/api/main';
import Header from '../Header/Header';

const SearchCoffee = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch()
  const [coffeeReducer, setCoffeeReducer] = useState()

  useEffect(() => {
    const search = async () => {
      apis.searchCoffee(keyword)
        .then((res) => {
          // console.log(res)
          setCoffeeReducer(res?.data)
        })
    }
    search()
  }, [dispatch])

  return (
    <ScWrap>
      <div style={{ margin: "auto",maxWidth:"1400px", width: "80%" }}>
        <Header />
      </div>
      <ScTitle>"{keyword}"에 대한 검색 결과입니다.</ScTitle>
      <div style={{ display: "flex", maxWidth: "1400px", flexWrap: "wrap", justifyContent: "center" }}>
        {coffeeReducer && coffeeReducer.map((item, idx) => {
          return (<CoffeeCard key={idx} item={item} />)
        })}
      </div>
    </ScWrap>
  )
}

const ScWrap = styled.div`
  margin: auto;
`;

const ScTitle = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  font-size: 1.5em;
`

export default SearchCoffee