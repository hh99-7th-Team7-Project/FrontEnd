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
                <ScLabel htmlfor="dropdown">
                    <div>Category</div>
                    <GoChevronDown className="careIcon"/>
                </ScLabel>
                <ScContentBox>
                    <ScUl>
                        <li>커피</li>
                        <li>논커피</li>
                        <li>스무디</li>
                        <li>에이드</li>
                        <li>차</li>
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

const ScContentBox = Styled.div`
    display: none;
    position: absolute;
    width: 100%;
    left: 0;
    background-color: white;
    border-shadow: 0 4px 5px 0 #00000026;    
`;

const ScUl = Styled.ul`
    list-style: none;
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