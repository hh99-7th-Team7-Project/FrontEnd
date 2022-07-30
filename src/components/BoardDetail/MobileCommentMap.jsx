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
                  <ScSpan>{item?.nickname}</ScSpan>
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
                  {nickname === item?.nickname &&showUpdate === false? (
                    <ScButton
                      onClick={() => {
                        setShowUpdate(true);
                        setCommentId(item?.id);
                      }}
                    >
                      댓글 수정
                    </ScButton>
                  ) : null}
                  {nickname === item?.nickname &&showUpdate === false? (
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
  /* max-width: 1200px; */
  /* width: 90%; */
  height: 500px;
  padding: 20px 0;
  overflow-y: scroll;
  overflow-x: hidden ;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  /* border: 1px red solid; */
  @media screen and (max-width: 768px){
    /* width: 300px; */
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 10px ;
  }
`;

const ScNickAlign = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* border: 1px red solid;  */
  @media screen and (max-width: 768px){
    /* width: ; */
  }
`;

const ScCommentAlign = styled.div`
  width: 70%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  /* border: 1px red solid; */
  @media screen and (max-width: 768px){
    width: 95%;    
    margin-bottom: 5px;
    padding: 0;    
  }

`;

const ScBtnAlign = styled.div`
  width: 150px;  
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 768px){
    width: 100%;
    /* margin-top: -20px; */
  }  
`;

const ScTableWrap = styled.div`
  margin: 0px ;
  /* border: 1px red solid; */
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
  /* border: 1px red solid; */
  margin: 20px 0;
`;

const ScSpan = styled.span`
  text-align: left;
  /* width: 100px; */
  color: rgb(51,102,255, 80%);

  /* margin-bottom: 10px; */
`;

const ScSpanComment = styled.span`
  text-align: left;
  width: 100%;
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
