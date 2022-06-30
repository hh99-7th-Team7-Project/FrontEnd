import React from 'react'
import Styled from 'styled-components';

const Map = () => {
  return (
    <MapWrap>
        여기에 지도가 들어갑니다.
    </MapWrap>
  )
}

const MapWrap = Styled.div`
    border: 2px solid black;
    width: 30vw;

    margin: 20px;
`;

export default Map