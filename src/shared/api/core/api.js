import axios from "axios";
import { getCookie } from "../../Cookie";

//기본설정
export const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  // withCredentials: false,
});
//폼데이터 전송 두가지 토큰O/X
export const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
export const instances = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

//2. 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
);

//2-1. 요청 인터셉터 토큰포함
instance.interceptors.request.use(
  //요청직전 호출
  (config) => {
    const token = getCookie("token");
    config.headers = {
      "Content-Type": "multipart/form-data",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  //에러 전 호출
  (err) => {
    console.log(err);
  }
);

//2-1. 요청 인터셉터 토큰 미포함(회원가입)
instances.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "multipart/form-data",
      accept: "application/json",
    };
    return config;
  },
  //에러 전 호출
  (err) => {
    console.log(err);
  }
);

//3. 응답 인터셉터
// api.interceptors.response.use(
//   (success) => {
//     const response = success.data;

//     if (
//       response.statusCode === 200 &&
//       response.responseMessage === "조회 성공"
//     ) {
//       return response.posts;
//     }

//     return success;
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// export const TokenCheck = localStorage.getItem("token") ? true : false;
