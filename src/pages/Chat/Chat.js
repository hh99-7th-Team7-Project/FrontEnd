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
import { getCookie } from '../../shared/Cookie';
import Swal from 'sweetalert2';

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
  const token = getCookie("token")


  return (
    <>
      {write === false ? (

        <ScTopCard>
            <img alt='' src={ChatLogo} style={{ width: "100%" }} />
              <ScMainTitle>우리 같이 커피마셔요!</ScMainTitle>
              <Scwrite
                onClick={() => {
                  if(token){
                    setWrite(!write);
                  }else{
                    Swal.fire({
                      title: '로그인 후 이용 가능한 서비스입니다',
                      icon: 'warning',
                      confirmButtonText: '확인',
                    });
                  }
                  
                }}
              >
                <img src={Chatimoji} alt='' />
                <span>모임만들기</span>
              </Scwrite>
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
    </>
  );
};



const ScTopCard = styled.div`
  width: 100%;
  display: flex;
  background-color:#F5EABB;
  width: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin: auto;
  }
`;

const ScTopCard2 = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.5em;
  margin-bottom: 30px;  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin: auto;
    div{
      display: none;
    }
  }
`;


// const ScMobile = styled.div`
//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     padding: 8px 24px;
//     margin: 150px auto;    
//   }
// `;

const ScMainTitle = styled.div`
  font-weight: 900;
  font-size: 2.125em;
  /* line-height: 43px; */
  margin-bottom: 20px;
  /* font-family: "SUIT ExtraBold"; */
  position: absolute;
  top:50%;
  right: 20%;
  @media screen and (max-width: 768px) {
   font-size: 16px;
   right: 20%;
   display: none;
  }
`;


const ScTopWord = styled.div`
position: absolute;
font-family: "SUIT ExtraBold";
width: 100%;
`
const Scwrite = styled.div`
  position: absolute;
  top:64%;
  right: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-weight: 500;
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
  @media screen and (max-width: 768px) {
   position: absolute;
   font-size: 12px;
   width: 86px;
   height: 30px;
   right: 16%;
   top:50%;
    img{
      display: none;
    }
  }
  
`;

const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px;
  }
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: block;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px;
  }

`;

export default Chat;
