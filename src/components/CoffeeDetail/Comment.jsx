import React, { useState } from 'react';
import styled from 'styled-components';

/** redux */
import { useDispatch } from 'react-redux';
import { __addComment } from '../../redux/modules/comment';

/** react-router-dom */
import { useParams } from 'react-router-dom';

/** 쿠키 가져오기 */
import { getCookie } from '../../shared/Cookie';

/** Swal alert */
import Swal from 'sweetalert2';

/** react-responsive 라이브러리 (모바일 적용) */
import { useMediaQuery } from 'react-responsive';

const Comment = ({ item }) => {

  const [select, setSelect] = useState('');

  const starSelect = (e) => {
    setSelect(e.target.value);
  };

  const nickname = getCookie('nickname');
  const { brand, boardId } = useParams();
  const dispatch = useDispatch();

  const commentInputRef = React.useRef();
  const selectStarRef = React.useRef();

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  


  const addComment = () => {
    if (
      commentInputRef.current.value !== '' &&
      selectStarRef.current.value !== '공백'
    ) {
      dispatch(
        __addComment({
          data: {
            review: commentInputRef.current.value,
            star: selectStarRef.current.value,
            nickname: nickname,
          },
          boardId,
          brand,
        })
      );
    } else {
      Swal.fire({
        title: '등록을 할 수 없어요!',
        text: '별점과 한줄평 모두 작성해주세요.',
        icon: 'warning',
        confirmButtonText: '확인',
      });
    }
  };

  return (
    <ScWrap>
      <ScBrandTitleWrap>
        <ScBrandTitle>
          <ScH3>{item?.brand}</ScH3>
        </ScBrandTitle>
        <ScCoffeeTitle id="review">
          <ScH1>"{item?.name}"</ScH1>
          <ScOneCommentTitle>한줄평을 남겨주세요!</ScOneCommentTitle>
        </ScCoffeeTitle>
      </ScBrandTitleWrap>
      <ScStarContainer>
        {isMobile ? 
        <ScStarSelectMobile type="text" onChange={starSelect} ref={selectStarRef}>
          <option value="공백">--선택하기--</option>

          <option value="1">&#9733;</option>
          <option value="2">&#9733;&#9733;</option>
          <option value="3">&#9733;&#9733;&#9733;</option>
          <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
        </ScStarSelectMobile> : <ScStarSelect type="text" onChange={starSelect} ref={selectStarRef}>
          <option value="공백">-----선택하기-----</option>

          <option value="1">&#9733;</option>
          <option value="2">&#9733;&#9733;</option>
          <option value="3">&#9733;&#9733;&#9733;</option>
          <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
        </ScStarSelect> }
        <ScInput
          type="text"
          placeholder="한줄평을 작성해주세요.(20자 이내로 작성해주세요.)"
          ref={commentInputRef}
          maxLength={20}
        />
        <ScReviewBtn
          type="button"
          onClick={() => {
            addComment();
            commentInputRef.current.value = '';
          }}
        >
          등록
        </ScReviewBtn>
      </ScStarContainer>

      <ScCardTitie>
          <ScCardAlign1>
            별점
          </ScCardAlign1>
          <ScCardAlign2>
            내용
          </ScCardAlign2>
          <div style={{display:"flex", width:"30%", gap:"45%"}}>
            {isMobile ? null :
            <ScDateSpan>날짜</ScDateSpan> }
            {isMobile ? null :
            <ScNickSpan>닉네임</ScNickSpan> }
          </div>
      </ScCardTitie>
    </ScWrap>
  );
};

const ScWrap = styled.div`
  margin: 100px auto;
  width: 100%;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
  }
`;

const ScBrandTitleWrap = styled.div`
  margin: auto;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    width: 80%;
  }
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
  @media screen and (max-width: 768px){
    width: 50%;
  }
`;

const ScCoffeeTitle = styled.div`
  margin: 20px auto;
  width: 500px;
  display: column;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 768px){
    width: 100%;
    margin: 20px auto;    
  }
`;

const ScH1 = styled.h1`
  padding: 20px auto;
  margin: 30px auto;
  text-align: center;
  font-size: 2.5em;
  line-height: 49.92px;
  width: 500px;
  @media screen and (max-width: 768px){
    width: 100%;
    margin: auto;
    font-weight: 600;
    font-size: 1.7em;    
  }
`;

const ScH3 = styled.h3`
  text-align: center;
  margin: 10px auto;
  @media screen and (max-width: 768px){
    
    font-weight: 600;
    font-size: 1.7em;    
  }
  
`;

const ScOneCommentTitle = styled.h2`
  width: 500px;
  font-size: 2.5em;
  font-weight: 700;
  line-height: 49.92px;
  text-align: center;
  @media screen and (max-width: 768px){
    width: 100%;
    margin: auto;
    font-weight: 600;
    font-size: 1.7em;    
  }
`;

const ScStarContainer = styled.div`
  width: 70%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px auto 40px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px){    
    margin: auto;
    width: 80%;    
    margin-bottom: 40px;
    
  }
`;

const ScInput = styled.input`
  width: 60%;
  height: 40px;
  margin: 30px auto;
  border: none;
  border-radius: 2px;
  font-size: 1.25em;
  text-align: left;
  @media screen and (max-width: 768px){    
    margin: auto;
    width: 80%;
    font-size: 0.9em;
    margin-bottom: 20px;
    font-weight: 300;
  }
`;

const ScStarSelect = styled.select`
  width: 130px;
  height: 30px;
  border-radius: 20px;
  text-align: left;
  font-size: 0.875em;
  border: none;  
`;

const ScStarSelectMobile = styled.select`
    margin: auto;
    width: 35%;  
    font-weight: 300;
    font-size: 0.9em;
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
  @media screen and (max-width: 768px){    
    margin: auto;
    width: 20%;
    font-size: 0.9em;
    font-weight: 300;
    background-color: #000;
    color: white;
  }
`;

const ScCardTitie = styled.div`
  position: relative;
  margin: auto;
  width: 70%;
  padding: 10px;
  border-top: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px){    
    margin: 10px auto;
    
  }
`;

const ScCardAlign1 = styled.div`
  margin-left: 30px;
  color: black;
  @media screen and (max-width:768px) {
    font-size: 1.2em;
    font-weight: 600;
    margin-left: 25px
  }
`;

const ScCardAlign2 = styled.div`
  @media screen and (max-width:768px) {
    font-size: 1.2em;
    font-weight: 600;
    margin-left: 25px
  }
`;


const ScDateSpan = styled.div`
  color: black;
`;

const ScNickSpan = styled.div`
  color: black;
`;

export default Comment;
