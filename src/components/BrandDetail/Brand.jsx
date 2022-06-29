import React from 'react';
import Styled from 'styled-components';

const Brand = ({ brand, name, symbol, comment }) => {


  return (
    <Wrap>
        <Container>
            <ImgBox>
                <Img src={symbol}/>
                <p>{brand}</p>
            </ImgBox>
            <Content>
                <Title>{name}</Title>
                <hr/>
                <Comment>{comment}</Comment>
            </Content>
        </Container>        
    </Wrap>
  )
}

const Wrap = Styled.div`

`;

const Container = Styled.div`
    display: flex;    
`;

const ImgBox = Styled.div`
    border: 2px solid black;
    margin: 10px auto;
    width: 30vw;
    height: 30vh;
`;

const Content = Styled.div`
    border: 2px solid black;
    width: 60vw;
    height: 30vh;
    margin: 10px auto;
`;

const Title = Styled.p`
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 5px;
`;

const Comment = Styled.p`
    margin-top: 15px;
    margin-left: 5px;
`;


const Img = Styled.img`
    &:hover {
        cursor: pointer;
    }
`;

export default Brand