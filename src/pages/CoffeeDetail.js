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




const CoffeeDetail = () => {
  const { brand } = useParams();
  const { coffeename } = useParams();
  const { id } = useParams();

  const boardId = Number(id);
  

  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [pri,setPri]=useState()
console.log(data)
console.log(pri)

const coffeeReducer = useSelector((state) => state.coffee.coffee);
console.log(coffeeReducer)

useEffect(()=>{
 dispatch(__loadCoffeeDetail(brand, boardId)) 
},[])


return (
    <Scwrap>   
      <Header/>   
      <ScHR/>
      <ScContainer>
        <ImgCard 
            url={coffeeReducer?.img}
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
  )
}

const Scwrap = Styled.div`
 display: column;
 max-width:1200px;
 width:75%
`

const ScHR = Styled.hr`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ScContainer = Styled.div`
  display: flex;
`;

const ScReviewCommentBox = Styled.div`
  display: column;
`;

export default CoffeeDetail;