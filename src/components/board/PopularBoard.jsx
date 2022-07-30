import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import apis from '../../shared/api/main';
import PopularBoardMap from './PopularBoardMap';
import{ left,right }from '../../shared/svg/A-index'
import { getCookie } from '../../shared/Cookie';
import * as Sentry from "@sentry/react";

const PopularBoard = () => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState();
    const token = getCookie("token")

    const TOTAL_SLIDES = 2; 
    const imgLength = 1000;
    const [curruntIdx, setCurrentIdx] = useState(0);
    const [count, setCount] = useState(0);
    const slideRef = useRef(null);
  

    const nextSlide = () => {
      if (curruntIdx >= TOTAL_SLIDES) {
          setCurrentIdx(0);
      } else {
          setCurrentIdx((prev) => prev + 1);
      }
  };

  const prevSlide = () => {
    if (curruntIdx === 0) {
        setCurrentIdx(TOTAL_SLIDES);
    } else {
        setCurrentIdx((prev) => prev - 1);
    }
};

useEffect(() => {
        slideRef.current.style.transition = `all 0.5s ease-in-out`;
        slideRef.current.style.transform = `translateX(-${curruntIdx}120px)`;
    }, [curruntIdx]);

    const navigate = useNavigate()

      useEffect(() => {  
        setLoading(true)
          const getMark = async () => {
            if(!token){
               await apis.getBoardsLike(0)
                        .then((res)=>{
                            // console.log(res.data)
                            setContent(res.data.post.slice(0,10))
                          
                          }).catch((e)=>{
                            Sentry.captureException(e);
                          })
            }else{
              await apis.getBoardsLikeLogin(0)
                      .then((res)=>{
                          // console.log(res.data)
                          setContent(res.data.post.slice(0,10))
                        }).catch((e)=>{
                          Sentry.captureException(e);
                        })
          }
                        }
                      getMark()
                    }, [loading])
  return (
    <>
        <ScWrap>
            <ScTop >
              <div>
                <div style={{fontFamily:"SUIT ExtraBold", fontSize:"1.875em"}}>베스트 게시물</div>
                <div style={{marginTop:"10px"}}>커파인러들이 가장 많이 저장한 게시물 Best 10!</div>
                </div>
              <ScMoveButton style={{display:"flex"}}>
                <div onClick={prevSlide}><img src={left} alt=""/></div>
                <div onClick={nextSlide}><img src={right} alt=""/></div>
              </ScMoveButton>
            </ScTop>
            <Container>
                <ImageBox ref={slideRef} count={count}>
                {content&&content.map((item,idx)=>{
                        return <ImageList key={idx}>
                        <PopularBoardMap 
                          content={item}/></ImageList>
                    })}
                </ImageBox>
            </Container>
        </ScWrap>
        
    </>
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
`;

const ScTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 10px 30px;
  color: #2C278C
;
`
const ScMoveButton =styled.div`
  display: flex;
  margin: 3% 5% 0 0 ;
  gap: 24px;
`
const Container = styled.div`
    max-width: 1150px;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
    /* position: relative; */
`;

const ImageBox = styled.ul`
    margin: 0 0 0 125px;
    padding: 0;
    width: 100%;
    display: flex;
    transition: ${(props) => (!props.count ? '' : 'all 1s ease-in-out')};
    transform: ${(props) => 'translateX(-' + props.count * 1100 + 'px)'};
`;
const ImageList = styled.li`
    list-style: none;
`;



export default PopularBoard