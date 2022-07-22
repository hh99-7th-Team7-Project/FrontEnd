import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { __getBoardComment, __updateBoardComment } from '../../redux/modules/boardcomment';

const UpdateBoardComment = (props) => {

    const { showUpdate , setShowUpdate, commentId, boardId, comment } = props;
    const dispatch = useDispatch();
    const boardCommentInputRef = React.useRef();

    
    const boardCommentUpdate = (e) => {
        if (
            boardCommentInputRef.current.value !== ""
          )
          {
            dispatch(__updateBoardComment({                
                data:
                {
                    comment: boardCommentInputRef.current.value,
                },
                boardId,
                commentId
            })
        );
            setShowUpdate(!showUpdate);
            dispatch(__getBoardComment(boardId));

        } else {
            alert ("빈칸입니다.")
        }
    }


    return (
            <ScWrap>                
                <ScTextArea type="text" ref={boardCommentInputRef} defaultValue={comment} maxlength={300}/>
                <ScButton onClick={()=>{
                    boardCommentUpdate();
                    boardCommentInputRef.current.value=""                                
                }}>수정하기</ScButton>
                <ScButton onClick={()=>{
                        setShowUpdate(false);
                    }}>취소</ScButton>
            </ScWrap>
        )
    }

const ScWrap = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    
`;

const ScTextArea = styled.textarea`
        
`;


const ScButton = styled.button`
    &:hover{
    cursor: pointer;
  }
  background-color: white;
  color: black;
  border: none;
  
`;

export default UpdateBoardComment