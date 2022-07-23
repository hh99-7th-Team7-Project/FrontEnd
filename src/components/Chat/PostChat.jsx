import React, { useRef, useEffect } from 'react';
import Stomp, { over } from 'stompjs';
import SockJs from 'sockjs-client';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../../shared/Cookie';
import { __prevPostChat, __loadOneChatItem } from '../../redux/modules/chat';
import ChatDetailItem from './ChatDetail';
import Swal from 'sweetalert2';

let stompClient = null;
const PostChat = ({ chatpostId }) => {
  const dispatch = useDispatch();

  const messageRef = useRef();

  const cookie = getCookie('token');
  const nickname = getCookie('nickname');
  const userId = getCookie('userId');
  const token = { Authorization: `Bearer ${cookie}` };
  const profileImg = getCookie('profileImg');
  console.log(userId);

  React.useEffect(() => {
    dispatch(__prevPostChat(chatpostId));
    stompConnect();
    return () => {
      stompDisConnect();
    };
  }, []);

  const post_chat_list = useSelector((state) => state.chat.post_list);
  console.log(post_chat_list);

  const [welcome, setWelcome] = React.useState(new Map());
  const [publicChats, setPublicChats] = React.useState([]);
  const [connected, setConnected] = React.useState(false);
  const [tab, setTab] = React.useState('CHATROOM');
  const [user, setUser] = React.useState(0);
  const [chatScroll, setChatScroll] = React.useState(false);
  const [userData, setUserData] = React.useState({
    nickname: '',
    message: '',
  });

  React.useEffect(() => {
    scrollToBottom();
  }, [publicChats, chatScroll]);

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      sendPublicMessage();
    }
  };

  const stompDisConnect = () => {
    try {
      // const user_join = { status: 'OUT', senderName: username };
      const user_join = { status: 'OUT', senderName: nickname };
      stompClient.send('/app/postchat', token, JSON.stringify(user_join));

      stompClient.disconnect(() => {
        stompClient.unsubscribe(`/topic/postchat/${chatpostId}`);
      }, token);
    } catch (err) {}
  };

  const handleValue = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const stompConnect = () => {
    let socket = new SockJs('https://sparta-gi.shop/ws-coala');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
    console.log('stomp연결');
  };

  const onConnected = () => {
    try {
      const user_join = {
        status: 'JOIN',
        chatpostId: Number(chatpostId),
        id: userId,
        senderName: nickname,
      };
      setConnected(true);
      console.log(connected);
      setUserData({
        ...userData,
        profileImg: profileImg,
        senderName: nickname,
        status: 'JOIN',
      });

      stompClient.send('/app/postchat', token, JSON.stringify(user_join));
      stompClient.subscribe(
        `/topic/postchat/${chatpostId}`,
        onPublicMessageReceived,
        token
      );
      console.log(onPublicMessageReceived);

      if (chatScroll !== true) {
        setChatScroll(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendPublicMessage = () => {
    if (stompClient) {
      if (!userData.message) {
        Swal.fire({
          title: '내용을 입력해주세요.!',
          icon: 'error',
          confirmButtonText: '확인',
        });
      } else {
        let chatMessage = {
          ...userData,
          senderName: nickname,
          message: userData.message,
          status: 'MESSAGE',
          chatpostId: Number(chatpostId),
          id: userId,
        };
        console.log(chatMessage);

        stompClient.send('/app/postchat', token, JSON.stringify(chatMessage));
        setUserData({ ...userData, message: '' });
      }
    } else {
      Swal.fire({
        title: '로그인 후 사용할 수 있습니다.!',
        icon: 'error',
        confirmButtonText: '확인',
      });
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
          console.log('join 완료');
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

  console.log(publicChats)

  return (
    <ChatDiv>
      <ChatTab>
        <li
          onClick={() => {
            setTab('CHATROOM');
          }}
        >
          채팅
        </li>
      </ChatTab>
      <ChatList ref={messageRef}>
        <ul>
          {post_chat_list &&
            post_chat_list.map((chat, index) => (
              <li
                className={` ${chat.senderName === nickname ? 'self' : 'user'}`}
                key={index}
              >
                {chat.senderName !== nickname && (
                  <Wrap>
                    <Profile src={chat.profileImage} />
                    <strong>{chat.senderName}</strong>
                  </Wrap>
                )}
                <dl>
                  <dt className="message-data">{chat.message}</dt>
                  <dd className="u">
                    {chat.createdAt.split('T')[1].split('.')[0]}
                  </dd>
                </dl>
              </li>
            ))}
          {publicChats.map((chat, index) => (
            <li
              className={` ${chat.senderName === nickname ? 'self' : 'user'}`}
              key={index}
            >
              <dl>
                <dt className="message-data">{chat.message}</dt>
                <dd className="me">
                  {chat.createdAt.split(' ')[1]}
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
            placeholder="채팅을 입력해주세요 :)"
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

const Wrap = styled.div``;

const Profile = styled.img`
  /* position: absolute; */
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 8px;
`;
const SendSvg = styled.button`
  width: 100px;
  height: 50px;
  background-color: #ffffff;
  border: none;
  border-radius: 12px;
`;

const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 30%);
`;

const ChatTab = styled.ul`
  display: flex;
  flex: none;
  overflow: auto;
  li {
    width: 74px;
    text-align: center;
    /* margin: 0 12px; */
    font-size: 18px;
    font-weight: 700;
    line-height: 58px;
    color: #000000;
    list-style: none;
  }
`;

const ChatList = styled.div`
  flex: auto;
  padding: 0 8px;
  overflow: auto;
  ul {
    padding-top: 30px;
    overflow: hidden;
  }
  li {
    list-style: none;
    width: 286px;
    &.welcome {
      color: #5e45f2;
    }
    &.user {
      position: relative;
      padding-left: 15px;
      padding-right: 10px;
      margin: 12px 0;
      strong {
        font-size: 14px;
        color: #000;
      }
      dt {
        margin: 8px 0px 12px 0px;
        color: #333;
        background-color: #fff;
        box-shadow: 0 4px 14px 0 rgb(84 70 170 / 33%);
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
        background-color: #2c278c;
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
      width: 80vh;
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
  div {
    display: flex;
    align-items: center;
  }
`;

const ChatInput = styled.div`
  padding: 24px 16px;
  background-color: #2c278c12;
  > div {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 7px 0px 7px 11px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: inset 0 2px 6px 0 rgba(65, 65, 65, 20%);
  }
  input {
    flex: auto;
    padding: 0;
    background-color: transparent;
    border: none;
    ::placeholder {
      color: #000;
    }
  }
  button {
    flex: none;
    border: none;
    svg {
      vertical-align: middle;
    }
  }
`;

export default PostChat;
