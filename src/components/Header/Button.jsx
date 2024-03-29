import React, { useState } from 'react';
/** CSS */
import styled from 'styled-components';
/** react-router-dom */
import { useNavigate } from 'react-router-dom';
/** 쿠키 가져오기, 삭제 */
import { deleteCookie, getCookie } from '../../shared/Cookie';
/** Swal alert */
import Swal from 'sweetalert2';

const Button = ({toggle}) => {
  const navigate = useNavigate();
  const isLogin = getCookie('islogin');
  const [onair, setonair] = useState(false);

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
          <ScBtn
            onClick={() => {
              navigate('/mypage');
            }}
          >
            마이페이지
          </ScBtn>
          <p> | </p>
          <ScBtn onClick={logOut}>로그아웃</ScBtn>
        </>
      ) : (
        <>
          <ScBtn
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </ScBtn>          
          <p> | </p>
          <ScBtn
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
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
    margin: auto;
    width: 100%;
  }
`;

const ScBtn = styled.li`
  margin: 20px;
  font-size: 1.06em;
  color: #2c278c;
  &:hover {
    cursor: pointer;
    font-family: SUIT ExtraBold;
    border-radius: 4px;    
  }
  padding: 8px 12px;
  @media screen and (max-width:768px){ 
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;   
  }
  
`;

export default Button;
