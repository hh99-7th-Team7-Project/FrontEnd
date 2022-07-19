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



export default BoardComment