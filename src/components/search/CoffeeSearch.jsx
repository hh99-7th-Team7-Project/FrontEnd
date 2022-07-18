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
  console.log(coffeeReducer?.length)
  //처음 4개만 보여주기위해서 검색결과에서 4개 짜름
  const sliceCoffee = coffeeReducer?.slice(0,8)
  console.log(sliceCoffee)

  //임시
  useEffect(()=>{
    const search = async()=>{
     await apis.searchCoffee(keyword)
          .then((res)=>{
            console.log(res)
            setCoffeeReducer(res?.data)
          })

    }
    search()
  },[props])
    

  return (
   
    (coffeeReducer?.length!==0?
     ( <div style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
      <ScCoffeeWrap>
        <ScCardContainer>
        {sliceCoffee&&sliceCoffee.map((item,idx)=>{
          return(<CoffeeCard key={idx} item={item}/>)
        })} 
        </ScCardContainer>
      </ScCoffeeWrap>
      <ScBtnWrap>
        <ScBtn 
        onClick={()=>{navigate(`/search/coffee/${keyword}`)}}>
          <ScBtnTitle>+더보기</ScBtnTitle>
        </ScBtn>
      </ScBtnWrap>
      </div>):
       ( <ScNothing>검색 결과가 없습니다</ScNothing>) 
    )
  )
}

const ScCoffeeWrap = styled.div`
  margin: auto; 
`;

const ScNothing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`
const ScCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ScBtnWrap = styled.div`
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
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.1em;
`;

export default CoffeeSearch