import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { __loadOneChatItem } from '../../redux/modules/chat';
import apis from '../../shared/api/main';
import PostChat from '../../components/Chat/PostChat';
import ChatWrite from './ChatWrite';

const ChatDetail = ({ chatReducer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const data = chatReducer;
  console.log(data);

  const deleteChatItem = async () => {
    const item = await apis.deleteChatItem(id).then((res) => {
      navigate('/chatposts');
    });
  };
  const [write, setWrite] = useState(false);

  const [chat, setChat] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    dispatch(__loadOneChatItem(id));
  }, []);

  const oneList = useSelector((state) => state.chat.one_list);

  const chatClick = () => {
    dispatch(__loadOneChatItem(id));
    setChat(!chat);
  };

  return (
    <div>
      <button onClick={() => setWrite(!write)}>수정</button>
      {write === true ? <ChatWrite /> : null}
      <button onClick={deleteChatItem}>삭제</button>

      <button onClick={() => setClick(!click)}>참여하기</button>
      <button onClick={() => chatClick()}>대화하기</button>
      {chat === true ? (
        <div>
          <Wrap>
            <span>모임이름 : {data?.title}</span>
            <br />
            <span>
              모집인원 : {data?.count}/ {data?.totalcount}
            </span>
            <br />
            <span>모집날짜 : {data?.calendar}</span>
            <br />
            <span>모임장소 : {data?.map}</span>
            <br />
            <span>모임내용 : {data?.contents}</span>
            <br />
            <span>작성시간 : {data?.beforeTime}</span>
          </Wrap>
          <PostChat chatReducer={oneList} chatpostId={id} />
        </div>
      ) : (
        <Wrap>
          <span>모임이름 : {data?.title}</span>
          <br />
          <span>
            모집인원 : {data?.count}/ {data?.totalcount}
          </span>
          <br />
          <span>모집날짜 : {data?.calendar}</span>
          <br />
          <span>모임장소 : {data?.map}</span>
          <br />
          <span>모임내용 : {data?.contents}</span>
          <br />
          <span>작성날짜 : {data?.beforeTime}</span>
        </Wrap>
      )}
    </div>
  );
};

const Wrap = styled.div`
  padding: 20px;
  margin: 20px;
  border: 2px solid black;
`;

export default ChatDetail;
