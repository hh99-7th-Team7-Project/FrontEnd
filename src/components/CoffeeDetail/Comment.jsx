import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __addComment } from '../../redux/modules/comment';
import { getCookie } from '../../shared/Cookie';


const Comment = ({item}) => {


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
        <div>
          <ScBrandTitle>
            <ScH3>{item?.brand}</ScH3>
          </ScBrandTitle>
          <ScCoffeeTitle id="review">
            <ScH1>"{item?.name}"</ScH1>
            <ScOneCommentTitle>한줄평을 남겨주세요!</ScOneCommentTitle>
          </ScCoffeeTitle>
        </div>
        <ScStarContainer>
            <ScStarSelect type="text" onChange={starSelect} ref={selectStarRef}>
              <option value="공백">-----선택하기-----</option>

              <option value="1">&#9733;</option>
              <option value="2">&#9733;&#9733;</option>
              <option value="3">&#9733;&#9733;&#9733;</option>
              <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
              <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </ScStarSelect>
            <ScInput type="text" placeholder="한줄평을 작성해주세요.(20자 이내로 작성해주세요.)" ref={commentInputRef} maxLength={20}/>
              <ScReviewBtn type="button" onClick={()=>{
                  addComment();
                  commentInputRef.current.value=""
                }}>등록
              </ScReviewBtn>
        </ScStarContainer>
    </ScWrap>
  )
}


const ScWrap = styled.div`   
    margin: 100px auto;
    width: auto;
`;

const ScBrandTitle = styled.div`
  border: 2px solid black;
  width: 117px;
  height: 43px;
  left: 103px;
  margin: 10px auto;
  border-radius: 100px;
  padding: 8px, 20px, 8px, 20px;
  gap: 10px;
`;

const ScCoffeeTitle = styled.div`  
  margin: 20px auto;
  width: 500px;
  display: column;
  justify-content: start;
  align-items: center;
`;

const ScH1 = styled.h1`
    padding: 20px auto;
    margin: 30px auto;
    text-align: center;
    font-size: 40px;
    line-height: 49.92px;
    width: 500px;
`;

const ScH3 = styled.h3`
  text-align: center;
  margin: 10px auto;
`;

const ScOneCommentTitle = styled.h2`
  width: 500px;
  font-size: 40px;
  font-weight: 700;
  line-height: 49.92px;
  text-align: center;
`;


const ScStarContainer = styled.div`
  width: 1080px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;

const ScInput = styled.input`
    width: 800px;
    height: 40px;
    margin: 30px auto;
    border: none;
    border-radius: 2px;
    font-size: 20px;
    text-align: center;
`;


const ScStarSelect = styled.select`
  width: 130px;
  height: 30px;
  border-radius: 20px;
  text-align: left;
  font-size: 14px;
  border: none;
`;

const ScReviewBtn = styled.button`
    margin: auto;
    width: 45px;
    height: 30px;
    border-radius: 4px;
    padding: 7px, 10px, 7px, 10px;
    background-color: #000;
    color: white;
    &:hover {
      cursor: pointer;
    }
`;

export default Comment