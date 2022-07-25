import React from 'react';
import Styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';
import * as Sentry from "@sentry/react";

const BoardLike = ({ head, boardId, like2, setLike }) => {

  const token = getCookie("token")
  const like = async () => {
    if(token){
      await apis.postBoardsLike(head?.category, boardId)
      .then((res) => {
      setLike(res.data);
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
  return (
    <>
      <ScWrap>
        <ScTitleWrap>
          <ScH3>{head?.totalLove}</ScH3>
        </ScTitleWrap>
        <ScBtnWrap>
          {head?.loveCheck ? (
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
          <ScBtn2 onClick={()=>{
            Swal.fire({
              title: '준비중입니다.',
              icon: 'info',
              confirmButtonText: '확인',
            });
          }}>⚠️신고</ScBtn2>
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

const ScTitleWrap = Styled.div`
  width: 100%;
  margin: 27px auto 15px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ScH3 = Styled.h3`
  font-size: 2.5em;
  margin: auto;

`;

const URLShareButton = Styled.button`
	width: 90px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 1.125em;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;
const ScBtnWrap = Styled.div`
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

const ScHR = Styled.hr`
    margin-top: 40px;
    margin-bottom: 20px;
`;

export default BoardLike;
