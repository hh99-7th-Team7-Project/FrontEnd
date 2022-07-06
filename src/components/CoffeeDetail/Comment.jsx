import React from 'react'
import Styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { __addComment } from '../../redux/modules/comment';


const Comment = () => {


  const navigate = useNavigate();
  const { brand , id } = useParams();
  const dispatch = useDispatch();

  console.log("id는 왜?",brand ,id);


  const commentInputRef = React.useRef();

  const addComment = (e) => {    

    if (
      commentInputRef.current.value !== ""
    ) 
    {
      dispatch(__addComment({
        Review: commentInputRef.current.value,
        id,
        brand,
        
        
      })
    );    
    } else {
      alert ("빈칸입니다.")
    }
  }

  return ( 
    <ScWrap>
        <ScInput type="text" placeholder="리뷰를 등록해주세요" ref={commentInputRef}/>
        
        <ScBtnWrap>
          <ScReviewBtn onClick={()=>{
            addComment(brand,id);
            commentInputRef.current.value=""
          }}>리뷰등록하기</ScReviewBtn>
        </ScBtnWrap>
    </ScWrap>
  )
}


const ScWrap = Styled.div`   
    margin-top: 10px;
    margin-left: 20px;
    width: 70vw;
    height: 150px;    
`;

const ScInput = Styled.input`
    width: 55vw;
    height: 30px;
    margin: 30px auto;
    
`;

const ScBtnWrap = Styled.div`  
  margin-top: 20px;

`;

const ScReviewBtn = Styled.button`
    margin-left: 30px;
    width: 200px;
    height: 30px;
    &:hover {
      cursor: pointer;
    }
`;

export default Comment