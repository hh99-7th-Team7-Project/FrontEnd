import React, { useState, useRef } from 'react';
// import Date from '../../components/DatePicker/Date';
import styled from 'styled-components';

import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useEffect } from 'react';

// import { actionCreators as chatlistActions } from '../../redux/modules/chatlist';
import {
  __addChatItem,
  __updateChatItem,
  __loadOneChatItem,
} from '../../redux/modules/chat';

const ChatWrite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const is_edit = id ? true : false;
  useEffect(() => {
    dispatch(__loadOneChatItem(id));
  }, [id]);

  const ChatItem = useSelector((state) => state?.chat?.one_list);

  //날짜
  const [count, setCount] = useState(3);
  const [startDate, setStartDate] = useState(new Date());
  // const [selectDay, setSelectDay] = useState();
  const [modalContent, setModalContent] = useState('');
  const [timeOpen, setTimeOpen] = useState(false);
  const [timeHandle, setTimeHandle] = useState(false);

  const [chatName, setChatName] = React.useState(
    is_edit ? ChatItem?.title : ''
  );
  const [chatContent, setChatContent] = React.useState(
    is_edit ? ChatItem?.contents : ''
  );
  const [dateValue, setDateValue] = React.useState(
    is_edit ? ChatItem?.calendar : ''
  );
  const [timeValue, setTimeValue] = React.useState(
    is_edit ? ChatItem?.meettime : ''
  );
  const [countValue, setCountValue] = React.useState(
    is_edit ? ChatItem?.totalcount : null
  );
  const [cafeValue, setcafeValue] = React.useState(
    is_edit ? ChatItem?.cafeValue : '검색'
  );
  const [mapValue, setmapValue] = React.useState(is_edit ? ChatItem?.map : '');

  //input 값
  const inputTitle = (e) => {
    setChatName(e.target.value);
  };
  const inputContent = (e) => {
    setChatContent(e.target.value);
  };

  const inputMap = (e) => {
    setmapValue(e.target.value);
  };

  const inputTime = (e) => {
    setTimeValue(e.target.value);
  };

  // 인원 수 증가 감소 ( 3명이상 10명 이하)
  const upCount = () =>
    setCount((prevCount) => (prevCount === 10 ? 10 : prevCount + 1));
  const downCount = () =>
    setCount((prevCount) => (prevCount === 3 ? 3 : prevCount - 1));
  const inputCount = (e) => setCountValue(Number(e.target.value));

  const addChatItem = (date) => {
    const num = parseInt(count);
    console.log(num);
    const chatItem = {
      title: chatName,
      contents: chatContent,
      calendar: dateValue,
      map: mapValue,
      totalcount: num,
      meettime: timeValue,
    };
    dispatch(__addChatItem(chatItem));
    navigate('/chatposts');
    alert('저장 완료!');
  };

  const editChatItem = () => {
    const num = parseInt(count);
    const chatitem = {
      title: chatName,
      contents: chatContent,
      calendar: dateValue,
      map: mapValue,
      totalcount: num,
      meettime: timeValue,
    };
    console.log(chatitem, id);
    dispatch(__updateChatItem(chatitem, id));
    // navigate('/chatposts');
  };

  return (
    <Wrap>
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd (eee)"
        locale={ko}
        minDate={new Date()}
        value={dateValue}
        inline
      /> */}
      <DatePicker
        selected={startDate}
        dateFormat="yyyy-MM-dd (eee)"
        showPopperArrow={false}
        inline
        locale={ko}
        // popperModifiers={{ preventOverflow: { enabled: true } }}
        popperPlacement="auto"
        houldCloseOnSelect={false}
        minDate={new Date()}
        onChange={(date) => {
          const dateString = new Date(date).toLocaleDateString();
          setDateValue(dateString);
        }}
      />
      <InputWrap>
        <Title>제목</Title>
        {is_edit ? (
          <TitleInput
            placeholder="제목을 입력해주세요"
            value={chatName || ''}
            onChange={inputTitle}
          />
        ) : (
          <TitleInput
            placeholder="제목을 입력해주세요"
            value={chatName || ''}
            onChange={inputTitle}
          />
        )}
        <Title>시간</Title>
        {is_edit ? (
          <input value={timeValue || ''} onChange={inputTime} />
        ) : (
          <input value={timeValue || ''} onChange={inputTime} />
        )}

        <Title>활동내용</Title>
        {is_edit ? (
          <ContentInput value={chatContent || ''} onChange={inputContent} />
        ) : (
          <ContentInput value={chatContent || ''} onChange={inputContent} />
        )}
        <Title>카페 위치</Title>

        {is_edit ? (
          <input value={mapValue} onChange={inputMap}></input>
        ) : (
          <input value={mapValue} onChange={inputMap}></input>
        )}
        <Title>인원</Title>
        {is_edit ? (
          <div>
            <Btn onClick={downCount}>-</Btn>
            <CountInput onChange={inputCount} value={countValue}></CountInput>
            <Btn onClick={upCount}>+</Btn>
          </div>
        ) : (
          <div>
            <Btn onClick={downCount}>-</Btn>
            <CountInput onChange={inputCount} value={countValue}></CountInput>
            <Btn onClick={upCount}>+</Btn>
          </div>
        )}
        {/* 
        <div>
          <Btn onClick={downCount}>-</Btn>
          <CountInput onChange={inputCount} value={count}></CountInput>
          <Btn onClick={upCount}>+</Btn>
        </div> */}
        {is_edit ? (
          <MakeBtn onClick={editChatItem}>수정</MakeBtn>
        ) : (
          <MakeBtn onClick={addChatItem}>모임 만들기</MakeBtn>
        )}

        {/* <MakeBtn onClick={addChatItem}>모임 만들기</MakeBtn> */}
      </InputWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 1200px;
  height: 500px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 50px;
  display: flex;
  padding: 30px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  margin-left: 50px;
  width: 600px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const Btn = styled.button`
  width: 30px;
  height: 30px;
`;

const CountInput = styled.input`
  width: 50px;
  height: 50px;
  border: 0px;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 3em;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 20px 0 20px 0;
  padding: 0px 0 0 5px;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 6.25em;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 20px 0 20px 0;
  padding: 10px 0 0 5px;
  resize: none;
`;

const MakeBtn = styled.button`
  width: 100px;
  height: 50px;
`;

export default ChatWrite;
