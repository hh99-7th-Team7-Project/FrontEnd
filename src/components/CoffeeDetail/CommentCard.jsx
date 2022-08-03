import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/** component */
import UpdateComment from './UpdateComment';

/** redux */
import { useSelector, useDispatch } from 'react-redux';
import { __deleteComment, __loadComment } from '../../redux/modules/comment';


/** react-responsive 라이브러리 (모바일적용) */
import { useMediaQuery } from 'react-responsive';



const CommentCard = (props) => {

  const { brand, boardId } = props;
  const dispatch = useDispatch();
  const [showUpdate, setShowUpdate] = useState(false);
  const [reviewId, setReviewId] = useState();

  const posts = useSelector((state) => state.comment.posts);

  // console.log(posts);

  // console.log(showUpdate);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });


  useEffect(() => {
    dispatch(__loadComment({ brand, boardId }));
  }, [setShowUpdate]);

  return (
    <>
      <ScWrap>
        {posts &&
          posts.map((item) => {
            return (
              <ScComment key={item?.id}>
                <ScCommentCardWrap>
                  <ScStar>
                    {item?.star === 1 && (
                      <p>&#9733;&#9734;&#9734;&#9734;&#9734;</p>
                    )}

                    {item?.star === 2 && (
                      <p>&#9733;&#9733;&#9734;&#9734;&#9734;</p>
                    )}
                    {item?.star === 3 && (
                      <p>&#9733;&#9733;&#9733;&#9734;&#9734;</p>
                    )}
                    {item?.star === 4 && (
                      <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
                    )}
                    {item?.star === 5 && (
                      <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    )}
                  </ScStar>
                  <ScCardAlign1>
                    {isMobile ? <ScCommentMobile>{item?.review}</ScCommentMobile> :
                    <ScCommentSpan>{item?.review}</ScCommentSpan> }
                  </ScCardAlign1>
                  <ScCardAlign2>
                    {isMobile ? null :
                    <ScDateSpan>{item?.createdAt.split('T')[0]}</ScDateSpan> }
                    {isMobile ? null :
                    <ScNickSpan>{item?.nickname}</ScNickSpan> }

                    {/* <ScButton onClick={()=>{
                          setShowUpdate(true);
                          setReviewId(item?.id);
                        }}>신고</ScButton> */}
                      {isMobile ?
                    <ScButtonMobile
                      onClick={() => {
                        dispatch(
                          __deleteComment(brand, boardId, Number(item?.id))
                        );
                        dispatch(__loadComment({ brand, boardId }));
                      }}
                    >
                      X
                    </ScButtonMobile> : <ScButton
                      onClick={() => {
                        dispatch(
                          __deleteComment(brand, boardId, Number(item?.id))
                        );
                        dispatch(__loadComment({ brand, boardId }));
                      }}
                    >
                      삭제
                    </ScButton> } 
                  </ScCardAlign2>
                </ScCommentCardWrap>

                {showUpdate === true ? (
                  <UpdateComment
                    setShowUpdate={setShowUpdate}
                    commentId={Number(reviewId)}
                    boardId={boardId}
                    brand={brand}
                  />
                ) : null}
              </ScComment>
            );
          })}
      </ScWrap>
    </>
  );
};

const ScWrap = styled.div`
  position: relative;
  margin: 20px auto;
  margin-top: -90px;
  width: 70%;
  height: 500px;
  padding: 20px;
  overflow-y: auto;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
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
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 68%;
  }
`;

const ScCommentCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScComment = styled.div`
  font-size: 1.25em;
  margin-bottom: 5px;
`;

const ScButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  border: none;
  background-color: rgb(44,39,140,0%);
  font-weight: 400;
`;

const ScButtonMobile = styled.button`
  &:hover {
    cursor: pointer;
  }
  border: none;
  background-color: rgb(44,39,140,0%);
  font-weight: 400;
  width: 10%;
  
`;


const ScStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;  
`;

const ScCardAlign1 = styled.div`
  width: 400px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
const ScCardAlign2 = styled.div`
  width: 400px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const ScCommentSpan = styled.span`
  color: black;

  text-align: left;
  left: 0;
  font-weight: 400;
`;

const ScCommentMobile = styled.span`
  margin-left: 30px;
  line-height: 20px;  
  width: 100px;
  font-size: 0.9em;
  font-weight: 300;  
`;

const ScDateSpan = styled.span`
  color: black;
  font-weight: 400;
`;

const ScNickSpan = styled.span`
  color: black;
  font-weight: 400;
`;



export default CommentCard;
