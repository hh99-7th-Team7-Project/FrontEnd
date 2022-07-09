import React from 'react';
import Styled from 'styled-components';
import { GoChevronDown } from "react-icons/go";
import CommentMap from './CommentMap';


const BoardComment = () => {


  return (
    <>
      <ScWrap>
        <ScInput id="dropdown" type="checkbox"/>      
          <ScLabel htmlfor="dropdown">
              <ScH3>전체 댓글</ScH3>
              <ScLabelContent>최신순</ScLabelContent>            
              <GoChevronDown className="careIcon"/>
          </ScLabel>
          <ScBtnwrap>
            <ScBtn>✏️글쓰기</ScBtn>
          </ScBtnwrap>
          <ScHR/>
        <h3>댓글</h3>
      </ScWrap>
      <CommentMap/>
    </>
  )
}

const ScWrap = Styled.div`  
  width: 100%;
  
`;

const ScH3 = Styled.h3`
  margin-right: 20px;
`;

const ScLabelContent = Styled.div`
  
`;

const ScInput = Styled.input`
    
`;

const ScLabel = Styled.label`
    display: flex;
    justify-content: start;
    padding: 12px;
`;

const ScBtnwrap = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: right;
`;

const ScBtn = Styled.div`
  padding: 20px;
  width: 100px;
  margin-right: 30px;
  border-radius: 50px;
  background-color: #EEE;
  border-color: #EEE;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    cursor: pointer;  
    background-color: #212121;
    color: white;
  }
`;

const ScHR = Styled.hr`
    margin-top: 40px;
    margin-bottom: 20px;
`;


export default BoardComment