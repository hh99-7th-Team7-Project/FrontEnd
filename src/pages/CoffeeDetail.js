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




const CoffeeDetail = () => {
  const { brand } = useParams();
  const { coffeename } = useParams();
  const { id } = useParams();

  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [pri,setPri]=useState()
console.log(data)
console.log(pri)

const coffeeReducer = useSelector((state) => state.coffee.list);
console.log(coffeeReducer)
const pricePair = coffeeReducer.pricePair

useEffect(()=>{
 dispatch(__loadCoffeeDetail(brand, id)) 
},[])


return (
    <>      
      <ScHR/>
      <ScContainer>
        <ImgCard 
            url={coffeeReducer?.img}
        />
        <ScReviewCommentBox>
        <Review item={coffeeReducer}/>
          <Comment />          
          <CommentCard />
        </ScReviewCommentBox>
      </ScContainer>
      
      
    </>
  )
}

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