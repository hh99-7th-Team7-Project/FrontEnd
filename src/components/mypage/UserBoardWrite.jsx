import React, { useEffect, useRef, useState } from 'react'
import { getCookie } from '../../shared/Cookie'
import apis from '../../shared/api/main'
//component
import PopularBoardMap from '../board/PopularBoardMap'
//css
import styled from 'styled-components'
import { left, right } from '../../shared/svg/A-index'
//err
import * as Sentry from "@sentry/react";

const UserBoardWrite = () => {
    const [content, setContent] = useState();
    const userId = getCookie('userId');
    const [count, setCount] = useState(0);
    const slideRef = useRef(null);
 
    const [slide, setSlide] = useState();
    const [curruntIdx, setCurrentIdx] = useState(0);

  useEffect(()=>{
    apis.getMyBoard(userId)
        .then((res)=>{
        setContent(res.data)
    }).catch(e => {
        Sentry.captureException(e);
    });
  },[])


  const nextSlide = () => {
    if (curruntIdx >= slide) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (curruntIdx === 0) {
      setCurrentIdx(slide);
    } else {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = `all 0.5s ease-in-out`;
    slideRef.current.style.transform = `translateX(-${curruntIdx}000px)`;
  }, [curruntIdx]);


  return (
    <ScWrap>
    <ScMoveButton style={{ display: 'flex' }}>
      <div onClick={prevSlide}>
        <img src={left} alt="" />
      </div>
      <div onClick={nextSlide}>
        <img src={right} alt="" />
      </div>
    </ScMoveButton>
    <Container>
      <ImageBox ref={slideRef} count={count}>
        {content &&
          content.map((item, idx) => {
            return (
              <ImageList key={idx}>
                <PopularBoardMap content={item} />
              </ImageList>
            );
          })}
      </ImageBox>
    </Container>
  </ScWrap>
  )
}

export default UserBoardWrite

const ScWrap = styled.div`
  /* border: 1px solid black; */
  margin: 23px auto 0 auto;
  width: 1200px;
  /* width: 100%; */
  height: 300px;
  background-color: #ddd;
  border-radius: 20px;
  padding: 10px;
  position: relative;
  @media screen and (max-width: 768px){
    width: 90%;
  }
`;
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 350px;
  overflow: hidden;
`;

const ImageBox = styled.ul`
  margin: 0 0 0 30px;
  padding: 0;
  display: flex;
  width: 100%;
  /* justify-content: center; */
  transition: ${(props) => (!props.count ? '' : 'all 1s ease-in-out')};
  transform: ${(props) => 'translateX(-' + props.count * 1000 + 'px)'};
`;
const ImageList = styled.li`
  list-style: none;
`;
const ScMoveButton = styled.div`
  display: flex;
  position: absolute;
  margin: 5px 38px 0 0;
  gap: 24px;
  right: 2%;
  top: -15%;
`;

;