import React, {useEffect} from 'react'
import Styled from 'styled-components';
import ImgCard from '../components/CoffeeDetail/ImgCard';
import Review from '../components/CoffeeDetail/Review';
import Comment from '../components/CoffeeDetail/Comment';
import CommentCard from '../components/CoffeeDetail/CommentCard';
import { __loadPost } from '../redux/modules/commentpost';
import { useDispatch } from 'react-redux';

const CoffeeDetail = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(__loadPost());
   },[dispatch])


  return (
    <>      
      <HR/>
      <Container>
        <ImgCard 
            url="https://www.angelinus.com/Data/Goods/48/DetailImage.png"
        />
        <ReviewCommentBox>
          <Review 
              title="아메리카노"
              subtitle="americano"
          />
          <Comment />          
          <CommentCard/>
        </ReviewCommentBox>
        
      </Container>
      
      
    </>
  )
}

const HR = Styled.hr`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Container = Styled.div`
  display: flex;
`;

const ReviewCommentBox = Styled.div`
  display: column;
`;

export default CoffeeDetail;