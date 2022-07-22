import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import apis from '../../shared/api/main'
import { getCookie } from '../../shared/Cookie'
import PopularBoardMap from '../board/PopularBoardMap'
import{left,right}from '../../shared/svg/A-index'

const UserBoardBoard = () => {
  const [content, setContent] = useState()
  const userId = getCookie("userId")
  const [count, setCount] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES = 2; 
  const [slide, setSlide]= useState() 
  const imgLength = 1000;
  const [curruntIdx, setCurrentIdx] = useState(0);

  //내가쓴글
  useEffect(()=>{
    apis.getMyBoardBookmark(userId)
        .then((res)=>{
        console.log(res.data)
        setContent(res.data)
        setSlide(Math.floor(res?.data?.length/4)-1)
    })
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
  

  return (
    <ScWrap>
         <ScMoveButton style={{display:"flex"}}>
    <div onClick={prevSlide}><img src={left} alt=""/></div>
    <div onClick={nextSlide}><img src={right} alt=""/></div>
  </ScMoveButton>
    <Container>
        <ImageBox ref={slideRef} count={count}>
            {content&&content.map((item,idx)=>{
                return(
                    <ImageList key={idx}>
                <PopularBoardMap
               content={item}
            />
            </ImageList>)
            })}
           
        </ImageBox>
    </Container>
</ScWrap>
  )
}

export default UserBoardBoard

const ScWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

`
const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
    /* position: relative; */
`;

const ImageBox = styled.ul`
   margin: 0 0 0 10px;
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    transition: ${(props) => (!props.count ? '' : 'all 1s ease-in-out')};
    transform: ${(props) => 'translateX(-' + props.count * 1000 + 'px)'};
`;
const ImageList = styled.li`
    list-style: none;

`;

const ScMoveButton =styled.div`
  display: flex;
  margin: 30px 38px 0 0 ;
  gap: 24px;
`
const ScBoard = styled.div`    
    width: 100%;
    height: 100%;
`;

const ScTable = styled.div`
    /* border: 1px solid black; */
    display: flex;
    width: 100%;
    margin: 30px auto;
`;