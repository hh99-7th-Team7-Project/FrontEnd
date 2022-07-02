import React from "react";
import { Route, Routes, Link } from "react-router-dom";

// 페이지

import Main from '../pages/Main';
import CoffeeDetail from '../pages/CoffeeDetail'
import Map from '../pages/Map';
import MyPage from '../pages/MyPage';
import Login from '../pages/Login/Login'
import KaKaoLogin from "../pages/Login/KaKaoLogin";
import GoogleLogin from "../pages/Login/GoogleLogin";
import NaverLogin from "../pages/Login/NaverLogin";
import Signup from "../pages/Signup"
import AdminPage from "../pages/AdminPage";
import CommentCard from "../components/CoffeeDetail/CommentCard";



const Router = () => {

    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
            
            <Route path="/signup" element={<Signup/>}/>
            {/* Login */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/oauth/kakao/callback" element={<KaKaoLogin/>}/>
            <Route path="/user/google/callback" element={<GoogleLogin/>}/>
            <Route path="/user/naver/callback" element={<NaverLogin/>}/>

            {/* Admin Page */}
            <Route path="/admin" element={<AdminPage/>}/>

            {/** CafeDetail */}
            <Route path='/:brand/:coffeename/:id' element={<CoffeeDetail/>}/>

        </Routes>
    )
}

export default Router;
