import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { __loadCoffee, __loadCoffees } from '../../redux/modules/coffee'
import apis from '../../shared/api/main'
import CoffeeCard from '../main/CoffeeCard'

const CoffeeSearch = (props) => {
  const {keyword} = props
  console.log(keyword)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [coffeeReducer, setCoffeeReducer] = useState()
  // const coffeeReducer = useSelector((state) => state.coffee.list);
  console.log(coffeeReducer)
  //처음 4개만 보여주기위해서 검색결과에서 4개 짜름
  const sliceCoffee = coffeeReducer?.slice(0,4)
  console.log(sliceCoffee)

  //임시
  useEffect(()=>{
    const search = async()=>{
      apis.searchCoffee(keyword)
          .then((res)=>{
            console.log(res)
            setCoffeeReducer(res?.data)
          })
    }
    search()
  },[dispatch])
    

  return (
   
    (coffeeReducer?
     ( <>
      <ScCoffeeWrap>
        <div style={{display:"flex"}}>
        {sliceCoffee&&sliceCoffee.map((item,idx)=>{
          return(<CoffeeCard key={idx} item={item}/>)
        })} 
        </div>
      </ScCoffeeWrap>
      <ScBtnWrap>
        <ScBtn style={{marginLeft:"600px"}}
        onClick={()=>{navigate(`/search/coffee/${keyword}`)}}>
          <ScBtnTitle>+더보기</ScBtnTitle>
        </ScBtn>
      </ScBtnWrap>
      </>):
       ( <div>검색 결과가 없습니다</div>) 
    )
  )
}

const ScCoffeeWrap = styled.div`
  margin: auto;
`;

const ScBtnWrap = styled.div`
  margin: auto;
`;

const ScBtn = styled.button`
  width: 136px;
  height: 46px;
  background: #2c278c;
  border-radius: 100px;
  border: none;
  
`;

const ScBtnTitle = styled.span`
  width: 96px;
  height: 30px;
  color: white;
  font-style: normal;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.1em;
`;

export default CoffeeSearch