import React from 'react';
import styled from 'styled-components';
import ChatDetailItem from '../../components/Chat/ChatDetail';
import { ChatLogoSmall, ChatMini2 } from '../../shared/svg/A-index';
import Header from '../Header/Header';

const ChatDetail = () => {
  return (
    <>
      <ScTopCard2>
        <ScImg1 src={ChatLogoSmall} alt='' style={{ width: "100%" }} />
        <ScImg2 src={ChatMini2} alt='' style={{ width: "100%" }} />
        <ScTopWord style={{ margin: '60px 70% 60px 20%' }}>
          우리 같이 커피마셔요!
        </ScTopWord>
      </ScTopCard2>
      <ChatDetailItem></ChatDetailItem>
    </>
  );
};

export default ChatDetail;

const ScTopCard2 = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5em;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: flex;
    padding: 0px;
    margin: 10px auto;
  }
`;
const ScTopWord = styled.div`
position: absolute;
font-family: "SUIT ExtraBold";
width: 209px;
@media screen and (max-width: 768px) {
    display: none;
  }
`

const ScImg1 = styled.img`
@media screen and (max-width: 768px) {
    display: none;
  }
`
const ScImg2 = styled.img`
display: none;
@media screen and (max-width: 768px) {
    display: block;
  }
`