import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';
import PopularBoardMap from '../board/PopularBoardMap';
import { left, MapIco, right } from '../../shared/svg/A-index';
import calendar from '../../Image/Chat/calendar.svg';
import IconTime from '../../Image/Chat/time.svg';
import coffee from '../../Image/Chat/coffee.svg';
import person from '../../Image/Chat/person.png';
import * as Sentry from "@sentry/react";
import { useNavigate } from 'react-router-dom';

const UserChat = () => {
  const [content, setContent] = useState();
  const userId = getCookie('userId');
  const [count, setCount] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 2;
  const [slide, setSlide] = useState();
  const imgLength = 1000;
  const [curruntIdx, setCurrentIdx] = useState(0);
  const navigate = useNavigate()


  useEffect(() => {
    apis.getMyChatRoom(userId)
    .then((res) => {
      // console.log(res.data);
      setContent(res.data);
      setSlide(Math.floor(res?.data?.length / 4));
    }).catch((e)=>{
      Sentry.captureException(e);
    })
  }, []);


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
    // console.log(curruntIdx);
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
                <ScMap onClick={()=>{
                   navigate(`/chatposts/detail/${item.chatpostId}`)
                }}>
                {item.count===item.totalcount ?
                 <div style={{fontWeight:"300"}}>모집완료</div>:
                 <div style={{fontWeight:"300"}}>모집중</div>}
                  <ScTitle>{item.title}</ScTitle>
                  <ScBundle>
                  <ICON src={calendar}/>
                  <span>{item.calendar}</span>
                  </ScBundle>
                  <ScBundle >
                  <ICON src={IconTime}/>
                  <span>{item.meettime}</span>
                  </ScBundle>
                  <ScBundle>
                  <ICON src={MapIco}/>
                  <div >{item.map}</div>
                  </ScBundle>
                  <ScBundle>
                  <ICON src={person}/>
                  <div>{item.nickname}</div> 
                  </ScBundle>  
                </ScMap>
              </ImageList>
            );
          })}
      </ImageBox>
    </Container>
  </ScWrap>
  )
}


const ICON = styled.img`
margin-right: 5px;
width: 20px;
`;

const ScBundle =styled.div`
  display: flex;
  font-weight: 300;
  span{
    font-weight: 300;
  }
  div{
    font-weight: 300;
  }
`

const ScWrap = styled.div`
  /* border: 1px solid black; */
  margin: 23px auto 0 auto;
  width: 1200px;
  /* width: 100%; */
  height: 300px;
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  @media screen and (max-width: 768px){
    width: 90%;
  }
`;

const ScTitle =styled.div`
  font-size: 17px;
  font-weight: 700!important;
  height: 80px;
  margin: 10px 0 ;
`
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 350px;
  overflow: hidden;
`;

const ScMap = styled.div`
  /* border: 1px red solid; */
  height: 230px;
  width: 220px;
  margin: 20px 20px 0 0;
  padding: 10px 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.185);
  &:hover{
    background-color: #fdf0f2;
  }
`
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
export default UserChat