import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

// 페이지

import Main from '../pages/Main';
import CoffeeDetail from '../pages/CoffeeDetail';
import Map from '../pages/Map';
import MyPage from '../pages/MyPage';
import Login from '../pages/Login/Login';
import KaKaoLogin from '../pages/Login/KaKaoLogin';
import GoogleLogin from '../pages/Login/GoogleLogin';
import NaverLogin from '../pages/Login/NaverLogin';
import Signup from '../pages/Signup';
import AdminPage from '../pages/AdminPage';
import Board from '../pages/Board/Board';
import BoardDetail from '../pages/Board/BoardDetail';
import BoardWrite from '../pages/Board/BoardWrite';
import Search from '../pages/Search/Search';
import SearchBoard from '../pages/Search/SearchBoard';
import SearchCoffee from '../pages/Search/SearchCoffee';
import Chat from '../pages/Chat/Chat';
import ChatDetail from '../pages/Chat/ChatDetail';
import BoardUpdate from '../pages/Board/BoardUpdate';
import MenuCategory from '../pages/MenuCategory';
import Header from '../pages/Header/Header';

const Router = () => {
  //내 현재위치 geolocation
  const [myLocation, setSetMyLocation] = useState({
    lat: '36.0659104000',
    lng: '128.10945683000',
  });
  const [error, setError] = useState('');
  // console.log(myLocation);
  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition((position) => {
        setSetMyLocation({
          lat: position.coords.latitude, // 위도
          lng: position.coords.longitude, // 경도
        });
        // console.log(myLocation);
      });
    } else {
      setError('Geolocation is not supported.');
    }
  }, []);

  return (
    <>
    <div style={{margin:"auto", maxWidth:"1200px",minWidth:"1200px"}}>
    <Header />
    </div>
    <Routes>
      <Route path="/" element={<Main myLocation={myLocation} />} />
      <Route path="/mypage" element={<MyPage />} />

      {/* signup */}
      <Route path="/signup" element={<Signup />} />
      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/oauth/kakao/callback" element={<KaKaoLogin />} />
      <Route path="/oauth/google/callback" element={<GoogleLogin />} />
      <Route path="/oauth/naver/callback" element={<NaverLogin />} />

      {/* Admin Page */}
      <Route path="/admin" element={<AdminPage />} />

      {/* Main Page */}

      <Route path="/menucategory" element={<MenuCategory />} />

      {/** CafeDetail */}
      <Route path="/coffee/:brand/:coffeename/:boardId" element={<CoffeeDetail />} />

      {/* map */}
      <Route path="/map/:brand" element={<Map myLocation={myLocation} />} />
      {/* Search */}
      <Route path="/search/:keyword" element={<Search />} />
      <Route path="/search/board/:keyword" element={<SearchBoard />} />
      <Route path="/search/coffee/:keyword" element={<SearchCoffee />} />
      {/* Board */}
      <Route path="/board" element={<Board />} />
      <Route path="/board/:boardId" element={<BoardDetail />} />
      <Route path="/board/write" element={<BoardWrite />} />
      <Route path="/board/:boardId/update" element={<BoardUpdate />} />

      {/**Chat */}
      <Route path="/chatposts" element={<Chat />} />
      <Route path="/chatposts/detail/:id" element={<ChatDetail />} />


    </Routes>
    </>
  );
};

export default Router;
