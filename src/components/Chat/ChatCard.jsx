import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import apis from '../../shared/api/main';
import ChatAttend from './ChatAttend';
import * as Sentry from "@sentry/react";

const ChatCard = ({ data, chatpostId }) => {

  const [count, setCount] = useState(1);

  const members = data?.chatPostMember;

  const isCompleted = members?.length === data?.totalcount;

  const upCount = async () => {
    const item = await apis.attendChatMember(chatpostId).then((res) => {
      return;
    }).catch((e)=>{
      Sentry.captureException(e);
    })
  };

  return (
    <Wrap>
      <>
        <TitleWrap>
          <span>{data?.title}</span>
          <p>{data?.beforeTime}</p>
        </TitleWrap>
        <span>
          모집인원 : {count}/ {data?.totalcount}
        </span>
        <br />
        <span>모집날짜 : {data?.calendar}</span>
        <br />
        <span>모임장소 : {data?.map}</span>
        <br />
        <span>모임시간 : {data?.meettime}</span>
        <br />
        <span>활동내용</span>
        <br />
        <span>{data?.contents}</span>
        <br />
        <ChatAttend members={members}></ChatAttend>
      </>
    </Wrap>
  );
};

const Wrap = styled.div``;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    display: inline-block;
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 20px;
  }
  & p {
    font-size: 12px;
    color: #3c3b3b;
  }
`;

const ChatTop = styled.div`
  width: 100%;
  display: flex;
  & div {
    font-size: 25px;
    font-weight: 600;
    margin-top: 30px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  & span {
    display: inline-block;
    margin-left: 10px;
  }
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

export default ChatCard;
