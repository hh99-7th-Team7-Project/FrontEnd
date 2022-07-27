import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import {
  BoardComment,
  BoardContent,
  BoardLike,
  BoardMain,
} from '../../components/BoardDetail/A-BoardDetailIndex';
import apis from '../../shared/api/main';
import styled from 'styled-components';
import { getCookie } from '../../shared/Cookie';
import { useDispatch, useSelector } from 'react-redux';
import { __loadBoardDetail } from '../../redux/modules/board';
import BoardImg from './svg/BoardMain.svg';
import * as Sentry from "@sentry/react";


const BoardDetail = () => {
  const { boardId } = useParams();
  // console.log(boardId);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState();
  const [head, setHead] = useState();

  const [bookmark, setBookmark] = useState();
  const [like, setLike] = useState();
  const dispatch = useDispatch();
  const token = getCookie('token');

  const boardReducer = useSelector((state) => state.board.board);

  useEffect(() => {
    setLoading(true);
    dispatch(__loadBoardDetail(boardId));
  }, [like, bookmark]);

  //이유는 모르게쓴데 이전에 불려온 값이 뷰어로 들어가 ㅠㅠ
  useEffect(() => {
    setBookmark(boardReducer?.bookmark);
    setLike(boardReducer?.loveCheck);
    apis.getBoard(boardId).then((res) => {
      setContent(res?.data.content);
    }).catch(e => {
      Sentry.captureException(e);
    });;
  }, []);

  return (
    <>
        <ScMobile>
          <ScImgContainer>
            <ScImg src={BoardImg} alt="" />
            <ScTitle>커피를 사랑하는 사람들의 연구소</ScTitle>
          </ScImgContainer>
          <ScMobile2>
            <ScWrap>
              <BoardMain
                head={boardReducer}
                boardId={boardId}
                bookmark2={bookmark}
                setBookmark={setBookmark}
              />
              <BoardContent data={content} />
              <BoardLike
                head={boardReducer}
                boardId={boardId}
                like2={like}
                setLike={setLike}
              />
              <BoardComment            
              />
            </ScWrap>
          </ScMobile2>
        </ScMobile>
    </>
  );
};

const ScMobile = styled.div`  
  margin: auto;
  max-width: 1200px;
  width: 90%;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;    
  }
`;

const ScImgContainer = styled.div`  
  display: flex;
  /* position: relative; */
  font-size: 1.1em;  
  width: 100%;
  margin: auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: flex;
  }
`;

const ScImg = styled.img`
  width: 100%;
  
`;

const ScTitle = styled.div`
  position: absolute;
  width: 377px;
  line-height: 30px;
  margin: 40px 300px auto;
  font-size: 1.5em;
  font-weight: 500;
  font-family: 'SUIT Heavy';
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const ScMobile2 = styled.div`
  @media screen and (max-width: 768px){
          
  }  
`;

const ScWrap = styled.div`
  margin: 15px auto;
  
`;

export default BoardDetail;
