import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import apis from '../../shared/api/main';

const BoardMain = ({head, boardId}) => {
    const navigate = useNavigate()
    console.log(boardId)


  return (
    <ScWrap>
        <ScBtnWrap>
            <div>{head?.category}</div>
        </ScBtnWrap>
        <ScHR/>
        <ScTitleWrap>
            <ScTitle>{head?.title}</ScTitle>
            <ScLike>추천 : 6</ScLike>
            <ScComment>댓글 : 1</ScComment>            
        </ScTitleWrap>
        <div>
            <br/>
            <p>{head?.nickname}</p>
            <br/>
            <p>21시 21분 23초</p>
        </div>
       <Link to={`/board/${boardId}/update`}> <button>수정</button></Link>
        <button onClick={async()=>{
            await apis.deleteBoard(boardId)
            navigate("/board")
        }}>삭제</button> 
        <ScHR/>
    </ScWrap>
  )
}

const ScWrap = Styled.div`
    margin: 50px auto;
    width: 100%;
`;

const ScBtnWrap = Styled.div`
    display: flex;
    margin: 10px 10px;
`;

const Btn = Styled.button`
    margin: 10px;
    width: 150px;
    height: 30px;
    border-radius: 30px;
    &:hover {
        background-color: black;
        color: white;
        border-color: black;
        cursor: pointer;
    }
    background-color: white;
    border-color: black;
`;

const ScHR = Styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;.
`;

const ScTitleWrap = Styled.div`
    display: flex;
    justify-content: space-between;
`;

const ScTitle = Styled.h2`
    
`;

const ScLike = Styled.h4`

`;

const ScComment = Styled.h4`
    
`;

export default BoardMain