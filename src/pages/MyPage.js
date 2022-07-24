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
import { Pencil, Write, Moiim, left, right } from '../shared/svg/A-index';
import * as Sentry from "@sentry/react";

const MyPage = () => {
  const userId = getCookie('userId'); //아직설정안해쓰
  const nickOrigin = getCookie('nickname');
  const profileOrigin = getCookie('profileImg');
  const [menu, setMenu] = useState(1);

  const [update, setUpdate] = useState(false);
  const [nick, setNick] = useState(nickOrigin);
  const [email, setEmail] = useState();
  const [newProfileImg, setNewProfileImg] = useState(null);
  const [convertImg, setConvertImg] = useState(profileOrigin);
  const [changeImg, setChangeImg] = useState(false);
  const [condition, setCondition] = useState('');
  const [countBoard, setCountBoard] = useState()
  const [countChat, setCountChat] = useState()

  // console.log(changeImg);

  useEffect(() => {
    const profile = async () => {
      await apis.getMypage(userId).then((res) => {
        // console.log(res);
        setEmail(res.data.username);
      }).catch(e => {
        Sentry.captureException(e);
      });;
    };
    profile();
  }, [setUpdate]);

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
    boardCount()
    chatCount()
  }, [])

  // console.log(nick);
  // console.log(newProfileImg);

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
      <ScMobile>
        <div style={{ margin: "auto", width: "100%" }}>
          <Header />
        </div>
        <ScsecondHead />
        <ScWrap>
          <div
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
                />
                <div>
                  {/* <div onClick={() => { setUpdate(false) }} style={{marginLeft:"160px",marginBottom:"10px"}}>X</div> */}
                  <div style={{ marginRight: '120px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <UserInfoUpdate setNick={setNick} />
                      <div>
                        <img src={Pencil} alt="" onClick={updateProfile} />
                      </div>
                    </div>
                    <div style={{ fontSize: '14px' }}>{email}</div>
                  </div>
                </div>
              </ScMyprofile>
            ) : (
              <ScMyprofile>
                <UserPhoto />
                {/* <UserInfo email={email}/> */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '140px',
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <div style={{ fontSize: '22px' }}>{userName}</div>
                    <img
                      src={Pencil}
                      alt=""
                      onClick={() => {
                        setUpdate(true);
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '14px' }}>{email}</div>
                </div>
              </ScMyprofile>
            )}
            <div style={{ display: 'flex', gap: '23px', flexDirection: 'row' }}>
              <ScMywrite>
                <ScMyWriteBtn>
                  <img alt="" src={Write} style={{ width: '26px' }} />
                </ScMyWriteBtn>
                <div style={{ color: '#9A2ACC', marginLeft: '34px' }}>
                  <ScMyTitle>내가 쓴 글 갯수</ScMyTitle>
                  <div style={{ fontSize: '32px' }}>{countBoard}</div>
                </div>
              </ScMywrite>
              <ScChat>
                <ScMyWriteBtn>
                  <img alt="" src={Moiim} style={{ width: '26px' }} />
                </ScMyWriteBtn>
                <div style={{ color: '#F91D6F', marginLeft: '34px' }}>
                  <ScMyTitle>내가 참여한 모임수</ScMyTitle>
                  <div style={{ fontSize: '32px' }}>{countChat}</div>
                </div>
              </ScChat>
            </div>
          </div>
          <ScBookmark>
            <div style={{ fontSize: '24px', fontWeight: '700' }}>북마크</div>
            <div>
              <ScBookmarkwrap>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <ScBookmarkCategory
                    onClick={() => {
                      setMenu(1);
                    }}
                  >
                    음료
                  </ScBookmarkCategory>
                  <div style={{ border: '1px solid black' }}></div>
                  <ScBookmarkCategory
                    onClick={() => {
                      setMenu(2);
                    }}
                  >
                    게시판
                  </ScBookmarkCategory>
                </div>
              </ScBookmarkwrap>
              {/* <ScBookWrap> */}
              {menu === 1 && <UserBoardCoffee />}
              {menu === 2 && <UserBoardBoard />}
              {/* {(menu===3)&&<UserBoardWrite/>} */}
              {/* </ScBookWrap> */}
            </div>
          </ScBookmark>
        </ScWrap>
      </ScMobile>
    </>
  );
};

export default MyPage;

const ScMobile = styled.div`
  @media screen and (min-width: 350px){
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const ScsecondHead = styled.div`
  height: 135px;
  background-color: #ddd;
  margin-bottom: 40px;
`;

const ScBookmarkwrap = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 10px;
  margin-top: 10px;
  width: 140px;
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
  font-size: 1.25em;
  cursor: pointer;
  font-weight: 600;
`;
const ScWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  width: 63%;
  margin: auto;
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
