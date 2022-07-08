import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import UpdateComment from "./UpdateComment";
import { useSelector, useDispatch } from "react-redux";
import { __deleteComment, __loadComment } from '../../redux/modules/comment';

const CommentCard = (props) => {

  const { brand, boardId } = props;
  
  const dispatch = useDispatch();

  const [showUpdate, setShowUpdate ] = useState(false);
  const [ reviewId , setReviewId ] = useState();
  

 
  
  const review_list = useSelector((state)=>state.comment.posts);

  console.log(review_list);


  
  
  useEffect(()=>{
    dispatch(__loadComment({brand, boardId}));
  },[boardId, brand, dispatch])


    return (
      <>
        <ScWrap>
          {review_list.map((item, index) => {
            return (            
            <ScComment key={index}>{item.id}.{item.review}            
              <ScHR/>
              <ScButton onClick={()=>{
                setShowUpdate(true);
                setReviewId(item?.id);
                console.log(item?.id);
              }}>수정</ScButton>
              <ScButton onClick={()=>{
                dispatch(__deleteComment(brand,boardId,Number(item?.id)))                
                dispatch(__loadComment({brand, boardId}));
              }}>삭제</ScButton>
              {showUpdate === true ? (
            <UpdateComment
              showUpdate={showUpdate}
              setShowUpdate={setShowUpdate}
              commentId={Number(item?.id)}
              boardId={boardId}
              brand={brand}        
            />) : null}  
            </ScComment>
          )})}
        </ScWrap>
              
        </>
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

const ScButton = Styled.button`
  &:hover{
    cursor: pointer;
  }
`;
export default CommentCard