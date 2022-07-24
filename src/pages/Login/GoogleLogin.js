import React from 'react';
import { useDispatch } from 'react-redux';
import { apis } from '../../shared/api/main';
import { api, apin } from '../../shared/api/core/api';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/modules/users';
import { setCookie } from '../../shared/Cookie';
import Swal from 'sweetalert2';
import * as Sentry from "@sentry/react";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');
  // console.log(code);
  React.useEffect(() => {
    if (code) {
      const google = () => {
        apin
          .get(`/oauth/google/callback?code=${code}`) //DB에 코드전송
          .then((res) => {
            // console.log(res);
            const token = res.headers.authorization.split(' ');
            // console.log(token[1]);
            setCookie('token', res.headers.authorization.split(' ')[1]);
            api
              .get('/social/user/islogin') //유저정보가져오는url
              .then((res) => {
                // console.log(res);
                setCookie('nickname', res?.data.nickname);
                setCookie('islogin', true);
                setCookie('profileImg', res?.data?.profileImage);
                setCookie('userId', res?.data?.userId);
                Swal.fire({
                  title: '환영합니다.!',
                  icon: 'success',
                  confirmButtonText: '확인',
                }).catch(e => {
                  Sentry.captureException(e);
              });

                navigate('/');
              })
              .catch((error) => 
              Sentry.captureException(error)
              );
             ;
          })
          .catch((err) => {
            Sentry.captureException(err);
            console.log('소셜로그인 에러', err);
            alert('로그인 실패 !');
            navigate('/');
          });
      };
      google();
    }
  }, [code]);

  return <div></div>;
};

export default GoogleLogin;
