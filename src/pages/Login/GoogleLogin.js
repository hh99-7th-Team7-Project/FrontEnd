import React from 'react'
import { useDispatch } from 'react-redux';
import { apis } from '../../shared/api/main';
import { api } from '../../shared/api/core/api';
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/modules/users';
import { setCookie } from '../../shared/Cookie';

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code)
  React.useEffect(() => {
    if (code) {
      const google = ()=>{
         api
        .get(`/oauth/google/callback?code=${code}`)//DB에 코드전송
        .then((res) => {
          console.log(res)
          const token = res.headers.authorization.split(" ");
          console.log(token[1])
          setCookie("token",res.headers.authorization.split(" ")[1]);
          navigate("/");
          api
            .get("/user/islogin")//유저정보가져오는url
            .then((res) => {
              dispatch(
                setUser({
                  //유저정보를 다시 세팅
                  nickname: res.data.nickname,
                  imageUrl: res.data.imageUrl,
                  userEmail: res.data.userEmail,
                })
              );
            })
            .catch((error) => console.log("유저정보저장오류", error));
        })
        .catch((err) => {
          console.log("소셜로그인 에러", err);
          alert("로그인 실패 !");
          navigate("/");
        });
      }
      google();
    }
  }, [code]);

  return (
    <div>구구루로그인</div>
  )
};



export default GoogleLogin