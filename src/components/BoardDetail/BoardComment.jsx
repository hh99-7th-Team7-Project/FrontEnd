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

const BoardComment = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const [closeComment, setCloseComment] = useState(false);

  const commentCardOpen = () => {
    setCloseComment(false);
  };

  const commentCardClose = () => {
    setCloseComment(true);
  };

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
      Swal.fire({
        title: '댓글을 등록해주세요!',
        text: '빈칸입니다',
        icon: 'warning',
        confirmButtonText: '확인',
      });
    }
  };

  return (
    <>
      <ScWrap>
        <ScCommentWrap>
          <ScInputWrap>
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
        <ScH3>전체 댓글</ScH3>        
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

const ScTextArea = styled.textarea`
  width: 986px;
  height: 146px;
  margin: 30px auto;
  /* border: none; */
  border-radius: 2px;
  border: none;
  outline: none;
  resize: none;
  font-size: 20px;
  text-align: center;
  &::placeholder {
    text-align: center;
  }
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
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
`;

const ScBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ScCommentBtn = styled.button`
  margin-left: 20px;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const ScLabel = styled.label`
  display: flex;
  justify-content: start;
  padding: 12px;
`;

export default BoardComment;
