import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { boardwrite } from '../../shared/svg/A-index';
import {
  __addChatItem,
  __updateChatItem,
  __loadOneChatItem,
  __loadChatLists,
} from '../../redux/modules/chat';
import Swal from 'sweetalert2';

const ChatWrite = ({ setWrite, write }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const is_edit = id ? true : false;
  useEffect(() => {
    dispatch(__loadOneChatItem(id));
  }, [dispatch]);

  const ChatItem = useSelector((state) => state?.chat?.one_list);

  //날짜

  const map = ChatItem?.map;
  const time = ChatItem?.meettime.split(':');

  const [page, setPage] = React.useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [chatName, setChatName] = React.useState(
    is_edit ? ChatItem?.title : ''
  );
  const [chatContent, setChatContent] = React.useState(
    is_edit ? ChatItem?.contents : ''
  );
  const [dateValue, setDateValue] = React.useState(
    is_edit ? ChatItem?.calendar : ''
  );
  const [hourValue, setHourValue] = React.useState(is_edit ? time[0] : '');
  const [hourValue2, setHourValue2] = React.useState(is_edit ? time[0] : '');

  console.log(hourValue2)
  const [minuteValue, setMinuteValue] = React.useState(is_edit ? time[1] : '');
  const [countValue, setCountValue] = React.useState(
    is_edit ? ChatItem?.totalcount : 3
  );
  const [mapfValue, setmapfValue] = React.useState(is_edit ? map : '');
  const [mapsValue, setmapsValue] = React.useState(is_edit ? map[1] : '');
  const [maptValue, setmaptValue] = React.useState(is_edit ? map[2] : '');

  console.log(hourValue, minuteValue);
  //input 값
  const inputTitle = (e) => {
    setChatName(e.target.value);
  };

  const inputContent = (e) => {
    setChatContent(e.target.value);
  };

  const inputMapF = (e) => {
    setmapfValue(e.target.value);
  };
  // const inputMapS = (e) => {
  //   setmapsValue(e.target.value);
  // };
  // const inputMapT = (e) => {
  //   setmaptValue(e.target.value);
  // };

  const inputHour = (e) => {
    // const value = e.target.value;
    setHourValue(e.target.value);
  };

  const inputHour2 = (e) => {
    // const value = e.target.value;
    setHourValue2(e.target.value);
  };

  const inputMinute = (e) => {
    const value = e.target.value;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    -2 < onlyNumber < 60
      ? Swal.fire({
        title: '60자 이내로 작성해주세요.!',
        icon: 'info',
        confirmButtonText: '확인',
      })
      : setMinuteValue(onlyNumber);
  };

  const inputCount = (e) => setCountValue(Number(e.target.value));

  // 인원 수 증가 감소 ( 3명이상 10명 이하)
  const upCount = () =>
    setCountValue((countValue) => (countValue === 10 ? 10 : countValue + 1));
  const downCount = () =>
    setCountValue((countValue) => (countValue === 3 ? 3 : countValue - 1));

  const addChatItem = (date) => {
    const num = parseInt(countValue);
    const chatItem = {
      title: chatName,
      contents: chatContent,
      calendar: dateValue,
      map: mapfValue,
      totalcount: num,
      meettime: hourValue + '~' + hourValue2,
    };
    if(chatName!==""&&chatContent!==""&&dateValue!==""&&mapfValue!==""&&num!==""&&hourValue!==""&&minuteValue!==""){
         dispatch(__addChatItem(chatItem));
    setWrite(!write);
    navigate('/chatposts');  
    }else{
      Swal.fire({
        title: '빈칸 없이 작성해주세요!',
        icon: 'error',
      });
    }
   
  };

  const editChatItem = () => {
    const num = parseInt(countValue);
    const chatitem = {
      title: chatName,
      contents: chatContent,
      calendar: dateValue,
      map: mapfValue,
      totalcount: num,
      meettime: hourValue + ':' + minuteValue,
    };
    if(chatName!==""&&chatContent!==""&&dateValue!==""&&mapfValue!==""&&num!==""&&hourValue!==""&&minuteValue!==""){
       dispatch(__updateChatItem(chatitem, id));
    // dispatch(__loadOneChatItem(id));
    setWrite(!write);
    Swal.fire({
      title: '수정 완료!',
      icon: 'success',
      confirmButtonText: '확인',
    });
    }else{
      Swal.fire({
        title: '빈칸 없이 작성해주세요!',
        icon: 'error',
      });
    }
   
  };

  return (
    <Wrap>
      <div>
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
          const dateString = dayjs(new Date(date)).format('YYYY-MM-DD');
          setDateValue(dateString);
        }}
      />
      <div style={{
        margin:"60px 0"
      }}>
        <Title>시간</Title>
        {is_edit ? (
          <div>
            <TimeInput value={hourValue} onChange={inputHour}  type="time" />
            <span>시</span>
            <TimeInput
              value={minuteValue || ''}
              onChange={inputMinute}
              type="time"
            />
          </div>
        ) : (
          <div style={{display:"flex"}}>
            <div>
            <TimeInput
              value={hourValue || ''}
              onChange={inputHour}
              type="time"
            />
            <span>~</span></div>
            <div>
            <TimeInput
              value={hourValue2 || ''}
              onChange={inputHour2}
              type="time"
            />
            </div>
          </div>
        )}
        </div>
        </div>
      <InputWrap>
        <Title>제목</Title>
        {is_edit ? (
          <Input
            placeholder="제목을 입력해주세요"
            value={chatName || ''}
            onChange={inputTitle}
            maxLength={30}
          />
        ) : (
          <Input
            placeholder="제목을 입력해주세요"
            value={chatName || ''}
            onChange={inputTitle}
            maxLength={30}
          />
        )}
        <Title>활동 내용</Title>
        {is_edit ? (
          <ContentInput value={chatContent || ''} onChange={inputContent} />
        ) : (
          <ContentInput
          placeholder='간단한 자기소개와 함께 커파인러 분들과 함께 이야기 하고 싶은 주제에 대해 설명해주세요.'
          value={chatContent || ''} onChange={inputContent} />
        )}
        <Title>카페 위치<span style={{color:"#8f8d8db7"}}>(명확한 상호명을 적어주세요 (ex)이태원 챔프커피)</span></Title>

        {is_edit ? (
          <div>
            <MapInput
              value={mapfValue}
              onChange={inputMapF}
              placeholder={'카페명'}
            ></MapInput>
          </div>
        ) : (
          <div>
            <MapInput
              value={mapfValue}
              onChange={inputMapF}
              placeholder={'카페명'}
            ></MapInput>
          </div>
        )}

        <BttomWrap>
          <CountWrap>
            <Title>인원</Title>
            <div>
              <Btn onClick={downCount}>
                <span>-</span>
              </Btn>
              <CountInput onChange={inputCount} value={countValue}></CountInput>
              <Btn onClick={upCount}>
                <span>+</span>
              </Btn>
            </div>
            {/* {is_edit ? (
              <div>
                <Btn onClick={downCount}>-</Btn>
                <CountInput
                  onChange={inputCount}
                  value={countValue}
                ></CountInput>
                <Btn onClick={upCount}>+</Btn>
              </div>
            ) : (
              <div>
                <Btn onClick={downCount}>-</Btn>
                <CountInput
                  onChange={inputCount}
                  value={countValue}
                ></CountInput>
                <Btn onClick={upCount}>+</Btn>
              </div>
            )} */}
          </CountWrap>
          <MakeBtn>
            {is_edit ? (
              <button onClick={editChatItem}>
                <img src={boardwrite} alt="" />
                수정
              </button>
            ) : (
              <button onClick={addChatItem}>
                <img src={boardwrite} alt="" />
                 모임 만들기
              </button>
            )}
          </MakeBtn>
        </BttomWrap>

        {/* <MakeBtn onClick={addChatItem}>모임 만들기</MakeBtn> */}
      </InputWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 107vw;
  height: 59vh;
  border-radius: 12px;
  display: flex;
  margin: auto;
  border: 1px #B6B6B6 solid;
  padding: 50px 35px 20px;
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

const MapInput = styled.input`
  width: 98%;
  height: 3em;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 5px 5px 20px 5px;
  padding: 0px 0 0 5px;
  border: 1px solid #B6B6B6;
    background-color: #F3F3F3;
`;

const TimeInput = styled.input`
  width: 100px;
  height: 3em;
  border: 1px solid #B6B6B6;
  background-color: #F3F3F3;
  border-radius: 10px;
  margin: 10px auto;
  padding: 0px 0 0 5px;
  color: #5a5858;
`;

const Title = styled.span`
  font-size: 19px;
  font-weight: 600;
`;



// const TimeBtn = styled.button`
//   display: inline-block;
//   width: 40px;
//   height: 40px;
//   border-radius: 12px;
//   border: none;
//   margin: 10px 10px 10px 0;
//   cursor: pointer;
//   & .active {
//     background-color: lightblue;
//   }
// `;

const Btn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 100%;
  & span {
    font-weight: 900;
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
`;
const MakeBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    font-weight: 700;
    text-align: center;
    color: white;
    width: 166px;
    height: 49px;
    font-size: 20px;
    border-radius: 10px;
  }
`;

const CountInput = styled.input`
  width: 50px;
  height: 50px;
  border: none;
  padding-left: 40px;
  font-weight: 600;
  font-size: 15px;
    color: #5a5858;
`;

const Input = styled.input`
  height: 4em;
  border: 1px solid #B6B6B6;
  background-color: #F3F3F3;
  border-radius: 10px;
  margin: 5px 0 20px 0;
  padding: 0px 0 0 10px;
  color: #5a5858;
  font-size: 16px;
  color: #5a5858;
`;

const ContentInput = styled.textarea`
  height: 10em;
  border: 1px solid #B6B6B6;
  background-color: #F3F3F3;
  border-radius: 10px;
  margin: 5px 0 20px 0;
  padding: 10px;
  resize: none;
  white-space: pre-wrap;
  font-size: 16px;
  font-weight: 500;
  color: #5a5858;
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: #ddd;
  }
`;

const BttomWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default ChatWrite;
