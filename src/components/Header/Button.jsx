import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCookie, getCookie } from '../../shared/Cookie';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Button = () => {
  const navigate = useNavigate();
  const isLogin = getCookie('islogin');
  const [onair, setonair] = useState(false);
  // console.log(onair);

  React.useEffect(() => {
    if (isLogin) {
      return setonair(true);
    }
  }, [isLogin]);
  const logOut = () => {
    deleteCookie('token');
    deleteCookie('profileImg');
    deleteCookie('nickname');
    deleteCookie('islogin');
    deleteCookie('userId');

    setonair(false);
    Swal.fire({
      title: '로그아웃 완료!',
      icon: 'success',
      confirmButtonText: '확인',
    });

    navigate('/');
  };

  return (
    <ScWrap>
      {onair ? (
        <>
          <ScBtn onClick={logOut}>로그아웃</ScBtn>
          <p> | </p>
          <ScBtn
            onClick={() => {
              navigate('/mypage');
            }}
          >
            마이페이지
          </ScBtn>
        </>
      ) : (
        <>
          <ScBtn
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </ScBtn>
          <p> | </p>
          <ScBtn
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </ScBtn>
        </>
      )}
    </ScWrap>
  );
};

const ScWrap = styled.ul`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  color: #2c278c;
  list-style: none;
  display: flex;
  @media screen and (max-width:768px){
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 60%;

  }
`;

const ScBtn = styled.li`
  margin: 20px;
  font-size: 13pt;
  color: #2c278c;
  &:hover {
    cursor: pointer;
    background-color: #2C278C;
    color: white;
    border-radius: 4px;    
  }
  padding: 8px 12px;
  @media screen and (max-width:768px){ 
    display: flex;
    justify-content: center;
    text-align: center;
    margin: auto;
    width: 40%;
  }
  
`;

export default Button;
