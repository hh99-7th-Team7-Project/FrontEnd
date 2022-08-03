import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import BoardMap from '../../components/board/BoardMap';
import { Link } from 'react-scroll';
import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';
import BoardPagination from '../../components/board/Pagination/BoardPagination';
import * as Sentry from "@sentry/react";

const SearchBoard = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [boardReducer, setBoardReducer] = useState();
  const [totalpage, settotalPage] = useState(0)
  const [page, setPage] = useState(0)

  const token = getCookie('token');

  useEffect(() => {
    const search = async () => {
      if (!token) {
        apis
          .searchBoard(keyword, page)
          .then((res) => {
            setBoardReducer(res?.data.post);
            settotalPage(res?.data.totalPage)
          }).catch(e => {
            Sentry.captureException(e);
          });;
      } else {
        apis.searchBoardLogin(keyword, page)
          .then((res) => {
            setBoardReducer(res?.data.post);
            settotalPage(res?.data.totalPage)
          }).catch(e => {
            Sentry.captureException(e);
          });;
      }
    };
    search();
  }, [keyword]);

  return (
    <>
      <ScWrap id="Top">
        <ScTitle>"{keyword}"에 대한 검색 결과입니다.</ScTitle>
        <ScBoardWrap>
          {boardReducer && boardReducer.map((item, idx) => {
            return (<BoardMap key={idx} content={item} />)
          })}
        </ScBoardWrap>
      </ScWrap>
      <ScTopBtnWrap>
          <Link to="Top" spy={true} smooth={true}>
            <ScTopBtn>Top</ScTopBtn>
          </Link>
      </ScTopBtnWrap>
      <footer>
        <BoardPagination
          total={totalpage}
          page={page}
          setPage={setPage}
        />
      </footer>
    </>
  )

}


const ScWrap = styled.div`
  margin: auto;
`;

const ScBoardWrap = styled.div`
  margin: 50px auto;
  width: 1300px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 30px auto;
  }
  
`;


const ScTitle = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  font-size: 1.5em;
  @media screen and (max-width: 768px) {
    margin: 60px auto;
    text-align: center;
  }
`

const ScTopBtnWrap = styled.div`
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const ScTopBtn = styled.div`
  background-color: #2c278c;
  position: fixed;
  bottom: 3%;
  left: 2%;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    left: 3%;
    bottom: 2%;
  }
`;

export default SearchBoard

