import React, { useEffect, useState } from 'react';
//css
import styled from 'styled-components';

import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';
//컴포넌트
import {BoardPagination, BoardMap} from './A-boardindex';
// 에러로그
import * as Sentry from "@sentry/react";


const BoardListCategory = ({ category }) => {

  const [content, setContent] = useState();
  const [totalpage , settotalPage ]= useState(0)
  const [page, setPage] =useState(0)
  const token = getCookie('token');

  //북마크 여부 때문에 토큰 유무로 API나눔
  useEffect(() => {
    const getMark = async () => {
      if (!token) {
        await apis.getBoardsCategory(category , Number(page))
        .then((res) => {
          setContent(res.data.post);
          settotalPage(res?.data.totalPage) 
        }).catch((e)=>{
          Sentry.captureException(e);
        })
      } else {
        await apis.getBoardsCategoryLogin(category, Number(page))
        .then((res) => {
          setContent(res.data.post);
          settotalPage(res?.data.totalPage) 
        }).catch((e)=>{
          Sentry.captureException(e);
        })
      }
    };
    getMark();
  }, [category,page]);



  return (
    <>
      <ScWrap>
        <ScBoard>
          <ScTable>
            {content &&
              content.map((item, idx) => {
                return <BoardMap content={item} key={idx} />;
              })}
          </ScTable>
        </ScBoard>
      </ScWrap>  
      <footer>

        <BoardPagination 
          total={totalpage}              
          page={page}
          setPage={setPage}
        />
      </footer>
    </>
  );
};

const ScWrap = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px){
    margin: auto;
    width: 70%;
    padding: 10px 30px 0px 0px;
  }
`;
const ScBoard = styled.div`
  width: 100%;
  height: 100%;
`;

const ScTable = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  margin: 30px auto;  
`;

export default BoardListCategory;
