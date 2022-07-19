import React, { useState, useEffect } from 'react';
import ChatDetailItem from '../../components/Chat/ChatDetail';
import { __loadOneChatItem } from '../../redux/modules/chat';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostChat from '../../components/Chat/PostChat';

const ChatDetail = () => {
  const dispatch = useDispatch();
  const [chat, setChat] = useState(false);
  const [click, setClick] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(__loadOneChatItem(id));
  }, []);

  const chatReducer = useSelector((state) => state.chat.one_list);

  return (
    <div>
      {/* <span>ChatDetail</span>
      <button onClick={() => setClick(!click)}>참여하기</button>
      <button onClick={() => chatClick()}>대화하기</button>
      {chat === true ? (
        <div>
          <ChatDetailItem chatReducer={chatReducer}></ChatDetailItem>
          <PostChat chatReducer={chatReducer} chatpostId={id} />
        </div>
      ) : (
        <ChatDetailItem chatReducer={chatReducer}></ChatDetailItem>
      )} */}

      <ChatDetailItem chatReducer={chatReducer}></ChatDetailItem>
    </div>
  );
};

export default ChatDetail;
