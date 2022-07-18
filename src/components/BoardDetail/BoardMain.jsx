import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import apis from '../../shared/api/main';
import BookMark from './svg/BookMark.svg';

const BoardMain = ({head, boardId}) => {
    const navigate = useNavigate()



  return (
    <ScWrap>
        <ScBtnWrap>
            <Btn>{head?.category}</Btn>
        </ScBtnWrap>
        <ScHR/>
        <ScTitleWrap>
            <ScBookMarkTitleBox>
                <ScImg src={BookMark} alt="" />
                <ScTitle>{head?.title}</ScTitle>
            </ScBookMarkTitleBox>
            <ScBtnBox>
                <ScLike>추천 : 6</ScLike>
                <ScComment>댓글 : 1</ScComment>
            </ScBtnBox>            
        </ScTitleWrap>
        <ScNickTimeBox>            
            <span>{head?.nickname}</span>            
            <span>21시 21분 23초</span>
        </ScNickTimeBox>
        <div style={{display:"flex",justifyContent:"space-between",width:"300px",marginTop:"20px"}}>
            
                <ScButton onClick={()=>{
                    navigate(`/board/${boardId}/update`);
                }}>수정</ScButton>
            
                <ScButton onClick={async()=>{
                    await apis.deleteBoard(boardId)
                    navigate("/board")
                }}>삭제</ScButton>
        </div>
        <ScHR/>
    </ScWrap>
  )
}

const ScWrap = styled.div`
    margin: 50px auto;
    width: 100%;
`;

const ScBtnWrap = styled.div`    
    display: flex;
    margin: 10px 10px;
`;

const Btn = styled.button`
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
    padding: 0px 5px 0px 5px;
`;

const ScHR = styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ScTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ScBookMarkTitleBox = styled.div`   
      display: flex;

`;

const ScImg = styled.img`
    width: 25px;
    height: 25px;
`;

const ScTitle = styled.h2`
    margin-left: 10px;
`;

const ScBtnBox = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;    
`;



const ScLike = styled.h4`
    
`;

const ScComment = styled.h4`
    
`;

const ScNickTimeBox = styled.div`    
    width: 200px;
    margin-top: 20px;
    padding: 0px 5px 0px 5px;
    display: flex;
    justify-content: space-between;
`;

const ScButton = styled.div`
    padding: 20px;
    margin: auto;
    display: block;
    width: 50px;
    border-radius: 50px;
    background-color: #EEE;
    border-color: #EEE;
    &:hover {
    cursor: pointer;  
    background-color: #212121;
    color: white;
    }
    text-align: center;
`;

export default BoardMain