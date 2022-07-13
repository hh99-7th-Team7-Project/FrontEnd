import React, { useState, useEffect } from 'react';
import PostChat from '../../components/Chat/PostChat';
import ChatDetailItem from '../../components/Chat/ChatDetail';
import { __loadOneChatItem } from '../../redux/modules/chat';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ChatDetail = () => {
  const dispatch = useDispatch();
  const [chat, setChat] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(__loadOneChatItem(id));
  }, []);

  const chatReducer = useSelector((state) => state.chat.one_list);
  console.log(chatReducer);

  return (
    <div>
      <span>ChatDetail</span>
      <ChatDetailItem chatReducer={chatReducer}></ChatDetailItem>
      <button>참여하기</button>
      <button onClick={() => setChat(!chat)}>대화하기</button>
      {chat === true ? <PostChat /> : null}
    </div>
  );
};

export default ChatDetail;
