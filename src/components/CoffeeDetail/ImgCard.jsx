import React from 'react';
import Styled from 'styled-components';

const ImgCard = ( {url} ) => {
  return (
    <>
        <ScImgWrap>            
            <ScImg src={url}/>
        </ScImgWrap>
    </>
  )
}


const ScImgWrap = Styled.div`    
    width: 500px;
    height: 500px;
    margin-left: 50px;
    justify-content: center;
`;

const ScImg = Styled.img`
    width: 500px;
    height: 500px;
`;

export default ImgCard