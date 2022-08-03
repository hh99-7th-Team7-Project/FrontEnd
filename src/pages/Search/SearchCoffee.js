import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CoffeeCard from '../../components/main/CoffeeCard';
import { __loadCoffees } from '../../redux/modules/coffee';
import apis from '../../shared/api/main';
import { Link } from 'react-scroll';
import Header from '../Header/Header';

const SearchCoffee = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch()
  const [coffeeReducer, setCoffeeReducer] = useState()

  useEffect(() => {
    const search = async () => {
      apis.searchCoffee(keyword)
        .then((res) => {
          setCoffeeReducer(res?.data)
        })
    }
    search()
  }, [dispatch])

  return (
    <>
      <ScWrap id="Top">
        <ScTitle>"{keyword}"에 대한 검색 결과입니다.</ScTitle>
        <div style={{ display: "flex", maxWidth: "1400px", flexWrap: "wrap", justifyContent: "center" }}>
          {coffeeReducer && coffeeReducer.map((item, idx) => {
            return (<CoffeeCard key={idx} item={item} />)
          })}
        </div>
      </ScWrap>
      <ScTopBtnWrap>
          <Link to="Top" spy={true} smooth={true}>
            <ScTopBtn>Top</ScTopBtn>
          </Link>
      </ScTopBtnWrap>
    </>
  )
}

const ScWrap = styled.div`
  margin: auto;
`;

const ScTitle = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  font-size: 1.5em;
  @media screen and (max-width: 768px) {
    margin: 40px auto;
    text-align: center;
  }
`
const ScTopBtnWrap = styled.div`
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ScTopBtn = styled.div`
  background-color: #2c278c;
  position: fixed;
  bottom: 3%;
  left: 2%;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    left: 3%;
    bottom: 2%;
  }
`;
export default SearchCoffee