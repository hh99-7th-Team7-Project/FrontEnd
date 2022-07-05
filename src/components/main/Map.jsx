import React, { useEffect, useState } from "react"
import Styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

const Map = (props) => {
  const navigate = useNavigate()


  return (
    <ScMapWrap onClick={()=>{navigate('/map/커피숍')}}>
           <div style={{ position: 'relative' }}>
      <div
        className='w-full'
        id='map'
        style={{ height: '300px', backgroundColor: 'grey' }}
      >
        지도 
      </div>
    </div>
    </ScMapWrap>
  )
}

const ScMapWrap = Styled.div`
    border: 2px solid black;
    margin: 20px;
`;

export default Map