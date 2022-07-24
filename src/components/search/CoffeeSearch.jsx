import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { __loadCoffee, __loadCoffees } from '../../redux/modules/coffee'
import apis from '../../shared/api/main'
import CoffeeCard from '../main/CoffeeCard'
import * as Sentry from "@sentry/react";

const CoffeeSearch = (props) => {
  const {keyword} = props
  // console.log(keyword)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [coffeeReducer, setCoffeeReducer] = useState()
  // const coffeeReducer = useSelector((state) => state.coffee.list);
  // console.log(coffeeReducer?.length)
  //처음 4개만 보여주기위해서 검색결과에서 4개 짜름
  const sliceCoffee = coffeeReducer?.slice(0,8)
  // console.log(sliceCoffee);

  //임시
  useEffect(()=>{
    const search = async()=>{
     await apis.searchCoffee(keyword)
          .then((res)=>{
            // console.log(res)
            setCoffeeReducer(res?.data)
          }).catch(e => {
            Sentry.captureException(e);
        });
    }
    search()
  },[props])
    

  return (
    (coffeeReducer?.length!==0?
      (<div style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
      <ScCoffeeWrap>
        <ScCardContainer>
          {sliceCoffee&&sliceCoffee.map((item,idx)=>{
            return(<CoffeeCard key={idx} item={item}/>)
          })} 
          {sliceCoffee?.length > 4 ? 
          <ScBox style={{width:"1200px", position:"absolute", height: "500px",marginTop:"450px"}}></ScBox> : null }
        </ScCardContainer>
      </ScCoffeeWrap>
      <ScBtnAlign>
        <ScBtnWrap>
          <ScBtn 
          onClick={()=>{navigate(`/search/coffee/${keyword}`)}}>
            <ScBtnTitle>+더보기</ScBtnTitle>
          </ScBtn>
        </ScBtnWrap>
      </ScBtnAlign>
      </div>):
      ( <ScNothing>검색 결과가 없습니다</ScNothing>) 
    )
  )
}

const ScCoffeeWrap = styled.div`
  margin: auto;  
  width: 1300px;
`;

const ScNothing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`
const ScCardContainer = styled.div`
  position:relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ScBox = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFF 82.29%);
`;

const ScBtnAlign = styled.div`  
  display: flex;  
  justify-content: center;
  align-items: center;
`;

const ScBtnWrap = styled.div`  
  position: absolute;
`;

const ScBtn = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 46px;
  background: #2c278c;
  border-radius: 100px;
  border: none;
`;

const ScBtnTitle = styled.div`
  width: 96px;
  height: 30px;
  color: white;
  font-style: normal;
  font-size: 1.5em;
  line-height: 30px;
  letter-spacing: 0.1em;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

export default CoffeeSearch