import React from 'react';
import ChatList from '../../components/Chat/ChatList';

const Chat = () => {
  const arr = [0, 1, 2, 3];

  return (
    <div>
      {arr.map((i, k) => {
        console.log(k);
        return <ChatList pid={i} key={k} />;
      })}
    </div>
  );
};

export default Chat;
