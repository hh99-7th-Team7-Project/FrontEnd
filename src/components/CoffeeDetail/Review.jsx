import React from 'react'
import Styled from 'styled-components';
import TomTom from '../../pages/detailpage/TomTom';

const Review = ( { title, subtitle } ) => {
  return (
    <ScWrap>
        <ScContentBox>
            <ScSubBox>
                <ScH1>{title}</ScH1>
                <ScLikeBtn>나만의 음료로 등록</ScLikeBtn>
            </ScSubBox>
            <ScH4>{subtitle}</ScH4>
        </ScContentBox>
        <ScHR/>
    </ScWrap>
  )
}

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

export default Review