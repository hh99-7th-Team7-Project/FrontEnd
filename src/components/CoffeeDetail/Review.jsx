import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Styled from 'styled-components';


const Review = ( { item } ) => {
    const navigate = useNavigate()
    // console.log(item)
    const pricePair = item?.pricePair
    // console.log(pricePair)

  return (
    <>
    <ScWrap>
        <ScContentBox>
            <ScSubBox>
                <ScH1>{item?.name}</ScH1>
                <ScLikeBtn>나만의 음료로 등록</ScLikeBtn>
            </ScSubBox>
            <ScH4>{item?.category}</ScH4>
            <div>당장 이 {item?.name} 먹으러 갈래요? </div>
            <ScGotoMap onClick={()=>{
                navigate(`/map/${item?.brand}`)
            }}>내 주변 {item?.brand} 찾기</ScGotoMap>
                {pricePair&&pricePair.map((price,idx)=>{
                    return (<div key={idx}>{price?.size}:{price?.price}</div>)
                })}
        </ScContentBox>
        <ScHR/>
    </ScWrap>
    </>
  )
}

export default Review

const ScWrap = Styled.div`       
    margin-left: 20px;
    width: 70vw;
    height: 150px;
`;

const ScGotoMap = Styled.div`
    border: #161616 1px solid;
    background-color: black;
    color: white;
    width: 30%;
    padding: 10px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    border-radius:20px;
`

const ScContentBox = Styled.div`    
    margin: 20px;
`;

const ScSubBox = Styled.div`
    display: flex;
    justify-content: space-between;
`;

const ScH1 = Styled.h1`
    padding-left: 20px;
`;

const ScLikeBtn = Styled.div`
    background-color: #004D40;
    border-color: #004D40;
    color: white;
    padding: 10px;
    cursor : pointer;
`;

const ScH4 = Styled.h4`
    color: gray;
    padding-left: 20px;
`;

const ScHR = Styled.hr`
  margin-top: 50px;
  margin-bottom: 50px;
`;

