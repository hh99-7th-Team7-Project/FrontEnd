import React from 'react';
import Styled from 'styled-components';

const HeaderInput = () => {
  return (
    <ScWrap>
        <ScInput type="search"/>
        <button>검색</button>
    </ScWrap>
  )
}

const ScWrap = Styled.div`    
    width: 200px;
    margin-top: 30px;
`;

const ScInput = Styled.input`
    border-radius: 3px;
    border: 1px solid black;
`;

export default HeaderInput