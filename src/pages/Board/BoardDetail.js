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

const BoardDetail = () => {
  const { boardId } = useParams();
  console.log(boardId);
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
    });
  }, []);

  return (
    <>
      <div style={{ margin: 'auto' }}>
        <Header />
      </div>
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
        <BoardComment />
      </ScWrap>
    </>
  );
};

const ScWrap = styled.div`
  margin: 15px auto;
  width: 1200px;
`;

export default BoardDetail;
