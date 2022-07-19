import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __getBoardComment, __deleteBoardComment } from '../../redux/modules/boardcomment';
import UpdateBoardComment from './UpdateBoardComment';
import { getCookie } from '../../shared/Cookie';


const CommentMap = () => {


    const dispatch = useDispatch();
    const { boardId }  = useParams();
    const nickname = getCookie("nickname");
    const comment_list = useSelector((state) => state.boardComment.boardcommentlist);

    const [ showUpdate, setShowUpdate ] = useState(false);
    const [ commentId , setCommentId ] = useState();


    return (
        <>
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
                                { nickname === item?.nickname ? 
                                <ScButton onClick={()=>{
                                    setShowUpdate(true);
                                    setCommentId(item?.id);
                                }}>수정</ScButton> : null }
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
  margin-left: 50px;
  width: 50px;
  border: 1px solid black;
  
`;



export default CommentMap