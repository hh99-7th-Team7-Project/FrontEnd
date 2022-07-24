import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import BoardCategory from '../../components/BoardWrite/BoardCategory';
import ToastEdit from '../../components/BoardWrite/ToastEdit';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { loadBoard } from '../../redux/modules/board';
import { useNavigate } from 'react-router-dom';
import apis from '../../shared/api/main';
import styled from 'styled-components';
import { getCookie } from '../../shared/Cookie';
import Swal from 'sweetalert2';
import * as Sentry from "@sentry/react";

const BoardWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [cate, setCate] = useState('카페 추천합니다');
  const [content, setContent] = useState('');
  // console.log(cate);
  // console.log(title);
  // console.log(content);

  //로그인 후 이용가능한 서비스 알람
  const islogin = getCookie('islogin');
  // console.log(islogin);
  useEffect(() => {
    if (islogin === undefined) {
      Swal.fire({
        title: '로그인 후 이용가능 합니다.',
        icon: 'error',
        confirmButtonText: '확인',
      });
      navigate('/board');
    }
  }, []);

  const submitOnclick = async () => {
    if(title!==" "&& content!==" "&& cate!==" "){
       await apis
      .postBoard({ title: title, content: content, category: cate })
      .then((res) => {
        navigate('/board');
        Swal.fire({
          title: '등록에 성공 했습니다.',
          icon: 'success',
          confirmButtonText: '확인',
        }).catch(e => {
          Sentry.captureException(e);
      });;
      });
    }
  };

  return (
    <>
      <ScMobile>
        <div style={{margin:"auto", width:"100%"}}>
          <Header />
        </div>
        <ScWrite>
          <BoardCategory title={setTitle} cate={setCate} />
          <ToastEdit content={setContent} />
          <ScSubmit>
            <div onClick={submitOnclick}>제출</div>
            <div
              onClick={() => {
                navigate('/board');
              }}
            >
              취소
            </div>
          </ScSubmit>
          </ScWrite>
        </ScMobile>
    </>
  );
};

export default BoardWrite;

const ScMobile = styled.div`
  @media screen and (min-width: 350px){
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const ScWrite = styled.div`
  min-width: 1200px;
  width: 90%;
  margin: 73px auto; 
`;
const ScSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  font-size: 16px;
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
