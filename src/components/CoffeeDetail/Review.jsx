import React from 'react'
import Styled from 'styled-components';
import TomTom from '../../pages/detailpage/TomTom';

const Review = ( { title, subtitle } ) => {
  return (
    <Wrap>
        <ContentBox>
            <SubBox>
                <H1>{title}</H1>
                <LikeBtn>나만의 음료로 등록</LikeBtn>
            </SubBox>
            <H4>{subtitle}</H4>
        </ContentBox>
        <HR/>
    </Wrap>
  )
}

const Wrap = Styled.div`       
    margin-left: 20px;
    width: 70vw;
    height: 150px;
`;

const ContentBox = Styled.div`    
    margin: 20px;
`;

const SubBox = Styled.div`
    display: flex;
    justify-content: space-between;
`;

const H1 = Styled.h1`
    padding-left: 20px;
`;

const LikeBtn = Styled.div`
    background-color: #004D40;
    border-color: #004D40;
    color: white;
    padding: 10px;
    
`;

const H4 = Styled.h4`
    color: gray;
    padding-left: 20px;
`;

const HR = Styled.hr`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default Review