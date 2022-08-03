import React, { useEffect, useState } from 'react';
/** react-router-dom */
import { useNavigate } from 'react-router-dom';
/** component */
import apis from '../../shared/api/main'
//css
import styled from 'styled-components'
//component
import CoffeeCard from '../main/CoffeeCard'
//error log
import * as Sentry from "@sentry/react";

const CoffeeSearch = (props) => {
  const {keyword} = props

  const navigate = useNavigate()
  const [coffeeReducer, setCoffeeReducer] = useState()

  //처음 4개만 보여주기위해서 검색결과에서 4개 짜름
  const sliceCoffee = coffeeReducer?.slice(0,8)



  useEffect(()=>{
    const search = async()=>{
     await apis.searchCoffee(keyword)
          .then((res)=>{
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
          <ScBox/> : null }
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
  @media screen and (max-width:768px) {
    width: 100%;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  width: 1300px;
  position: absolute;
  height: 500px;
  margin-top: 450px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFF 82.29%);
  @media screen and (max-width: 768px) {    
    width: 450px;
    height: 300px;
    margin-top: 750px;
    position: absolute;
  }
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
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.2em;
  }
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