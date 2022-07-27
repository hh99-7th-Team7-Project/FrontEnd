import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  __getBoardComment,
  __deleteBoardComment,
} from '../../redux/modules/boardcomment';
import UpdateBoardComment from './UpdateBoardComment';
import { getCookie } from '../../shared/Cookie';


const MobileCommentMap = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const nickname = getCookie('nickname');
  const comment_list = useSelector(
    (state) => state.boardComment.boardcommentlist
  );

  // console.log(comment_list)

  const imgRef = React.useRef();
  const [showUpdate, setShowUpdate] = useState(false);
  const [commentId, setCommentId] = useState();
  const [ buttonVisible , setButtonVisible ] = useState(false);
  const [ showToggle , setShowToggle ] = useState(false);

  // console.log(commentId);



  return (
    <>
      <ScWrap>
        <ScTableWrap>
          {comment_list.map((item) => (
            <div key={item?.id}>
              <ScTable>
                <ScNickAlign>
                  <ScSpan>{item?.nickname}</ScSpan>
                </ScNickAlign>
                <ScCommentAlign>
                  {showUpdate === true && item?.id === commentId ? (
                    <UpdateBoardComment
                      showUpdate={showUpdate}
                      setShowUpdate={setShowUpdate}
                      boardId={boardId}
                      commentId={Number(commentId)}
                      comment={item?.comment}
                    />
                  ) : (
                    <ScSpanComment>{item?.comment}</ScSpanComment>
                  )}
                  {/* <ScSpan>{item?.createdAt.split('T')[0]}</ScSpan>  */}
                </ScCommentAlign>
                
                
                <ScBtnAlign>                  
                  {nickname === item?.nickname ? (
                    <ScButton
                      onClick={() => {
                        setShowUpdate(true);
                        setCommentId(item?.id);
                      }}
                    >
                      댓글 수정
                    </ScButton>
                  ) : null}
                  {nickname === item?.nickname ? (
                    <ScButton
                      onClick={() => {
                        dispatch(
                          __deleteBoardComment(boardId, Number(item?.id))
                        );
                        dispatch(__getBoardComment(boardId));
                      }}
                    >
                      댓글 삭제
                    </ScButton>
                  ) : null}                
                  {/* <div>
                    {buttonVisible === true && item?.id === commentId ? <DotDrop/> : null}
                    <img src={Dot} alt="" onClick={()=>{
                      setButtonVisible(!buttonVisible);                      
                    }}/>
                  </div> */}
                </ScBtnAlign>
              </ScTable>
            </div>
          ))}          
        </ScTableWrap>
      </ScWrap>
    </>
  );
};

const ScWrap = styled.div`
  margin: 20px auto;
  max-width: 1200px;
  width: 90%;
  height: 500px;
  padding: 20px;
  overflow-y: auto;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  @media screen and (max-width: 768px){
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const ScNickAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    width: 50%;
    margin-bottom: 10px;       

  }
`;

const ScCommentAlign = styled.div`
  width: 70%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px){
    width: 100%;    
  }

`;

const ScBtnAlign = styled.div`
  width: 150px;  
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px){
    width: 100%;
    margin-top: -20px;
  }  
`;

const ScTableWrap = styled.div`
  margin: 30px auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #eee;
  }
`;

const ScTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ScSpan = styled.span`
  text-align: left;
  width: 100px;
  color: rgb(51,102,255, 80%);

`;

const ScSpanComment = styled.span`
  text-align: left;
  width: 70%;
  color: rgb(00,51,102, 100%);

`;

const ScButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  background-color: white;
  color: black;
  border: none;
  width: 100px;
  font-size: 0.9em;
`;

export default MobileCommentMap;
