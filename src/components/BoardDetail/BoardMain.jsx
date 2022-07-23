import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import apis from '../../shared/api/main';
import {
  bookmark,
  bookmarkck,
  checked,
  eye,
  thumbup,
} from '../../shared/svg/A-index';
import { getCookie } from '../../shared/Cookie';

const BoardMain = ({ head, boardId, bookmark2, setBookmark }) => {
  const navigate = useNavigate();
  const nickname = getCookie('nickname');
  const bookmarkfunc = async () => {
    await apis.postBoardsBookmark(head?.category, boardId).then((res) => {
      setBookmark(res.data);
    });
  };

  return (
    <ScWrap>
      <ScBtnWrap>
        <div>
          {head?.category === '나만의 비밀 레시피' && (
            <ScMyrecipe>{head?.category}</ScMyrecipe>
          )}
          {head?.category === '카페 추천합니다' && (
            <ScRecommend>{head?.category}</ScRecommend>
          )}
          {head?.category === '기타' && <ScEtc>{head?.category}</ScEtc>}
        </div>
      </ScBtnWrap>
      <ScHR />
      <ScTitleWrap>
        <ScBookMarkTitleBox>
          {head?.bookmark ? (
            <ScImg src={bookmarkck} alt="" onClick={bookmarkfunc} />
          ) : (
            <ScImg src={bookmark} alt="" onClick={bookmarkfunc} />
          )}
          <ScTitle>{head?.title}</ScTitle>
        </ScBookMarkTitleBox>
        <ScBtnBox>
          <ScLike>추천 : {head?.totalLove}</ScLike>
          <ScComment>댓글 : {head?.totalComment}</ScComment>
        </ScBtnBox>
      </ScTitleWrap>
      <ScBottomBox>
        <ScNickTimeBox>
          <span>{head?.nickname}</span>
          <span>{head?.createdAt.split('T')[0]}</span>
        </ScNickTimeBox>
        {nickname === head?.nickname ? (
          <div style={{ display: 'flex', gap: '8px' }}>
            <ScButton
              onClick={() => {
                navigate(`/board/${boardId}/update`);
              }}
            >
              수정
            </ScButton>

            <ScButton
              onClick={async () => {
                await apis.deleteBoard(boardId);
                navigate('/board');
              }}
            >
              삭제
            </ScButton>
          </div>
        ) : null}
      </ScBottomBox>
      <ScHR />
    </ScWrap>
  );
};

const ScWrap = styled.div`
  margin: 50px auto;
  width: 100%;
`;

const ScBtnWrap = styled.div`
  display: flex;
  margin: 10px 10px;
`;

const Btn = styled.button`
  margin: 10px;
  width: 150px;
  height: 30px;
  border-radius: 30px;
  &:hover {
    background-color: black;
    color: white;
    border-color: black;
    cursor: pointer;
  }

  background-color: white;
  border-color: black;
  padding: 0px 5px 0px 5px;
`;

const ScHR = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ScTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScBookMarkTitleBox = styled.div`
  display: flex;
`;

const ScImg = styled.img`
  width: 25px;
  height: 25px;
`;

const ScTitle = styled.h2`
  margin-left: 30px;
  width: 90%;
`;

const ScBtnBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const ScMyrecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1e3e8;
  border-radius: 100px;
  color: #d86f96;
  padding: 2px 12px;
`;
const ScRecommend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ede2f2;
  border-radius: 100px;
  padding: 2px 12px;
  color: #a454ca;
`;
const ScEtc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  background: rgba(255, 201, 15, 0.2);
  border-radius: 100px;
  color: #f6c720;
`;

const ScLike = styled.h4``;

const ScComment = styled.h4``;

const ScBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const ScNickTimeBox = styled.div`
  width: 230px;
  padding: 0px 5px 0px 5px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px
`;

const ScButton = styled.div`
  padding: 5px;
  margin: auto;
  display: block;
  width: 50px;
  border-radius: 50px;
  background-color: #eee;
  border-color: #eee;
  &:hover {
    cursor: pointer;
    background-color: #212121;
    color: white;
  }
  text-align: center;
`;

export default BoardMain;
