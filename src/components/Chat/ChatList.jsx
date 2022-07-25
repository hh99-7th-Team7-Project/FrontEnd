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
        title: '아직 회원이 아니신가요?',
        text: '로그인을 해주세요!',
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
  height: 236px;
  margin: 20px;
  border-radius: 12px;
  /* overflow: hidden; */
  border: 1px rgba(0, 0, 0, 0.2) solid;

  & p {
    /* font-size: 12px; */
    color: #3c3b3b;
  }
  /* & .all {
    width: 100%;
    height: 100%;
  } */
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
  width: 300px;
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'SUIT ExtraBold';
`;

const Contents = styled.p`
  font-size: 1em;
  height: 53px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const InfoWrap = styled.div`
  display: flex;
  & div {
    display: flex;
    height: 24px;
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
