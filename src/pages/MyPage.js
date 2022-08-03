import React, { useEffect, useRef, useState } from 'react';
import { deleteCookie, getCookie, setCookie } from '../shared/Cookie';
import Header from './Header/Header';
import {
  UserBoardBoard,
  UserBoardWrite,
  UserInfo,
  UserPhoto,
  UserBoardCoffee,
  UserInfoUpdate,
  UserPhotoUpdate,
} from '../components/mypage/index';
import styled from 'styled-components';
import apis from '../shared/api/main';
import { Pencil, Write, Moiim, MypageLogo, MypageMini } from '../shared/svg/A-index';
import * as Sentry from "@sentry/react";
import UserChat from '../components/mypage/UserChat';

const MyPage = () => {
  const userId = getCookie('userId'); //아직설정안해쓰
  const nickOrigin = getCookie('nickname');
  const profileOrigin = getCookie('profileImg');
  const [menu, setMenu] = useState(1);

  const [update, setUpdate] = useState(false);

  const [email, setEmail] = useState();
  const [newProfileImg, setNewProfileImg] = useState(null);

  const [changeImg, setChangeImg] = useState(false);
  const [condition, setCondition] = useState('');
  const [countBoard, setCountBoard] = useState()
  const [countChat, setCountChat] = useState()
  const [countReport,setCountReport]= useState()


  useEffect(() => {
    const profile = async () => {
      await apis.getMypage(userId)
      .then((res) => {
        setEmail(res.data);
        setNick(res?.data.nickname)
        setConvertImg(res?.data.profileImage)
      }).catch(e => {
        Sentry.captureException(e);
      });;
    };
    profile();
  }, [setUpdate,update]);

   const [nick, setNick] = useState(); 
   const [convertImg, setConvertImg] = useState();

  useEffect(() => {
    const boardCount = async () => {
      await apis.getMyBoardCount(userId)
        .then((res) => {
          setCountBoard(res.data)
        }).catch(e => {
          Sentry.captureException(e);
        });
    }
    const chatCount = async () => {
      await apis.getMyChatCount(userId)
        .then((res) => {
          setCountChat(res.data)
        }).catch(e => {
          Sentry.captureException(e);
        });
    }
    const reportCount = async()=>{
      await apis.getMyReport(userId)
      .then((res) => {
        setCountReport(res.data)
      }).catch(e => {
        Sentry.captureException(e);
      });
    }
    boardCount()
    chatCount()
    reportCount()
  }, [])

  const updateProfile = async (e) => {
    e.preventDefault();
    //formdata로 이미지 변환
    const form = new FormData();
    form.append('imgUrl', newProfileImg);
    // console.log(form);
    //만약 이미지값이 변경 되었다면 이미지 변환성공하면 그 url값 받아서 수정정보에 넣어서 보내줌 put
    if (changeImg) {
      const update = await apis
        .postImg(form)
        .then((res) => {
          setConvertImg(res?.data.img);
          const data = { nickname: nick, profileImage: res?.data.img };
          const update2 = apis
            .updateMypage(userId, data)
            .then((response) => {
              deleteCookie('nickname');
              deleteCookie('profileImg');
              setCookie('nickname', nick);
              setCookie('profileImg', res?.data.img);
              setUpdate(false);
            })
            .catch((err) => {
              Sentry.captureException(err);
              setCondition(err.response.data.message);
            });
        })
        .catch((err) => {
          Sentry.captureException(err);
          setCondition('알 수 없는 에러가 발생했습니다. 다시 시도 해주세요');
        });
    } else {
      const data = { nickname: nick, profileImage: profileOrigin };
      const update2 = apis
        .updateMypage(userId, data)
        .then((response) => {
          deleteCookie('nickname');
          setCookie('nickname', nick);
          setUpdate(false);
        })
        .catch((err) => {
          Sentry.captureException(err);
          setCondition(err.response.data.message);
        });
    }
  };
  
  const userName = getCookie('nickname');

  return (
    <>
        <ScsecondHead src={MypageLogo} />
        <ScsecondHead2 src={MypageMini} />
        <ScWrap>
          <ScMobile
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px',              
            }}
          >
            {update ? (
              <ScMyprofile>
                <UserPhotoUpdate
                  setNewProfileImg={setNewProfileImg}
                  setChangeImg={setChangeImg}
                  convertImg ={convertImg}
                />
                <div>
                  <div style={{ marginRight: '120px'}}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <UserInfoUpdate setNick={setNick} nick={nick}/>
                      <div>
                        <img src={Pencil} alt="" onClick={updateProfile} />
                      </div>
                    </div>
                    <div style={{ fontSize: ' 0.875em' }}>{email?.username}</div>
                  </div>
                </div>
              </ScMyprofile>
            ) : (
              <ScMyprofile>
                <UserPhoto convertImg={convertImg}/>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '140px',
                  }}
                >
                  {countReport&&<div style={{color:"tomato"}}>{countReport}</div>}
                  <div style={{ display: 'flex' }}>
                    <div style={{ fontSize: '1.375em' }}>{email?.nickname}</div>
                    <img
                      src={Pencil}
                      alt=""
                      onClick={() => {
                        setUpdate(true);
                      }}
                    />
                  </div>
                  <div style={{ fontSize: ' 0.875em' }}>{email?.username}</div>
                </div>
              </ScMyprofile>
            )}
            <ScMobile2 style={{ display: 'flex', gap: '23px', flexDirection: 'row' }}>
              <ScMywrite>
                <ScMyWriteBtn>
                  <img alt="" src={Write} style={{ width: '26px' }}  
                  />
                </ScMyWriteBtn>
                <div style={{ color: '#9A2ACC', marginLeft: '34px' }}>
                  <ScMyTitle>내가 쓴 글 갯수</ScMyTitle>
                  <div style={{ fontSize: '2em' }}>{countBoard}</div>
                </div>
              </ScMywrite>
              <ScChat>
                <ScMyWriteBtn>
                  <img alt="" src={Moiim} style={{ width: '26px' }} />
                </ScMyWriteBtn>
                <div style={{ color: '#F91D6F', marginLeft: '34px' }}>
                  <ScMyTitle>내가 참여한 모임수</ScMyTitle>
                  <div style={{ fontSize: '2em' }}>{countChat}</div>
                </div>
              </ScChat>
            </ScMobile2>
          </ScMobile>
          <ScBookmark>
            <ScMobileBookmark style={{ fontSize: '1.4em', fontWeight: '700' }}>북마크</ScMobileBookmark>
            <div>
              <ScBookmarkwrap>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <ScBookmarkCategory
                    menu={menu}
                    onClick={() => {
                      setMenu(1);
                    }}
                  >
                    음료
                  </ScBookmarkCategory>
                  <div style={{ border: '1px solid #7e7c7c' }}></div>
                  <ScBookmarkCategory2
                  menu={menu}
                    onClick={() => {
                      setMenu(2);
                    }}
                  >
                    게시판
                  </ScBookmarkCategory2>
                  <div style={{ border: '1px solid #7e7c7c' }}></div>
                  <ScBookmarkCategory3
                  menu={menu}
                    onClick={() => {
                      setMenu(3);
                    }}
                  >
                    내가 쓴 글
                  </ScBookmarkCategory3>
                  <div style={{ border: '1px solid #7e7c7c' }}></div>
                  <ScBookmarkCategory4
                  menu={menu}
                    onClick={() => {
                      setMenu(4);
                    }}
                  >
                    내 모임
                  </ScBookmarkCategory4>
                </div>
              </ScBookmarkwrap>
              {/* <ScBookWrap> */}
              {menu === 1 && <UserBoardCoffee />}
              {menu === 2 && <UserBoardBoard />}
              {menu === 3 && <UserBoardWrite />}
              {menu === 4 && <UserChat />}
              {/* {(menu===3)&&<UserBoardWrite/>} */}
              {/* </ScBookWrap> */}
            </div>
          </ScBookmark>
        </ScWrap>
    </>
  );
};

export default MyPage;


const ScsecondHead = styled.img`
  height: 135px;
  background-color: #F5E5F5; 
  margin-bottom: 40px;
  width: 100%;
  @media screen and (max-width: 768px){
  display: none;
  }
`;

const ScsecondHead2 = styled.img`
  display: none;
  @media screen and (max-width: 768px){
    display: block;
    width: 100%;
  }
`;

const ScWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 90%;
  margin: auto;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
  }
`;

const ScMobile = styled.div`
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 20px auto;
    width: 90%;
  }
`;

const ScMobile2 = styled.div`
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 20px auto;
    width: 100%;
  }
`;

const ScMobileBookmark = styled.div`
  @media screen and (max-width: 768px){    
    width: 20%;
  }
`;

const ScBookmarkwrap = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 10px;
  margin-top: 10px;
  width: 40%;
  @media screen and (max-width: 768px){
    display: flex;    
    justify-content: center;
  }
`;
const ScMyTitle = styled.div`
  font-size: 1.375em;
  margin-bottom: 10px;
`;

const ScMyprofile = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const ScBookmark = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: flex-start; */
  /* left: 0; */
  /* font-size: 1.5em; */
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 20px auto;
    width: 90%;
  }
`;
const ScBookWrap = styled.div`
  background-color: #ddd;
  position: relative;
  border-radius: 10px;
  height: 315px;
  /* min-width: 1200px; */
  width: 100%;
`;

const ScBookmarkCategory = styled.div`
  font-size: 1.1em;
  font-weight: ${(props) => (props.menu===1 ? "600" : "400")};
  cursor: pointer;
  color: ${(props) => (props.menu===1 ? "black" : "#7e7c7c")};
`;

const ScBookmarkCategory2= styled.div`
  font-size: 1.1em;
  font-weight:  ${(props) => (props.menu===2 ? "600" : "400")};
  cursor: pointer;
  color: ${(props) => (props.menu===2 ? "black" : "#7e7c7c")};
`;

const ScBookmarkCategory3 = styled.div`
  font-size: 1.1em;
  font-weight: ${(props) => (props.menu===3 ? "600" : "400")};
  cursor: pointer;
  color: ${(props) => (props.menu===3 ? "black" : "#7e7c7c")};
`;

const ScBookmarkCategory4 = styled.div`
  font-size: 1.1em;
  font-weight: ${(props) => (props.menu===4 ? "600" : "400")};
  cursor: pointer;
  color: ${(props) => (props.menu===4 ? "black" : "#7e7c7c")};
`;

const ScMywrite = styled.div`
  width: 277px;
  height: 214px;
  background-color: #ede2f2;
  border-radius: 10px;
`;
const ScMyWriteBtn = styled.div`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0 34px 24px;
`;

const ScChat = styled.div`
  width: 277px;
  height: 214px;
  background-color: #feeef4;
  border-radius: 10px;
`;
