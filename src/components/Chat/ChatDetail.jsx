import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { __loadOneChatItem } from '../../redux/modules/chat';
import apis from '../../shared/api/main';
import PostChat from '../../components/Chat/PostChat';
import ChatWrite from './ChatWrite';
import ChatAttend from './ChatAttend';
import { getCookie } from '../../shared/Cookie';
import calendar from '../../Image/Chat/calendar.svg';
import IconTime from '../../Image/Chat/time.svg';
import left from '../../Image/Chat/left.png';
import IconChat from '../../Image/Chat/chat.png';

const ChatDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [write, setWrite] = React.useState(false);
  const [chat, setChat] = React.useState(false);
  const [check, setCheck] = React.useState('true');
  const [map, setMap] = React.useState(true);
  const [content, setContent] = React.useState(true);
  const [none, setNone] = React.useState('true');

  const _checkUser = getCookie('nickname');

  useEffect(() => {
    dispatch(__loadOneChatItem(id));
  }, [chat]);

  const data = useSelector((state) => state.chat.one_list);

  const deleteChatItem = async () => {
    const item = await apis.deleteChatItem(id).then((res) => {
      navigate('/chatposts');
    });
  };

  const members = data?.chatPostMember;
  const chatpostId = Number(data?.chatpostId);

  const upCount = async () => {
    const item = await apis.attendChatMember(chatpostId).then((res) => {
      console.log(res.data.result);
      setCheck(res.data.result);
      return dispatch(__loadOneChatItem(id));
    });
  };

  const joinChat = () => {
    setChat(!chat);
    setMap(!map);
    setContent(!content);
    setNone(!none);
    dispatch(__loadOneChatItem(id));
  };

  const changeContent = () => {
    setWrite(!write);
  };

  return (
    <All>
      <Container content={content}>
        {write === true ? (
          <WriteWrap>
            <Wrap>
              <Btn onClick={changeContent}>수정</Btn>
            </Wrap>
            <div>
              <ChatWrite write={write} setWrite={setWrite} />
            </div>
          </WriteWrap>
        ) : (
          <>
            <BtnWrap>
              <div>
                <img src={left} onClick={() => navigate('/chatposts')}></img>
                {/* {data?.completed === true ? (
                  <span>모집 중</span>
                ) : (
                  <span>모집 완료</span>
                )} */}
                {data?.count === data?.totalcount ? (
                  <span>모집 완료</span>
                ) : (
                  <span>모집 중</span>
                )}
              </div>
              {chat === true ? null : _checkUser === data?.nickname ? (
                <div>
                  <Btn onClick={changeContent}>수정</Btn>
                  <Btn onClick={deleteChatItem}>삭제</Btn>
                </div>
              ) : null}
              {/* {_checkUser === data?.nickname ? (
                <div>
                  <Btn onClick={changeContent}>수정</Btn>
                  <Btn onClick={deleteChatItem}>삭제</Btn>
                </div>
              ) : null} */}
            </BtnWrap>
            <Time>{data?.beforeTime}</Time>
            <ChatAttend
              members={members}
              count={data?.count}
              totalcount={data?.totalcount}
            ></ChatAttend>
            <div>
              <ContentWrap content={content}>
                <Map map={map}></Map>
                <div>
                  <TitleWrap>
                    <span>{data?.title}</span>
                    <p>{data?.map}</p>
                  </TitleWrap>

                  <InfoWrap>
                    <ICON src={calendar}></ICON>
                    <span> {data?.calendar}</span>
                  </InfoWrap>
                  <InfoWrap>
                    <ICON src={IconTime}></ICON>
                    <span>{data?.meettime}</span>
                  </InfoWrap>
                  <Contents content={content}>
                    <span>상세 내용</span>
                    <p>{data?.contents}</p>
                  </Contents>
                </div>
              </ContentWrap>
              <AttendBtnWrap>
                <div>
                  {check === 'true' ? (
                    <div>
                      <AttendBtn onClick={upCount} none={none}>
                        참여완료
                      </AttendBtn>

                      <AttendBtn onClick={joinChat}>대화하기</AttendBtn>
                    </div>
                  ) : (
                    <>
                      <AttendBtn onClick={upCount}>참여 하기</AttendBtn>
                      <AttendBtn onClick={joinChat} disabled>
                        대화하기
                      </AttendBtn>
                    </>
                  )}
                </div>
              </AttendBtnWrap>
            </div>
          </>
        )}
      </Container>
      {chat === true ? (
        <ChatWrap>
          <PostChat chatpostId={id} />
        </ChatWrap>
      ) : null}
    </All>
  );
};

const All = styled.div`
  display: flex;
  width: 1200px;
  height: 680px;
  margin: auto;
`;

const WriteWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const Time = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

const Container = styled.div`
  width: ${(props) => (props.content === true ? '100%' : '85%')};
  border-radius: 12px;
  /* border: solid 1.5px #0d0b0b; */
  box-shadow: 0px 4px 20px rgb(0 0 0 / 30%);
  padding: 20px;
  margin-right: 30px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    width: 25px;
    height: 25px;
  }
  & div {
    display: flex;
  }
  & span {
    font-size: 20px;
    margin-left: 20px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.content === true ? 'row' : 'column')};
  align-items: ${(props) => (props.content === true ? 'flex-start' : 'center')};
  & div {
    width: 50vh;
  }
`;

const Map = styled.div`
  width: ${(props) => (props.map === true ? '100%' : '85%')};
  height: ${(props) => (props.map === true ? '42vh' : '15vh')};
  background-color: #c4e8ff;
  border-radius: 10px;
  margin: ${(props) => (props.map === true ? '0px 30px' : '0')}; ;
`;

const Btn = styled.button`
  width: 40px;
  height: 30px;
  background-color: #2c278c;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
`;

const InfoWrap = styled.div`
  display: flex;
  margin: 2px 0px;
  & div {
    display: flex;
    margin-right: 20px;
    height: 24px;
  }
  & span {
    margin-left: 3px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ICON = styled.img`
  display: inline-block;
  margin-right: 5px;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  & span {
    display: inline-block;
    font-size: 30px;
    font-weight: 700;
    margin: 10px 0 15px 0;
  }
  & p {
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin-bottom: 5px;
  }
`;

const Contents = styled.div`
  margin-top: 20px;
  & span {
    display: inline-block;
    font-size: 20px;
    margin-bottom: 10px;
  }
  & p {
    font-size: 16px;
    height: ${(props) => (props.content === true ? '150px;' : '95px')};
    overflow-y: scroll;
  }
`;

const AttendBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 3vh 0;
  & img {
    width: 20px;
    height: 20px;
  }
`;
const AttendBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  background-color: #2c278c;
  color: #fff;
  border: none;
  border-radius: 12px;
  margin-left: 10px;
  display: ${(props) => (props.none === false ? 'none' : '')};
  & .disabled {
    background-color: #4e4e4e;
    color: #000;
  }
  background-color: ${(props) => (props.none === true ? '#000' : '#2c278c')};
`;

const ChatWrap = styled.div`
  width: 80%;
  height: 100%;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;
export default ChatDetail;