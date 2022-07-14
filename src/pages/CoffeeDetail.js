import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Header from './Header/Header';
import { Comment, CommentCard, ImgCard, Review } from '../components/CoffeeDetail/CoffeeDetailIndex';
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector}from 'react-redux';
import { __loadCoffeeDetail } from '../redux/modules/coffee';




const CoffeeDetail = () => {

  const { brand } = useParams();
  const { boardId } = useParams();


 
  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [pri,setPri]=useState()



const coffeeReducer = useSelector((state) => state.coffee.coffee);
const commentReducer = useSelector((state) => state.comment.posts);

console.log(commentReducer);



useEffect(()=>{
 dispatch(__loadCoffeeDetail(brand, boardId)) 
},[dispatch])


return (
    <>
      <div style={{margin:"auto"}}> 
        <Header/>
      </div>
    <Scwrap>
      <ScContainer>
        <ImgCard 
            url={coffeeReducer?.img}
            item={coffeeReducer}
        />
        <ScReviewCommentBox>
        <Review 
          item={coffeeReducer}
          reviewData={commentReducer}
          />
          <Comment />          
          <CommentCard 
            boardId={boardId}
            brand={brand} />
        </ScReviewCommentBox>
      </ScContainer>
    </Scwrap>
    </>
  )
}

const Scwrap = styled.div`
  display: column;
  max-width:1200px;
  width:80vw;
  margin: auto;
  
  
`;

const ScContainer = styled.div`
  display: column;
`;

const ScReviewCommentBox = styled.div`
  display: column;
`;

export default CoffeeDetail;