import React from 'react';
import Styled from 'styled-components';
import '../../shared/css/dropdown.css';
import BoardMap from './BoardMap';
import { GoChevronDown } from "react-icons/go";

const BoardList = () => {



  return (
    <>
        <ScWrap>
            <ScContainer>
                <ScInput id="dropdown" type="checkbox"/>      
                <ScLabel for="dropdown">
                    <div>Category</div>
                    <GoChevronDown className="careIcon"/>
                    <ScDropBox>
                        <ScNickAlign>닉네임</ScNickAlign>
                        <ScTitleAlign>제목</ScTitleAlign>
                        <ScDateAlign>날짜</ScDateAlign>
                        <ScLikesAlign>추천수</ScLikesAlign>
                        <div>댓글수</div>
                    </ScDropBox>
                </ScLabel>
                <ScContentBox>
                    <ScUl>
                        <ScLi>커피</ScLi>
                        <ScLi>논커피</ScLi>
                        <ScLi>스무디</ScLi>
                        <ScLi>에이드</ScLi>
                        <ScLi>차</ScLi>
                    </ScUl>
                </ScContentBox>
            </ScContainer>
            <ScBoard>
                <ScTable>
                    <BoardMap
                        category="커피"
                        nickname="CoFFind"
                        title="아메리카노 좋아요"
                        day="7월7일"
                        likes="32"
                        comment="23"
                    />
                </ScTable>
            </ScBoard>
        </ScWrap>
        
    </>
  )
}

const ScWrap = Styled.div`
    border: 1px solid black;
    width: 100%;
    height: 100%;
`;

const ScContainer = Styled.div`
    min-width: 150px;
    box-shadow: 0 4px 5px 0 #00000026;
    position: relative;
`;

const ScInput = Styled.input`
    
`;

const ScLabel = Styled.label`
    display: flex;
    justify-content: start;
    padding: 12px;

`;

const ScDropBox = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ScNickAlign = Styled.div`
    margin-left: 10px;
    display: fixed;
`;

const ScTitleAlign = Styled.div`
    margin-left: 120px;
    display: fixed;
`;

const ScDateAlign = Styled.div`
    margin-left: 330px;
    display: fixed;
`;

const ScLikesAlign = Styled.div`
    margin-left: 330px;
    display: fixed;
`;

const ScContentBox = Styled.div`
    display: none;
    position: absolute;
    width: 100%;
    left: 0;
    background-color: white;
    border-shadow: 0 4px 5px 0 #00000026;    
`;

const ScUl = Styled.ul`
    list-style-type: none;
    padding: 12px;
    margin: 0;
`;

const ScLi = Styled.li`
    margin: 0.8rem 0;
`;


const ScBoard = Styled.div`    
    width: 100%;
    height: 100%;
`;

const ScTable = Styled.table`
    border: 1px solid black;
    width: 100%;
    margin: 30px auto;
`;


export default BoardList