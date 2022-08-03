import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

/** react-router-dom */
import { useNavigate } from 'react-router-dom';

/** component */
import BoardCategory from '../../components/BoardWrite/BoardCategory';
import ToastEdit from '../../components/BoardWrite/ToastEdit';

/** 서버 api 통신 */
import apis from '../../shared/api/main';

/** 쿠키가져오기 */
import { getCookie } from '../../shared/Cookie';

/** swal alert */
import Swal from 'sweetalert2';

/** Sentry */
import * as Sentry from "@sentry/react";

const BoardWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [cate, setCate] = useState('카페 추천합니다');
  const [content, setContent] = useState('');

  //로그인 후 이용가능한 서비스 알람
  const islogin = getCookie('islogin');

  useEffect(() => {
    if (islogin === undefined) {
      Swal.fire({
        title: '로그인 후 이용 가능한 서비스입니다',
        icon: 'error',
        confirmButtonText: '확인',
      });
      navigate('/board');
    }
  }, []);

  const submitOnclick = async () => {
    if (title !== " " && content !== " " && cate !== " ") {
      await apis
        .postBoard({ title: title, content: content, category: cate })
        .then((res) => {
              Swal.fire({
            title: '등록에 성공 했습니다.',
            icon: 'success',
            confirmButtonText: '확인',
          })
          navigate('/board');
        }).catch(e => {
            Sentry.captureException(e);
          })
        ;
    }
  };

  return (
    <> 
        <ScWrite>
          <BoardCategory title={setTitle} cate={setCate} />
          <ScBoard>
            <ToastEdit content={setContent} />
          </ScBoard>
          <ScSubmit>
            <ScBtn onClick={submitOnclick}>제출</ScBtn>
            <ScBtn
              onClick={() => {
                navigate('/board');
              }}
            >
              취소
            </ScBtn>
          </ScSubmit>
        </ScWrite>

    </>
  );
};

export default BoardWrite;


const ScWrite = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 73px auto;

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: 30px auto 0;
  }
`;

const ScBoard = styled.div`
  
  @media screen and (max-width: 768px){
    width: 94%;
    margin: auto;
  }
`;
const ScSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  font-size: 1em;
  margin: 20px;
  div {
    background-color: #ddd;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
  }
`;

const ScBtn = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
