import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardMap from './BoardMap';
import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';
import BoardPagination from './Pagination/BoardPagination';
import * as Sentry from "@sentry/react";


const BoardListCategory = ({ category }) => {
  const [content, setContent] = useState();
  const token = getCookie('token');

  const [totalpage , settotalPage ]= useState(0)
  const [page, setPage] =useState(0)

  useEffect(() => {
    const getMark = async () => {
      if (!token) {
        await apis.getBoardsCategory(category , Number(page))
        .then((res) => {
          // console.log(res.data);
          setContent(res.data.post);
          settotalPage(res?.data.totalPage) 
        }).catch((e)=>{
          Sentry.captureException(e);
        })
      } else {
        await apis.getBoardsCategoryLogin(category, Number(page))
        .then((res) => {
          // console.log(res.data);
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
