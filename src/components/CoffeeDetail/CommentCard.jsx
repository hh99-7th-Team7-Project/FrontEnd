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
                    </ScCardAlign2>
                    <ScCardAlign3>
                      <ScNickSpan>{item?.nickname}</ScNickSpan>
                    </ScCardAlign3>
                    <ScCardAlign4>
                      <ScButton onClick={()=>{
                        dispatch(__deleteComment(brand,boardId,Number(item?.id)))                
                        dispatch(__loadComment({brand, boardId}));
                          }}>삭제</ScButton>
                    </ScCardAlign4>
                  </ScCommentCardWrap> 
                  <ScHR/>
                  <ScButton onClick={()=>{
                    setShowUpdate(true);
                    setReviewId(item?.id);
                  }}>수정</ScButton>
                  
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
overflow-y: scroll;
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
  width: 200px;
  padding: 10px;
`;
const ScCardAlign2 = styled.div`
  width: 200px;
  padding: 10px;
`;
const ScCardAlign3 = styled.div`
  width: 200px;
  padding: 10px;
`;
const ScCardAlign4 = styled.div`
  padding: 10px;
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