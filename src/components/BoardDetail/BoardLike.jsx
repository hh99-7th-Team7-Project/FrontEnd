import React from 'react';
import styled from 'styled-components';

/** react-clipboard hook */
import { CopyToClipboard } from 'react-copy-to-clipboard';

/** swal alert */
import Swal from 'sweetalert2';

/** 서버 api 통신 */
import apis from '../../shared/api/main';

/** 쿠키 가져오기 */
import { getCookie } from '../../shared/Cookie';

/** Sentry */
import * as Sentry from "@sentry/react";

const BoardLike = ({ head, boardId, like2, setLike, totLike, setTotLike, reportck,setReportck }) => {
  // console.log(head?.userId)
  const token = getCookie("token")
  const user = getCookie("userId")
  const like = async () => {
    if(token){
      await apis.postBoardsLike(boardId)
      .then((res) => {
        // console.log(res.data)
      setLike(res?.data.postlove);
      setTotLike(res?.data.postloveCount)
    }).catch((e)=>{
      Sentry.captureException(e);
    })
    }else{
      Swal.fire({
        title: '로그인 후 이용 가능한 서비스입니다',
        icon: 'warning',
        confirmButtonText: '확인',
      });
    }
    
  };
  const currentUrl = window.location.href;

  const report =  async () => {
    const data ={
      userId: Number(head?.userId),
      reportId: Number(head?.id)
    }
    if(token){
      await apis.reportBoard(user,data)
      .then((res)=>{
        // console.log(res)
        setReportck(res.data)
      })
    }else{
      Swal.fire({
        title: '로그인 후 이용 가능한 서비스입니다',
        icon: 'warning',
        confirmButtonText: '확인',
      })
    }
  }


  return (
    <>
      <ScWrap>
        <ScTitleWrap>
          <ScH3>{totLike}</ScH3>
        </ScTitleWrap>
        <ScBtnWrap>
          {like2 ? (
            <ScBtn
              style={{ backgroundColor: 'black', color: 'white' }}
              onClick={like}
            >
              추천
            </ScBtn>
          ) : (
            <ScBtn onClick={like}>추천</ScBtn>
          )}
        </ScBtnWrap>
        <ScBtnWrap2>
          <CopyToClipboard text={currentUrl}>
            <ScBtn2
              onClick={() => {
                Swal.fire({
                  title: '링크복사 완료!',
                  icon: 'success',
                  confirmButtonText: '확인',
                });
              }}
            >
              📢공유
            </ScBtn2>
          </CopyToClipboard>
          {reportck? <ScBtn2 style={{backgroundColor:"#ddd",color:"white"}}>신고완료</ScBtn2>:<ScBtn2 onClick={report}>⚠️신고</ScBtn2>}
        </ScBtnWrap2>
      </ScWrap>
      <ScHR />
    </>
  );
};

const ScWrap = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  width: 175px;
  border: 1px #ddd solid;
  border-radius: 10px;
  margin: 80px auto;
`;

const ScTitleWrap = styled.div`
  width: 100%;
  margin: 27px auto 15px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ScH3 = styled.h3`
  font-size: 2.5em;
  margin: auto;

`;


const ScBtnWrap = styled.div`
  margin: 20px auto;  
  display: flex;
  justify-content: center;
  text-align: center;
  
`;

const ScBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px, 20px, 5px, 20px;
  margin: auto;
  width: 75px;
  height: 35px;
  border-radius: 50px;
  background-color: #eee;
  border-color: #eee;
  font-weight: bold;
  font-size: 1.25em;
  &:hover {
    cursor: pointer;
    background-color: #212121;
    color: white;
  }
`;

const ScBtnWrap2 = styled.div`
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ScBtn2 = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border: 1px #ddd solid;
  border-bottom: none;
  border-right: none;
  height: 40px;
  &:hover {
    cursor: pointer;
    background-color: #212121;
    color: white;
  }
`;

const ScHR = styled.hr`
    margin-top: 40px;
    margin-bottom: 20px;
`;

export default BoardLike;
