import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __getBoardComment, __addBoardComment, __deleteBoardComment } from '../../redux/modules/boardcomment';
import UpdateBoardComment from './UpdateBoardComment';

const CommentMap = () => {


    const dispatch = useDispatch();
    const { boardId }  = useParams();
    const comment_list = useSelector((state) => state.boardComment.boardcommentlist);

    const [ showUpdate, setShowUpdate ] = useState(false);
    const [ commentId , setCommentId ] = useState();

    console.log(comment_list);


    useEffect(()=>{
        dispatch(__getBoardComment(boardId));
    },[dispatch])

    const boardCommentInputRef = React.useRef();

    const commentAdd = () => {

        if (
            boardCommentInputRef.current.value !== ""
        )
        {
            dispatch(__addBoardComment({
                    data: {
                        comment: boardCommentInputRef.current.value
                    },
                    boardId
            })
        );
        } else {
            alert ("댓글을 입력해주세요.")
        }
    }
    

    return (
            <ScWrap>
                <ScCommentWrap>
                    <ScInput type="text" placeholder="댓글을 입력해주세요" ref={boardCommentInputRef} />
                    <ScBtn onClick={()=>{
                        commentAdd();
                        boardCommentInputRef.current.value=""
                    }}>댓글등록</ScBtn>
                </ScCommentWrap>
                <ScTable>
                    {comment_list.map((item)=> (
                        <div key={item?.id}>
                            <ScTable>
                                <ScSpan>{item?.nickname}</ScSpan>                        
                                <ScSpan>{item?.comment}</ScSpan>                                      
                                <ScSpan>{item?.createdAt}</ScSpan> 
                            </ScTable>
                            <div>
                                <button onClick={()=>{
                                    setShowUpdate(true);
                                    setCommentId(item?.id);
                                }}>수정</button>
                                <button onClick={()=>{
                                    dispatch(__deleteBoardComment(boardId,Number(item?.id)))
                                    dispatch(__getBoardComment(boardId));
                                }}>삭제</button>
                                {showUpdate === true ? (
                                    <UpdateBoardComment
                                    showUpdate={showUpdate}
                                    setShowUpdate={setShowUpdate}
                                    boardId={boardId}
                                    commentId={Number(commentId)}
                                />) : null
                                }
                            </div>
                        </div>
                    ))}
                </ScTable>
                <ScHR/>
            </ScWrap>
    )
}

const ScWrap = styled.div`

`;

const ScCommentWrap = styled.div`
    
`;

const ScInput = styled.input`
    width: 300px;
    height: 30px;
`;

const ScBtn = styled.button`
    margin-left: 20px;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    border: none;
`;

const ScTable = styled.div`    
    width: 100%;
    margin: 30px auto;
`;

const ScSpan = styled.span`
    margin-left: 50px;
`;

const ScHR = styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;
`;


export default CommentMap