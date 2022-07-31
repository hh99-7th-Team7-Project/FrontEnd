import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import calendar from '../../Image/Chat/calendar.svg';
import IconTime from '../../Image/Chat/time.svg';
import coffee from '../../Image/Chat/coffee.svg';
import person from '../../Image/Chat/person.png';
import { getCookie } from '../../shared/Cookie';
import Swal from 'sweetalert2';

const ChatList = (data) => {
  const navigate = useNavigate();
  const id = data.data.chatpostId;
  const completed = data.data.completed;
  const token = getCookie("token")

  const ckLogin = ()=>{
    if(token){
      navigate(`/chatposts/detail/${id}`)
    }else{
      Swal.fire({
        title: '로그인 후 이용 가능한 서비스입니다',
        icon: 'warning',
        confirmButtonText: '확인',
      });
    }
  }

  return (
    <Container>
      <InnerContainer className="all">
        <Wrap>
          {completed === false ? <span>모집 완료</span> : <span>모집 중</span>}
          <p style={{color:"grey"}}>{data.data.beforeTime}</p>
        </Wrap>
        <Title>{data.data.title}</Title>
        <Contents>{data.data.contents}</Contents>
        <br />

        <InfoWrap style={{marginBottom:'9px'}}>
          <div>
            <ICON src={calendar}></ICON>
            <span style={{marginRight:"20px"}}>{data.data.calendar}</span>
          </div>
          <div>
            <ICON src={IconTime}></ICON>
            <span>{data.data.meettime}</span>
          </div>
        </InfoWrap>

        <div style={{display:"flex", justifyContent:'space-between'}}>
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
              <span>
                {data.data.count}/ {data.data.totalcount}
              </span>
            </div>
          </InfoWrap>
          <Btn onClick={ckLogin} >
          자세히 보기 {'>'}
          </Btn>
        
        </BtnWrap>
        </div>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 256px;
  margin: 20px;
  border-radius: 12px;
  /* overflow: hidden; */
  border: 1px rgba(0, 0, 0, 0.2) solid;
  & p {
    /* font-size: 12px; */
    color: #3c3b3b;
  }
`;

const InnerContainer =styled.div`
  height: 90%;
  width: 90%;
  margin: 10px auto;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  & span {
    font-size: 1em;
    font-weight: 600;
  }
`;

const Title = styled.p`
  font-size: 1.25em;
  margin: 9px 0 10px 0;
  height: 23px;
  /* width: 300px; */
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
   word-wrap: break-word;
   word-break: break-all;
  font-family: 'SUIT ExtraBold';
`;

const Contents = styled.p`
  font-size: 1em;
  height: 73px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* border:1px solid black; */
  display: -webkit-box;
  word-wrap: break-word;
   word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const InfoWrap = styled.div`
  display: flex;
  & div {
    display: flex;
    height: 24px;
  }
  & span{
    word-wrap: break-word;
    word-break: break-all;
    text-overflow: ellipsis;
  }
`;

const ICON = styled.img`
margin-right: 5px;
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Btn = styled.div`
  display: flex;
  font-size: 1em;
  margin-left: 6px;
  /* align-items: center; */
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

export default ChatList;
