import React, { useState } from 'react';
import PostChat from '../../components/Chat/PostChat';
import ChatDetailItem from '../../components/Chat/ChatDetail';
import ChatAttend from '../../components/Chat/ChatAttend';
import { getCookie } from '../../shared/Cookie';

const ChatDetail = (data) => {
  const [chat, setChat] = useState(false);
  const id = data.chatpostId;
  const user = data.user;
  const currentUser = getCookie('nickname');

  return (
    <div>
      <span>ChatDetail</span>
      <ChatDetailItem id={id}></ChatDetailItem>
      <button>참여하기</button>
      <button onClick={() => setChat(!chat)}>대화하기</button>
      {chat === true ? <PostChat /> : null}
    </div>
  );
};

export default ChatDetail;
