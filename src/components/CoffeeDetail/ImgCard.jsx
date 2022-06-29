import React from 'react';
import Styled from 'styled-components';

const ImgCard = ( {url} ) => {
  return (
    <>
        <ImgWrap>            
            <Img src={url}/>
        </ImgWrap>
    </>
  )
}


const ImgWrap = Styled.div`    
    width: 500px;
    height: 500px;
    margin-left: 50px;
    justify-content: center;
`;

const Img = Styled.img`
    width: 500px;
    height: 500px;
`;

export default ImgCard