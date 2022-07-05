import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import UpdateComment from "./UpdateComment";
import { useSelector, useDispatch } from "react-redux";
import { __deleteComment, __loadComment } from '../../redux/modules/comment';

const CommentCard = (props) => {


  const dispatch = useDispatch();

  const [showUpdate, setShowUpdate ] = useState(false);

  const openUpdate = () => {
    setShowUpdate(true);
  }
  
  const review_list = useSelector((state)=>state.comment.posts);
  

  useEffect(()=>{
    dispatch(__loadComment());

  },[dispatch])

    return (
      <>
        <ScWrap>
          {review_list.map((item, index) => {
            return (            
            <ScComment key={index}>{item.Review}            
              <ScHR/>
              <button onClick={openUpdate}>수정</button>
              <button onClick={()=>{
                dispatch(__deleteComment(Number(item?.id)))                
                dispatch(__loadComment());
              }}>삭제</button>
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
export default CommentCard