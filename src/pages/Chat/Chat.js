import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatList from '../../components/Chat/ChatList';
import { __loadChatLists } from '../../redux/modules/chat';
import ChatWrite from '../../components/Chat/ChatWrite';
import Header from '../Header/Header';
import styled from 'styled-components';
import { boardwrite, ChatLogo, Chatimoji, ChatLogoSmall } from '../../shared/svg/A-index';
import Pagination from '../../components/Pagination/Pagination.jsx';
import apis from '../../shared/api/main';
import * as Sentry from "@sentry/react";

const Chat = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [write, setWrite] = useState(false);

  useEffect(() => {
    const Loading = async () => await apis.getChatLists(page)
      .then((data) => setPosts(data.data))
      .catch(e => {
        Sentry.captureException(e);
      });;
    // console.log(page);
    Loading()
  }, [page, write]);

  const chatpostList = posts?.chatpostList;
  const totalPage = posts?.totalPage;
  // console.log(posts)
  // console.log(chatpostList, page);

  // const chatReducer = useSelector((state) => state?.chat?.list);



  return (
    <ScMobile>
      <div style={{ margin: "auto", width: "62%" }}>
        <Header />
      </div>
      {write === false ? (
        <ScTopCard>
          <img alt='' src={ChatLogo} style={{ width: "100%" }} />
          <div style={{ margin: '167px 536px 159px 1081px', position: "absolute" }}>
            <ScMainTitle>우리 같이<br /> 커피마셔요!</ScMainTitle>
            <Scwrite
              onClick={() => {
                setWrite(!write);
              }}
            >
              <img src={Chatimoji} alt='' />
              <span>모임만들기</span>
            </Scwrite>
          </div>
        </ScTopCard>
      ) : (
        <ScTopCard2>
          <img src={ChatLogoSmall} alt='' style={{ width: "100%" }} />
          <ScTopWord style={{ margin: '60px 70% 60px 20%' }}>
            우리 같이 커피마셔요!
          </ScTopWord>
        </ScTopCard2>
      )}

      <Wrap>
        <WriteWrap>
          {write === true ? (
            <ChatWrite write={write} setWrite={setWrite} />
          ) : null}
        </WriteWrap>
        <ListWrap>
          {chatpostList &&
            chatpostList.map((item, k) => {
              return <ChatList data={item} key={k} />;
            })}
        </ListWrap>
        <footer>
          <Pagination
            total={totalPage}
            // limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </Wrap>
    </ScMobile>
  );
};

const ScMobile = styled.div`
  @media screen and (min-width: 350px){
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const ScTopCard = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  background-color:#F5EABB;
  width: 100%;
  @media screen and (min-width: 350px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;

const ScTopCard2 = styled.div`
  width: 100%;
  display: flex;
  height: 135px;
  background-color:#F5EABB;
  font-size: 1.5em;
  margin-bottom: 74px;
  @media screen and (min-width: 350px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
`;

const ScMainTitle = styled.div`
  
  height: 74px;
  font-weight: 700;
  font-size: 2.125em;
  line-height: 43px;
  margin-bottom: 30px;
  font-family: "SUIT ExtraBold";
  
`;


const ScTopWord = styled.div`
position: absolute;
font-family: "SUIT ExtraBold";
width: 100%;
`
const Scwrite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-weight: 700;
  text-align: center;
  color: white;
  width: 166px;
  height: 49px;
  font-size: 1.25em;
  border-radius: 10px;
  gap:7px;
  &:hover {
    cursor: pointer;
  }
`;

const Wrap = styled.div`
  width: 1200px;
  margin: auto;
`;

const WriteWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const ListWrap = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  /* grid-template-rows: 230px 230px; */
  justify-content: space-around;
  margin: 40px auto 0;
`;

export default Chat;
