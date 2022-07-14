import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import svg from './svg/MapMaker.svg';
import svg1 from './svg/Write.svg';
// import { __getAverageStar } from '../../redux/modules/comment';
import { useDispatch } from 'react-redux';



const Review = ( { item, reviewData } ) => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { brand, boardId } = useParams();
    // console.log(item)

    const pricePair = item?.pricePair;
    
    console.log(reviewData);

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
                <ScGotoMap1>
                    <img src={svg1} alt=""/>
                    <ScSpan>리뷰보기</ScSpan>
                </ScGotoMap1>
            </ScBtnWrap>
            <ScStarPriceContainer>
                <ScStarBox>
                    <h3>총 별점</h3>
                </ScStarBox>
                <ScPriceBox>
                {pricePair&&pricePair.map((price,idx)=>{
                        return (<div key={idx}>{price?.size}:{price?.price}</div>)
                    })}
                </ScPriceBox>
            </ScStarPriceContainer>
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
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 30px auto;
`;

const ScGotoMap = styled.div`
    width: 360px;
    height: 41px;
    border: #161616 1px solid;
    background-color: black;
    color: white;
    padding: 8px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 100px;
    margin: auto;
`
const ScGotoMap1 = styled.div`
    width: 250px;
    height: 41px;
    border: #161616 1px solid;
    background-color: black;
    color: white;
    padding: 8px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 100px;
    margin: auto;
`

const ScSpan = styled.span`
    margin-left: 5px;
    font-size: 20px;
`;

const ScStarPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

const ScStarBox = styled.div`
    width: 105px;
    height: 102px;
    border: 1px solid black;
`;

const ScPriceBox = styled.div`
    width: 105px;
    height: 102px;
    border: 1px solid black;
`;


