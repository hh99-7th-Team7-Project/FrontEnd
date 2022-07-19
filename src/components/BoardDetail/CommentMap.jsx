import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __getBoardComment, __addBoardComment, __deleteBoardComment } from '../../redux/modules/boardcomment';
import UpdateBoardComment from './UpdateBoardComment';
import { getCookie } from '../../shared/Cookie';


const CommentMap = () => {


    const dispatch = useDispatch();
    const { boardId }  = useParams();
    const nickname = getCookie("nickname");
    const comment_list = useSelector((state) => state.boardComment.boardcommentlist);

    const [ showUpdate, setShowUpdate ] = useState(false);
    const [ commentId , setCommentId ] = useState();

    
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
            alert ("댓글을 입력해주세요.");
        }
    }
    

    return (
        <>
            <ScCommentWrap>
                <ScInputWrap>                        
                    <ScInput type="text" placeholder="댓글을 입력해주세요" ref={boardCommentInputRef} />
                    <ScBtn onClick={()=>{
                        commentAdd();
                        boardCommentInputRef.current.value=""
                    }}>등록</ScBtn>
                </ScInputWrap>
            </ScCommentWrap>
            <ScWrap>
                <ScTableWrap>
                    {comment_list.map((item)=> (
                        <div key={item?.id}>
                        <ScTable>
                            <ScNickAlign>
                                <ScSpan>{item?.nickname}</ScSpan>
                            </ScNickAlign> 
                            <ScCommentAlign>
                                {showUpdate === true ? (
                                    <UpdateBoardComment
                                    showUpdate={showUpdate}
                                    setShowUpdate={setShowUpdate}
                                    boardId={boardId}
                                    commentId={Number(commentId)}
                                    comment={item?.comment}
                                />) : <ScSpan>{item?.comment}</ScSpan>
                                }
                                { nickname === item?.nickname ?
                                <ScButton onClick={()=>{
                                dispatch(__deleteBoardComment(boardId,Number(item?.id)))
                                dispatch(__getBoardComment(boardId));
                                }}>삭제</ScButton> : null }
                            </ScCommentAlign>                            
                            <ScBtnAlign>                                   
                                <ScSpan>{item?.createdAt.split("T")[0]}</ScSpan>
                                <ScButton onClick={()=>{
                                    setShowUpdate(true);
                                    setCommentId(item?.id);
                                }}>수정</ScButton>                                
                            </ScBtnAlign>
                        </ScTable>
                    </div>
                ))}
            </ScTableWrap>
        </ScWrap>
        </>
    )
}

const ScWrap = styled.div`
    margin: 20px auto;
    width: 1200px;
    height: 500px;
    padding: 20px;
    overflow-y: auto;
    border-top: 2px solid black;
    border-bottom: 2px solid black;

`;

const ScCommentWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const ScInputWrap = styled.div`  
  margin: 20px auto;  
  display: column;
  justify-content: start;
  align-items: center;  
`;

const ScInput = styled.textarea`
    width: 800px;
    height: 40px;
    margin: 30px auto;
    /* border: none; */
    border-radius: 2px;
    font-size: 20px;
    text-align: center;
`;

const ScNickAlign = styled.div`
    display: flex;

`;

const ScCommentAlign = styled.div`
    width: 400px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

const ScBtnAlign = styled.div`
    width: 400px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;



const ScBtn = styled.button`
    margin-left: 20px;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    border: none;
`;

const ScTableWrap = styled.div`    
    margin: 30px auto;
::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-thumb {  
    background-color: black;
    border-radius: 10px;
}
::-webkit-scrollbar-track {
    background-color: #EEE;  
}
`;

const ScTable = styled.div` 
    display: flex;
    justify-content: space-between;


`;

const ScSpan = styled.span`
    margin-left: 50px;
`;



const ScButton = styled.button`
    &:hover{
    cursor: pointer;
  }
  background-color: white;
  color: black;
  border: none;
  
`;



export default CommentMap