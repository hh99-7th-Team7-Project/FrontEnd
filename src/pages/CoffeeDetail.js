import React, {useEffect, useState} from 'react'
import Styled from 'styled-components';
import ImgCard from '../components/CoffeeDetail/ImgCard';
import Review from '../components/CoffeeDetail/Review';
import Comment from '../components/CoffeeDetail/Comment';
import CommentCard from '../components/CoffeeDetail/CommentCard';
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector}from 'react-redux';
import axios from 'axios';
import { __loadCoffeeDetail } from '../redux/modules/coffee';
import Header from './Header/Header';
import styled from 'styled-components';
import { __loadComment } from '../redux/modules/comment';




const CoffeeDetail = () => {

  const { brand } = useParams();
  const { coffeename } = useParams();
  const { boardId } = useParams();
// console.log(boardId)

 
  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [pri,setPri]=useState()
// console.log(data)


const coffeeReducer = useSelector((state) => state.coffee.coffee);
// console.log(coffeeReducer)

const commentReducer = useSelector((state)=>state.comment.posts)
// console.log(commentReducer)

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
        <Review item={coffeeReducer}/>
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

const Scwrap = Styled.div`
  display: column;
  max-width:1200px;
  width:80vw;
  margin: auto;
  
  
`;

const ScContainer = Styled.div`
  display: column;
`;

const ScReviewCommentBox = Styled.div`
  display: column;
`;

export default CoffeeDetail;