import React from 'react';
import Styled from 'styled-components';

const ImgCard = ({url , url2 , name , name2}) => {


  return (
    <ImgContainer>
            <ImgWrap>
                <Img src={url}/>
                <p>{name}</p>
            </ImgWrap>
            <ImgWrap>
                <Img src={url2}/>
                <p>{name2}</p>
            </ImgWrap>
            <ImgWrap>
                <Img src={url2}/>
                <p>{name2}</p>
            </ImgWrap>
            <ImgWrap>
                <Img src={url2}/>
                <p>{name2}</p>
            </ImgWrap>
            <ImgWrap>
                <Img src={url2}/>
                <p>{name2}</p>
            </ImgWrap>
            <ImgWrap>
                <Img src={url2}/>
                <p>{name2}</p>
            </ImgWrap>
            <ImgWrap>
                <Img src={url2}/>
                <p>{name2}</p>
            </ImgWrap> 
        </ImgContainer>
  )
}

const ImgContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    margin: auto;
    width: 100vw;
`;

const ImgWrap = Styled.div`
    border: 2px solid black;
    margin: 50px auto;
    width: 200px;
    text-align: center;    
`;

const Img = Styled.img`
    &:hover {
        cursor: pointer;
        background-color: red;
    }
`;

export default ImgCard