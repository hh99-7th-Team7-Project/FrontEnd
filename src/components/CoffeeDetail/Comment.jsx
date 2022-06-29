import React from 'react'
import Styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __addPost } from '../../redux/modules/commentpost';


const Comment = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();


  const commentInputRef = React.useRef();

  const addComment = (e) => {    

    if (
      commentInputRef.current.value !== ""
    ) 
    {
      dispatch(__addPost({
        Review: commentInputRef.current.value
      })
    );
    alert("Review 저장완료!")
    navigate('/angelinus/americano')
    } else {
      alert ("빈칸입니다.")
    }

  }

  return ( 
    <Wrap>
        <p>리뷰 작성하기</p>
        <Input type="text" placeholder="리뷰를 등록해주세요" ref={commentInputRef}/>
        
        <BtnWrap>
          <ReviewBtn onClick={()=>{
            addComment();
          }}>리뷰등록하기</ReviewBtn>
        </BtnWrap>
    </Wrap>
  )
}


const Wrap = Styled.div`   
    margin-top: 10px;
    margin-left: 20px;
    width: 70vw;
    height: 150px;    
`;

const Input = Styled.input`
    width: 55vw;
    height: 30px;
    margin: 30px auto;
    
`;

const BtnWrap = Styled.div`  
  margin-top: 20px;

`;

const ReviewBtn = Styled.button`
    margin-left: 30px;
    width: 200px;
    height: 30px;
`;

export default Comment