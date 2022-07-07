import React from 'react';
import Styled from 'styled-components';

const BoardImage = () => {
  return (
    <>
        <ScWrap>
            <ScImg src="https://vrthumb.imagetoday.co.kr/2020/10/29/tip1140001301.jpg"/>
            <p>여기에 게시글이 들어갑니다.</p>
        </ScWrap>
        <ScHR/>
    </>
  )
}

const ScWrap = Styled.div`
    border: 1px solid black;
    display: flex;
`;

const ScImg = Styled.img`
    width: 50%;
`;

const ScHR = Styled.hr`
    margin-top: 40px;
    margin-bottom: 20px;.
`;

export default BoardImage