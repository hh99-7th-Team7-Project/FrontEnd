import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//css+스와이퍼
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Navigation } from "swiper";
//에러로그
import * as Sentry from "@sentry/react";

import { getCookie } from "../../shared/Cookie";
import apis from "../../shared/api/main";
//컴포넌트
import { PopularBoardMap } from './A-boardindex';

const PopularBoardMobile = () => {

  const token = getCookie("token")
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState();

  //탑10 가져오기
  useEffect(() => {  
    setLoading(true)
      const getMark = async () => {
        if(!token){
           await apis.getBoardsLike(0)
                    .then((res)=>{
                        setContent(res.data.post.slice(0,10))
                      
                      }).catch((e)=>{
                        Sentry.captureException(e);
                      })
        }else{
          await apis.getBoardsLikeLogin(0)
                  .then((res)=>{
                      setContent(res.data.post.slice(0,10))
                    }).catch((e)=>{
                      Sentry.captureException(e);
                    })
      }
                    }
                  getMark()
                }, [loading])



  return (
    <ScWrap>
      <ScTop >
              <div>
                <div style={{fontFamily:"SUIT ExtraBold", fontSize:"1.875em"}}>베스트 게시물</div>
                <div style={{marginTop:"10px"}}>커파인러들이 가장 많이 저장한 게시물 Best 10!</div>
              </div>
              <ScMoveButton style={{display:"flex"}}>
              </ScMoveButton>
            </ScTop>
            <Container>
            <ScPrev className="prev2" style={{fontSize:'1.66em'}}>&lt;</ScPrev>  
      <ScNext className="next2" style={{fontSize:'1.66em'}}>&gt;</ScNext>
    <Swiper
      slidesPerView={2}
      spaceBetween={120}
      centeredSlides={true}
      // loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination,Navigation]}
      navigation={{
        prevEl: '.prev2',
         nextEl: '.next2', }}
      className="mySwiper2"
    >
      <ImageBox>
       {content&&content.map((item,idx)=>{
                        return <SwiperSlide key={idx}>
                          <ScSlide>
                          <PopularBoardMap 
                          content={item}/>
                          </ScSlide>
                          </SwiperSlide>
                    })}
       </ImageBox>
    </Swiper>
    </Container>
  </ScWrap>
  )
}

const ScWrap = styled.div` 
    /* border: 1px solid black; */
    margin: 33px auto 62px;
    max-width: 1200px;
    width: 85%;
    height: 410px;
    background-color: #F4F1FF;
    border-radius: 20px;
    padding: 20px;
    position: relative;
`;

const ScPrev = styled.div`
     @media screen and (max-width:768px){      
      left: 3%;      
  }
`


const ScNext = styled.div`
     @media screen and (max-width:768px){      
      right: 3%;           
  }
`

const ScTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 10px 30px;
  color: #2C278C
;
`
const ScMoveButton =styled.div`
  display: flex;
  margin: 30px 38px 0 0 ;
  gap: 24px;
`
const Container = styled.div`
    /* max-width: 1150px; */
    /* width: 100%; */
    /* position: relative; */
    height: 300px;
    margin: 0 ;
    overflow: hidden;
    /* border: 1px red solid; */
    /* position: relative; */
`;

const ImageBox = styled.div`
    margin: 0 0 0 125px;
    padding: 0;
    width: 100%;
    display: flex;
    border: 1px red solid;
`;
const ImageList = styled.li`
    list-style: none;
`;

const ScSlide = styled.div`
  width: 200px;
  height: 200px;
  /* transform: scale(0.9); */
  border-radius: 60px;

  /* border: 1px #ddd solid; */
  background-color: white;
  background: no-repeat center;
  background-size: 100%;
  /* border: 1px solid var(--main); */
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;


export default PopularBoardMobile