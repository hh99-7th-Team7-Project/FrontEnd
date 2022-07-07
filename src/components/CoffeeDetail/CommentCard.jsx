import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import UpdateComment from "./UpdateComment";
import { useSelector, useDispatch } from "react-redux";
import { __deleteComment, __loadComment } from '../../redux/modules/comment';

const CommentCard = (props) => {

  const { brand, boardId } = props;
  
  const dispatch = useDispatch();

  const [showUpdate, setShowUpdate ] = useState(false);

  const openUpdate = () => {
    setShowUpdate(true);
  }
  
  const review_list = useSelector((state)=>state.comment.posts);
  console.log(review_list);

  useEffect(()=>{
    dispatch(__loadComment({brand, boardId}));

  },[dispatch])

    return (
      <>
        <ScWrap>
          {review_list.map((item, index) => {
            return (            
            <ScComment key={index}>{item.review}            
              <ScHR/>
              <ScButton onClick={openUpdate}>수정</ScButton>
              <ScButton onClick={()=>{
                dispatch(__deleteComment(Number(item?.id)))                
                dispatch(__loadComment(item?.brand, item?.id));
              }}>삭제</ScButton>
              {showUpdate === true ? (
            <UpdateComment
              showUpdate={showUpdate}
              setShowUpdate={setShowUpdate}
              commentId={item?.id}          
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