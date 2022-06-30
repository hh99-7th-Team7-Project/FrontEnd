import React from 'react'
import Styled from 'styled-components';

const Map = () => {
  return (
    <ScMapWrap>
        여기에 지도가 들어갑니다.
    </ScMapWrap>
  )
}

const ScMapWrap = Styled.div`
    border: 2px solid black;
    width: 50vw;

    margin: 20px;
`;

export default Map