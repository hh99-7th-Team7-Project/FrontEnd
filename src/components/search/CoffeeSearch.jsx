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
  const sliceCoffee = coffeeReducer?.slice(0,8)
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
        <ScCardContainer>
          {sliceCoffee&&sliceCoffee.map((item,idx)=>{
            return(<CoffeeCard key={idx} item={item}/>)
          })} 
          <ScBox style={{width:"1200px", position:"absolute", height: "500px",marginTop:"450px"}}></ScBox>
        </ScCardContainer>
      </ScCoffeeWrap>
      <ScBtnWrap>
        <ScBtn style={{marginLeft:"600px"}}
        onClick={()=>{navigate(`/search/coffee/${keyword}`)}}>
          <ScBtnTitle>+더보기</ScBtnTitle>
        </ScBtn>
      </ScBtnWrap>
      </>):
       ( <div style={{marginTop:"20px"}}>검색 결과가 없습니다</div>) 
    )
  )
}

const ScCoffeeWrap = styled.div`
  margin: auto;  
  width: 1200px;
`;

const ScCardContainer = styled.div`
  position:relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ScBox = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFF 82.29%);
`;

const ScBtnWrap = styled.div`
  margin: auto;
  position: absolute;
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