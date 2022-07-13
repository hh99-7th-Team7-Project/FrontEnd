import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import UpdateComment from "./UpdateComment";
import { useSelector, useDispatch } from "react-redux";
import { __deleteComment, __loadComment } from '../../redux/modules/comment';
import { getCookie } from '../../shared/Cookie';

const CommentCard = (props) => {

  const { brand, boardId } = props;
  
  const dispatch = useDispatch();
  const nickname = getCookie("nickname");

  const [showUpdate, setShowUpdate ] = useState(false);
  const [ reviewId , setReviewId ] = useState();

  const  posts  = useSelector((state)=>state.comment.posts);

  console.log(posts)

 
  useEffect(()=>{
    dispatch(__loadComment({brand, boardId}));
  },[setShowUpdate])


    return (

        <>
          <ScWrap>
            {posts && posts.map((item, index) => {
              return (
                <ScComment key={index}>
                  <div>
                    <p>닉네임 : {item?.nickname}</p>
                    {item?.star === 1 && <p>❤️🤍🤍🤍🤍</p>}
                    {item?.star === 2 && <p>❤️❤️🤍🤍🤍</p>}
                    {item?.star === 3 && <p>❤️❤️❤️🤍🤍</p>}
                    {item?.star === 4 && <p>❤️❤️❤️❤️🤍</p>}
                    {item?.star === 5 && <p>❤️❤️❤️❤️❤️</p>}
                    <p>댓글 : {item?.review}</p>
                  </div> 
                  <ScHR/>
                  <ScButton onClick={()=>{
                    setShowUpdate(true);
                    setReviewId(item?.id);    
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

const ScStar = Styled.p`
  
`;

export default CommentCard