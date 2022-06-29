import React from "react";
import { Route, Routes } from "react-router-dom";

// 페이지
import { Angel, CafeBene, CoffeeBean , Compose , DropTop , Ediya , Hollys , Paiks , Paul , StarBucks , TheVenti , TomTom  } from '../pages/detailpage/BrandPage';
import Main from '../pages/Main';
import BrandDetail from '../pages/BrandDetail';
import CoffeeDetail from '../pages/CoffeeDetail'
import Map from '../pages/Map';
import MyPage from '../pages/MyPage';
import Login from '../pages/Login/Login'
import KaKaoLogin from "../pages/Login/KaKaoLogin";
import GoogleLogin from "../pages/Login/GoogleLogin";
import NaverLogin from "../pages/Login/NaverLogin";
import Signup from "../pages/Signup"



const Router = () => {

    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
            
            <Route path="/signup" element={<Signup/>}/>
            {/* Login */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/user/kakao/callback" element={<KaKaoLogin/>}/>
            <Route path="/user/google/callback" element={<GoogleLogin/>}/>
            <Route path="/user/naver/callback" element={<NaverLogin/>}/>

            {/* cafebrand */}
            <Route path='/angelinus' element={<Angel/>}/>
            <Route path='/cafebene' element={<CafeBene/>}/>
            <Route path='/coffeebean' element={<CoffeeBean/>}/>
            <Route path='/compose' element={<Compose/>}/>
            <Route path='/droptop' element={<DropTop/>}/>
            <Route path='/ediya' element={<Ediya/>}/>
            <Route path='/hollys' element={<Hollys/>}/>
            <Route path='/paiks' element={<Paiks/>}/>
            <Route path='/paul' element={<Paul/>}/>
            <Route path='/starbucks' element={<StarBucks/>}/>
            <Route path='/theventi' element={<TheVenti/>}/>
            <Route path='/tomntoms' element={<TomTom/>}/>
            {/** CafeDetail */}
            <Route path='/angelinus/americano' element={<CoffeeDetail/>}/>
            <Route path='/cafebene/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/coffeebean/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/compose/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/droptop/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/ediya/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/hollys/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/paiks/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/paul/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/starbucks/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/theventi/:coffeename' element={<CoffeeDetail/>}/>
            <Route path='/tomntoms/:coffeename' element={<CoffeeDetail/>}/>            
        </Routes>
    )
}

export default Router;
