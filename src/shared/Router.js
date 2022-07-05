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
import UpdateComment from "../components/CoffeeDetail/UpdateComment";
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
            <Route path='/angelinus/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/cafebene/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/coffeebean/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/compose/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/droptop/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/ediya/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/hollys/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/paiks/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/paul/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/starbucks/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/theventi/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/tomntoms/:coffeename/:id/review' element={<CoffeeDetail/>}/>
            <Route path='/angelinus/:coffeename/review/update/:id' element={<UpdateComment/>}/>
        </Routes>
    )
}

export default Router;
