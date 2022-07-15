import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UpdateComment from "./UpdateComment";
import { useSelector, useDispatch } from "react-redux";
import { __deleteComment, __loadComment } from '../../redux/modules/comment';


const CommentCard = (props) => {

  const { brand, boardId } = props;
  
  const dispatch = useDispatch();


  const [showUpdate, setShowUpdate ] = useState(false);
  const [ reviewId , setReviewId ] = useState();


  const  posts  = useSelector((state)=>state.comment.posts);

  console.log(posts)

 console.log(showUpdate)

  useEffect(()=>{
    dispatch(__loadComment({brand, boardId}));
  },[setShowUpdate])


    return (

        <>
          <ScWrap>
            {posts && posts.map((item) => {
              return (
                <ScComment key={item?.id}>
                  <ScCommentCardWrap>
                    <ScStar>
                      {item?.star === 1 && <p>&#9733;&#9734;&#9734;&#9734;&#9734; </p>}
                      {item?.star === 2 && <p>&#9733;&#9733;&#9734;&#9734;&#9734;</p>}
                      {item?.star === 3 && <p>&#9733;&#9733;&#9733;&#9734;&#9734;</p>}
                      {item?.star === 4 && <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>}
                      {item?.star === 5 && <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>}
                    </ScStar>
                    <ScCardAlign1>
                      <ScCommentSpan>{item?.review}</ScCommentSpan>
                    </ScCardAlign1>
                    <ScCardAlign2>
                      <ScDateSpan>작성시간</ScDateSpan>
                      <ScNickSpan>{item?.nickname}</ScNickSpan>
                      <ScButton onClick={()=>{
                        dispatch(__deleteComment(brand,boardId,Number(item?.id)))                
                        dispatch(__loadComment({brand, boardId}));
                          }}>삭제</ScButton>
                        <ScButton onClick={()=>{
                          setShowUpdate(true);
                          setReviewId(item?.id);
                        }}>신고</ScButton>
                      </ScCardAlign2>
                  </ScCommentCardWrap> 
                  <ScHR/>
                  
                  
                  {showUpdate === true ? (
                <UpdateComment
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


const ScWrap = styled.div`
margin: 20px auto;
width: 70vw;
height: 500px;
padding: 20px;
overflow-y: auto;
border-top: 2px solid black;
border-bottom: 2px solid black;
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-thumb {  
  background-color: black;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background-color: #EEE;  
}
`;

const ScComment = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
  
`;


const ScHR = styled.hr`
  margin-top: 5px;  
`;

const ScButton = styled.button`
  &:hover{
    cursor: pointer;
  }
  border: none;
`;

const ScCommentCardWrap = styled.div`
  display: flex;
  justify-content: space-between;  
`;

const ScStar = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2C278C;
`;

const ScCardAlign1 = styled.div`
  width: 400px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
const ScCardAlign2 = styled.div`
  width: 200px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const ScCommentSpan = styled.span`
  color: #2C278C;
  text-align: left;
  left: 0;
`;

const ScDateSpan = styled.span`
  color: #2C278C;
`;

const ScNickSpan = styled.span`
  color: #2C278C;
`;


export default CommentCard