import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GoChevronDown } from 'react-icons/go';
import CommentMap from './CommentMap';
import {
  __getBoardComment,
  __addBoardComment,
} from '../../redux/modules/boardcomment';
import Swal from 'sweetalert2';
import { getCookie } from '../../shared/Cookie';

const BoardComment = ({head}) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const nickname = getCookie("nickname");

  // console.log(head);

  const total = head?.totalComment;

  // console.log(total);


  useEffect(() => {
    dispatch(__getBoardComment(boardId));
  }, [dispatch]);

  const boardCommentInputRef = React.useRef();

  const commentAdd = () => {
    if (boardCommentInputRef.current.value !== '') {
      dispatch(
        __addBoardComment({
          data: {
            comment: boardCommentInputRef.current.value,
          },
          boardId,
        })
      );
    } else {
      if (!nickname) {
        Swal.fire({
          title: '아직 회원이 아니신가요?',
          text: '로그인을 해주세요!',
          icon: 'warning',
          confirmButtonText: '확인',
        });
      } else {
        Swal.fire({
          title: '댓글을 등록해주세요!',
          text: '빈칸입니다',
          icon: 'warning',
          confirmButtonText: '확인',
        });
      }      
    }
  };

  return (
    <>
      <ScWrap>
        <ScCommentWrap>
          <ScInputWrap>
            <ScSpan>{nickname}</ScSpan>
            <ScTextArea
              type="text"
              rows="1"
              placeholder="댓글을 입력해주세요"
              ref={boardCommentInputRef}
              maxlength={300}
            />
            <ScBtn
              onClick={() => {
                commentAdd();
                boardCommentInputRef.current.value = '';
              }}
            >
              등록
            </ScBtn>
          </ScInputWrap>
        </ScCommentWrap>
        <ScH3>전체 댓글 : {total}</ScH3>        
      </ScWrap>
      <CommentMap/>
    </>
  );
};

const ScWrap = styled.div`
  width: 100%;
`;

const ScH3 = styled.h3`
  margin-right: 20px;
`;

const ScCommentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScInputWrap = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ScSpan = styled.span`
  width: 100px;
  text-align: center;
  font-size: 20px;
  margin: 10px auto;
`;

const ScTextArea = styled.textarea`
  width: 986px;
  height: 146px;
  margin: 30px auto;
  /* border: none; */
  border: 1px solid black;
  outline: none;
  resize: none;
  text-align: left;
  
  
`;

const ScBtn = styled.button`
  margin-left: 20px;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  background-color: black;
  color: white;
`;


export default BoardComment;
