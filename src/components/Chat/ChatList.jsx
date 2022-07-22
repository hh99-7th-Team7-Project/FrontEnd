import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import calendar from '../../Image/Chat/calendar.svg';
import IconTime from '../../Image/Chat/time.svg';
import coffee from '../../Image/Chat/coffee.svg';
import person from '../../Image/Chat/person.png';
import { colorSyntax } from '@toast-ui/editor-plugin-color-syntax';

const ChatList = (data) => {
  const navigate = useNavigate();
  const id = data.data.chatpostId;
  const completed = data.data.completed;

  return (
    <Container>
      <div className="all">
        <Wrap>
          {completed === false ? <span>모집 완료</span> : <span>모집 중</span>}
          <p>{data.data.beforeTime}</p>
        </Wrap>
        <Title>{data.data.title}</Title>
        <Contents>{data.data.contents}</Contents>
        <br />

        <InfoWrap>
          <div>
            <ICON src={calendar}></ICON>
            <span>{data.data.calendar}</span>
          </div>
          <div>
            <ICON src={IconTime}></ICON>
            <span>{data.data.meettime}</span>
          </div>
        </InfoWrap>
        <InfoWrap>
          <div>
            <ICON src={coffee}></ICON>
            <span>{data.data.map}</span>
          </div>
        </InfoWrap>

        <BtnWrap>
          <InfoWrap>
            <div>
              <ICON src={person}></ICON>
              <p>
                {data.data.count}/ {data.data.totalcount}
              </p>
            </div>
          </InfoWrap>
          <Btn onClick={() => navigate(`/chatposts/detail/${id}`)}>
            <span>모집 내용 확인하기</span>
          </Btn>
        </BtnWrap>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 265px;
  padding: 20px;
  margin: 20px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 30%);
  & p {
    /* font-size: 12px; */
    color: #3c3b3b;
  }
  & .all {
    width: 100%;
    height: 100%;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 20px;
    font-weight: 700;
  }
`;

const Title = styled.span`
  display: inline-block;
  font-size: 30px;
  font-weight: 700;
  margin: 15px 0;
  padding-top: 5px;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Contents = styled.span`
  font-size: 16px;
  width: 500px;
  height: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const InfoWrap = styled.div`
  display: flex;
  margin-bottom: 5px;
  & div {
    display: flex;
    margin-right: 20px;
    height: 24px;
  }
  & span {
    margin-left: 3px;
  }
  & p {
    margin-left: 3px;
  }
`;

const ICON = styled.img`
  display: inline-block;
  margin-right: 5px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  display: flex;
  font-size: 20px;
  border: none;
  justify-content: space-around;
  align-items: center;
  color: #2c278c;
  background-color: #fff;
  font-weight: 700;
`;

export default ChatList;
