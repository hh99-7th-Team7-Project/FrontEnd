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
        <ScWrap>
          {review_list.map((item, index) => {
            return (            
            <ScComment key={index}>{item.Review}
              <ScHR/>         
            </ScComment>            
          )})}
        </ScWrap>
        ) 
  }
  

const ScWrap = Styled.div`
margin-top: 60px;
margin-left: 20px;
width: 70vw;
height: 500px;

overflow-z: scroll;
`;

const ScComment = Styled.div`
  font-size: 20px;
  color: brown;
  margin-bottom: 5px;
`;


const ScHR = Styled.hr`
  margin-top: 5px;  
`;
export default CommentCard