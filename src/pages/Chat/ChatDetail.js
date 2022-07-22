import React from 'react';
import ChatDetailItem from '../../components/Chat/ChatDetail';
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
      <div
        style={{
          width: '1920px',
          height: '135px',
          background: 'lightblue',
          marginBottom: '30px',
        }}
      ></div>
      <ChatDetailItem></ChatDetailItem>
    </div>
  );
};

export default ChatDetail;
