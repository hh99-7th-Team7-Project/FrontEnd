import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Header from './Header/Header';
import { Comment, CommentCard, ImgCard, Review, CoffeeCategory } from '../components/CoffeeDetail/A-CoffeeDetailIndex';
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector}from 'react-redux';
import { __loadCoffeeDetail } from '../redux/modules/coffee';


const CoffeeDetail = () => {

  const { brand } = useParams();
  const { boardId } = useParams();

 
  const dispatch = useDispatch()
  const [like, setLike] = useState()


const coffeeReducer = useSelector((state) => state.coffee.coffee);
const commentReducer = useSelector((state) => state.comment.posts);


useEffect(()=>{
 dispatch(__loadCoffeeDetail(brand, boardId)) 
  setLike(coffeeReducer?.loveCheck)
},[dispatch])


return (
    <>
      <div style={{margin:"auto"}}> 
        <Header/>
      </div>
      <div>
        <CoffeeCategory/>
      </div>   
      <Scwrap>
        <ScContainer>
            <ImgCard 
                url={coffeeReducer?.img}
                item={coffeeReducer}
                like={like}
                setLike={setLike}
            />
          <ScReviewCommentBox>
            <Review 
              item={coffeeReducer}
              reviewData={commentReducer}
              url={coffeeReducer?.img}
              />
          </ScReviewCommentBox>
        </ScContainer>
      </Scwrap>
      <ScCommentBox>
          <Comment 
            item={coffeeReducer}
          />          
          <CommentCard 
            boardId={boardId}
            brand={brand}
          />
      </ScCommentBox>
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

const ScCommentBox = styled.div`
  margin: 400px auto;
  width: 1900px;
  height: 1900px;
  background-color: #eee;
`;


export default CoffeeDetail;