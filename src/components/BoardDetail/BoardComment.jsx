import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentMap from './CommentMap';
import MobileCommentMap from './MobileCommentMap';
import {
  __getBoardComment,
  __addBoardComment,
} from '../../redux/modules/boardcomment';
import Swal from 'sweetalert2';
import { getCookie } from '../../shared/Cookie';
import { useMediaQuery } from 'react-responsive';

const BoardComment = () => {

  const comment_list = useSelector((state) => state.boardComment.boardcommentlist);

  // console.log(comment_list);

  const dispatch = useDispatch();
  const { boardId } = useParams();
  const nickname = getCookie("nickname");

  const total = comment_list?.length;

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

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
          title: '로그인 후 이용 가능한 서비스입니다',

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
          <ScNickAlign>
            <ScSpan>{nickname}</ScSpan>
          </ScNickAlign>
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
        <ScH3>전체 댓글 : {total}</ScH3>        
      </ScWrap>
      {isMobile ? 
      <MobileCommentMap/> : <CommentMap/> }
    </>
  );
};

const ScWrap = styled.div`
  width: 100%;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;    
  }
`;

const ScH3 = styled.h3`
  margin-right: 20px;
`;

const ScNickAlign = styled.div`
  
`;

const ScCommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  
`;

const ScInputWrap = styled.div`
  margin: auto;
  display: flex;  
  align-items: center;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`;

const ScSpan = styled.span`
  width: 100px;
  text-align: left;
  font-size: 1.25em;
  margin-left: 10px;
  color: rgb(44,39,140, 80%);
`;

const ScTextArea = styled.textarea`
  width: 986px;
  height: 146px;
  margin: 30px auto;
  border: 1px solid #EEE;
  border-radius: 10px;
  outline: none;
  resize: none;
  text-align: left;
  padding: 10px 20px ;
  ::placeholder {
    padding: 5px 10px;
  }
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0;
  }
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
  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;


export default BoardComment;
