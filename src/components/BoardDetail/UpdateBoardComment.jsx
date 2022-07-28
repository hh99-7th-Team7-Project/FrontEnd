import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  __getBoardComment,
  __updateBoardComment,
} from '../../redux/modules/boardcomment';
import Swal from 'sweetalert2';

const UpdateBoardComment = (props) => {
  const { showUpdate, setShowUpdate, commentId, boardId, comment } = props;
  const dispatch = useDispatch();
  const boardCommentInputRef = React.useRef();

  const boardCommentUpdate = (e) => {
    if (boardCommentInputRef.current.value !== '') {
      dispatch(
        __updateBoardComment({
          data: {
            comment: boardCommentInputRef.current.value,
          },
          boardId,
          commentId,
        })
      );
      setShowUpdate(!showUpdate);
      dispatch(__getBoardComment(boardId));
    } else {
      Swal.fire({
        title: '빈칸입니다!',
        text: '댓글을 확인해주세요',
        icon: 'warning',
        confirmButtonText: '확인',
      });
    }
  };

  return (
    <ScWrap>
      <ScTextArea
        type="text"
        ref={boardCommentInputRef}
        defaultValue={comment}
        maxlength={300}
      />
      <ScButton
        onClick={() => {
          boardCommentUpdate();
          boardCommentInputRef.current.value = '';
        }}
      >
        수정
      </ScButton>
      <ScButton
        onClick={() => {
          setShowUpdate(false);
        }}
      >
        취소
      </ScButton>
    </ScWrap>
  );
};

const ScWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
`;

const ScTextArea = styled.textarea`
  width: 300px;
  height: 100px;
  /* border: none; */
  border: 1px solid black;
  outline: none;
  resize: none;  
  text-align: left;
  @media screen and (max-width: 768px) {
    width: 200px;
    margin-left: -40px;
  }
`;

const ScButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  background-color: white;
  color: black;
  border: none;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    width: 30px;    
  }
`;

export default UpdateBoardComment;
