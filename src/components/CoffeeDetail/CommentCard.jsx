import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { useSelector } from "react-redux";
import { __loadPost } from '../../redux/modules/commentpost';

const CommentCard = () => {
  
  const review_list = useSelector((state)=>state.commentpost.posts);

  useEffect(()=>{
    __loadPost();
  },[])

  console.log(review_list);

  
    return (
        <Wrap>
          {review_list.map((item, index) => {
            return (
            <Comment key={index}>{item.Review}</Comment>
          )})}
        </Wrap>
        ) 
  }
  

const Wrap = Styled.div`
margin-top: 60px;
margin-left: 20px;
width: 70vw;
height: 150px;
border: 1px solid black;
overflow-x: scroll;
`;

const Comment = Styled.p`
  
`;

export default CommentCard