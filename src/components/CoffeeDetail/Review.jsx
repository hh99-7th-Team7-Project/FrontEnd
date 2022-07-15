import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import svg from './svg/MapMaker.svg';
import svg1 from './svg/Write.svg';
// import { __getAverageStar } from '../../redux/modules/comment';
import { useDispatch } from 'react-redux';



const Review = ( { item, reviewData, url } ) => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { brand, boardId } = useParams();
    // console.log(item)

    const pricePair = item?.pricePair;
    console.log(pricePair);


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
                    <ScH3>총 별점</ScH3>
                    <ScH2>4.4</ScH2>
                    <ScH3>&#9733; &#9733; &#9733; &#9733;</ScH3>                    
                </ScStarBox>
                <ScPriceBox>
                    <ScH3>가격</ScH3>
                {pricePair&&pricePair.map((price,idx)=>{
                        return (
                            <div key={idx}>
                                <PriceScH3> {price?.size}:￦{price?.price} </PriceScH3>
                            </div>
                        )
                    })}
                </ScPriceBox>
            </ScStarPriceContainer>
            <ScImgWrap>
                <div>
                    <ScImg src={url} alt=""/>
                    <PriceScH3>가격</PriceScH3>
                </div>
                <div>
                    <ScImg src={url} alt=""/>
                    <PriceScH3>가격</PriceScH3>
                </div>
                <div>
                    <ScImg src={url} alt=""/>
                    <PriceScH3>가격</PriceScH3>
                </div>
            </ScImgWrap>
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
    width: 500px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

const ScStarBox = styled.div`
    width: 180px;
    height: 150px;
    margin: auto;
`;

const ScH2 = styled.h2`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const ScH3 = styled.h2`
    text-align: center;
`;

const PriceScH3 = styled.h2`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 49.92px;
`;

const ScPriceBox = styled.div`
    width: 180px;
    height: 150px;
    margin: auto;
`;

const ScImgWrap = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;

`;

const ScImg = styled.img`
    width: 41px;
    height: 70px;
    margin-left: 20px;
    margin-right: 20px;
`;


