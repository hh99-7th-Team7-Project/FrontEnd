import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { __getBoardComment, __updateBoardComment } from '../../redux/modules/boardcomment';

const UpdateBoardComment = (props) => {

    const { showUpdate , setShowUpdate, commentId, boardId } = props;
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

    const closeUpdate = () => {
        setShowUpdate(!showUpdate);
    }

    return (
        <ScModalWrap>
            <ScModal>
                <ScTBWrap>
                    <ScModalTitle>댓글 수정하기</ScModalTitle>
                    <ScButton onClick={closeUpdate}>닫기</ScButton>
                </ScTBWrap>
                <input type="text" ref={boardCommentInputRef} />
                <ScUpdateBtn onClick={()=>{
                    boardCommentUpdate();
                    boardCommentInputRef.current.value=""                                
                }}>수정하기</ScUpdateBtn>
            </ScModal>
        </ScModalWrap>
        )
        }
    
    const ScModalWrap = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        background: rgba(0,0,0,0.1);
        z-index: 99;
    `;
    
    const ScModal = styled.div`
        padding: 45px 38px;
        height: auto;
        max-width: 720px;
        background-color: #fff;
        margin: 5% auto;
        position: relative;
    `;
    
    const ScTBWrap = styled.div`
        display: flex;
    `;
    
    const ScModalTitle = styled.h2`
        line-height: 36px;
        font-size: 28px;
        font-weight: 700;
        margin: 26px 0;
    `;
    
    const ScButton = styled.button`
        position: absolute;
        top: 45px;
        right: 38px;
        background-color: transparent;
        border: 0;
        font-size: 22px;
        &:hover{
            cursor: pointer;
        }
    `;
    
    const ScUpdateBtn = styled.button`
        &:hover{
            cursor: pointer;
        }
    `;

export default UpdateBoardComment