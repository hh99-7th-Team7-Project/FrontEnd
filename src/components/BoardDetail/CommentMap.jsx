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
    const nickname = getCookie();
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
                    <ScInputWrap>                        
                        <ScInput type="text" placeholder="댓글을 입력해주세요" ref={boardCommentInputRef} />
                        <ScBtn onClick={()=>{
                            commentAdd();
                            boardCommentInputRef.current.value=""
                        }}>등록</ScBtn>
                    </ScInputWrap>
                </ScCommentWrap>
                    <ScTableWrap>
                        {comment_list.map((item)=> (
                            <div key={item?.id}>
                            <ScTable>
                                <ScNickAlign>
                                    <ScSpan>{item?.nickname}</ScSpan>
                                </ScNickAlign> 
                                <ScCommentAlign>                       
                                    <ScSpan>{item?.comment}</ScSpan>
                                </ScCommentAlign>
                                <ScBtnAlign>                                   
                                    <ScSpan>{item?.createdAt}</ScSpan>                             
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
                                </ScBtnAlign>
                            </ScTable>
                        </div>
                    ))}
                </ScTableWrap>
            </ScWrap>
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
  border: 1px solid black;
`;

const ScInput = styled.input`
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

`;

const ScBtnAlign = styled.div`

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



export default CommentMap