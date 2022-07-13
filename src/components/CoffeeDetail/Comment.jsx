import React, { useState } from 'react'
import Styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __addComment } from '../../redux/modules/comment';
import { getCookie } from '../../shared/Cookie';

const Comment = () => {


  const [ select , setSelect ] = useState('');

  const starSelect = (e) => {
    setSelect(e.target.value);
  }

  const nickname = getCookie("nickname");
  const { brand , boardId } = useParams();  
  const dispatch = useDispatch();

  
  const commentInputRef = React.useRef();
  const selectStarRef = React.useRef();

  const addComment = () => {
    
    if (
      commentInputRef.current.value !== "" &&
      selectStarRef.current.value !== "공백"
    ) 
    {
      dispatch(__addComment({
        data: {
          review: commentInputRef.current.value,
          star: selectStarRef.current.value,
          nickname: nickname
          
      },
        boardId,
        brand 
      })
    );    
    } else {
      alert ("별점과 리뷰를 모두 등록해주세요.")
    }
  }

  return ( 
    <ScWrap>
        <ScStarWrap>
          <ScStarContainer>
            <ScStarTitle>별점: </ScStarTitle>
            <ScStarSelect onChange={starSelect} ref={selectStarRef}>
              <option value="공백">-----선택하기-----</option>
              <option value="1">❤️</option>
              <option value="2">❤️❤️</option>
              <option value="3">❤️❤️❤️</option>
              <option value="4">❤️❤️❤️❤️</option>
              <option value="5">❤️❤️❤️❤️❤️</option>
            </ScStarSelect>
          </ScStarContainer>
        </ScStarWrap>
        <ScInput type="text" placeholder="리뷰를 등록해주세요" ref={commentInputRef}/>        
        <ScBtnWrap>
          <ScReviewBtn onClick={()=>{
            addComment();
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
    height: 40px;
    margin: 30px auto;
    border-radius: 20px;
    border: 0.1em solid black;
    font-size: 14px;
    outline: none;
    text-align: center;
    
`;

const ScStarWrap = Styled.div`  
  width: 55vw;
  height: 50px;
  margin-top: 30px;
`;

const ScStarContainer = Styled.div`
  margin-top: 10px;
`;

const ScStarTitle = Styled.label`
  font-size: 20px;
`;

const ScStarSelect = Styled.select`
  width: 130px;
  height: 30px;
  border-radius: 20px;
  text-align: left;
  font-size: 14px;
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