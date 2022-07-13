import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatList from '../../components/Chat/ChatList';
import { __loadChatLists } from '../../redux/modules/chat';
import ChatWrite from '../../components/Chat/ChatWrite';
import Header from '../Header/Header';

const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__loadChatLists());
  }, []);

  const chatReducer = useSelector((state) => state?.chat?.list);
  console.log(chatReducer);

  const [write, setWrite] = useState(false);

  return (
    <div>
      <Header></Header>
      {chatReducer &&
        chatReducer.map((data, k) => {
          return <ChatList data={data} key={k} />;
        })}
      <span> chat</span>
      <button
        onClick={() => {
          setWrite(!write);
        }}
      >
        모임만들기
      </button>
      {write === true ? <ChatWrite write={write} /> : null}
    </div>
  );
};

export default Chat;
