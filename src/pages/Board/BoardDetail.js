import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

/** params로 boardId 가져오기 */
import { useParams } from 'react-router-dom';

/** 서버 api 통신 */
import apis from '../../shared/api/main';

/** 쿠키 가져오기 */
import { getCookie } from '../../shared/Cookie';

/** component */
import {
  BoardComment,
  BoardContent,
  BoardLike,
  BoardMain,
} from '../../components/BoardDetail/A-BoardDetailIndex';

/** 이미지 import */
import { BoardMini2 } from '../../shared/svg/A-index';
import BoardImg from './svg/BoardMain.svg';


/** Sentry */
import * as Sentry from "@sentry/react";



const BoardDetail = () => {
  const { boardId } = useParams();

  const [content, setContent] = useState();
  const [boardReducer, setHead] = useState();

  const [bookmark, setBookmark] = useState();
  const [like, setLike] = useState();
  const [totLike, setTotLike] = useState();
  const [reportck, setReportck] = useState()
  const token = getCookie('token');


  //이유는 모르게쓴데 이전에 불려온 값이 뷰어로 들어가 ㅠㅠ
  useEffect(() => {
    if (!token) {
      apis.getBoard(boardId).then((res) => {
        setContent(res?.data.content);
        setHead(res?.data)
        setTotLike(res?.data.totalLove)
      }).catch(e => {
        Sentry.captureException(e);
      });
    } else {
      apis.getBoardLogin(boardId).then((res) => {
        setContent(res?.data.content);
        setHead(res?.data)
        setBookmark(res?.data.bookmark)
        setLike(res?.data.loveCheck)
        setTotLike(res?.data.totalLove)
        setReportck(res?.data.report)
      }).catch(e => {
        Sentry.captureException(e);
      });
    }
  }, []);



    return (
      <>
        <ScMini src={BoardMini2} alt="" />
        <ScImgContainer>
          <ScImg src={BoardImg} alt="" />
          <ScTitle>커피를 사랑하는 사람들의 연구소</ScTitle>
        </ScImgContainer>
        <ScMobile>
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
                totLike={totLike}
                setTotLike={setTotLike}
                reportck={reportck}
                setReportck={setReportck}
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
    margin: 20px auto;
  }
`;

const ScImg = styled.img`
  width: 100%;
  @media screen and (max-width: 768px) {
  display: none;
  }
`;

const ScMini = styled.img`
  width: 100%;
  display: none;
  @media screen and (max-width: 768px) {
  display: block;
  }
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
  @media screen and (max-width: 768px){
    margin:0;    
        }  
`;

export default BoardDetail;
