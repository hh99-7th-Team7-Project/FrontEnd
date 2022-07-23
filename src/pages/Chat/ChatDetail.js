import React from 'react';
import styled from 'styled-components';
import ChatDetailItem from '../../components/Chat/ChatDetail';
import { ChatLogoSmall } from '../../shared/svg/A-index';
import Header from '../Header/Header';

const ChatDetail = () => {
  return (
    <div>
      <div
        style={{
          Width: '1222px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Header />
      </div>
      <ScTopCard2>
          <img src={ChatLogoSmall} alt='' style={{ width: "100%" }} />
          <ScTopWord style={{ margin: '60px 70% 60px 20%' }}>
              우리 같이 커피마셔요!
          </ScTopWord>
        </ScTopCard2>
      <ChatDetailItem></ChatDetailItem>
    </div>
  );
};

export default ChatDetail;

const ScTopCard2 = styled.div`
  display: flex;
  height: 135px;
  background-color:#F5EABB;
  font-size: 24px;
`;
const ScTopWord = styled.div`
position: absolute;
font-family: "SUIT ExtraBold";
width: 209px;
`