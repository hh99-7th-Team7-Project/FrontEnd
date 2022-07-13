import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import svg from './svg/MapMaker.svg';
import svg1 from './svg/Write.svg';
// import { __getAverageStar } from '../../redux/modules/comment';
import { useDispatch } from 'react-redux';



const Review = ( { item } ) => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { brand, boardId } = useParams();
    // console.log(item)
    const pricePair = item?.pricePair
    // console.log(pricePair)

    // useEffect(()=>{
    //     dispatch(__getAverageStar(brand,boardId))
    // },[dispatch])

  return (
    <>
    <ScWrap>
        <ScContentBox>
            <ScBtnWrap>
                <ScGotoMap onClick={()=>{
                    navigate(`/map/${item?.brand}`)
                }}>
                    <img src={svg} alt=""/>
                    <ScSpan>내 주변 {item?.brand} 찾기</ScSpan>
                </ScGotoMap>
                <ScGotoMap>
                    <img src={svg1} alt=""/>
                    <ScSpan>리뷰보기</ScSpan>
                </ScGotoMap>
            </ScBtnWrap>
                {pricePair&&pricePair.map((price,idx)=>{
                    return (<div key={idx}>{price?.size}:{price?.price}</div>)
                })}
        </ScContentBox>
    </ScWrap>
    </>
  )
}

export default Review

const ScWrap = styled.div`
    width: 1000px;
    height: 150px;
    margin: auto; 
`;

const ScContentBox = styled.div`    
    margin: 20px;
`;

const ScBtnWrap = styled.div`
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: auto;
`;

const ScGotoMap = styled.div`
    width: 201px;
    height: 41px;
    border: #161616 1px solid;
    background-color: black;
    color: white;
    padding: 8px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    border-radius: 100px;
    margin: auto;
`

const ScSpan = styled.span`
    margin-left: 5px;
`;


