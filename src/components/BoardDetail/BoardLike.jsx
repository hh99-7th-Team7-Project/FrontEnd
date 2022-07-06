import React from 'react';
import Styled from 'styled-components';

const BoardLike = () => {
  return (
    <ScWrap>
        <h3>6</h3>
        <button>추천</button>
    </ScWrap>
  )
}

const ScWrap = Styled.div`
    margin: auto;
    border: 1px solid black;
    
`;

export default BoardLike