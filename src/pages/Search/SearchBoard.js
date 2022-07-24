import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import BoardMap from '../../components/board/BoardMap';
import apis from '../../shared/api/main';
import Header from '../Header/Header';
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
            // console.log(res);
            setBoardReducer(res?.data.post);
            settotalPage(res?.data.totalPage)
          }).catch(e => {
            Sentry.captureException(e);
          });;
      } else {
        apis.searchBoardLogin(keyword, page)
          .then((res) => {
            // console.log(res);
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
      <ScWrap>
        <div style={{ margin: "auto", width: "62%" }}>
          <Header />
        </div>
        <ScTitle>"{keyword}"에 대한 검색 결과입니다.</ScTitle>
        <ScBoardWrap>
          {boardReducer && boardReducer.map((item, idx) => {
            return (<BoardMap key={idx} content={item} />)
          })}
        </ScBoardWrap>
      </ScWrap>
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
`;


const ScTitle = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  font-size: 1.5em;
`

export default SearchBoard

