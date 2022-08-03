import React, { useEffect, useState } from 'react';
//css
import styled from 'styled-components';
import '../../shared/css/dropdown.css';

import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';

//component
import{ BoardPagination , BoardMap } from './A-boardindex'
// 에러로그
import * as Sentry from "@sentry/react";


const BoardList = () => {
  const token = getCookie('token');

  const [content, setContent] = useState();
  const [totalpage , settotalPage ]= useState(0)
  const [page, setPage] =useState(0)

  // 페이지네이션
  useEffect(() => {
    const getMark = async () => {
      if (!token) {
        await apis
          .getBoards(page)
          .then((res) => {
            setContent(res.data.post); 
            settotalPage(res?.data.totalPage)           
          }).catch((e)=>{
            Sentry.captureException(e);
          })
      } else {
        await apis.getBoardsLogin(page).then((res) => {
          setContent(res.data.post);
          settotalPage(res?.data.totalPage) 
        }).catch((e)=>{
          Sentry.captureException(e);
        })
      }
    };
    getMark();
  }, [page])


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
    max-width: 1200px;
    width: 90%;
    margin: auto;    
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

export default BoardList;
