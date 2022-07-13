import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ChatDetail from './ChatDetail';

const ChatList = (data) => {
  const navigate = useNavigate();
  const id = data.data.chatpostId;
  console.log(data);

  return (
    <div>
      <Wrap onClick={() => navigate(`/chatposts/detail/${id}`)}>
        <span>모임이름 : {data.data.title}</span>
        <br />
        <span>
          모집인원 : {data.data.count}/ {data.data.totalcount}
        </span>
        <br />
        <span>모집날짜 : {data.data.calendar}</span>
        <br />
        <span>모임장소 : {data.data.map}</span>
        <br />
        <span>모임내용 : {data.data.contents}</span>
        <br />
        <span>작성날짜 : {data.data.createdAt}</span>
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  padding: 20px;
  margin: 20px;
  border: 2px solid black;
`;

export default ChatList;
