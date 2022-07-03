import React, {  useState } from 'react'
import Styled from 'styled-components';

const Review = ( { item } ) => {
    console.log(item)
    // const [pri,setPri] = useState([])
    // setPri(...price)
    const pricePair = item?.pricePair
    console.log(pricePair)

  return (
    <ScWrap>
        <ScContentBox>
            <ScSubBox>
                <ScH1>{item?.name}</ScH1>
                <ScLikeBtn>나만의 음료로 등록</ScLikeBtn>
            </ScSubBox>
            <ScH4>{item?.category}</ScH4>
                {pricePair&&pricePair.map((price,idx)=>{
                    return (<div key={idx}>{price?.size}:{price?.price}</div>)
                })}
        </ScContentBox>
        <ScHR/>
    </ScWrap>
  )
}

export default Review

const ScWrap = Styled.div`       
    margin-left: 20px;
    width: 70vw;
    height: 150px;
`;

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
    
`;

const ScH4 = Styled.h4`
    color: gray;
    padding-left: 20px;
`;

const ScHR = Styled.hr`
  margin-top: 50px;
  margin-bottom: 50px;
`;

