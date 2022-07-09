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
          {review_list && review_list.map((item) => {
            return (              
            <div>            
              <ScComment key={item?.id}>
                <div>
                  <p>닉네임 : {item?.nickname}</p>
                  <p>댓글 : {item?.review}</p>
                </div> 
                <ScHR/>
                <ScButton onClick={()=>{
                  setShowUpdate(true);
                  setReviewId(item?.id);
                  dispatch(__loadComment({brand, boardId}));                             
                }}>수정</ScButton>
                <ScButton onClick={()=>{
                  dispatch(__deleteComment(brand,boardId,Number(item?.id)))                
                  dispatch(__loadComment({brand, boardId}));
                }}>삭제</ScButton>
                {showUpdate === true ? (
              <UpdateComment
                showUpdate={showUpdate}
                setShowUpdate={setShowUpdate}
                commentId={Number(reviewId)}
                boardId={boardId}
                brand={brand}        
              />) : null}  
              </ScComment>
            </div>
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
padding: 20px;
border: 1px solid black;
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