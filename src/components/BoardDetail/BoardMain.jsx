import React from 'react';
import Styled from 'styled-components';

const BoardMain = () => {


  return (
    <ScWrap>
        <ScBtnWrap>
            <Btn>All</Btn>
            <Btn>카페추천합니다.</Btn>
            <Btn>나만의 비밀레시피</Btn>
            <Btn>기타</Btn>
        </ScBtnWrap>
        <ScHR/>
        <ScTitleWrap>
            <ScTitle>제목이 들어갑니다.</ScTitle>
            <ScLike>추천 : 6</ScLike>
            <ScComment>댓글 : 1</ScComment>            
        </ScTitleWrap>
        <div>
            <br/>
            <p>닉네임</p>
            <br/>
            <p>21시 21분 23초</p>
        </div>
        <ScHR/>
    </ScWrap>
  )
}

const ScWrap = Styled.div`
    margin: 50px auto;
    width: 100%;
`;

const ScBtnWrap = Styled.div`
    display: flex;
    margin: 10px 10px;
`;

const Btn = Styled.button`
    margin: 10px;
    width: 150px;
    height: 30px;
    border-radius: 30px;
    &:hover {
        background-color: black;
        color: white;
        border-color: black;
        cursor: pointer;
    }
    background-color: white;
    border-color: black;
`;

const ScHR = Styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;.
`;

const ScTitleWrap = Styled.div`
    display: flex;
    justify-content: space-between;
`;

const ScTitle = Styled.h2`
    
`;

const ScLike = Styled.h4`

`;

const ScComment = Styled.h4`
    
`;

export default BoardMain