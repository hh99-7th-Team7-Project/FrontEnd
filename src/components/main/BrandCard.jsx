import React from 'react'
import Styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Navigate, useNavigate } from 'react-router-dom';

const BrandCard = () => {

    const navigate = useNavigate();

    const CafeList = ["스타벅스","이디야","드롭탑","빽다방","엔젤리너스","커피빈","카페베네","컴포즈","할리스","폴바셋","탐앤탐스","더벤티"];


  return (
    <>
        <div>
            <CardWrap>
                {CafeList.map((item, index) => {                    
                    return <Card key={index} value={item}><CardText>{CafeList[index]}</CardText></Card>
                })}        
            </CardWrap>
        </div>
    </>
  )
}

const CardWrap = Styled.div`    
    margin: auto;
    width: 95vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid black;
`;

const Card = Styled.div`
    border: 2px solid black;
    width: 300px;
    padding-top: 200px;
    padding-bottom: 200px;
    margin: 50px;
    border-radius: 30px;
    &:hover {
        cursor: pointer;
    }

`;

const CardText = Styled.span`    
    margin: 20px auto;
    font-size: 50px;
    text-align: center;
`;

export default BrandCard