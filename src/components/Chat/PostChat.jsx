import React, { useRef } from 'react';
import Stomp, { over } from 'stompjs';
import SockJs from 'sockjs-client';
import styled from 'styled-components';
import { actionCreators as chatActions } from '../../redux/modules/chat';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';

let stompClient = null;
const PostChat = ({ pid }) => {
  const dispatch = useDispatch();
  // const post_chat_list = useSelector((state) => state.chat.post_list);

  const messageRef = useRef();
  const token = { Authorization: getCookie('token') };
  // console.log(token);
  // const token = {
  //   Authorization: getCookie('token') ? getCookie('token') : 'Authorization',
  // };
  // const token = {
  //   Authorization: getCookie('token') ? getCookie('token') : 'Authorization',
  // };

  // const token = {
  //   Authorization: localStorage.getItem('token')
  //     ? localStorage.getItem('token')
  //     : 'Authorization',
  // };

  // const test =
  //   'BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NDkxMzc0MzgsImlzcyI6InNwYXJ0YSIsIlVTRVJfTkFNRSI6InRlc3RAdGVzdC5jb20ifQ.PwAp1O8o7tr7_tBjK-TChaar_T4dSheXfQJnW5hbZAA';
  // const token = { Authorization: test };

  // const username = useSelector((state) => state.user.user.nickname);
  // const uid = useSelector((state) => state.user.user.uid);
  // const crareer = useSelector((state) => state.user.user.career); -> 빠지고
  // const is_login = useSelector((state) => state.user.user.isLogin);

  const [welcome, setWelcome] = React.useState(new Map());
  const [publicChats, setPublicChats] = React.useState([]);
  const [connected, setConnected] = React.useState(false);
  const [tab, setTab] = React.useState('CHATROOM');
  const [user, setUser] = React.useState(0);
  const [chatScroll, setChatScroll] = React.useState(false);
  const [userData, setUserData] = React.useState({
    // username: '',
    message: '',
    opposingUserName: '',
  });

  // React.useEffect(() => {
  //   scrollToBottom();
  // }, [publicChats, chatScroll]);

  React.useEffect(() => {
    dispatch(chatActions.prevPostChatDB(pid));
    stompConnect();
    return () => {
      stompDisConnect();
    };
  }, []);

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      sendPublicMessage();
    }
  };

  const stompDisConnect = () => {
    try {
      // const user_join = { status: 'OUT', senderName: username };
      const user_join = { status: 'OUT' };
      stompClient.send('/app/postchat', token, JSON.stringify(user_join));

      stompClient.disconnect(() => {
        stompClient.unsubscribe(`/topic/postchat/${pid}`);
      }, token);
    } catch (err) {}
  };

  const handleValue = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const stompConnect = () => {
    let socket = new SockJs('http://3.36.103.203:8080/ws-coala');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    try {
      // const user_join = { status: 'JOIN', pid };
      const user_join = {
        status: 'JOIN',
        pid: pid,
        id: '1',
        senderName: 'username',
      };
      setConnected(true);
      setUserData({
        ...userData,
        crareer: '5',
        senderName: 'username',
        status: 'JOIN',
        pid: pid,
      });

      stompClient.send('/app/postchat', token, JSON.stringify(user_join));
      stompClient.subscribe(
        `/topic/postchat/${pid}`,
        onPublicMessageReceived,
        token
      );

      if (chatScroll !== true) {
        setChatScroll(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const sendPublicMessage = () => {
  //   if (is_login) {
  //     if (stompClient) {
  //       if (!userData.message) {
  //         alert('', '내용을 입력해주세요!', 'error');
  //       } else {
  //         let chatMessage = {
  //           ...userData,
  //           // senderName: username,
  //           message: userData.message,
  //           status: 'MESSAGE',
  //           pid: pid,
  //           // uid: uid,
  //         };

  //         stompClient.send('/app/postchat', token, JSON.stringify(chatMessage));
  //         setUserData({ ...userData, message: '' });
  //       }
  //     }
  //     return;
  //   } else {
  //     alert('', '로그인 후 사용할 수 있습니다:)', 'error');

  // };

  const sendPublicMessage = () => {
    if (stompClient) {
      if (!userData.message) {
        alert('', '내용을 입력해주세요!', 'error');
      } else {
        let chatMessage = {
          ...userData,
          // senderName: username,
          message: userData.message,
          status: 'MESSAGE',
          pid: pid,
          // uid: uid,
        };
        // console.log(chatMessage);

        stompClient.send('/app/postchat', token, JSON.stringify(chatMessage));
        setUserData({ ...userData, message: '' });
      }
    } else {
      alert('', '로그인 후 사용할 수 있습니다:)', 'error');
    }
  };
  //subscribe의 함수
  const onPublicMessageReceived = (payload) => {
    let payloadData = JSON.parse(payload.body);
    console.log(payloadData);
    switch (payloadData.status) {
      case 'JOIN':
        if (!welcome.get(payloadData.senderName)) {
          welcome.set(payloadData.message, []);
          setWelcome(new Map(welcome));
          setUser(payloadData.userCount);
        }
        break;
      case 'OUT':
        if (!welcome.get(payloadData.senderName)) {
          welcome.set(payloadData.message, []);
          setWelcome(new Map(welcome));
          setUser(payloadData.userCount);
        }
        break;
      case 'MESSAGE':
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        setUser(payloadData.userCount);
        break;
    }
  };

  const onError = (err) => {
    console.log(err);
    console.log('plz');
  };

  const scrollToBottom = () => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  };

  return (
    <ChatDiv>
      <ChatTab>
        <li
          onClick={() => {
            setTab('CHATROOM');
          }}
        >
          채팅 {user}
        </li>
      </ChatTab>
      <ChatList ref={messageRef}>
        <ul>
          {/* {post_chat_list &&
            post_chat_list.map((chat, index) => (
              <li
                className={` ${chat.senderName === user ? 'self' : 'user'}`}
                key={index}
              >
                {chat.senderName !== user && (
                  <>
                    <Profile />
                    <div>
                      <strong>{chat.senderName}</strong>
                      {userData.crareer && <i>{userData.crareer}</i>}
                    </div>
                  </>
                )}
                <dl>
                  <dt className="message-data">{chat.message}</dt>
                  <dd className="u">
                    {chat.createdAt.split('T')[1].split('.')[0]}
                  </dd>
                </dl>
              </li>
            ))} */}
          {publicChats.map((chat, index) => (
            <li
              className={` ${chat.senderName === 1 ? 'self' : 'user'}`}
              key={index}
            >
              {chat.senderName !== 2 && (
                <>
                  <Profile />
                  <div>
                    <strong>{chat.senderName}</strong>
                    {/* {userData.crareer && <i>{userData.crareer}</i>} */}
                  </div>
                </>
              )}
              <dl>
                <dt className="message-data">{chat.message}</dt>
                <dd className="me">
                  {chat.createdAt.split('T')[1].split('.')[0]}
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </ChatList>
      <ChatInput>
        <div>
          <input
            type="text"
            name="message"
            value={userData.message}
            placeholder="댓글을 입력해주세요 :)"
            onChange={handleValue}
            onKeyPress={onKeyPress}
          />
          <button onClick={sendPublicMessage}>
            <SendSvg>보내기</SendSvg>
          </button>
        </div>
      </ChatInput>
    </ChatDiv>
  );
};

const Profile = styled.image`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: black;
`;
const SendSvg = styled.button`
  width: 100px;
  height: 50px;
  background-color: black;
`;

const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 124px - 224px - 18px - 18px);
  background-color: #f9f8ff;
  border-radius: 8px;
  overflow: hidden;
`;

const ChatTab = styled.ul`
  display: flex;
  flex: none;
  overflow: auto;
  li {
    width: 74px;
    text-align: center;
    margin: 0 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 58px;
    color: #5e45f2;
    border-bottom: solid 3px #5e45f2;
  }
`;

const ChatList = styled.div`
  flex: auto;
  padding: 0 10px;
  overflow: auto;
  ul {
    padding-top: 30px;
    overflow: hidden;
  }
  li {
    width: 286px;
    &.welcome {
      color: #5e45f2;
    }
    &.user {
      position: relative;
      padding-left: 36px;
      padding-right: 10px;
      margin: 12px 0;
      strong {
        font-size: 14px;
        color: #5e45f2;
      }
      dt {
        margin-top: 8px;
        color: #333;
        background-color: #fff;
        box-shadow: 0 4px 14px 0 rgba(65, 0, 131, 0.06);
      }
      dd {
        text-align: start;
      }
    }
    &.self {
      margin: 12px 0;
      margin-left: auto;
      dl {
        flex-direction: row-reverse;
      }
      dt {
        color: #fff;
        background-color: #7966ff;
      }
      dd {
        text-align: end;
      }
    }
  }
  dl {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    dt {
      width: 80%;
      padding: 8px;
      word-break: break-all;
      border-radius: 8px;
    }
    dd {
      display: block;
      text-align: right;
      font-size: 10px;
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 4px 0 rgba(121, 102, 255, 0.2);
  }
  i {
    position: relative;
    padding-left: 5px;
    margin-left: 6px;
    color: #797979;
    font-size: 12px;
    font-style: normal;
    &:before {
      --dot-size: 2px;
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: var(--dot-size);
      height: var(--dot-size);
      border-radius: var(--dot-size);
      background-color: #797979;
    }
  }
  dd {
    display: block;
    margin-top: 10px;
    color: #797979;
    font-size: 12px;
    font-style: normal;
    text-align: end;
  }
`;

const ChatInput = styled.div`
  padding: 24px 16px;
  background-color: #f9f8ff;
  box-shadow: 0 -4px 10px 0 rgba(133, 47, 243, 0.05);
  > div {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 8px 14px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: inset 0 2px 6px 0 rgba(60, 4, 105, 0.08);
    background-color: #fff;
  }
  input {
    flex: auto;
    padding: 0;
    background-color: transparent;
  }
  button {
    flex: none;
    svg {
      vertical-align: middle;
    }
  }
`;

export default PostChat;
