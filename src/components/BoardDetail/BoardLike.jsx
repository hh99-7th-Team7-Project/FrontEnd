import React from 'react';
import Styled from 'styled-components';

const BoardLike = () => {
  return (
    <ScWrap>
        <ScH3>6</ScH3>
        <ScBtnWrap>
          <ScBtn>추천</ScBtn>
        </ScBtnWrap>
    </ScWrap>
  )
}

const ScWrap = Styled.div`
    margin: 30px auto;
    
    
`;

const ScBtnWrap = Styled.div`
  border: 1px solid black;
  margin: 20px auto;
`;


const ScH3 = Styled.h3`
  text-align: center;
`;

const ScBtn = Styled.button`
  
`;



export default BoardLike