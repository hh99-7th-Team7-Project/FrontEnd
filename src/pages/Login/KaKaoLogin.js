import React from 'react'
import { useDispatch } from 'react-redux';
import { api, apin } from '../../shared/api/core/api';
import { apis } from '../../shared/api/main';
import {useNavigate} from 'react-router-dom'
import { setUser } from '../../redux/modules/users';
import { getCookie, setCookie } from '../../shared/Cookie';
import Swal from 'sweetalert2';

const KaKaoLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)
  React.useEffect(() => {
    if (code) {
      const kakao = ()=>{
         api
          .get(`/oauth/kakao/callback?code=${code}`)//DB에 코드전송
         .then((res) => {
          console.log(res)
          const token = res.headers.authorization.split(" ");
          console.log(token[1])
          setCookie("token", token[1]);
          api
            .get("/social/user/islogin")//유저정보가져오는url
            .then((res) => {
              console.log(res)
              setCookie("nickname", res?.data.nickname)
              setCookie("islogin", true)
              setCookie("profileImg", res?.data?.profileImage)
              setCookie("userId",res?.data?.userId)
              Swal.fire({
                title: '환영합니다.!',
                icon: 'success',
                confirmButtonText: '확인'
              })
               navigate("/");
            })
            .catch((error) => console.log("유저정보저장오류", error));
        })
        .catch((err) => {
          console.log("소셜로그인 에러", err);
          alert("로그인 실패 !");
          navigate("/");
        });
      }
      kakao();
    }
  }, [code]);

  return (
    <div></div>
  )
};

export default KaKaoLogin