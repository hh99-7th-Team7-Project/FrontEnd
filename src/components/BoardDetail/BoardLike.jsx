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
    border: 1px solid black;
    padding: 10px 10px 0px 10px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ScBtnWrap = Styled.div`
  margin: 20px auto;
  

  
`;


const ScH3 = Styled.h3`
  text-align: center;
`;

const ScBtn = Styled.button`
  
  padding: 10px 
`;



export default BoardLike