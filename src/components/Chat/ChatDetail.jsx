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
import Check from './svg/Check.svg';
import Chating from './svg/Chating.svg';
import ChatMap from './ChatMap';
import * as Sentry from "@sentry/react";

const ChatDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [write, setWrite] = React.useState(false);
  const [chat, setChat] = React.useState(false);
  const [check, setCheck] = React.useState(true);
  const [map, setMap] = React.useState(true);
  const [content, setContent] = React.useState(true);
  const [none, setNone] = React.useState(true);
  const [include, setInclude]= React.useState()
  const [include1, setInclude1]= React.useState()
  const [contents, setContents] = React.useState()
  

  const _checkUser = getCookie('nickname');

  useEffect(() => {
    dispatch(__loadOneChatItem(id));
  }, [chat,write,check]);

  const data = useSelector((state) => state.chat.one_list);
  const data2 = useSelector((state) => state.chat.member);
  console.log(data2)

  const mem_list = []
   const member = data2?.forEach((item,idx)=>{
    mem_list.push(item?.userTitle)
  })
  // console.log(mem_list)


  const deleteChatItem = async () => {
    const item = await apis.deleteChatItem(id)
    .then((res) => {
      navigate('/chatposts');
    });
  };

  //멤버리스트에 내가 포함되어있는거 구하기
 const members = data?.chatPostMember;
  const chatpostId = Number(data?.chatpostId);

  // console.log(members)
  // console.log(data)
  const upCount = async () => {
    const item = await apis.attendChatMember(chatpostId).then((res) => {
      // console.log(res.data);
      setCheck(res.data.result);
      // return dispatch(__loadOneChatItem(id));
    }).catch((e)=>{
      Sentry.captureException(e);
    })
  };
  const downCount = async () => {
    const item = await apis.attendChatMember(chatpostId).then((res) => {
      // console.log(res.data);
      setCheck(res.data.result);
      setChat(false)
      setContent(true);
      setMap(true);
      // return dispatch(__loadOneChatItem(id));
    }).catch((e)=>{
      Sentry.captureException(e);
    })
  };

  const joinChat = () => {
    setChat(true);
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
              {/* <Btn onClick={changeContent}>수정</Btn> */}
              <ChatWrite write={write} setWrite={setWrite} />
            </Wrap>
          </WriteWrap>
        ) : (
          <>
            <BtnWrap>
              <div>
                <ScLeftImg src={left} alt="" onClick={() => navigate('/chatposts')}></ScLeftImg>
                {data?.count === data?.totalcount ? (
                 <div style={{display:"flex"}}> <span>모집 완료</span> <Time>{data?.beforeTime}</Time></div>
                ) : (
                  <div style={{display:"flex"}}> <div>모집 중</div> <Time>{data?.beforeTime}</Time></div>
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
           
            <ChatAttend
              members={members}
              count={data?.count}
              totalcount={data?.totalcount}
            ></ChatAttend>
            <div style={{display:"column"}}>
              <ContentWrap content={content}>
                <Map map={map}>
                  <ChatMap location={data?.map}/>
                </Map>
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
                {members&&
                  <AttendBtnWrap>
                  {mem_list?.includes(`${_checkUser}`) ?
                   ( 
                          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}> 
                          {_checkUser===members[0].userTitle?null:
                           <AttendBtn1 onClick={downCount} none={none} style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                                <ScCheckImg src={Check} alt=""/>
                                <span>참여하지않기</span>
                              </AttendBtn1>
                          }
                          {map?<AttendBtn2 onClick={joinChat} style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                                <ScChatImg src={Chating} alt=""/>
                                <span>채팅하러가기</span>
                              </AttendBtn2> : null}
                        
                          </div>
                  ) 
                  : 
                  (<div style={{display:"flex", justifyContent:"center",        alignItems:"center"}}>
                      {data.totalcount===data.count?
                      <AttendBtn1 onClick={()=>{navigate(-1)}} style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                        <span>뒤로가기</span>
                      </AttendBtn1>
                    :  <AttendBtn1 onClick={upCount} style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                    <ScCheckImg src={Check} alt=""/>
                    <span>참여하기</span>
                  </AttendBtn1>}
                    </div>
                  )}
                    </AttendBtnWrap> 
                }
              
                  
            
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

const Time = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  width: ${(props) => (props.content === true ? '100%' : '55%')};
  border-radius: 12px;
  /* border: solid 1.5px #0d0b0b; */
  box-shadow: 0px 4px 20px rgb(0 0 0 / 30%);
  padding: 20px;
  margin-right: 30px;
  margin-top: 20px;
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
    font-size: 1.25em;
    margin-left: 20px;
  }
`;

const ScLeftImg = styled.img`
  &:hover {
    cursor: pointer;
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
  width: ${(props) => (props.map === true ? '100%' : '100%')};
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
    font-size: 1.5625em;
    font-weight: 700;
    margin: 10px 0 15px 0;
  }
  & p {
    font-size: 1.25em;
    font-weight: 700;
    color: #000;
    margin-bottom: 5px;
  }
`;

const Contents = styled.div`
  margin-top: 30px;
  & span {
    display: inline-block;
    font-size: 1.25em;
    margin-bottom: 10px;
  }  
  & p {
    font-size: 1em;
    height: ${(props) => (props.content === true ? '150px;' : '90px')};
    overflow-y: scroll;    
  }
`;

const AttendBtnWrap = styled.div`
  display: flex;
  justify-content: end;
  margin: 50px 20px 0 0;
  margin-left: 30px;
  & img {
    width: 20px;
    height: 20px;
  }
`;

const AttendBtn1 = styled.div`
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  border: 1.5px solid #2c278c;
  background-color: #2c278c;
  color: #fff;
  border-radius: 100px;
  margin-left: 10px;
  display: ${(props) => (props.none === false ? 'none' : '')};
  & .disabled {
    background-color: #4e4e4e;
    color: #000;
  }
  background-color: ${(props) => (props.none === true ? '#000' : '#2c278c')};
  &:hover {
    cursor: pointer;
  }
  text-align: center;
`;

const AttendBtn2 = styled.div`
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  border: 1.5px solid #2c278c;
  background-color: #2c278c;
  color: #fff;
  border-radius: 100px;
  margin-left: 10px;
  display: ${(props) => (props.none === false ? 'none' : '')};
  & .disabled {
    background-color: #4e4e4e;
    color: #000;
  }
  background-color: ${(props) => (props.none === true ? '#000' : '#2c278c')};
  &:hover {
    cursor: pointer;
  }
  text-align: center;
`;

const ChatWrap = styled.div`
  width: 80%;
  height: 97%;
  margin-top: 20px;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const ScCheckImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;

`;

const ScChatImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;

`;
export default ChatDetail;
