import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import {
  __deleteChat,
  __loadChatLists,
  __loadOneChatItem,
} from '../../redux/modules/chat';
import apis from '../../shared/api/main';

import ChatWrite from './ChatWrite';
// import { __updateChatItem, deleteChatItem } from './../../redux/modules/chat';

const ChatDetail = ({ chatReducer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(chatReducer);

  // useEffect(() => {
  //   dispatch(__loadOneChatItem(id));
  //   return () => {};
  // }, []);

  // const chatReducer = useSelector((state) => state?.chat?.list);
  // console.log(chatReducer);

  // const deleteChatItem = () => {
  //   dispatch(__deleteChat(id));
  //   navigate('/chatposts');
  // };

  const deleteChatItem = async () => {
    const test = await apis.deleteChatItem(id).then((res) => {
      navigate('/chatposts');
    });
  };

  const [write, setWrite] = useState(false);

  // React.useEffect(() => {
  //   // dispatch(handleActions.isPagename(""));
  //   dispatch(__loadOneChatItem(id));
  // }, []);

  return (
    <div>
      <button onClick={() => setWrite(!write)}>수정</button>
      {write === true ? <ChatWrite /> : null}
      <button onClick={deleteChatItem}>삭제</button>
      <Wrap>
        <span>모임이름 : {chatReducer?.title}</span>
        <br />
        <span>
          모집인원 : {chatReducer?.count}/ {chatReducer?.totalcount}
        </span>
        <br />
        <span>모집날짜 : {chatReducer?.calendar}</span>
        <br />
        <span>모임장소 : {chatReducer?.map}</span>
        <br />
        <span>모임내용 : {chatReducer?.contents}</span>
        <br />
        <span>작성날짜 : {chatReducer?.createdAt}</span>
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  padding: 20px;
  margin: 20px;
  border: 2px solid black;
`;

export default ChatDetail;
